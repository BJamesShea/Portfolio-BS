import React from "react";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

const Contact = () => {
  return (
    <div className="contactPage">
      <div className="contactContainer">
        <h1 className="contactHeader">Contact Me</h1>
        <div className="contactInfo">
          <p>
            Email:{" "}
            <a href="mailto:your-email@example.com" className="emailField">
              brandon.shea1994@gmail.com
            </a>
          </p>
        </div>
        <div className="socialIcons">
          <a
            href="https://github.com/BJamesShea"
            target="_blank"
            rel="noopener noreferrer"
            className="githubContact"
          >
            <img src={github} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/brandon-j-shea"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedinContact"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
