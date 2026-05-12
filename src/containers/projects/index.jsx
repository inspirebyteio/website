import React, { useState, useEffect } from "react";
import ProjectCard from "../../components/project-card";
import { getAllProjects } from "../../services/projectService";

const Projects = () => {
    const [projectsData, setProjectsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await getAllProjects();
                setProjectsData(data);
            } catch (err) {
                console.error("Failed to fetch projects:", err.message);
                setError("Unable to load projects. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="service-section section-py">
            <div className="container">
                {/* Loading State */}
                {loading && (
                    <div className="text-center py-5">
                        <div
                            className="spinner-border text-primary"
                            role="status"
                            aria-label="Loading projects"
                        >
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}

                {/* Error State */}
                {!loading && error && (
                    <div className="text-center py-5">
                        <p className="text-danger">{error}</p>
                    </div>
                )}

                {/* Project Cards — same layout as before */}
                {!loading && !error && (
                    <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1 mb-n7">
                        {projectsData.map((single, key) => (
                            <div
                                key={single.id || key}
                                className="col text-center mb-7"
                            >
                                <ProjectCard data={single} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;
