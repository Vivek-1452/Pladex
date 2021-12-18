import React from "react";
// import DocumentMeta from "react-document-meta";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Foot2 from "./foot2";
import Navnew from "./Navnew";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Focus.css";
import "./textScroll2.css";
import EventSchedule from "./EventSchedule";
import CountFocusweb from "./CountFocusweb";
import CountFocusmob from "./CountFocusmob";
import FocusSponsors from "./FocusSponsors";
import FocusSponsMob from "./FocusSponsMob";
import FocusPartners from "./FocusPartners";
import FocusPartnMob from "./FocusPartnMob";
import main from "./FocusImages/main.png";
import main3 from "./FocusImages/main3.png";
import logo from "./FocusImages/logo.png";
import comp from "./FocusImages/compF.png";
// import comp1 from "./FocusImages/comp1.png";
// import comp2 from "./FocusImages/comp2.png";
import guest from "./FocusImages/guestTemp.jpg";
import speakers from "./FocusImages/mic.png";
import guestBg from "./FocusImages/guestBg.png";
import speaker1 from "./FocusImages/speaker1.png";
import speaker2 from "./FocusImages/speaker2.png";
import speaker3 from "./FocusImages/speaker3.png";
import speaker4 from "./FocusImages/speaker4.png";
import speaker5 from "./FocusImages/speaker5.png";
import speaker6 from "./FocusImages/speaker6.png";
import speaker7 from "./FocusImages/speaker7.png";
import cheifSpeaker from "./FocusImages/cheifSpeaker.png";

AOS.init();

