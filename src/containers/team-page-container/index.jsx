import React, { useState, useEffect } from "react";
import TeamCard from "../../components/team-card";
import { getAllTeamMembers } from "../../services/teamService";

const TeampPageContainer = () => {
    const [teamData, setTeamData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTeam = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await getAllTeamMembers();
                setTeamData(data);
            } catch (err) {
                console.error("Failed to fetch team members:", err.message);
                setError("Unable to load team members. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchTeam();
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
                            aria-label="Loading team members"
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

                {/* Team Cards — same layout as before */}
                {!loading && !error && (
                    <div className="row justify-content-center mb-n7">
                        {teamData.map((single, key) => (
                            <div
                                key={single.id || key}
                                className="col-sm-6 col-lg-4 text-center mb-7"
                            >
                                <TeamCard data={single} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TeampPageContainer;
