import "../Css/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section className="outerbox">
      <nav className="navbar">
        <div className="logo">Laxmi</div>
      
        <ul className= {menuOpen ? "nav-links active" : "nav-links"}>
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
          <div className="menu-icon" onClick={()=>{setMenuOpen(!menuOpen)}}>
          {menuOpen ? <FaTimes/> : <FaBars/>}
        </div>
      </nav>
    </section>
  );
}
