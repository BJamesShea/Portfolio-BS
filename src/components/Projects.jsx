import React from "react";

const Projects = () => {
  return (
    <div className="projectCardContainer">
      <div className="projectCard">
        <h2 className="projectHeader">E-Commerce App</h2>
        <p>
          A React-based e-commerce app featuring product browsing, cart
          management, and checkout functionality.
        </p>
        <a
          href="https://github.com/Adam-S988/final-sprint-asbs"
          target="_blank"
          rel="noopener noreferrer"
          className="projectBtn"
        >
          View on GitHub
        </a>
      </div>
      <div className="projectCard">
        <h2 className="projectHeader">Dog Gallery</h2>
        <p>
          An interactive React app for browsing and selecting dog images from a
          gallery.
        </p>
        <a
          href="https://github.com/BJamesShea/doggallery"
          target="_blank"
          rel="noopener noreferrer"
          className="projectBtn"
        >
          View on GitHub
        </a>
      </div>
      <div className="projectCard">
        <h2 className="projectHeader">Insurance Software</h2>
        <p>
          Simple insurance management software built in Python, handling
          policies and claims.
        </p>
        <a
          href="https://github.com/BJamesShea/QAP4-BS"
          target="_blank"
          rel="noopener noreferrer"
          className="projectBtn"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default Projects;
