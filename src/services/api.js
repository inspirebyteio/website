// Central API configuration
// Set REACT_APP_API_BASE_URL in your .env file
// e.g. REACT_APP_API_BASE_URL=https://api.inspirebyte.in/api/v1

const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://localhost:4001";

/**
 * Generic fetch wrapper
 * @param {string} endpoint  - e.g. "/team-members"
 * @param {RequestInit} options - fetch options (method, headers, body, …)
 */
const apiFetch = async (endpoint, options = {}) => {
    const url = `${API_BASE_URL}${endpoint}`;

    const defaultHeaders = {};

    // Attach auth token if present (used by admin-only routes)
    const token = localStorage.getItem("adminToken");
    if (token) {
        defaultHeaders["Authorization"] = `Bearer ${token}`;
    }

    const config = {
        ...options,
        headers: {
            ...defaultHeaders,
            ...options.headers,
        },
    };

    const response = await fetch(url, config);

    // Parse JSON for all responses
    const data = await response.json();

    if (!response.ok) {
        const message =
            data?.message || `API error: ${response.status} ${response.statusText}`;
        throw new Error(message);
    }

    return data;
};

export default apiFetch;
