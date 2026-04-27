import apiFetch from "./api";

export const getAllClients = async () => {
    const response = await apiFetch("/clients");
    return response.data; // Returns list of clients
};
