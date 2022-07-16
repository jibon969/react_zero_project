import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <h2>Hello World !</h2>
              <Link to="/about">Home</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
