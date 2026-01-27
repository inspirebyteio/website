import React from "react";
import ProjectCard from "../../components/project-card";
import ProjectsData from "../../data/projects.json";
import SectionTitle from "../../components/section-title";


const Projects = () => {
    return (
        <div className="service-section section-py">
            <div className="container">
                <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1 mb-n7">
                    {ProjectsData &&
                        ProjectsData.map((single, key) => {
                            return (
                                <div
                                    key={key}
                                    className="col text-center mb-7"
                                >
                                    <ProjectCard key={key} data={single} />
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default Projects;
