import "../Css/Contact.css";
import axios from "axios";
import { useState } from "react";
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
import {  FiExternalLink, FiMessageCircle,  FiMapPin  } from "react-icons/fi";

export default function Contact() {
  const[formData, setFormData]= useState({
    name:"",
    email:"",
    subject:"",
    message:""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });

};
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(import.meta.env);
console.log(import.meta.env.VITE_API_URL);

  try {
    const response = await axios.post(
     `${import.meta.env.VITE_API_URL}/api/contact` ,
      formData
    );

    console.log(response.data);

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    alert("Something went wrong!");
  }
};
  return (
    <section id="contact">
      <div className="Contact">
        
        <div className="headingContainer"> <h4 className="getInTouch">GET IN TOUCH<FiMessageCircle/></h4>
        <h1 className="mainHeading">Contact me</h1>
        <p className="mainSubheading">
          Let's create something amazing together&#33;
          <span className="heart">
            {" "}
            <FaHeart />{" "}
          </span>
        </p></div>
        <div className="detailsAndEnquiry">
          <div className="contactdetails">
            <div className="HeadingContainer">
              <span className="headingIconContainer">
                <LuUser className="headingIcon" />
              </span>
              <div>
               
                <h2>Let's Connect</h2>
                <p className="cardSubheading">
             Have a question or want to work together? Feel free to reach out.
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
                  < FiMapPin className="rightIcon" />
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
                  <a  href="mailto:laxmihasija03@gmail.com" target="_blank">                  <FiExternalLink className="rightIcon" />
</a>
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

            <form className="form" onSubmit={handleSubmit}>
              <div className="FormCard">
                <div className=" nameAndEmail">
                  <div className="formElement name">
                    {" "}
                    <label htmlFor="name">Full Name:</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      id="name"
                        name="name"
                      value={formData.name}
  onChange={handleChange}
                    ></input>
                  </div>

                  <div className="formElement email">
                    {" "}
                    <label htmlFor="Email">Email:</label>
                    <input
                      type="email"
                       name="email"

  value={formData.email}
  onChange={handleChange}
                      placeholder="Enter your Email"
                      id="Email"
                    ></input>
                  </div>
                </div>
                <div className="formElement subject">
                  <label htmlFor="Subject">Subject:</label>
                  <input
                    name="subject"

  value={formData.subject}
  onChange={handleChange}
                    type="text"
                    placeholder="Enter enquiry subject"
                    id="Subject"
                  ></input>
                </div>
                <div className="formElement message">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    name="message"
 
  value={formData.message}
  onChange={handleChange}
                    placeholder="Drop your message here"
                    id="message"
                  ></textarea>
                </div>
              </div>
              <div className="btnContainer">
                <button type="submit" className="sendButton">
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
