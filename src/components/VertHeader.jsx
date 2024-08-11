import React from "react";
import { Link } from "react-router-dom";
import home from "../assets/home.svg";
import eye from "../assets/eye.svg";
import email from "../assets/email.svg";
import person from "../assets/person.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

const VertHeader = () => {
  return (
    <div className="vHeader">
      <div className="iconContainer">
        <Link to="/">
          <img src={home} className="iconTab" alt="Home" />
        </Link>
        <Link to="/projects">
          <img src={eye} className="iconTab" alt="Projects" />
        </Link>
        <Link to="/contact">
          <img src={email} className="iconTab" alt="Contact" />
        </Link>
        <Link to="/aboutme">
          <img src={person} className="iconTab" alt="About Me" />
        </Link>
      </div>
      <div className="socialsContainer">
        <a
          href="https://github.com/BJamesShea"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} className="socialTab" alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/brandon-j-shea"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} className="socialTab" alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
};

export default VertHeader;
