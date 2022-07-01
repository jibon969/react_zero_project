import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const home = () => {
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
};

export default home;
