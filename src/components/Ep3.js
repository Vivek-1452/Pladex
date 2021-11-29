import React from "react";
import img from "./EventLibrary/pt-3.png";
import img1 from "./Podcast-amico.png";
import "./Ep.css";

function Ep3() {
  return (
    <>
      <div
        className="row py-3"
        style={{
          backgroundImage: "linear-gradient(180deg, #6dd2ae 0%, white 90%)",
        }}
      >
        <div className="row">
          <div className="col-lg-9 col-md-7 col-4 px-lg-0 px-md-0 ps-lg-4 ps-md-4 ps-1">
            <h1
              className="fw-bold ps-4 mt-lg-5 mt-2"
              style={{ textAlign: "left", marginBottom: "80px" }}
            >
              {/* The <span style={{ color: "#3ad6ab" }}>content</span> you consume{" "}
          defines you. */}
              Podium Talks
            </h1>
            <div className="d-lg-block d-md-block d-none">
              <h5 className="mt-5 mb-3 fw-light">
                Experience the live interaction with real life heroes.
              </h5>
              <a
                href="."
                className="btn mx-auto px-4 py-2 fs-4"
                style={{
                  backgroundColor: "#3ad6ab",
                  width: "auto",
                  color: "white",
                }}
              >
                {/* <i
                  className="fas fa-location-arrow"
                  style={{ color: "#3ad6ab" }}
                ></i>
                &nbsp;  */}
                Explore
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-5 col-8 pe-0">
            <img
              src={img1}
              alt=""
              style={{ height: "100%", width: "90%", float: "right" }}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid row py-5 bg-light mx-0">
        <h1 className="text-center display-5 fw-bold mt-3 mb-4">
          Episode{" "}
          <span className="text" style={{ color: "#3ad6ab" }}>
            3
          </span>
        </h1>
        <div className="col-lg-2"></div>
        <div className="col-lg-8 text-start">
          <div>
            <img
              className="mt-4 mb-5"
              src={img}
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <h2 className="fw-bold">Some sources to learn coding...</h2>
          <p>Mostly I have used Hyperlink, Interview-Bit.</p>
          <br />
          <h2 className="fw-bold">What is FactSet and her role?</h2>
          <p>
            FactSet is about financial Data analytics and stock markets. I
            wanted a friendly work atmosphere and knows a contract from start to
            end.
          </p>
          <br />
          <h2 className="fw-bold">
            Interview experience with FactSet & tips for freshers
          </h2>
          <p>When you are giving an interview, take the help of the</p>
          <br />
          <h2 className="fw-bold">
            What does a company expect from a student while hiring?
          </h2>
          <p>
            Who are passionate about their work, problem solver, logical
            thinker. Be a good communicator, confident and a problem solver.
          </p>
          <br />
          <h2 className="fw-bold">
            What was your interest and some insights about coding.
          </h2>
          <p>
            I am interested in robotics, so I choose EEE. After I started with
            robotics, this needed coding and my interest grown.
          </p>
          <br />
          <h2 className="fw-bold">
            What she learnt from exploring both core and code fields?
          </h2>
          <p>
            The things are like problem solving and mainly confused between
            coding or robotics. Be curious and explore.
          </p>
          <br />
          <h2 className="fw-bold">
            How to balance both co-curricular and academics?
          </h2>
          <p>
            I say that you have only one life so do what-ever I wanted or take
            the opportunity I get.  If you don’t have time to do works, decrease
            your social media time. That’s a good amount of time to work. That’s
            my mantra.
          </p>
          <br />
          <h2 className="fw-bold">How studying at NIT improved your skills?</h2>
          <p>Studying at NIT gave me confidence and got many opportunities.</p>
          <br />
          <h2 className="fw-bold">Why job over entrepreneurship?</h2>
          <p>
            I need more experience to start. When I will get enough knowledge I
            will do a startup.
          </p>
          <br />
          <h2 className="fw-bold">
            Is it a drawback to explore numerous career fields?
          </h2>
          <p>
            There are situations you are exploring everything but you are not
            best at one thing. But don’t stop your exploration. Things will be
            helpful in some other way.
          </p>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </>
  );
}

export default Ep3;
