import apiFetch from "./api";

/**
 * GET /projects
 * Returns the list of all projects from the backend.
 */
export const getAllProjects = async () => {
    const response = await apiFetch("/projects");
    return response.data;
};
