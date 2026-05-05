
import { useEffect, useState } from "react"
import PropTypes from "prop-types";
import Funfact from "../../../components/funfact";
//import HomeData from "../../../data/home.json";
import { getAllStats } from "../../../services/statsService";

const FunfactContainer = ({ classOption }) => {
    const [funfact, setFunfact] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchFunfact = async () => {
            try {
                setLoading(true)
                setError(null)
                const data = await getAllStats()
                if (data) {
                    setFunfact(data?.data || data || [])
                }

            } catch (error) {
                console.log(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchFunfact()
    }, [])

    if (loading) {
        return <p>
            loading...
        </p>
    }
    if (error) {
        return <p>
            error:{error}
        </p>
    }
    return (
        <div className={`funfact-section section-pb position-relative ${classOption}`}>
            <div className="container">
                <div className="row mb-n7">
                    {funfact && funfact.map((single, key) => {
                        return (
                            <div key={key} className="col-md-3 col-6 mb-7">
                                <Funfact data={single} key={key} />
                            </div>
                        )
                    })}
                </div>
            </div>


            <svg
                className="funfact-svg"
                id="funfact"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1920 535"
            >
                <path
                    className="funfact-path"
                    d="M1950,327.309S1666,1.64,1336,111.4,906,290.324,671,164.377,120.868,57.118-64,225.351"
                />
                <path
                    id="Shape_5_copy"
                    data-name="Shape 5 copy"
                    className="funfact-path"
                    d="M1919.04,532.448s-223.79-369.607-567.75-318.167-454.362,102.4-664.214-62.038S163.566-47.917-47.473,86.059"
                />
            </svg>
        </div>
    );

}
FunfactContainer.propTypes = {
    classOption: PropTypes.string,
};

FunfactContainer.defaultProps = {
    classOption: "mt-10 mt-lg-0",
};

export default FunfactContainer;
