import apiFetch from "./api";

export const getAllBlogs = async () => {
    const response = await apiFetch("/blogs");
    return response.data; // Returns list of blogs with content included
};