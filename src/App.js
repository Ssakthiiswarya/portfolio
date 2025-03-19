import { motion } from "framer-motion";
import React from "react";
import { FaBriefcase, FaCode, FaEnvelope, FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css'
import Portfoliopage from "./Portfoliopage";


const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <h1>SAKTHI ISWARYA S | Frontend Developer</h1>
      <ul>
        <li><Link to="/"><FaHome /> Home</Link></li>
        <li><Link to="/about"><FaUser /> About</Link></li>
        <li><Link to="/projects"><FaProjectDiagram /> Projects</Link></li>
        <li><Link to="/skills"><FaCode /> Skills</Link></li>
        <li><Link to="/contact"><FaEnvelope /> Contact</Link></li>
        <li><Link to="/portfolio"><FaBriefcase /> Portfolio</Link></li>
      </ul>
    </div>
  </nav>
);

const Home = () => (
  <motion.div
    className="home"
    initial={{ x: "100vw" }} 
    animate={{ x: 1 }} 
    transition={{ type: "tween", duration: 1 }} 
  >
    
    <h2 className="welcome-text">Welcome to my portfolio</h2>
  </motion.div>
);

const About = () => (
  <motion.div
    className="about"
    initial={{ x: "100vw" }} 
    animate={{ x: 0 }} 
    transition={{ type: "tween", duration: 1 }}
  >
    <h6 className="slide-text">
      <strong>About me:</strong> <br />
      I am passionate about learning new concepts. <br />
      Known for a strong balance of smart work and hard work, adapting quickly to new challenges and environments. <br />
      Passionate about delivering quality results and helping teams achieve their goals. <br />
      Always eager to learn and grow.
    </h6>
  </motion.div>
);

const Projects = () => (
  <motion.div
    className="projects"
    initial={{ x: "100vw" }} 
    animate={{ x: 0 }} 
    transition={{ type: "tween", duration: 1 }} 
  >
    <h6>
      <ul className="slide-text" style={{ fontSize: "23px", lineHeight: "1.4" }}>
        <li><strong>My Projects</strong></li>
        <li>
          <strong>Mini Saree Pleating Machine</strong> (Design and Utility Patent)  
          <p>
            An innovative device designed to simplify and speed up the saree pleating process, ensuring uniform and precise pleats effortlessly.
          </p>
        </li>
        <li>
          <strong>Lead Holding Mechanical Pencil</strong> (Design and Utility Patent)  
          <p>
            Provides a user-friendly solution for students, artists, and professionals who require convenience in writing and drawing.
          </p>
        </li>
      </ul>
    </h6>
  </motion.div>
);





const Skills = () => (
  <motion.div
    className="skills p-4"
    style={{ fontSize: "27px", textAlign: "left", lineHeight: "1.5" }}
    initial={{ x: "100vw" }} 
    animate={{ x: 0 }} 
    transition={{ type: "tween", duration: 1 }} 
  >
    <motion.h5
      initial={{ x: "50vw", opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }} 
      transition={{ type: "tween", duration: 0.5, delay: 1 }} 
    >
      <ul>
        <li><strong>My Skills</strong></li>
        <li>
          <strong>Soft Skills:</strong>
          <motion.ul
            initial={{ x: "50vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 1, delay: 0.7 }}
          >
            <li>Communication skills (Written and Verbal)</li>
            <li>Teamwork and Collaboration</li>
            <li>Leadership</li>
            <li>Adaptivity</li>
            <li>Time management</li>
          </motion.ul>
        </li>
        <li>
          <strong>Programming Skills:</strong>
          <motion.ul
            initial={{ x: "50vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 1, delay: 0.9 }}
          >
            <li>Basics of Python, C</li>
            <li>MS Word, MS PowerPoint, MS Spreadsheet</li>
          </motion.ul>
        </li>
        <li>
          <strong>Tools & Software:</strong>
          <motion.ul
            initial={{ x: "50vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 1, delay: 1.1 }}
          >
            <li>MATLAB</li>
            <li>VS Code</li>
          </motion.ul>
        </li>
      </ul>
    </motion.h5>
  </motion.div>
);


const Contact = () => (
  <motion.div
    className="contact p-4"
    style={{ fontSize: "24px", textAlign: "left", lineHeight: "1.5" }}
    initial={{ x: "100vw" }} 
    animate={{ x: 0 }} 
    transition={{ type: "tween", duration: 1 }} 
  >
    <motion.ul
      initial={{ x: "50vw", opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }} 
      transition={{ type: "tween", duration: 1, delay: 0.5 }} 
    >
      <motion.li 
        initial={{ x: "50vw", opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ type: "tween", duration: 1, delay: 0.5 }}
      >
        <strong style={{ color: "white" }}>Contact Information:</strong>
      </motion.li>

      <motion.li 
        initial={{ x: "50vw", opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ type: "tween", duration: 1, delay: 0.7 }}
      >
        <strong style={{ color: "#17a2b8" }}>Email:</strong>
        <a href="mailto:sakthiiswaryas@gmail.com" style={{ color: "white", marginLeft: "10px" }}>
          sakthiiswaryas@gmail.com
        </a>
      </motion.li>

      <motion.li 
        initial={{ x: "50vw", opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ type: "tween", duration: 1, delay: 0.9 }}
      >
        <strong style={{ color: "#17a2b8" }}>LinkedIn:</strong>
        <a href="https://www.linkedin.com/in/sakthi-iswarya-s-6a49a7257" target="_blank" rel="noopener noreferrer" style={{ color: "white", marginLeft: "10px" }}>
          Sakthi Iswarya S
        </a>
      </motion.li>

      <motion.li 
        initial={{ x: "50vw", opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ type: "tween", duration: 1, delay: 1.1 }}
      >
        <strong style={{ color: "#17a2b8" }}>GitHub:</strong>
        <a href="https://github.com/Ssakthiiswarya" target="_blank" rel="noopener noreferrer" style={{ color: "white", marginLeft: "10px" }}>
          github.com/Ssakthiiswarya
        </a>
      </motion.li>

      <motion.li 
        initial={{ x: "50vw", opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ type: "tween", duration: 1, delay: 1.3 }}
      >
        <strong style={{ color: "#17a2b8" }}>HackerRank:</strong>
        <a href="https://www.hackerrank.com/profile/sakthiiswaryas" target="_blank" rel="noopener noreferrer" style={{ color: "white", marginLeft: "10px" }}>
          hackerrank.com/sakthiiswaryas
        </a>
      </motion.li>

    </motion.ul>
  </motion.div>
);


const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfoliopage />} />
    </Routes>
  </Router>
);

export default App;
