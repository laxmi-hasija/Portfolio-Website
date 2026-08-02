import { Link } from "react-router-dom";
import "../Css/ThankYou.css";
import { FaCheck, FaQuoteLeft } from "react-icons/fa";
import { FiHeart, FiMail, FiClock, FiCheckCircle } from "react-icons/fi";

function ThankYou() {
  return (
    <div className="thankYouContainer">
      <div className="thankyouCard">
        <div className="IconConatiner">  <FiCheckCircle className="topIcon" /></div>
      
        <p className="badge">
          <FaCheck />
           Message Sent Successfully
        </p>
        <h2>
          Thank You for Reaching Out
          <FiHeart />
        </h2>
<div className="description">  <p >Your message has been successfully delivered to my inbox.</p>
        <p >I appreciate you taking the time to connect.</p>

        <p >I'll review your message and get back to you as soon as possible.</p></div>
       <div className="outerContainer">
         <div className="subCardContainer">
   <div className="subCards">
          <div className="subCard responseTime">
            <FiClock className="clockIcon icon" />
            <div>
              <h4 className="subCardHeading">Response Time</h4>
              <p className="subCardDescription">Usually within 24 Hours</p>
            </div>
          </div>
          <div className="subCard emailNotifications">
            <FiMail className="mailIcon icon" />
            <div>
              <h4 className="subCardHeading">Email Notifications</h4>
              <p className="subCardDescription">Enabled and Active</p>
            </div>
          </div>
        </div>
       
        </div>
      <div className="quoteContainer">
      
         <FaQuoteLeft className="quote-icon" />
      <div className="quote"> 
        <h4 className="quoteHeading">
            &ldquo;Great ideas begin with a conversation.&rdquo;
          </h4>
          <p className="quoteDescription">&mdash; Let&apos;s build something amazing together&#33;</p>

      
      </div>
    
     
         
        </div>
       </div>
       
        <div className="btns">
        
            <Link to="/" className="homeBtn">
            Back to Portfolio
          </Link>
    
         <Link to="/" className="projectBtn">
            Back to Portfolio
          </Link>
         
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
