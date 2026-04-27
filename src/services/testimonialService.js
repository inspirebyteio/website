import apiFetch from "./api";

/**
 * GET /testimonials
 * Returns the list of all testimonials from the backend.
 * Response shape: { success: true, data: [ { id, excerpt, authorThumb, name, location, designation, profile } ] }
 */
export const getAllTestimonials = async () => {
    const response = await apiFetch("/testimonials");
    return response.data; // array of testimonial objects
};
