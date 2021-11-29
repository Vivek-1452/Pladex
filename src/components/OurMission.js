import React from "react";
import { Link } from "react-router-dom";
import logo from "./logoFocus.png";
// import video1 from "./our mission video.mp4";
// import New from "./new.png";

function OurMission() {
  return (
    <React.Fragment>
      <div className="container-fluid pt-0">
        {/* <h3
          className="position-relative top-0 start-0 bg-danger"
          style={{ width: "100px" }}
        >
          NEW
        </h3> */}
        {/* <div style={{ width: "250px" }}>
          <img src={New} alt="NEW" className="" height="50" width="200" />
        </div> */}
        <div
          className="row pt-md-3 pt-1 pb-3"
          style={{ backgroundColor: "white" }}
        >
          <div
            className="col-md-8 mt-4 ps-lg-5"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            {/* <h4 className="text-center fw-bold display-6 mb-3">
              Our{" "}
              <span className="text" style={{ color: "#3ad6ab" }}>
                Mission
              </span>
            </h4> */}
            <h1 className="fw-bold mt-3 mb-4">
              <span className="text" style={{ color: "#444444" }}>
                FOCUS
              </span>{" "}
              <span className="text" style={{ color: "#ffbd59" }}>
                O
              </span>
              <span className="text" style={{ color: "#da6220" }}>
                NE
              </span>{" "}
              <span className="text" style={{ color: "#444444" }}>
                STUDENTS
              </span>
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
                className="btn w-auto mx-auto px-4 my-4"
                style={{ backgroundColor: "#3ad6ab", color: "white" }}
              >
                Explore
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
                  width: "90%",
                }}
              />
            </center>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default OurMission;
