import laxmiphoto from "../assets/laxmiphoto.jpg";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "../Css/Hero.css";


function Hero() {
  return (
    <section id="home">
      <div className="hero">
        <div className="introduction">
          <h3 className="greetings ">Hi, I'm <span className="wave">👋</span> </h3>
          <h1 className="name">Laxmi</h1>
          <h2 className="introHeading">Mern Stack Developer</h2>
          <p className="introDescription">
            Passionate MERN Stack Developer focused on building responsive and
            user-friendly web applications. I enjoy solving real-world problems,
            learning modern technologies, and creating clean, efficient, and
            scalable solutions.
          </p>
          <div className="btns">
            <button className="primary-btn"><a href="#contact">Get in Touch</a></button>
           <button className="secondary-btn"><a  href="/laxmi_resume.pdf">Download CV</a></button> 
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
        <div className="image">
          <img
          src={laxmiphoto}
          alt="profile photo"
         
        ></img>
        </div>
        
      </div>
     
    </section>
  );
}
export default Hero;
