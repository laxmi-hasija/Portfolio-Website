import profilephoto from "../assets/aboutphoto.png";
import { FaMapMarkerAlt, FaEnvelope,  FaCheck, FaLaptopCode } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { TbApi } from "react-icons/tb";
import { LuBrainCircuit } from "react-icons/lu";


import "../Css/About.css";
import { FaBriefcase } from "react-icons/fa6";
import { HiArrowDownTray } from "react-icons/hi2";

export default function Aboutme() {
  return (
    <section id="about">
      <div className="about">
        <div className="headingContainer">
          {" "}
          <h1>
            About Me
         
          </h1>
       <p>Get to know me better</p>
        </div>
        <div className="profileImageAndInfo">
          <div className="leftCard">
            {" "}
            <div className="imageContainer">
              <img
                src={profilephoto}
                alt="profilephoto"
                className="profilePhoto"
              ></img>
              <h3>Laxmi</h3>
              <p>MERN Stack Developer </p>
            </div>
            <div className="imageDetails">
              <div className="iconandDetailContainer">
                {" "}
                <FaMapMarkerAlt className="icon" /> <p>Sonipat,Haryana</p>
              </div>
              <div className="iconandDetailContainer">
                <FaEnvelope className="icon" /> <p>laxmihasija03@gmail.com</p>
              </div>
              <div className="iconandDetailContainer ">
                <FaBriefcase className="icon"/> <p>Available for Internships</p>

              </div>
                <button className="resumeBtn btn">
                            <a href="/laxmi_resume.pdf">Download Resume<HiArrowDownTray className="btnIcon"/></a>
                          </button>
            </div>
          </div>

          <div className="rightCard">
          
            <h2>Hello, I'm Laxmi&nbsp;👋</h2>
            <p>
           I'm a B.Tech Computer Science student at DCRUST Murthal (CGPA: 7.80) with a passion for building responsive, scalable, and user-friendly web applications using the MERN stack. I enjoy transforming ideas into real-world projects while continuously improving my problem-solving and development skills.
            </p>
            <p>

          I'm currently focused on strengthening my frontend and
              backend development skills and am looking for internship
              opportunities where I can contribute, learn, and grow as a
              software developer.
            </p>
            <hr></hr>
            <ul>
              <li>
                {" "}
                <li>
                  <FaCheck className="checkIcon" />
                  <p>MERN Stack Developer</p>
                </li>
                <li>
                  <FaCheck className="checkIcon" />
                  <p>Open Source Lead At DCRUSTODC</p>
                </li>
              </li>
              <li>
                <li>
                  <FaCheck className="checkIcon" />
                  <p>Responsive Design</p>
                </li>
                <li>
                  <FaCheck className="checkIcon" />
                  <p>Clean and Scalable Code</p>
                </li>{" "}
              </li>
            </ul>{" "}
          </div>
        </div>
        <div className="cards">
          <div className="Card">
            <span><FaLaptopCode className="bottomcardIcon"/></span>
            <h4>MERN Developer</h4>
            <p>Full-stack web apps</p>
          </div>
          <div className="Card">
            <span><RiReactjsLine className="bottomcardIcon"/></span>
            <h4>React.js</h4>
            <p>Modern UI development</p>
          </div>
          <div className="Card">
            <span><TbApi className="bottomcardIcon"/></span>
            <h4>REST APIs</h4>
            <p>Backend Integration</p>
          </div>
          <div className="Card">
            <span><LuBrainCircuit className="bottomcardIcon"/></span>
            <h4>Continuous learning</h4>
            <p>Growing Everyday</p>
          </div>
        </div>
      </div>
    </section>
  );
}
