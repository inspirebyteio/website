# A behind the scenes look at how we design systems at Inspirebyte, thinking in systems, planning for failure, and shipping software that holds up in the real world.

We're building Vaastio - a society platform for Indian residential communities. It's the kind of app that has to work for people with different levels of comfort with technology. So ofcourse, getting the product right matters. But getting the *architecture* right matters more, because bad architecture doesn't announce itself on day one. It shows up six months later when you're trying to add a feature and realise everything is tangled together.
This blog isn't a tutorial. It's a look at the decisions we made, and more importantly “ *why “* we made them.

## The Stack, And Why We’re Keeping It Boring

We're running Node with Express, TypeScript, PostgreSQL, and Prisma on the backend. React Native with Expo on mobile. Turborepo as the monorepo manager. Nothing exotic.

That's deliberate. When you're building a product for Indian societies where data integrity is everything, where an admin accidentally assigning the wrong flat to the wrong person has real consequences, boring technology is a feature. It means the team can focus on product decisions instead of debugging framework quirks.

**Rule we follow:** Choose the technology that solves the problem. Save your creativity for product decisions.

```
┌──────────────────────────────────────────────────────────┐
│                    Vaastio Architecture                   │
└──────────────────────────────────────────────────────────┘

  Mobile (React Native + Expo)
  │
  │  HTTPS + JWT
  ▼
  API (Node.js + Express + TypeScript)
  │         │              │
  │         │              │
  Prisma    │         Event Emitter
  │         │              │
  ▼         ▼              ▼
PostgreSQL  Cloudinary   Expo Push API
            (images)     (notifications)
```

---

## Identity - Separating the Person from the Account

One of the first decisions we made and one that paid off immediately was separating **Person** from **User**.

A **User** is an app account. It has a phone number, a password (well, OTP), and a token version. A **Person** is a real-world human being with a name, a flat, and a history in the society. The two are linked, but they're not the same thing.

Why does this matter? Because in societies, people change phones, share accounts with family members, and sometimes lose access to their number. When we deactivate a member's app access, we don't want to lose their occupancy history, their complaint records, or their ownership data. Separating Person from User means ‘deactivating an account’ is just flipping a flag, the person's entire history remains intact.

**DECISION : Person ≠ User**

Person = real world identity.

User = app account.

Person.userId is nullable, a person can exist in the system without ever having the app.

**Why it matters:**

Deactivating a member removes app access. It doesn't erase them from history.

An owner who stops using the app is still an owner.

A tenant who moves out is no longer active, but their past occupancy still exists in the records.

---

## Multi-tenancy - Hard Lines Between Societies

Every API request carries an organisation ID in the JWT token. Every database query scopes to that orgId. Every route goes through a tenant context middleware that verifies the token's orgId matches the requested society.

This sounds obvious. It's not. Most apps handle this informally - a WHERE clause here, a check there. We made it structural. The middleware runs before any business logic. There is no way to accidentally query another society's data because **the architecture prevents it**, not just the developer's attention.

```
Request arrives
      │
      ▼
authenticate()         ← verify JWT, extract userId + orgId
      │
      ▼
enforceTenantContext() ← token.orgId must match :id in URL
      │
      ▼
requirePermission()    ← check role-based permission
      │
      ▼
route handler          ← finally, business logic
```

---

## Permissions - Database Driven, Not Hardcoded

Early on we decided that permissions wouldn't be hardcoded strings scattered across route files. They'd live in the database — a Permissions table, a Roles table, a RolePermissions join table. When a user authenticates, their full permission set is loaded and embedded in their JWT.

The practical benefit: **adding a new permission to a role is a seed file change, not a code change**. No deployment required. No searching through files to find where ‘admin can do X’ is checked.

`announcement.create`

`unit.assign`

`complaint.view_all`

`member.remove`

`society.view`

Permissions are granular and descriptive. `unit.view_own` is different from `unit.view_all`. A resident can see their own flat. An admin can see every flat. The same endpoint handles both, it checks which permission the caller has and scopes the response accordingly. I know that this isn't complicated technology but putting it in place early saves us from rewriting permission logic later.

## Notifications - Event Driven, Never Coupled

We understand that some apps wire notifications directly into route handlers. A complaint is created, so the route calls `sendPushNotification(adminId, 'New complaint')`. It works until you need to change who gets notified, or add a new notification type, or handle failures gracefully, then everything is tangled.

We built an event-driven notification system instead. Routes emit events. A dispatcher listens. A rules file decides who gets what message.

```
Route creates complaint
      │
      ▼
appEvents.emit('complaint.created', { orgId, title, ... })
      │
      ▼
dispatcher.ts   ← listens to all events, never changes
      │
      ▼
rules.ts        ← who gets notified? what message?
                ← THIS is the only file you ever change
      │
      ▼
expoPush.ts     ← sends via Expo Push API → FCM → Android
                                          APNs → iOS
```

Adding a new notification type takes three lines across three files. Changing who receives a notification is one function change in `rules.ts`. The route handler never changes. Notification failures never crash the main request.

**DECISION : Notifications are a side effect, not part of the response**

Routes emit events. Dispatchers handle delivery. A failure in notification never returns an error to the user.

**Why it matters:**

Users shouldn't see errors because Expo's servers had a blip. The complaint was created. That's what matters. The notification is best-effort.

## Data - Nothing Is Ever Deleted

We don't hard delete anything. Members are deactivated, not removed. Occupancies get an `occupiedUntil` date. Ownerships get an `ownedUntil` date. Complaints get a `resolvedAt`. Everything is preserved.

We assessed that in Indian society management, disputes about who owned a flat three years ago are real. ‘Who raised that complaint in 2023?’ could be a real question. The answer should always be accessible. Soft deletes cost nothing at our scale and prevent a category of support problems entirely.

## The Trust Model - What Admins Can and Can't Do

This is where architecture meets ethics. An admin in our system has significant power, they can assign flats, deactivate members, manage complaints. We had to decide: how much do we trust admins?

Our V1 answer: we trust them, but we make everything visible. **Every change is audit-logged with who made it and when**. Rogue changes are visible to affected residents in their My Home screen, if an admin silently adds themselves as co-owner of your flat, you'll see it immediately…ofcourse.

We block the most terrible abuse, an admin cannot add themselves as owner of a flat that already has a different owner. But we don't block all self-assignment, because a builder legitimately needs to assign their own unsold flats to themselves and there's nobody above them to do it.

**DECISION : V1 Trust Model, Visibility over Restriction**

Admin has authority.

Audit log tracks everything.

Affected parties can see changes.

Obvious abuse is blocked.

Edge cases are documented for V2.

**Why not full restriction:**

Over-restricting creates support burden and friction for legitimate use cases. Under-restricting with full visibility is the right V1 balance for a product going to pilot… a decision we took, have plans to improve things ahead.

## What We're Building Next

The foundation is solid. The features shipping next - visitor management, audit log UI, owner-managed flats, will all sit cleanly on top of the architecture described here. That's the test of a good architecture, not whether it made today easy, but whether it makes next month easier.

The core system is already running - member management, unit assignment, announcements, complaints, and notifications are live in the current build. You can see the product and current capabilities at [vaastio.com](http://vaastio.com) .
****

If you're building a multi-tenant SaaS with complex permissions, or a consumer app, we're happy to talk about what worked for us and what we'd do differently.

Vaastio is being built by Inspirebyte. We're a small team building things we'd want to use ourselves.
