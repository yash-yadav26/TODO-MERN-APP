import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../assests/images/todoimage.png";
import "./Landing.css";
const Landing = () => {
  return (
    <div className="hero">
      <div className="intro-text">
        <h1>
          <span className="tagline1">Organize work and life</span> 
          <span className="tagline2">finally.</span>
        </h1>
        <p>
  Tired of forgetting important tasks? <br />
  TodoMaster helps you stay focused, reduce stress, and get things done — on time, every time.
</p>

        <Link className="btn red" to="/register">
          Register Now!
        </Link>
        <Link className="btn blue" to="/login">
          Login
        </Link>
      </div>
      <div className="">
        <img src={Hero} alt="heroimage" width={"100%"} height={515} />
      </div>
    </div>
  );
};

export default Landing;