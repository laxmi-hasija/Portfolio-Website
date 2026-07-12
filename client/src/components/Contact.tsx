import "../Css/Contact.css";
import {
  FaHeart,
  FaEnvelope,
  FaGithub,
  FaMapMarkerAlt,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

import { LuUser, LuSparkles, LuHandshake  } from "react-icons/lu";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { FiMapPin, FiMail, FiExternalLink } from "react-icons/fi";
export default function Contact() {
  return (
    <section id="contact">
      <div className="Contact">
        <h1 className="mainHeading">Contact me</h1>
        <p className="mainSubheading">
          Let's create something amazing together&#33;
          <span className="heart">
            {" "}
            <FaHeart />{" "}
          </span>
        </p>
        <div className="detailsAndEnquiry">
          <div className="contactdetails">
            <div className="HeadingContainer">
              <span className="headingIconContainer">
                <LuUser className="headingIcon" />
              </span>
              <div>
                {" "}
                <h2>Let's Connect</h2>
                <p className="cardSubheading">
                  You can reach out to me through any of these platforms
                </p>
              </div>{" "}
            </div>
            <div className="infoCardContainer">
              <div className="infocard">
                <span className="iconContainer">
                  <FaMapMarkerAlt className="leftIcon" />
                </span>
                <span className="contact-info">
                  <h4>Location</h4>
                  <p>Sonipat, Haryana</p>
                </span>

                <span className="rightIconContainer">
                  <FiMapPin className="rightIcon" />
                </span>
              </div>
              <div className="infocard">
                <span className="iconContainer">
                  <FaEnvelope className="leftIcon" />
                </span>
                <span className="contact-info">
                  <h4>Email</h4>
                  <p>laxmihasija03@gmail.com</p>
                </span>
                <span className="rightIconContainer">
                  <FiMail className="rightIcon" />
                </span>
              </div>
              <div className="infocard">
                <span className="iconContainer">
                  <FaLinkedin className="leftIcon" />
                </span>
                <span className="contact-info">
                  <h4>Linkedin</h4>
                  <p>linkedin.com/in/laxmihasija</p>
                </span>
                <span className="rightIconContainer">
                  <a
                    href="https://www.linkedin.com/in/laxmihasija/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="externalLink"
                  >
                    <FiExternalLink className="rightIcon" />
                  </a>
                </span>
              </div>
              <div className="infocard">
                <span className="iconContainer">
                  <FaGithub className="leftIcon" />
                </span>
                <span className="contact-info">
                  <h4>Github</h4>
                  <p>github.com/laxmi-hasija</p>
                </span>
                <span className="rightIconContainer">
                  <a
                    href="https://github.com/laxmi-hasija"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="externalLink"
                  >
                    <FiExternalLink className="rightIcon" />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="enquiryForm">
            <div className="HeadingContainer">
              <span className="headingIconContainer">
                <HiOutlinePaperAirplane className="headingIcon" />
              </span>
              <div>
                {" "}
                <h2>Send me a message</h2>
                <p className="cardSubheading">
                  I'll get back to you as soon as possible&#33;
                </p>
              </div>
            </div>

            <form className="form">
              <div className="FormCard">
                <div className=" nameAndEmail">
                  <div className="formElement name">
                    {" "}
                    <label htmlFor="name">Full Name:</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      id="name"
                    ></input>
                  </div>

                  <div className="formElement email">
                    {" "}
                    <label htmlFor="Email">Email:</label>
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      id="Email"
                    ></input>
                  </div>
                </div>
                <div className="formElement subject">
                  <label htmlFor="Subject">Subject:</label>
                  <input
                    type="text"
                    placeholder="Enter enquiry subject"
                    id="Subject"
                  ></input>
                </div>
                <div className="formElement message">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    placeholder="Drop your message here"
                    id="message"
                  ></textarea>
                </div>
              </div>
              <div className="btnContainer">
                <button className="sendButton">
                  Send Message <FaPaperPlane />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="thanks">
          <h3>Thanks for Visiting my Portfolio <LuSparkles className="sparkleIcon"/></h3>
        <p>I'm always open to new opportunities, collaborations, and meaningful projects <LuHandshake/></p>
        </div>
      </div>
    </section>
  );
}
