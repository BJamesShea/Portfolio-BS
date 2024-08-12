import React from "react";
import { Link } from "react-router-dom";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import email from "../assets/email.svg"; // Add if you want an email icon

const Contact = () => {
  return (
    <div className="contactPage">
      <div className="contactContainer">
        <h1 className="contactHeader">Contact Me</h1>
        <div className="contactInfo">
          <p>
            Email:{" "}
            <a href="mailto:your-email@example.com" className="emailField">
              your-email@example.com
            </a>
          </p>
          <p>Phone: (123) 456-7890</p>
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
