import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const home = () => {
  return (
    <div>
      <Header />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-">
              <h2>Hello World !</h2>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default home;
