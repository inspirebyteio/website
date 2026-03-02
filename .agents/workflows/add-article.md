---
description: How to add a new article to the website
---

To add a new article to the InspireByte website, follow these three steps:

### 1. Add the Article Content (Markdown)
Create a new `.md` file in the `public/article-posts/` directory.
- The name of this file (without the `.md` extension) is your **slug**.
- Example: `public/article-posts/my-new-article.md`

### 2. Add Article Metadata (JSON)
Open `src/data/articles.json` and add a new entry to the array.
- **IMPORTANT**: The `slug` property must exactly match the filename you created in Step 1.
- Example entry:
```json
{
    "id": 2,
    "title": "My New Article Title",
    "slug": "my-new-article",
    "date": "2026-03-02",
    "category": "Technology",
    "author": "Author Name",
    "authorImage": "images/team/author-name.png",
    "thumbnail": "images/service/thumbnail.png",
    "excerpt": "A brief summary of your article...",
    "tags": ["Tag1", "Tag2"]
}
```

### 3. Generate Bundled Content
Run the generation script to bundle your markdown into the app data:
// turbo
```powershell
node generate-article-content.js
```

This script will update `src/data/article-content.json` with your new post's content.

> [!NOTE]
> The build process also runs this script automatically, so your changes will be reflected when you start or build the app.
