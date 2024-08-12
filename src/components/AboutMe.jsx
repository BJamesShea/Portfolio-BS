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
          Hello! I'm Brandon, an aspiring Software Engineer from St. John's,
          Newfoundland, Canada. I'm currently nearing the end of my second
          semester in the Software Development program at Keyin College.
        </p>
        <p>
          I am passionate about creating innovative solutions and enjoy the
          challenge of solving complex problems. In my free time, I like to stay
          updated with the latest trends in technology and experiment with new
          programming languages and tools.
        </p>
        <p>
          Feel free to explore my projects or get in touch if you'd like to
          collaborate or learn more about my work.
        </p>
        <Link to="/contact" className="aboutContactButton">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
