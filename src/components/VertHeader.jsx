import React from "react";
import home from "../assets/home.svg";
import eye from "../assets/eye.svg";
import email from "../assets/email.svg";
import person from "../assets/person.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

const VertHeader = () => {
  return (
    <>
      <div className="vHeader">
        <div className="iconContainer">
          <img src={home} className="iconTab" />
          <img src={eye} className="iconTab" />
          <img src={email} className="iconTab" />
          <img src={person} className="iconTab" />
        </div>
        <div className="socialsContainer">
          <a href="https://github.com/BJamesShea" target="blank">
            <img src={github} className="socialTab" />
          </a>
          <a href="https://www.linkedin.com/in/brandon-j-shea" target="blank">
            <img src={linkedin} className="socialTab" />
          </a>
        </div>
      </div>
    </>
  );
};

export default VertHeader;
