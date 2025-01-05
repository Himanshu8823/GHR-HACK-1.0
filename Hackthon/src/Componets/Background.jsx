import React from "react";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import "../Styles/Background.css";

const Background = () => {
  return (
    <div className="App">
      <div className="">
        <Navbar />
        <Home />
      </div>
    </div>
  );
};

export default Background;
