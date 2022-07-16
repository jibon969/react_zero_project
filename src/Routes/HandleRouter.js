import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/Home/Home";
import About from "../views/About/About";

const HandleRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default HandleRouter;
