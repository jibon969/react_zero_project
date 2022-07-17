import React, {useEffect, useState} from "react";
import "./About.style.css";

const About = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://174.138.26.34/api/about-us/`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((actualData) => {
                setData(actualData);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [data]);


    return (
        <>

            <section id="aboutSection">
                <div className="container">
                    <h3 className="aboutTitle">About Us</h3>
                    <div className="errorMessage">
                        {/*Loading Data */}
                        {loading && <h3>A moment please...</h3>}

                        {/* Errors Message */}
                        {
                            error && (
                                <h6>{`There is a problem fetching the post data - ${error}`}</h6>
                            )
                        }
                    </div>

                    {/* Main Content */}
                    <div className="row">
                        {
                            data && data.map((about) => (
                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12" key={about.index}>
                                    <div className="aboutContent">
                                        <div dangerouslySetInnerHTML={{__html: about.description}}/>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

        </>
    );
};

export default About;