function Focus() {
  // const [error, setError] = useState(null);

  const [loginauth, setloginauth] = useState(false);

  const loginhandler = () => {
    setloginauth(true);
  };

  const [display, setdisplay] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setdisplay(true);
    }
  }, [display]);

  return (
    <>
      <Navnew logincheck={loginauth} loginhandler={loginhandler} />
      <div className="pt-0" style={{ width: "100vw" }}>
        <div
          className="row py-md-5 py-3 px-1 mx-0"
          style={{
            backgroundImage: `url(${main})`,
            color: "whitesmoke",
            maxWidth: "100vw",
          }}
        >
          <div className="mx-auto pb-5 pt-2" style={{ width: "auto" }}>
            <h3 className="fw-bold pb-2">15 - 26 DECEMBER 2021</h3>
            <center>
              <hr
                style={{
                  height: "4px",
                  width: "80%",
                  background:
                    "linear-gradient(to right, rgba(0, 0, 0, 0), #3ad6ab, rgba(0, 0, 0, 0))",
                  marginTop: "0",
                }}
              />
            </center>
            <div className="mx-auto pb-4 pt-3" style={{ maxWidth: "400px" }}>
              <img src={logo} alt="logo" style={{ width: "70%" }} />
            </div>
            <center>
              <hr
                style={{
                  height: "4px",
                  width: "80%",
                  background:
                    "linear-gradient(to right, rgba(0, 0, 0, 0), #3ad6ab, rgba(0, 0, 0, 0))",
                  marginTop: "0",
                }}
              />
            </center>
            <h4 className="fw-light py-2">
              FOR NORTH-EAST STUDENTS – GROW WITH US!
            </h4>
            <h2 className="fw-bold mt-3 mb-1">
              <center>
                <div
                  className=""
                  id="scroll-container"
                  style={display ? { width: "90%" } : { width: "100%" }}
                >
                  <div id="scroll-text">
                    Competition registrations and submissions are extended upto{" "}
                    <span style={{ color: "#ffbd59" }}>24th</span>{" "}
                    <span style={{ color: "#da6220" }}>December</span>.
                  </div>
                </div>
              </center>
            </h2>
            <Link
              to={{
                pathname: "/CheckRegister",
                state: "eventReg",
              }}
            >
              {/* <a href="./FocusReg"> */}
              <button
                id="reg"
                className="button1 btn w-auto mx-auto ms-md-3 ms-0 mt-5 mb-3 py-2 px-3 fs-5"
                style={{
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "10px",
                }}
              >
                <i class="far fa-calendar-check"> </i> Register Now
              </button>
              {/* </a> */}
            </Link>
            <br />
            <a
              href="https://bit.ly/3opHcwM"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button
                id="bro"
                className="button2 btn w-auto ms-sm-5 ms-0 my-2 py-2"
                style={{
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "10px",
                }}
              >
                <i class="fas fa-cloud-download-alt"> </i> Download Brochure
              </button>
            </a>
            <Link
              to={{
                pathname: "/CheckReg",
                state: "compReg",
              }}
            >
              <button
                id="part"
                className="button4 btn w-auto mx-3 my-2 py-2"
                style={{
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "10px",
                }}
              >
                <i class="far fa-lightbulb"> </i> Competition Registration
              </button>
            </Link>

            <a
              href="https://forms.gle/PVQwCfqi4bUryPPfA"
              target="_blank"
              rel="noreferrer"
            >
              <button
                id="team"
                className="button3 btn w-auto me-3 ms-4 ms-md-0 ms-lg-0 my-2 py-2"
                style={{
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "10px",
                }}
              >
                <i class="fas fa-users"> </i> Campus Ambassador
              </button>
            </a>
          </div>
          {/* <div className="row">
          <button
            className="btn w-auto mx-auto"
            style={{
              color: "white",
              border: "1px solid white",
              borderRadius: "10px",
            }}
          >
            Register Now
          </button>
        </div> */}
        </div>
        {display ? <CountFocusmob /> : <CountFocusweb />}
        <div
          style={{
            backgroundImage: `url(${main3})`,
            color: "white",
            overflowX: "hidden",
          }}
        >
          <div className="container py-lg-5 py-4">
            <div
              className="row px-lg-5 py-5 text-start"
              data-aos="zoom-in-left"
              data-aos-duration="2500"
            >
              <h1 className="display-5 fw-bold mb-3">
                <span className="text" style={{ color: "#3ad6ab" }}>
                  THEME
                </span>
              </h1>
              <h2 className="fw-bold mt-3 mb-4">
                <span className="text" style={{ color: "#f6e7d8" }}>
                  FOCUS
                </span>{" "}
                <span className="text" style={{ color: "#ffbd59 " }}>
                  O
                </span>
                <span className="text" style={{ color: "#da6220 " }}>
                  NE
                </span>{" "}
                <span className="text" style={{ color: "#f6e7d8" }}>
                  STUDENTS
                </span>
              </h2>
              <br />
              <p className="fs-4">
                The first phase of this event mainly focalizes on NORTH EASTERN
                parts of India.
              </p>
              <br />
              <p className="fs-5">
                North eastern India is one of the most culturally diverse
                regions in the world. Despite its advantages, the North eastern
                regions are categorized as one of the backward regions of India,
                due to low quality education, inadequate infrastructure
                facilities, geographical isolation, low per-capita income, lack
                of private investment etc. inducing a huge impact on youth. So,
                through this event, we are determined to be a part of the change
                which brings evolution among students.
              </p>
            </div>
          </div>
        </div>
        <EventSchedule />
        <div
          style={{
            backgroundImage: `url(${comp})`,
            color: "white",
            overflowX: "hidden",
          }}
        >
          <div className="container py-lg-5 py-4">
            <div className="row px-lg-5 pb-5 pt-3">
              {/* <h1 className="display-5 fw-bold mb-3">
              <span className="text" style={{ color: "#3ad6ab" }}>
                THEME
              </span>
            </h1> */}
              <h4 className="text-center fw-bold display-6 mb-5">
                {/* EVENT{" "} */}
                <span className="text" style={{ color: "#3ad6ab" }}>
                  COMPETITIONS
                </span>
              </h4>
              <div
                className="col-md-5 my-3 mb-md-5 text-start"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <h2 className="fw-bold mt-3 mb-4">
                  <span className="text" style={{ color: "#f6e7d8" }}>
                    CAMPUS ARTS
                  </span>
                </h2>
                <br />
                <p className="fs-4">
                  Students who are passionate about arts can showcase their work
                  by participating in this contest.
                </p>
                <a
                  href="https://bit.ly/3lDj7kc"
                  target="_blank"
                  rel="noreferrer"
                  className="btn float-end opacity-75 me-5"
                  style={{ backgroundColor: "#9ffeff" }}
                >
                  Rule Book
                </a>
              </div>
              <div className="col-md-2"></div>
              <div
                className="col-md-5 my-3 mb-md-5 text-end"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <h2 className="fw-bold mt-3 mb-4">
                  <span className="text" style={{ color: "#f6e7d8" }}>
                    CAMPUS GALLERY
                  </span>
                </h2>
                <br />
                <p className="fs-4">
                  Students who are interested in photography can display their
                  masterpieces by participating in this contest.
                </p>
                <a
                  href="https://bit.ly/3lDj7kc"
                  target="_blank"
                  rel="noreferrer"
                  className="btn float-start opacity-75 ms-5"
                  style={{ backgroundColor: "#e69138" }}
                >
                  Rule Book
                </a>
              </div>
              <div
                className="col-md-5 my-3 my-md-5 text-start"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <h2 className="fw-bold mt-3 mb-4">
                  <span className="text" style={{ color: "#f6e7d8" }}>
                    CAMPUS WRITINGS
                  </span>
                </h2>
                <br />
                <p className="fs-4">
                  Students who are into stories, poems or any kind of writings
                  can improve themselves by taking part in this contest.
                </p>
                <a
                  href="https://bit.ly/3lDj7kc"
                  target="_blank"
                  rel="noreferrer"
                  className="btn float-end opacity-75 me-5"
                  style={{ backgroundColor: "#ddeecc" }}
                >
                  Rule Book
                </a>
              </div>
              <div className="col-md-2"></div>
              <div
                className="col-md-5 my-3 my-md-5 text-end"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <h2 className="fw-bold mt-3 mb-4">
                  <span className="text" style={{ color: "#f6e7d8" }}>
                    CAMPUS SPEAKS
                  </span>
                </h2>
                <br />
                <p className="fs-4">
                  {/* This contest is something unique when compared to all above. */}
                  This focuses on the ideas/solutions that students can come up
                  with, for any problems faced by many students in North-east
                  India.
                </p>
                <a
                  href="https://bit.ly/3lDj7kc"
                  target="_blank"
                  rel="noreferrer"
                  className="btn float-start opacity-75 ms-5"
                  style={{ backgroundColor: "#ddaa77" }}
                >
                  Rule Book
                </a>
              </div>
              <div
                className="col-md-5 my-3 my-md-5 text-start"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <h2 className="fw-bold mt-3 mb-4">
                  <span className="text" style={{ color: "#f6e7d8" }}>
                    CAMPUS ACTS
                  </span>
                </h2>
                <br />
                <p className="fs-4">
                  Students who are fascinated about acting including Mono acts,
                  dancing, singing, stand up comedy or mimicry can show off
                  themselves through this contest.
                </p>
                <a
                  href="https://bit.ly/3lDj7kc"
                  target="_blank"
                  rel="noreferrer"
                  className="btn float-end opacity-75 me-5"
                  style={{ backgroundColor: "#ffd966" }}
                >
                  Rule Book
                </a>
              </div>
              <div className="col-md-2"></div>
              <div
                className="col-md-5 my-3 my-md-5 text-end"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <h2 className="fw-bold mt-3 mb-4">
                  <span className="text" style={{ color: "#f6e7d8" }}>
                    CAMPUS POSES
                  </span>
                </h2>
                <br />
                <p className="fs-4">
                  Students who have the key roles played by their favorite
                  actors can recreate the same look and participate in this
                  contest.
                </p>
                <a
                  href="https://bit.ly/3lDj7kc"
                  target="_blank"
                  rel="noreferrer"
                  className="btn float-start opacity-75 ms-5"
                  style={{ backgroundColor: "#6fa8dc" }}
                >
                  Rule Book
                </a>
              </div>
              <Link
                to={{
                  pathname: "/CheckReg",
                  state: "compReg",
                }}
              >
                <button
                  id="part"
                  className="button5 btn w-auto mt-5 py-2"
                  style={{
                    color: "white",
                    backgroundColor: "#3ad6ab",
                    border: "1px solid #3ad6ab",
                    borderRadius: "10px",
                  }}
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                >
                  <i class="far fa-lightbulb"> </i> Competition Registration
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${guestBg})`,
            color: "white",
            overflowX: "hidden",
          }}
        >
          <div className="container py-lg-5 py-4">
            <div className="row px-lg-5 py-5 text-start">
              <div
                className="col-md-8 my-4"
                data-aos="zoom-in-right"
                data-aos-duration="2000"
              >
                <h1 className="display-5 fw-bold mb-3">
                  OUR{" "}
                  <span className="text" style={{ color: "#3ad6ab" }}>
                    CHIEF GUEST
                  </span>
                </h1>
                <h2 className="fw-bold mt-3 mb-4">
                  <span className="text fs-1" style={{ color: "#f6e7d8" }}>
                    ABHI
                  </span>{" "}
                  <span className="text" style={{ color: "#da6220" }}>
                    &
                  </span>{" "}
                  <span className="text fs-1" style={{ color: "#f6e7d8" }}>
                    NIYU
                  </span>
                </h2>
                <br />
                <p className="fs-4">
                  {/* The closing ceremony will be held on{" "}
                  <span className="text" style={{ color: "#ffbd59 " }}>
                    26th December at 6PM{" "}
                  </span>
                  where the chief guest will be gracing our event and would give
                  us some insights regarding{" "}
                  <span className="text" style={{ color: "#da6220 " }}>
                    North East India
                  </span>{" "}
                  and also the winners of all the competitions will be announced
                  by them. */}
                  {/* On 26th December, Sunday - Winners will be announced and
                rewarded by our honourable guest. */}
                  Abhiraj and Niyati are one of the most influential content
                  creators who put forth heart warming stories of change and
                  inspiration across India. They, have been trying to fight for
                  north eastern people, will be gracing our event with their
                  insights on{" "}
                  <span style={{ color: "#ffbd59 " }}>
                    26th December at 6:07 PM
                  </span>{" "}
                  as the special guest.
                </p>
              </div>
              <div
                className="col-md-4 my-4"
                data-aos="zoom-out-down"
                data-aos-duration="2500"
              >
                <center>
                  <img
                    src={cheifSpeaker}
                    alt="Chief guest"
                    style={{ borderRadius: "50%", width: "90%", height: "90%" }}
                  />
                </center>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${speakers})`,
            color: "white",
            overflow: "hidden",
          }}
        >
          <div className="container py-4">
            <div className="row pt-3 pb-5">
              <h4 className="text-center fw-bold display-6 mt-3 mb-5">
                OUR{" "}
                <span className="text" style={{ color: "#3ad6ab" }}>
                  SPEAKERS
                </span>
              </h4>
              <div className="row mt-3">
                <div
                  className="col-lg-3 col-md-6 px-4 my-3"
                  data-aos="zoom-out-down"
                  data-aos-duration="2000"
                >
                  <div
                    className="bg-opacity-75 bg-light text-black pt-3 m-2"
                    style={{ borderRadius: "10px" }}
                  >
                    <a
                      href="https://www.linkedin.com/in/markstoneinspires"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={speaker1}
                        alt="Speaker 1"
                        width="175"
                        height="175"
                        style={{
                          borderRadius: "50%",
                          position: "relative",
                          top: "-75px",
                        }}
                      />
                    </a>
                    <div
                      style={{
                        position: "relative",
                        top: "-40px",
                      }}
                    >
                      <h4 className="fw-bold mt-0">MARK LAITFLANG STONE</h4>
                      <h5 className="fw-light mt-4">
                        ENTREPRENEURSHIP & BRAND BUILDING
                      </h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 px-4 my-md-3 mt-5 mb-3"
                  data-aos="zoom-out-down"
                  data-aos-duration="2000"
                >
                  <div
                    className="bg-opacity-75 bg-light text-black pt-3 m-2"
                    style={{ borderRadius: "10px" }}
                  >
                    <a
                      href="https://www.linkedin.com/in/simihanspal"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={speaker3}
                        alt="Speaker 3"
                        width="175"
                        height="175"
                        style={{
                          borderRadius: "50%",
                          position: "relative",
                          top: "-75px",
                        }}
                      />
                    </a>
                    <div
                      style={{
                        position: "relative",
                        top: "-40px",
                      }}
                    >
                      <h4 className="fw-bold mt-0">SIMI HANSPAL</h4>
                      <h5 className="fw-light my-5">
                        MENTAL HEALTH & WELL-BEING
                      </h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 px-4 my-3"
                  style={{ borderRadius: "10px" }}
                  data-aos="zoom-out-down"
                  data-aos-duration="2000"
                >
                  <div
                    className="bg-opacity-75 bg-light text-black pt-3 m-2"
                    style={{ borderRadius: "10px" }}
                  >
                    <a
                      href="https://www.linkedin.com/in/priyankaspace"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={speaker2}
                        alt="Speaker 2"
                        width="175"
                        height="175"
                        style={{
                          borderRadius: "50%",
                          position: "relative",
                          top: "-75px",
                        }}
                      />
                    </a>
                    <div
                      style={{
                        position: "relative",
                        top: "-40px",
                      }}
                    >
                      <h4 className="fw-bold mt-0">PRIYANKA DAS RAJKAKATI</h4>
                      <h5 className="fw-light my-5">WOMEN EMPOWERMENT</h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 px-4 my-3"
                  data-aos="zoom-out-down"
                  data-aos-duration="2000"
                >
                  <div
                    className="bg-opacity-75 bg-light text-black pt-3 m-2"
                    style={{ borderRadius: "10px" }}
                  >
                    <a
                      href="https://www.linkedin.com/in/dr-siddhartha-ghosh-ba019016"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={speaker4}
                        alt="Speaker 4"
                        width="175"
                        height="175"
                        style={{
                          borderRadius: "50%",
                          position: "relative",
                          top: "-75px",
                        }}
                      />
                    </a>
                    <div
                      style={{
                        position: "relative",
                        top: "-40px",
                      }}
                    >
                      <h4 className="fw-bold mt-0">Dr. SIDDHARTHA GHOSH</h4>
                      <h5 className="fw-light my-5">EMERGING TECHNOLOGIES</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-1"></div>
                <div
                  className="col-lg-3 col-md-6 px-4 my-3 ms-lg-5"
                  data-aos="zoom-out-up"
                  data-aos-duration="2000"
                >
                  <div
                    className="bg-opacity-75 bg-light text-black pt-3 m-2"
                    style={{ borderRadius: "10px" }}
                  >
                    <a
                      href="https://www.linkedin.com/in/hasinakharbhih"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={speaker5}
                        alt="Speaker 5"
                        width="175"
                        height="175"
                        style={{
                          borderRadius: "50%",
                          position: "relative",
                          top: "-75px",
                        }}
                      />
                    </a>
                    <div
                      style={{
                        position: "relative",
                        top: "-40px",
                      }}
                    >
                      <h4 className="fw-bold mt-0">HASINA KHARBHIH</h4>
                      <h5 className="fw-light mt-4">
                        TACKLING HUMAN TRAFFICKING & SELF DEFENSE
                      </h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 px-4 my-md-3 my-5"
                  data-aos="zoom-out-up"
                  data-aos-duration="2000"
                >
                  <div
                    className="bg-opacity-75 bg-light text-black pt-3 m-2"
                    style={{ borderRadius: "10px" }}
                  >
                    <a
                      href="https://www.linkedin.com/in/shikhar-prajapati-motivational-speaker-corporate-trainer-b72a3582"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={speaker6}
                        alt="Speaker 6"
                        width="175"
                        height="175"
                        style={{
                          borderRadius: "50%",
                          position: "relative",
                          top: "-75px",
                        }}
                      />
                    </a>
                    <div
                      style={{
                        position: "relative",
                        top: "-40px",
                      }}
                    >
                      <h4 className="fw-bold mt-0">SHIKHAR PRAJAPATI</h4>
                      <h5 className="fw-light mt-4 px-1">
                        SOFT SKILLS & PERSONALITY DEVELOPMENT
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-none d-md-block d-lg-none"></div>
                <div
                  className="col-lg-3 col-md-6 px-4 my-3"
                  data-aos="zoom-out-up"
                  data-aos-duration="2000"
                >
                  <div
                    className="bg-opacity-75 bg-light text-black pt-3 m-2"
                    style={{ borderRadius: "10px" }}
                  >
                    <a
                      href="https://www.linkedin.com/in/aditya-trivedi-nlu-assam"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={speaker7}
                        alt="Speaker 7"
                        width="175"
                        height="175"
                        style={{
                          borderRadius: "50%",
                          position: "relative",
                          top: "-75px",
                        }}
                      />
                    </a>
                    <div
                      style={{
                        position: "relative",
                        top: "-40px",
                      }}
                    >
                      <h4 className="fw-bold mt-0">ADITYA TRIVEDI</h4>
                      <h5 className="fw-light my-5">BASIC LAWS AND RIGHTS</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-none d-md-block d-lg-none"></div>
                <div className="col-lg-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {display ? <FocusSponsMob /> : <FocusSponsors />} */}
      {display ? <FocusPartnMob /> : <FocusPartners />}
      <Foot2 />
    </>
  );
}

export default Focus;
