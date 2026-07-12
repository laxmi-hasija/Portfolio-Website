import "../Css/Projects.css";
import { IoLogoJavascript, IoColorPaletteOutline } from "react-icons/io5";
import ranomColorGenerator from "../assets/RandomColorGenerator.png";
import weatherApp from "../assets/Weather-app.png";
import { TbWorld } from "react-icons/tb";

import {
  FaFolderOpen,
  FaLaptopCode,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

import { LuListTodo, LuCloudSun } from "react-icons/lu";
import taskManager from "../assets/TaskManager.png";
import samplephoto from "../assets/ChatGPT Image Jul 1, 2026, 01_42_17 AM.png";
import { SiExpress, SiMongodb } from "react-icons/si";
export default function Projects() {
  return (
    <section id="projects">
      <div className="projects">
        <div className="projectHeadingContainer">
          <FaFolderOpen className="projectHeadingIcon" />
          <h1>Projects</h1>
          <p>
            Here are some of the projects I have built using modern technologies
          </p>
        </div>
        <div className="projectContainer">
          <div className="project">
            <img
              src={samplephoto}
              alt="Portfolio Website Image"
              className="projectImage"
            ></img>
            <div className="cardHeadingContainer">
              <span className="cardHeadingIcon">
                <FaLaptopCode />
              </span>
              <div>
                <h3 className="projectheading">Portfolio Website</h3>
                <p className="projectDescription">
                  A modern and fully responsive portfolio website showcasing my
                  skills, projects, education, and contact information with a
                  clean, user-friendly interface.
                </p>
              </div>
            </div>

            <div className="technologiesUsed">
              <div>
                <FaReact className="technologyIcon reactIcon" /> <p>React.js</p>
              </div>
              <div>
                <FaNodeJs className="technologyIcon nodeIcon" />
                <p>Node.js</p>
              </div>
              <div>
                <SiExpress className="technologyIcon expressIcon" />
                <p>Express.js</p>
              </div>
              <div>
                <SiMongodb className="technologyIcon mongoIcon" />
                <p>MongoDB</p>
              </div>
            </div>
            <div className="btns">
              <button className="liveDemo btn">
                <a>
                  Live Demo
                  <HiArrowUpRight className="liveDemoIcon" />
                </a>
              </button>
              <button className="githubRepo btn">
                <a
                  href="https://github.com/laxmi-hasija/Portfolio-Website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Repo
                  <FaGithub className="githubIcon" />
                </a>
              </button>
            </div>
          </div>
          <div className="project">
            <img
              src={taskManager}
              alt="Portfolio Website Image"
              className="projectImage"
            ></img>
            <div className="cardHeadingContainer">
              <span className="cardHeadingIcon">
                <LuListTodo />
              </span>
              <div>
                <h3 className="projectheading">
                  Task Manager -Organize your tasks
                </h3>
                <p className="projectDescription">
                  A task management application that lets users create, update,
                  delete, and mark tasks as completed through a clean and
                  responsive interface.
                </p>
              </div>
            </div>

            <div className="technologiesUsed">
              <div>
                <FaReact className="technologyIcon reactIcon" /> <p>React.js</p>
              </div>
              <div>
                <IoLogoJavascript className="technologyIcon jsIcon" />
                <p>JavaScript</p>
              </div>
              <div>
                <FaCss3Alt className="technologyIcon cssIcon" />
                <p>CSS3</p>
              </div>
            </div>
            <div className="btns">
              <button className="liveDemo btn">
                <a
                  href="https://task-manager-01-mu.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                  <HiArrowUpRight className="liveDemoIcon" />
                </a>
              </button>
              <button className="githubRepo btn">
                <a
                  href="https://github.com/laxmi-hasija/Task-Manager"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Repo
                  <FaGithub className="githubIcon" />
                </a>
              </button>
            </div>
          </div>
          <div className="project">
            <img
              src={weatherApp}
              alt="Portfolio Website Image"
              className="projectImage"
            ></img>
            <div className="cardHeadingContainer">
              <span className="cardHeadingIcon">
                <LuCloudSun />
              </span>
              <div>
                <h3 className="projectheading">Weather App</h3>
                <p className="projectDescription">
                  A modern and fully responsive portfolio website showcasing my
                  skills, projects, education, and contact information with a
                  clean, user-friendly interface.
                </p>
              </div>
            </div>

            <div className="technologiesUsed">
              <div>
                <FaReact className="technologyIcon reactIcon" /> <p>React.js</p>
              </div>

              <div>
                <IoLogoJavascript className="technologyIcon jsIcon" />
                <p>JavaScript</p>
              </div>
              <div>
                <FaCss3Alt className="technologyIcon cssIcon" />
                <p>CSS3</p>
              </div>
              <div>
                <TbWorld className="technologyIcon apiIcon" />
                <p>API</p>
              </div>
            </div>
            <div className="btns">
              <button className="liveDemo btn">
                <a
                  href="https://weather-app-j6kd.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                  <HiArrowUpRight className="liveDemoIcon" />
                </a>
              </button>
              <button className="githubRepo btn">
                <a
                  href="https://github.com/laxmi-hasija/Weather-App"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Repo
                  <FaGithub className="githubIcon" />
                </a>
              </button>
            </div>
          </div>
          <div className="project">
            <img
              src={ranomColorGenerator}
              alt="Portfolio Website Image"
              className="projectImage"
            ></img>
            <div className="cardHeadingContainer">
              <span className="cardHeadingIcon">
                <IoColorPaletteOutline />
              </span>
              <div>
                <h3 className="projectheading">Random Color Generator</h3>
                <p className="projectDescription">
                 A simple yet interactive Random Color
                  Generator built with HTML, CSS, and JavaScript, featuring
                  instant color generation, HEX and RGB value display, and
                  one-click clipboard copy functionality.
                </p>
              </div>
            </div>

            <div className="technologiesUsed">
              <div>
                <FaHtml5 className="technologyIcon htmlIcon" /> <p>HTML5</p>
              </div>
              <div>
                <IoLogoJavascript className="technologyIcon jsIcon" />
                <p>JavaScript</p>
              </div>
              <div>
                <FaCss3Alt className="technologyIcon cssIcon" />
                <p>CSS3</p>
              </div>
            </div>
            <div className="btns">
              <button className="liveDemo btn">
                <a
                  href="https://random-color-generator-rouge-mu.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                  <HiArrowUpRight className="liveDemoIcon" />
                </a>
              </button>
              <button className="githubRepo btn">
                <a
                  href="https://github.com/laxmi-hasija/random-color-generator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Repo
                  <FaGithub className="githubIcon" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
