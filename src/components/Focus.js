import React from "react";
import DocumentMeta from "react-document-meta";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Focus.css";
import EventSchedule from "./EventSchedule";
import CountFocusweb from "./CountFocusweb";
import CountFocusmob from "./CountFocusmob";
import main from "./FocusImages/main.png";
import main3 from "./FocusImages/main3.png";
import logo from "./FocusImages/logo.png";
import comp from "./FocusImages/comp.png";
// import comp1 from "./FocusImages/comp1.png";
// import comp2 from "./FocusImages/comp2.png";
import guest from "./FocusImages/guestTemp.jpg";
import speakers from "./FocusImages/mic.png";
import guestBg from "./FocusImages/guestBg.png";

AOS.init();

function Focus() {
  // const meta = {
  //   title: "Focus NExt India | Pladex",
  //   description:
  //     "A virtual event which mainly focuses on students across India. Our sole objective of this event is to create awareness among students through conducting interactive sessions by the influential speakers to improve the equity among students irrespective of their colleges and domains. Thereby, inspiring them to express their opinions openly and adapt to the society hence transforming for a better India.",
  //   // canonical: "http://example.com/path/to/page",
  //   meta: {
  //     charset: "utf-8",
  //     name: {
  //       keywords:
  //         "focus,north east india,pladex,north,east,india,north east,students,objective",
  //     },
  //   },
  // };

  const [display, setdisplay] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setdisplay(true);
    }
  }, [display]);

  return (
    <>
      <div
        className="row py-md-5 py-3 px-1"
        style={{ backgroundImage: `url(${main})`, color: "whitesmoke" }}
      >
        <div className="mx-auto pb-5 pt-2" style={{ width: "auto" }}>
          <h3 className="fw-bold pb-2">18 - 24 DECEMBER 2021</h3>
          <hr
            style={{
              height: "4px",
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0), #3ad6ab, rgba(0, 0, 0, 0))",
              marginTop: "0",
            }}
          />
          <div className="mx-auto pb-4 pt-3" style={{ maxWidth: "400px" }}>
            <img src={logo} alt="logo" style={{ width: "90%" }} />
          </div>
          <hr
            style={{
              height: "4px",
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0), #3ad6ab, rgba(0, 0, 0, 0))",
              marginTop: "0",
            }}
          />
          <h4 className="fw-light py-2">
            FOR NORTH-EAST STUDENTS – GROW WITH US!
          </h4>
          <Link to="/FocusReg">
            <button
              id="reg"
              className="button1 btn w-auto mx-auto mt-5 mb-3 py-2 px-3 fs-5"
              style={{
                color: "white",
                border: "1px solid white",
                borderRadius: "10px",
              }}
            >
              Register Now
            </button>
          </Link>
          <br />
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
          {/* <button
            id="team"
            className="button3 btn w-auto ms-4 me-3 my-2 py-2"
            style={{
              color: "white",
              border: "1px solid white",
              borderRadius: "10px",
            }}
          >
            <i class="fas fa-users"> </i> Team FOCUS
          </button> */}
          <Link to="/FocusCompReg">
            <button
              id="part"
              className="button4 btn w-auto mx-3 my-2 py-2"
              style={{
                color: "white",
                border: "1px solid white",
                borderRadius: "10px",
              }}
            >
              <i class="far fa-lightbulb"> </i> Competition registration
            </button>
          </Link>
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
      <div style={{ backgroundImage: `url(${main3})`, color: "white" }}>
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
              North eastern India is one of the most culturally diverse regions
              in the world. Despite its advantages, the North eastern regions
              are categorized as one of the backward regions of India, due to
              low quality education, inadequate infrastructure facilities,
              geographical isolation, low per-capita income, lack of private
              investment etc. inducing a huge impact on youth. So, through this
              event, we are determined to be a part of the change which brings
              evolution among students.
            </p>
          </div>
        </div>
      </div>
      <EventSchedule />
      <div style={{ backgroundImage: `url(${comp})`, color: "white" }}>
        <div className="container py-lg-5 py-4">
          <div className="row px-lg-5 py-5">
            {/* <h1 className="display-5 fw-bold mb-3">
              <span className="text" style={{ color: "#3ad6ab" }}>
                THEME
              </span>
            </h1> */}
            <h4 className="text-center fw-bold display-6 mt-3 mb-5">
              {/* EVENT{" "} */}
              <span className="text" style={{ color: "#3ad6ab" }}>
                COMPETITIONS
              </span>
            </h4>
            <div
              className="col-md-5 my-3 my-md-5 text-start"
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
              {/* <button
                className="btn float-end opacity-75 me-5"
                style={{ backgroundColor: "#9ffeff" }}
              >
                Register
              </button> */}
            </div>
            <div className="col-md-2"></div>
            <div
              className="col-md-5 my-3 my-md-5 text-end"
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
              {/* <button
                className="btn float-start opacity-75 ms-5"
                style={{ backgroundColor: "#e69138" }}
              >
                Register
              </button> */}
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
                Students who are into stories, poems or any kind of writings can
                improve themselves by taking part in this contest.
              </p>
              {/* <button
                className="btn float-end opacity-75 me-5"
                style={{ backgroundColor: "#ddeecc" }}
              >
                Register
              </button> */}
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
              {/* <button
                className="btn float-start opacity-75 ms-5"
                style={{ backgroundColor: "#ddaa77" }}
              >
                Register
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundImage: `url(${guestBg})`, color: "white" }}>
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
                  ABCD
                </span>{" "}
                and{" "}
                <span className="text fs-1" style={{ color: "#f6e7d8" }}>
                  NOPQ
                </span>
              </h2>
              <br />
              <p className="fs-4">
                On 26th December, Sunday - Winners will be announced and
                rewarded by our honourable guest.
              </p>
            </div>
            <div
              className="col-md-4 my-4"
              data-aos="zoom-out-down"
              data-aos-duration="2500"
            >
              <center>
                <img
                  src={guest}
                  alt="Chief guest"
                  style={{ borderRadius: "50%", width: "90%", height: "90%" }}
                />
              </center>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundImage: `url(${speakers})`, color: "white" }}>
        <div className="container py-4">
          <div className="row pt-3 pb-5">
            <h4 className="text-center fw-bold display-6 mt-3 mb-5">
              OUR{" "}
              <span className="text" style={{ color: "#3ad6ab" }}>
                SPEAKERS
              </span>
            </h4>
            <div className="row">
              <div
                className="col-lg-3 col-md-6 px-4 my-5"
                data-aos="zoom-out-down"
                data-aos-duration="2000"
              >
                <div
                  className="bg-opacity-75 bg-light text-black pt-3 m-2"
                  style={{ borderRadius: "10px" }}
                >
                  <img
                    src={guest}
                    alt="Speaker 1"
                    width="175"
                    height="175"
                    style={{
                      borderRadius: "50%",
                      position: "relative",
                      top: "-75px",
                    }}
                  />
                  <div
                    style={{
                      position: "relative",
                      top: "-40px",
                    }}
                  >
                    <h4 className="fw-bold mt-0">VIVEK PAIDI 1</h4>
                    <h5 className="fw-light mt-4">
                      ENTREPRENEURSHIP & BRAND BUILDING
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 px-4 my-5"
                style={{ borderRadius: "10px" }}
                data-aos="zoom-out-down"
                data-aos-duration="2000"
              >
                <div
                  className="bg-opacity-75 bg-light text-black pt-3 m-2"
                  style={{ borderRadius: "10px" }}
                >
                  <img
                    src={guest}
                    alt="Speaker 1"
                    width="175"
                    height="175"
                    style={{
                      borderRadius: "50%",
                      position: "relative",
                      top: "-75px",
                    }}
                  />
                  <div
                    style={{
                      position: "relative",
                      top: "-40px",
                    }}
                  >
                    <h4 className="fw-bold mt-0">VIVEK PAIDI 2</h4>
                    <h5 className="fw-light mt-4">
                      ENTREPRENEURSHIP & BRAND BUILDING
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 px-4 my-5"
                data-aos="zoom-out-down"
                data-aos-duration="2000"
              >
                <div
                  className="bg-opacity-75 bg-light text-black pt-3 m-2"
                  style={{ borderRadius: "10px" }}
                >
                  <img
                    src={guest}
                    alt="Speaker 1"
                    width="175"
                    height="175"
                    style={{
                      borderRadius: "50%",
                      position: "relative",
                      top: "-75px",
                    }}
                  />
                  <div
                    style={{
                      position: "relative",
                      top: "-40px",
                    }}
                  >
                    <h4 className="fw-bold mt-0">VIVEK PAIDI 3</h4>
                    <h5 className="fw-light mt-4">
                      ENTREPRENEURSHIP & BRAND BUILDING
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 px-4 my-5"
                data-aos="zoom-out-down"
                data-aos-duration="2000"
              >
                <div
                  className="bg-opacity-75 bg-light text-black pt-3 m-2"
                  style={{ borderRadius: "10px" }}
                >
                  <img
                    src={guest}
                    alt="Speaker 1"
                    width="175"
                    height="175"
                    style={{
                      borderRadius: "50%",
                      position: "relative",
                      top: "-75px",
                    }}
                  />
                  <div
                    style={{
                      position: "relative",
                      top: "-40px",
                    }}
                  >
                    <h4 className="fw-bold mt-0">VIVEK PAIDI 4</h4>
                    <h5 className="fw-light mt-4">
                      ENTREPRENEURSHIP & BRAND BUILDING
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-1"></div>
              <div
                className="col-lg-3 col-md-6 px-4  mt-5 mb-3 ms-lg-5"
                data-aos="zoom-out-up"
                data-aos-duration="2000"
              >
                <div
                  className="bg-opacity-75 bg-light text-black pt-3 m-2"
                  style={{ borderRadius: "10px" }}
                >
                  <img
                    src={guest}
                    alt="Speaker 1"
                    width="175"
                    height="175"
                    style={{
                      borderRadius: "50%",
                      position: "relative",
                      top: "-75px",
                    }}
                  />
                  <div
                    style={{
                      position: "relative",
                      top: "-40px",
                    }}
                  >
                    <h4 className="fw-bold mt-0">VIVEK PAIDI 5</h4>
                    <h5 className="fw-light mt-4">
                      ENTREPRENEURSHIP & BRAND BUILDING
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 px-4 mt-5 mb-3"
                data-aos="zoom-out-up"
                data-aos-duration="2000"
              >
                <div
                  className="bg-opacity-75 bg-light text-black pt-3 m-2"
                  style={{ borderRadius: "10px" }}
                >
                  <img
                    src={guest}
                    alt="Speaker 1"
                    width="175"
                    height="175"
                    style={{
                      borderRadius: "50%",
                      position: "relative",
                      top: "-75px",
                    }}
                  />
                  <div
                    style={{
                      position: "relative",
                      top: "-40px",
                    }}
                  >
                    <h4 className="fw-bold mt-0">VIVEK PAIDI 6</h4>
                    <h5 className="fw-light mt-4">
                      ENTREPRENEURSHIP & BRAND BUILDING
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-none d-md-block d-lg-none"></div>
              <div
                className="col-lg-3 col-md-6 px-4 mt-5 mb-3"
                data-aos="zoom-out-up"
                data-aos-duration="2000"
              >
                <div
                  className="bg-opacity-75 bg-light text-black pt-3 m-2"
                  style={{ borderRadius: "10px" }}
                >
                  <img
                    src={guest}
                    alt="Speaker 1"
                    width="175"
                    height="175"
                    style={{
                      borderRadius: "50%",
                      position: "relative",
                      top: "-75px",
                    }}
                  />
                  <div
                    style={{
                      position: "relative",
                      top: "-40px",
                    }}
                  >
                    <h4 className="fw-bold mt-0">VIVEK PAIDI 7</h4>
                    <h5 className="fw-light mt-4">
                      ENTREPRENEURSHIP & BRAND BUILDING
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-none d-md-block d-lg-none"></div>
              <div className="col-lg-1"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Focus;
