import "../Css/Education.css";
import {
  FaStar,

  FaBookOpen,
  FaCircle,
  FaUniversity,
  FaTrophy,
  FaCalendarAlt,
  FaChartLine,
  FaSchool,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { GiDramaMasks } from "react-icons/gi";
import { PiCertificate } from "react-icons/pi";
import { VscSourceControl } from "react-icons/vsc";
export default function Education() {
  return (
    <section id="education">
      <div className="education">
        <div className="educationHeadingContainer">
          <h1>Education</h1>
          <p className="educationSubheading">
            {" "}
            Academic milestones from school to university
            <FaStar />
          </p>
        </div>
        <div className="mainSection">
          <div className="timeline">
            <div className="item">
              <div className="timelineDot"> </div>
              <div className="card topCard ">
                <div className="headingSection">
                  <div className="mainHeading">
                   
                    <h2>B.Tech</h2>
                    <h2 className="computerscience">
                      {" "}
                      in Computer Science and Engineering
                    </h2>
                  </div>
                  <button className="badge">
                    <FaCircle className="dotIcon" />
                    Present
                  </button>
                </div>
                <div className="institute">
                  <FaUniversity className="instituteIcon" />{" "}
                  <p>
                    Deenbandhu Chhotu Ram University of Science and Technology
                  </p>
                </div>
                <div className="subdetails">
                  <div className="topSection">
                    <div className="supportingDetails">
                      {" "}
                      <div className="subdetail supportingDetail">
                        <FaCalendarAlt className="icon" />{" "}
                        <div>
                          <p>DURATION</p>
                          <p className="infoValue">2023-2027</p>
                        </div>
                      </div>
                      <div className="subdetail supportingDetail">
                        <FaStar className="icon" />
                        <div>
                          <p>CGPA</p>
                          <p className="infoValue">7.8/10</p>
                        </div>
                      </div>
                      <div className="supportingDetail">
                        <FaMapMarkerAlt className="icon" />
                        <div>
                          <p>LOCATION</p>
                          <p className="infoValue">Murthal , Haryana</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bottomSection">
                    <div className="courseSection">
                      <p className="courseHeading subHeading">
                        Relevant Courses
                      </p>
                      <div className="courses">
                        <div className="course">
                          <p>Data Structures</p>
                        </div>
                        <div className="course">
                          <p>Operating System</p>
                        </div>
                        <div className="course">
                          <p>Web Development</p>
                        </div>
                        <div className="course">
                          <p>Computer Networks</p>
                        </div>
                        <div className="course">
                          <p>DBMS</p>
                        </div>
                      </div>
                    </div>
                    <div className="highlightSection">
                     
      
                        
                        <ul className="list">
                          <li  className="highlightHeading">Highlights</li>
                          <li><FaTrophy className="icon"/>Top 10%(2023)</li>
                          <li><VscSourceControl className="icon"/> Open Source Community Lead</li>
                          <li><GiDramaMasks className="icon"/>Theatre Society</li>
                          <li><FaStar className="icon"/>CGPA:7.8/10</li>
                        </ul>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="timelineDot"> </div>
              <div className="card XIICard">
                <div className="headingSection">
                  <h3>Senior Secondary&#40;Class XII &#41;</h3>
                  <button className="badge">
                    <FaCircle className="dotIcon" />
                    Passed
                  </button>
                </div>
                <div className="institute">
                  {" "}
                  <FaSchool />
                  <p>Shiva Shiksha Sadan, Sonipat</p>
                </div>
                <div className="subDetails">
                  <div className="supportingDetails">
                    <div className="supportingDetail">
                      <FaCalendarAlt className="icon" />

                      <div>
                        <p>DURATION</p>
                        <p className="infoValue">2021-2022</p>
                      </div>
                    </div>
                    <div className="supportingDetail">
                      <FaBookOpen className="icon" />

                      <div>
                        <p>STREAM</p>
                        <p className="infoValue">PCM</p>
                      </div>
                    </div>
                    <div className="supportingDetail">
                      <FaStar className="icon" />

                      <div>
                        <p>PERCENTAGE</p>
                        <p className="infoValue">95.4%</p>
                      </div>
                    </div>
                    <div className="supportingDetail">
                      <PiCertificate className="icon" />

                      <div>
                        <p>BOARD</p>
                        <p>CBSE</p>
                      </div>
                    </div>
                  </div>
                  <div className="highlightSection">
                   
                  
                    <ul className="xiiList">
                      <li className="xiiHighlightHeading">Highlights</li>
                      <li>
                    <FaTrophy/>
                       Among Top 12
                        Students in School
                      </li>
                    </ul>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="timelineDot"> </div>
              <div className="card XCard">
                {" "}
                <div className="headingSection">
                  <h3>Secondary&#40;Class X &#41;</h3>
                  <button className="badge">
                    <FaCircle className="dotIcon" />
                    Passed
                  </button>
                </div>
                <p className="institute">
                  <FaSchool /> Shiva Shiksha Sadan, Sonipat
                </p>
                <div className="subDetails">
                  <div className="supportingDetails">
                    <div className="supportingDetail">  <FaCalendarAlt className="icon" />
               
                    <div >
                      <p >DURATION</p>
                      <p className="infoValue">2019-2020</p>
                    </div></div>
                  
                    
              

                  <div className="supportingDetail">
                
                      <FaChartLine className="icon"/>
                  
                    <div>
                      <p className="heading">Percentage</p>
                      <p className="infoValue">83.4%</p>
                    </div>
                  </div>
                  <div className="supportingDetail">
                 
                      <PiCertificate  className="icon"/>
             
                    <div>
                      <p >Board</p>
                      <p  className="infoValue">CBSE</p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
