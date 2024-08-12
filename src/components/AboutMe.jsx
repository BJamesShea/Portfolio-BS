import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Corrected import path
import face from "../assets/face.jpeg"; // Corrected import path

const AboutMe = () => {
  return (
    <div className="aboutMePage">
      <div className="aboutMeContainer">
        <div className="profilePicture">
          <img src={face} alt="Brandon Shea" className="profilePic" />
        </div>
        <h1>About Me</h1>
        <p>
          Hi, I'm Brandon Shea, a Software Development student at Keyin College,
          currently in my second semester. My early exposure to technology and
          hands-on experience with machines sparked my passion for coding.
        </p>
        <p>
          I'm actively developing my skills in Python, HTML, CSS, JavaScript,
          and React. I'm looking forward to diving into backend development in
          the next semesters.
        </p>
        <p>
          I hold certifications in AWS, Generative AI, and CompTIA A+ 1101.
          Explore my projects or reach out if you'd like to collaborate or learn
          more!
        </p>
        <Link to="/contact" className="aboutContactButton">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
