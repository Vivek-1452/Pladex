import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
// import logo from "./logoFocus.png";
import main from "./FocusImages/main.png";
import logo from "./FocusImages/logo.png";
import "./textScroll.css";
// import video1 from "./our mission video.mp4";
// import New from "./new.png";

function OurMission() {
  const [display, setdisplay] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setdisplay(true);
    }
  }, [display]);

  function hovering(num, id) {
    var x = document.getElementById(id);
    if (num === "0") {
      // x.className = "btn fs-5 px-3";
      x.style.backgroundColor = "whitesmoke";
      x.style.color = "black";
    } else {
      // x.className = "btn px-3";
      x.style.backgroundColor = "#3ad6ab";
      x.style.color = "white";
    }
  }

  return (
    <div
      className="pt-0"
      style={{
        backgroundColor: "#000000",
        // backgroundImage: `url(${main})`,
        color: "white",
        // backgroundPosition: "center",
      }}
    >
      <div className="container-fluid py-md-5 pt-0">
        {/* <h3
          className="position-relative top-0 start-0 bg-danger"
          style={{ width: "100px" }}
        >
          NEW
        </h3> */}
        {/* <div style={{ width: "250px" }}>
          <img src={New} alt="NEW" className="" height="50" width="200" />
        </div> */}
        <div className="row pt-md-3 py-md-5 pb-4 pt-2">
          <div
            className="col-md-8 mt-md-4 mt-2 ps-lg-5"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            {/* <h4 className="text-center fw-bold display-6 mb-3">
              Our{" "}
              <span className="text" style={{ color: "#3ad6ab" }}>
                Mission
              </span>
            </h4> */}
            <h1 className="fw-bold mt-3 mb-5">
              <center>
                <div
                  className=""
                  id="scroll-container"
                  style={display ? { width: "90%" } : { width: "70%" }}
                >
                  <div
                    id="scroll-text"
                    // style={{ display: "inline-block", width: "auto" }}
                  >
                    <span className="text" style={{ color: "#f6e7d8" }}>
                      FOCUS
                    </span>{" "}
                    <span className="text" style={{ color: "#ffbd59" }}>
                      O
                    </span>
                    <span className="text" style={{ color: "#da6220" }}>
                      NE
                    </span>{" "}
                    <span className="text" style={{ color: "#f6e7d8" }}>
                      STUDENTS
                    </span>
                  </div>
                </div>
              </center>
            </h1>
            <p className="mt-4 fs-6" style={{ fontFamily: "Product Sans" }}>
              A virtual event which mainly focuses on students across India. Our
              sole objective of this event is to create awareness among students
              through conducting interactive sessions by the influential
              speakers to improve the equity among students irrespective of
              their colleges and domains. Thereby, inspiring them to express
              their opinions openly and adapt to the society hence transforming
              for a better India.
              <br />
              <br />
              We conduct many competitions to bring out many hidden talents from
              students of India.
            </p>
            <Link to="/Focus" style={{ textDecoration: "none" }}>
              <button
                id="register"
                className="btn w-auto mx-auto px-4 my-4"
                onMouseOver={() => hovering("0", "register")}
                onMouseLeave={() => hovering("1", "register")}
                style={{ backgroundColor: "#3ad6ab", color: "white" }}
              >
                Register
              </button>
            </Link>
          </div>
          <div
            className="col-md-4 d-flex justify-content-center align-items-center"
            data-aos="zoom-out"
            data-aos-duration="2000"
          >
            {/* <video
              className="h-100 d-flex videoTag justify-content-center align-items-center mx-auto"
              autoPlay
              loop
              muted
              style={{ width: "90%" }}
            >
              <source src={video1} type="video/mp4" />
            </video> */}
            <center>
              <img
                src={logo}
                alt=""
                style={{
                  width: "80%",
                }}
              />
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMission;
