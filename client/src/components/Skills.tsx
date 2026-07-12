import { FaUser, FaLaptopCode, FaTools, FaFolderOpen, FaRocket } from "react-icons/fa";
import { MdPalette} from "react-icons/md";
import {TbBulbFilled} from "react-icons/tb";
import {RiCodeSSlashFill} from "react-icons/ri";

import { PiDatabaseFill,  PiBrainFill ,PiGraduationCapFill } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";

import "../Css/Skills.css";
export default function Skills() {
  return (
    <section id="skills">
      <div className="skills">
        {" "}
        <div className="headingContainer">
          {" "}
          <div className="myExpertiseContainer">
            <p className="myExpertise">
              <FaUser />
              <p>My Expertise</p>
            </p>
          </div>
          <h1>Skills</h1>
          <p>Tools and Technologies I work with<TbBulbFilled/></p>
        </div>
        <div className="cardContainer">
          {" "}
          <div className="Card">
            <div className="cardHeading">
              {" "}<FaLaptopCode className="cardIcon"/>
              <h3>Frontend</h3>
            </div>
              <hr></hr>
            <div className="cardDetails">
           
              <p>HTML5</p>
              <p>CSS3</p>
              <p>JavaScript&#40;ES6+&#41;</p>
              <p>React.js</p>
              <p>Next.js</p>
            </div>
          </div>
          <div className="Card"><div className="cardHeading"><MdPalette className="cardIcon"/><h3>UI & Styling</h3></div>
         <hr></hr>
             <div className="cardDetails">
             <p>Tailwind CSS</p>
            <p>Bootstrap</p>
            <p>Responsive Design</p>
            <p>CSS flexbox and grid</p>
           </div>
           
          </div>
          <div className="Card">
          <div className="cardHeading"><IoSettingsSharp className="cardIcon"/><h3>Backend</h3></div> 
          <hr></hr>
          <div className="cardDetails">
            <p>Node.js</p>
            <p>Express.js</p>
            <p>EJS</p>
            <p>Rest API's</p>
          </div></div>  
          <div className="Card">
            <div className="cardHeading"> <PiDatabaseFill className="cardIcon"/><h3>Databases</h3></div>
              <hr></hr>
          <div className="cardDetails"> <p>MongoDB</p>
            <p>My SQL</p></div>
           
          </div>
          <div className="Card">
            <div className="cardHeading"> <FaTools className="cardIcon"/> <h3>Tools</h3></div>
              <hr></hr>
           <div className="cardDetails"> <p>VS Code</p>
            <p>Git</p>
            <p>Github</p>
            <p>Postman</p>
            <p>Docker</p></div>
           
          </div>
          <div className="Card">
            <div className="cardHeading">  <PiBrainFill className="cardIcon"/> <h3>Core Concepts</h3></div>
              <hr></hr>
           <div className="cardDetails">
             <p>Data Structure and Algorithms</p>
            <p>OOP</p>
             <p>API Integration</p>
            <p>Authentication and Authorization</p>
           
            <p>Problem Solving</p>
           </div>
           
          </div>
        </div>
        <div className="skillFooter">
          <div className="outerdiv" ><span className="footerIcon"><RiCodeSSlashFill/></span>
          <div ><h3 className="footerHeading">12+</h3> <p>Technologies</p></div>
          </div>
          <div className="outerdiv" ><span className="footerIcon"><PiGraduationCapFill/></span><div><h3 className="footerHeading">2+</h3> <p>years of learning</p></div></div>
          <div className="outerdiv" ><span className="footerIcon"><FaFolderOpen/></span><div><h3 className="footerHeading">5+</h3> <p>Projects</p></div></div>
          <div className="outerdiv" ><span className="footerIcon"><FaRocket/></span><div><h3 className="footerHeading">Always</h3> <p>learning and growing</p></div></div>
       
        </div>
      </div>
    </section>
  );
}
