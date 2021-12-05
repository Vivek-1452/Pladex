import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Foot2 from "./foot2";
import Navnew from "./Navnew";
import imgabout from "./ImgAboutUs.svg";

function AboutUs() {
  const [loginauth, setloginauth] = useState(false);

  const loginhandler = () => {
    setloginauth(true);
  };

  return (
    <>
      <Navnew
        logincheck={loginauth}
        loginhandler={loginhandler}
        prop1="about"
      />
      <div className="container-fluid pt-0">
        <div
          className="row py-3"
          style={{
            backgroundImage: "linear-gradient(180deg, #6dd2ae 0%, white 90%)",
          }}
        >
          <div className="row">
            <div className="col-lg-9 col-md-7 col-4 px-lg-0 px-md-0 ps-lg-4 ps-md-4 ps-1">
              <h1
                className="fw-bold ps-4 mt-lg-4 mt-2"
                style={{ textAlign: "left", marginBottom: "60px" }}
              >
                {/* The <span style={{ color: "#3ad6ab" }}>content</span> you consume{" "}
          defines you. */}
                About Us
              </h1>
              <div className="d-lg-block d-md-block d-none pt-1">
                <h5 className="mt-5 mb-3" style={{ fontFamily: "cursive" }}>
                  When S joins U, it becomes US. We are determined to say YES
                  for YOU.
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
            <div className="col-lg-3 col-md-5 col-8 pe-0">
              <img
                src={imgabout}
                alt=""
                style={{ height: "100%", width: "80%", float: "right" }}
              />
            </div>
          </div>
        </div>
        <div className="row py-5 bg-light">
          {/* <h4 className="text-center fw-bold display-6 mt-3 mb-5">
            About{" "}
            <span className="text" style={{ color: "#3ad6ab" }}>
              Us
            </span>
          </h4> */}
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <h5
              className="fw-bold"
              style={{ fontSize: "1.3rem", fontFamily: "cursive" }}
            >
              "We seek to revolutionize the digital education world to make
              India the most educated and developed country".
            </h5>
            <br />
            <ul style={{ textAlign: "left" }}>
              <li>
                We are the <b>students from various colleges</b> of India came
                forward to make our <b>dream</b> of, connecting all the students
                of India through this platform where they can stay together as a{" "}
                student friendly community to present their <b>ideas</b>, clear:
                ; their queries, and build <b>connections</b> with like-minded
                peers to build skills,
                <b>come true</b>.
              </li>
              <li>
                <b>PLADEX</b> is a one stop platform where students can easily
                get all: ; the requirements to build their <b>career</b>, show
                off their <b>talents</b>, enhance their <b>skills</b> and grow
                along with us.
              </li>
              <li>
                We aim to bring the <b>equity</b> of competent resources among
                all the
                <b>students</b> even in tier 2 & tier 3 colleges irrespective of
                their domains.
              </li>
            </ul>
            <h4
              className="text-left fw-bold display-6 mt-3 mb-3"
              style={{ width: "100%" }}
            >
              Our{" "}
              <span className="text" style={{ color: "#3ad6ab" }}>
                Vision
              </span>
            </h4>
            <ul style={{ textAlign: "left" }}>
              <li>
                We provide a digital platform to all the educational
                organizations, companies and EdTech start-ups to foster their
                free educational resources and many new skills to reach their
                targeted audience.
              </li>
              <li>
                We endeavour to connect every student with all the college
                clubs, competitions, events & bootcamps so that everyone gets
                exposed to practical knowledge by attending and displaying their
                talents.
              </li>
              <li>
                Even there are many educational resources available for free but
                we are categorizing the best among them thereby making things
                easier for students.
              </li>
              <li>
                We hold live sessions every week with many successful students,
                entrepreneurs, motivators to inspire students and help them
                build their career.
              </li>
              <li>
                We conduct competitions and quizzes to uplift skilful students
                and help them realise their talents and build confidence among
                them.
              </li>
            </ul>
            <p className="mb-4">
              <strong>
                It might be possible by our team but will surely be possible
                with a student community
              </strong>
            </p>
            <p className="mb-4">
              <strong>
                Innovation, Interaction, Exploration, Repetition and Growth are
                the basic qualities of each PLADEXian.
              </strong>
            </p>
            <h5>
              IT IS NOT ABOUT US,{" "}
              <span className="fw-bold">IT IS ABOUT US</span>.
            </h5>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
      <Foot2 />
    </>
  );
}

export default AboutUs;
