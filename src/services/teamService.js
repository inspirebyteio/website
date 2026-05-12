import apiFetch from "./api";

/**
 * GET /team-members
 * Returns the list of all team members from the backend.
 * Response shape: { success: true, data: [ { id, thumb, name, designation, role, bio, linkedin } ] }
 */
export const getAllTeamMembers = async () => {
    const response = await apiFetch("/team-members");

    return response.data; // array of team member objects
};

