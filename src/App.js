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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Welcome to the Home Page</h1>
  </div>
);

export default App;
