import profilephoto from "../assets/aboutphoto.png"
import { FaMapMarkerAlt, FaEnvelope, FaUser, FaCheck} from "react-icons/fa";


import "../Css/About.css";

export default function Aboutme() {
  return (
    <section id="about"><div className="about">
      <div className="headingContainer">
        {" "}
        <h1>About Me<FaUser/></h1>
        <p>
          A MERN Stack Developer passionate about building modern web
          applications.
        </p>
      </div>
      <div className="profileImageAndInfo">
        <div className="imageSection">
          {" "}
         <div className="imageContainer">
          <img src={profilephoto} alt="profilephoto" className="profilePhoto"></img>
          <h3>Laxmi</h3>
           <p>MERN Stack Developer </p></div>
        <div className="imageDetails">
       
       <div className="iconandDetailContainer"> <FaMapMarkerAlt className="icon"/>  <p>Sonipat,Haryana</p></div> 
     <div className="iconandDetailContainer"><FaEnvelope className="icon"/>   <p>laxmihasija03@gmail.com</p></div>    </div> 
        </div>

        <div className="aboutInfo">
          <h2>Hello, I'm Laxmi&nbsp;👋</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
            eveniet. Quisquam officiis expedita eveniet magnam nobis quas
            mollitia impedit, earum accusamus, molestiae neque vero animi beatae
            cum ea. Deserunt, aut.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            eos facere nihil atque possimus quisquam ducimus officia itaque
            mollitia vero quas nulla dolorem unde praesentium laboriosam, culpa
            ipsum alias eaque.
          </p>
          <hr></hr>
          <ul>
            <li> <li><FaCheck className="checkIcon"/><p>MERN Stack Developer</p></li>
            <li><FaCheck className="checkIcon"/><p>Open Source Lead At DCRUSTODC</p></li></li>
           <li>
           <li><FaCheck className="checkIcon"/><p>Responsive Design</p></li>
            <li><FaCheck className="checkIcon"/><p>Clean and Scalable Code</p></li> </li>
          </ul>{" "}
        </div>
      </div>
      <div className="cards">
        <div className="Card">
          <span>Emoji</span>
          <h4>MERN Developer</h4>
          <p>mern stck devellopment</p>
        </div>
        <div className="Card">
          <span>Emoji</span>
          <h4> Open Source Lead at DcrustOdc</h4>
          <p>mern stck devellopment</p>
        </div>
        <div className="Card">
          <span>Emoji</span>
          <h4>Responsive Design</h4>
          <p>mern stck devellopment</p>
        </div>
        <div className="Card">
          <span>Emoji</span>
          <h4>Continuos learning</h4>
          <p>mern stck devellopment</p>
        </div>
      </div>
    </div>
      
    </section>
  );
}
