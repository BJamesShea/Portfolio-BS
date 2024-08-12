import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import VertHeader from "./components/VertHeader";
import Projects from "./components/Projects"; // Adjust the path as needed
import Contact from "./components/Contact"; // Adjust the path as needed
import AboutMe from "./components/AboutMe"; // Adjust the path as needed

function App() {
  return (
    <Router>
      <div className="App">
        <VertHeader />
        <div className="mainContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutme" element={<AboutMe />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="introBlurb">
    <h1>
      Hi,
      <br /> I'm Brandon, <br /> aspiring Software Engineer.
    </h1>
    <Link to="/projects" className="projectsButton">
      Projects
    </Link>
    <Link to="/contact" className="contactButton">
      Contact Me
    </Link>
  </div>
);

export default App;
