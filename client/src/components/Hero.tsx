import laxmiphoto from "../assets/heroprofilephoto.jpg";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
} from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { HiArrowDownTray,  HiBriefcase } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi";


import "../Css/Hero.css";
import { SiExpress } from "react-icons/si";
import { BsJavascript } from "react-icons/bs";

function Hero() {
  return (
    <section id="home">
      <div className="hero">
        <div className="introduction">
          <div className="badge">
            <GoDotFill className="badgeIcon" />
            <p>Available for internships</p>
          </div>
          <h3 className="greetings ">
            Hello, I'm <span className="wave">👋</span>{" "}
          </h3>
          <h1 className="name">Laxmi</h1>
          <h2 className="introHeading">MERN Stack Developer</h2>
          <p className="introDescription">
          Passionate MERN Stack Developer building responsive and scalable web applications. I enjoy creating clean user experiences, solving real-world problems, and continuously learning modern technologies.
          </p>
          <div className="btns">
            <button className="primary-btn btn">
              <a href="#contact">Get in Touch<HiArrowRight className="btnIcon"/></a>
            </button>
            <button className="secondary-btn btn">
              <a href="/laxmi_resume.pdf">Download CV<HiArrowDownTray className="btnIcon"/></a>
            </button>
          </div>
          <div className="techStackChips">
            <p className="chip">
              <FaReact className="techStackIcons reactIcon" />
             <p> React.js</p>
            </p>
            <p className="chip">
              <FaNodeJs className="techStackIcons nodeIcon" />
             <p> Node.js</p>
            </p>
            <p className="chip">
              <SiExpress className="techStackIcons expressIcon" />
           <p>   Express.js</p>
            </p>
            <p className="chip">
              <BsJavascript className="techStackIcons jsIcon"/>
             <p>javaScript</p>
            </p>
            <p className="chip">
              <FaCss3Alt className="techStackIcons cssIcon" />
             <p>CSS3</p> 
            </p>
          </div>
          <div className="socialbtns">
            <a
              className="social-link"
              href="https://www.linkedin.com/in/laxmihasija/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin Profile"
            >
              <FaLinkedin />
            </a>

            <a
              className="social-link"
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
              className="social-link"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="heroRight">
           <div className="imageContainer">
        
          <img src={laxmiphoto} alt="profile photo">
          </img>
            <div className="floatingCard">
              <p>< HiBriefcase/></p>
            <p className="title">Open to Internships</p>
        <p className="subTitle"><GoDotFill/> Available Now</p>
          </div>
        </div>
        </div>
       
      </div>
    </section>
  );
}
export default Hero;
