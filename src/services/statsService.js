import apiFetch from "./api";

/**
 * GET /stats
 * Returns the list of all stats from the backend.
 */
export const getAllStats = async () => {
    try {
        const response = await apiFetch("/stats");
        return response.data || [];
    } catch (error) {
        console.error("Error fetching stats:", error);
        return [];
    }
};
