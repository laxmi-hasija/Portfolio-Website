import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "../Css/Footer.css";
import { FaCopyright } from "react-icons/fa6";
export default function Footer() {
  return (
    <div className="footer">
      
        <h2 className="heading">Laxmi</h2>
        <p className="description">MERN Stack Developer</p>
    
      <div className="socialbtn">
        <a
          className="social-links"
          href="https://www.linkedin.com/in/laxmihasija/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin Profile"
        >
          <FaLinkedin />
        </a>

        <a
          className="social-links"
          href="https://github.com/laxmi-hasija"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin Profile"
        >
          <FaGithub />
        </a>

        <a
          href="mailto:laxmihasija03@gmail.com"
          aria-label="Email"
          className="social-links"
        >
          <FaEnvelope />
        </a>
      </div>
      <ul className="navlinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
     
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
           <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#contact">Contact me</a>
        </li>
      </ul>

      <p className="footerbottom">
        <FaCopyright /> 2026 Laxmi. All Rights Reserved.
      </p>
    </div>
  );
}
