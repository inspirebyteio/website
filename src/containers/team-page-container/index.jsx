import React from "react";
import TeamCard from "../../components/team-card";
import TeamData from "../../data/team.json";

const TeampPageContainer = () => {
    return (
        <div className="service-section section-py">
            <div className="container">
                <div className="row justify-content-center mb-n7">
                    {TeamData &&
                        TeamData.map((single, key) => {
                            return (
                                <div
                                    key={key}
                                    className="col-sm-6 col-lg-4 text-center mb-7"
                                >
                                    <TeamCard key={key} data={single} />
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default TeampPageContainer;
