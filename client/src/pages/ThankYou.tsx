import { FaEnvelope } from "react-icons/fa";
import "../Css/ThankYou.css";
import { Link } from "react-router-dom";
import {  BiCheck, BiLeftArrowAlt } from "react-icons/bi";

function ThankYou() {
  return (
    <div className="thankYouPage">
      <div className="thankYouContainer">

        {/* Success Icon */}
        <div className="successIcon">
          <BiCheck/>
        </div>

        {/* Success Badge */}
        <div className="successBadge">
          <BiCheck/>
          <span>Message Sent Successfully!</span>
        </div>

        {/* Heading */}
        <h1>
          Thank You for Reaching Out ♡
        </h1>

        {/* Description */}
        <p className="thankYouDescription">
          Your message has been successfully delivered to my inbox.
          <br />
          I appreciate you taking the time to connect.
          <br />
          I'll review your message and get back to you as soon as possible.
        </p>

        {/* Information Boxes */}
        <div className="infoContainer">

          <div className="infoBox">
            <div className="infoBoxTitle">
              <span>◉</span>
              <span>Response Time</span>
            </div>

            <div className="infoBoxText">
              Usually within 24 Hours
            </div>
          </div>

          <div className="infoBox">
            <div className="infoBoxTitle">
              <span><FaEnvelope/></span>
              <span>Email Notifications</span>
            </div>

            <div className="infoBoxText">
              Enabled and Active
            </div>
          </div>

        </div>

        {/* Quote */}
        <div className="quote">
          <strong>“Great ideas begin with a conversation.”</strong>
          <br />
          — Let's build something amazing together!
        </div>

        {/* Back Button */}
        <Link to="/" className="backButton">
          <BiLeftArrowAlt/>&nbsp;Back to Portfolio 
        </Link>

      </div>
    </div>
  );
}

export default ThankYou;
