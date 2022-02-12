import React from "react";
import { useState } from "react";
import Foot2 from "./foot2";
import Navnew from "./Navnew";
import imgabout from "./ImgJoinUss.png";
import img1 from "./Podcast-amico.png";
import img2 from "./JoinusImg/joinusImg2.png";
import img3 from "./JoinusImg/joinusImg3.png";
import img4 from "./JoinusImg/joinusImg4.png";
import img5 from "./JoinusImg/joinusImg5.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

AOS.init();

function JoinUs() {
  const [loginauth, setloginauth] = useState(false);

  const loginhandler = () => {
    setloginauth(true);
  };

  // window.onload = function () {
  //   var a = document.getElementById("img1");
  //   // var x = window.innerWidth;
  //   var x = Screen.width;
  //   if (x < "768px") {
  //     a.style.height = "100%";
  //     a.style.width = "100%";
  //   } else {
  //     a.style.height = "90%";
  //     a.style.width = "60%";
  //   }
  // };

  function hovering(num, id) {
    var x = document.getElementById(id);
    if (num === "0") {
      // x.className = "btn fs-5 px-3";
      x.style.backgroundColor = "black";
    } else {
      // x.className = "btn px-3";
      x.style.backgroundColor = "#3ad6ab";
    }
  }

  return (
    <>
      <Navnew logincheck={loginauth} loginhandler={loginhandler} prop1="join" />
      <div className="container-fluid pt-0">
        <div
          className="row py-3"
          style={{
            backgroundImage: "linear-gradient(180deg, #6dd2ae 0%, white 90%)",
          }}
        >
          <div className="row">
            <div className="col-lg-9 col-md-7 col-5 px-lg-0 px-md-0 ps-lg-4 ps-md-4 ps-1">
              <h1
                className="fw-bold ps-4 mt-lg-4 mt-2"
                style={{ textAlign: "left", marginBottom: "60px" }}
              >
                {/* The <span style={{ color: "#3ad6ab" }}>content</span> you consume{" "}
          defines you. */}
                Join Us
              </h1>
              <div className="d-lg-block d-md-block d-none pt-1">
                <h5 className="mt-5 mb-3" style={{ fontFamily: "cursive" }}>
                  Success is a decision. Join us and grow along towards success.
                </h5>
                {/* <a
                href="."
                className="btn mx-auto px-4 py-2 fs-4"
                style={{
                  backgroundColor: "#25d366",
                  width: "auto",
                  color: "white",
                }}
              >
                <i className="fab fa-whatsapp fs-3"></i>&nbsp; Get notified
              </a> */}
              </div>
            </div>

            <div className="col-lg-3 col-md-5 col-7 pe-0">
              <img
                src={imgabout}
                alt=""
                style={{ height: "100%", width: "80%", float: "right" }}
              />
            </div>
          </div>
        </div>
        {/* <h4 className="text-center fw-bold display-6 my-4">
        Join{" "}
        <span className="text" style={{ color: "#3ad6ab" }}>
          Us
        </span>
      </h4> */}

        <div className="row pb-5" style={{ overflowX: "hidden" }}>
          <div
            className="col-md-7"
            data-aos="zoom-in-right"
            data-aos-duration="2500"
          >
            <h4 className="text-center display-6 mt-3 mb-5 fw-bold">
              <span className="text" style={{ color: "#3ad6ab" }}>
                Collaborate
              </span>{" "}
              With Us
            </h4>
            <h6 className="fw-bold" style={{ fontFamily: "cursive" }}>
              Coming together is a Beginning, Staying together is Progress and
              Working together is Success
            </h6>
            <br />
            <p style={{ marginBottom: "35px" }}>
              PLADEX is the hub where students come, connect and explore. Our
              motto is to push and provide every student to become warriors in
              their respective field without taking a single penny. Build
              effective collaboration with PLADEX to revolutionize digital
              education world. Come , let’s grow and make this beautiful dream a
              reality together. <strong>INTERESTED ?</strong>
            </p>
            <h4>To affiliate with us</h4>
            <br />
            <a
              href="https://forms.gle/Xbj8ZwDMMt1GRhQM7"
              target="_blank"
              rel="noreferrer"
            >
              <button
                id="btn2"
                className="btn px-3"
                onMouseOver={() => hovering("0", "btn2")}
                onMouseLeave={() => hovering("1", "btn2")}
                style={{ backgroundColor: "#3ad6ab", color: "white" }}
              >
                Join Us
              </button>
            </a>
          </div>
          <div
            className="col-md-5 d-flex h-100 justify-content-center align-self-center"
            data-aos="zoom-in-left"
            data-aos-duration="2500"
          >
            <img
              id="img2"
              src={img2}
              alt="About Us"
              style={{ height: "90%", width: "60%" }}
            />
          </div>
        </div>

        {/*team up */}

        <div
          className="row pb-5"
          style={{ backgroundColor: "azure", overflowX: "hidden" }}
        >
          <h4 className="text-center display-6 mt-3 mb-5 d-md-none d-lg-none fw-bold">
            <span className="text" style={{ color: "#3ad6ab" }}>
              Team
            </span>{" "}
            Up
          </h4>
          <div
            className="col-md-5 d-flex h-100 justify-content-center align-self-center"
            data-aos="zoom-in-right"
            data-aos-duration="2500"
          >
            <img
              id="img3"
              src={img3}
              alt="About Us"
              style={{ height: "90%", width: "60%" }}
            />
          </div>
          <div
            className="col-md-7"
            data-aos="zoom-in-left"
            data-aos-duration="2500"
          >
            <h4 className="text-center display-6 mt-3 mb-5 d-none d-md-block d-lg-block fw-bold">
              <span className="text" style={{ color: "#3ad6ab" }}>
                Team
              </span>{" "}
              Up
            </h4>
            <h6 className="fw-bold" style={{ fontFamily: "cursive" }}>
              Join, Learn and Grow
            </h6>
            <br />
            <p style={{ marginBottom: "35px" }}>
              Pladex is the hub for all students to connect, interact and
              explore. The chief motive of this platform is to render abundant
              knowledge at free of cost. To bring our dream into existence we
              always seek for people who are highly dedicated to contribute for
              this country. If you are interested to be a part of this
              exceptional team, fill out your interests based on your
              eligibility and we will reach out to you soon.
            </p>
            <h4>To join hands with us</h4>
            <br />
            <a
              href="https://forms.gle/o1dR1ddthAUL8wTb6"
              target="_blank"
              rel="noreferrer"
            >
              <button
                id="btn3"
                className="btn px-3"
                onMouseOver={() => hovering("0", "btn3")}
                onMouseLeave={() => hovering("1", "btn3")}
                style={{ backgroundColor: "#3ad6ab", color: "white" }}
              >
                Join Us
              </button>
            </a>
          </div>
        </div>
        {/* community influencer */}
        <div className="row pb-5" style={{ overflowX: "hidden" }}>
          <div
            className="col-md-7"
            data-aos="zoom-in-right"
            data-aos-duration="2500"
          >
            <h4 className="text-center display-6 mt-3 mb-5 fw-bold">
              <span className="text" style={{ color: "#3ad6ab" }}>
                Community
              </span>{" "}
              Influencer
            </h4>
            <h6 className="fw-bold" style={{ fontFamily: "cursive" }}>
              Want to stand out of the crowd?
            </h6>
            <br />
            <p style={{ marginBottom: "35px" }}>
              <strong>Community Influencers</strong> are those who represent
              PLADEX in their respective college.They basically represent our
              PLADEX ideology in their college and spread our motive among the
              students. Any student from any college can become a community
              influencer. So, grab this exciting opportunity to influence the
              crowd and make them aware of PLADEX.
            </p>
            <h4>To be a Community Influencer</h4>
            <br />
            <a
              href="https://forms.gle/dU9ZQrSykXsbQFMu7"
              target="_blank"
              rel="noreferrer"
            >
              <button
                id="btn4"
                className="btn px-3"
                onMouseOver={() => hovering("0", "btn4")}
                onMouseLeave={() => hovering("1", "btn4")}
                style={{ backgroundColor: "#3ad6ab", color: "white" }}
              >
                Join Us
              </button>
            </a>
          </div>
          <div
            className="col-md-5 d-flex h-100 justify-content-center align-self-center"
            data-aos="zoom-in-left"
            data-aos-duration="2500"
          >
            <img
              id="img4"
              src={img4}
              alt="About Us"
              style={{ height: "90%", width: "60%" }}
            />
          </div>
        </div>

        {/* patners with us */}

        <div
          className="row pb-5"
          style={{ backgroundColor: "azure", overflowX: "hidden" }}
        >
          <h4 className="text-center display-6 mt-3 mb-5 d-md-none d-lg-none fw-bold">
            <span className="text" style={{ color: "#3ad6ab" }}>
              Patern
            </span>{" "}
            with us
          </h4>
          <div
            className="col-md-5 d-flex h-100 justify-content-center align-self-center"
            data-aos="zoom-in-right"
            data-aos-duration="2500"
          >
            <img
              id="img5"
              src={img5}
              alt="About Us"
              style={{ height: "90%", width: "60%" }}
            />
          </div>
          <div
            className="col-md-7"
            data-aos="zoom-in-left"
            data-aos-duration="2500"
          >
            <h4 className="text-center display-6 mt-3 mb-5 d-none d-md-block d-lg-block fw-bold">
              <span className="text" style={{ color: "#3ad6ab" }}>
                Patner
              </span>{" "}
              with us
            </h4>
            <h6 className="fw-bold" style={{ fontFamily: "cursive" }}>
              Success lies in the combination of both talent and business savvy,
              and that magic comes through partnership between both.
            </h6>
            <br />
            <p style={{ marginBottom: "35px" }}>
              PLADEX is a visionary hub aiding students draft their careers and
              fulfill their numerous dreams. We always look forward for forming
              great partnership of peerless value for bringing positive impact
              on students lives and improvising the levels and standards of
              digital education. Let the Reconnoitering era of the Digi-ed world
              begin with our partnership.{" "}
            </p>
            <h4>To join hands with us for partnership</h4>
            <br />
            <a
              href="https://forms.gle/o1dR1ddthAUL8wTb6"
              target="_blank"
              rel="noreferrer"
            >
              <button
                id="btn3"
                className="btn px-3"
                onMouseOver={() => hovering("0", "btn3")}
                onMouseLeave={() => hovering("1", "btn3")}
                style={{ backgroundColor: "#3ad6ab", color: "white" }}
              >
                Join Us
              </button>
            </a>
          </div>
        </div>

        {/*   Podium talks
                 <div
          className="row pb-5"
          style={{ backgroundColor: "azure", overflowX: "hidden" }}
        >
          <h4 className="text-center display-6 mt-3 mb-5 d-lg-none d-md-none fw-bold">
            <span className="text" style={{ color: "#3ad6ab" }}>
              Podium
            </span>{" "}
            Talks
          </h4>
          <div
            className="col-md-5 d-flex h-100 justify-content-center align-self-center"
            data-aos="zoom-in-right"
            data-aos-duration="2500"
          >
            <img
              id="img1"
              src={img1}
              alt="About Us"
              style={{ height: "90%", width: "60%" }}
            />

          </div>
          <div
            className="col-md-7"
            data-aos="zoom-in-left"
            data-aos-duration="2500"
          >
            <h4 className="text-center display-6 mt-3 mb-5 d-none d-md-block d-lg-block fw-bold">
              Podium Talk's{" "}
              <span className="text" style={{ color: "#3ad6ab" }}>
                Speaker
              </span>
            </h4>
            <h6 className="fw-bold" style={{ fontFamily: "cursive" }}>
              A Small advice could bring a Huge impact!
            </h6>
            <br />
            <p style={{ marginBottom: "35px" }}>
              <strong>PODIUM TALKS</strong> is all about bringing graduated
              students from various domains, who got placed in top notch
              companies or have aced many competitive exams for a live
              interactive session, to clear all the doubts running in fellow
              student's minds. If you are willing to cheer up students with your
              insights through a live interactive session which will be held on
              Sundays on our official <strong>YouTube</strong> channel, be a{" "}
              <strong>speaker</strong> on our Podium Talks.
            </p>
            <h4>To be our guest on Podium Talks</h4>
            <br />
            <a
              href="https://forms.gle/FxCrsUAVps2s1FF18"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button
                id="btn1"
                className="btn px-3"
                onMouseOver={() => hovering("0", "btn1")}
                onMouseLeave={() => hovering("1", "btn1")}
                style={{ backgroundColor: "#3ad6ab", color: "white" }}
              >
                Join Us
              </button>
            </a>
          </div>
        </div>
     */}

        {/* <div className="row pb-5" style={{ backgroundColor: "azure" }}>
        <h4 className="text-center display-6 mt-3 mb-5 d-md-none d-lg-none fw-bold">
          <span className="text" style={{ color: "#3ad6ab" }}>
            Pladex
          </span>
          ians
        </h4>
        <div
          className="col-md-5 d-flex h-100 justify-content-center align-self-center"
          data-aos="zoom-in-right"
          data-aos-duration="2500"
        >
          <img
            id="img5"
            src={img5}
            alt="About Us"
            style={{ height: "90%", width: "60%" }}
          />
        </div>
        <div
          className="col-md-7"
          data-aos="zoom-in-left"
          data-aos-duration="2500"
        >
          <h4 className="text-center display-6 mt-3 mb-5 d-none d-md-block d-lg-block fw-bold">
            <span className="text" style={{ color: "#3ad6ab" }}>
              Pladex
            </span>
            ians
          </h4>
          <h6 className="fw-bold" style={{ fontFamily: "cursive" }}>
            Join, Learn and Grow
          </h6>
          <br />
          <p style={{ marginBottom: "35px" }}>
            Pladex is the hub for all students to connect, interact and explore.
            The chief motive of this platform is to render abundant knowledge at
            free of cost. To bring our dream into existence we always seek for
            people who are highly dedicated to contribute for this country. If
            you are interested to be a part of this exceptional team, fill out
            your interests based on your eligibility and we will reach out to
            you soon.
          </p>
          <h4>To join hands with us</h4>
          <br />
          <button
            id="btn5"
            className="btn px-3"
            onMouseOver={() => hovering("0", "btn5")}
            onMouseLeave={() => hovering("1", "btn5")}
            style={{ backgroundColor: "#3ad6ab", color: "white" }}
          >
            Join Us
          </button>
        </div>
      </div> */}
      </div>
      <Foot2 />
    </>
  );
}

export default JoinUs;
