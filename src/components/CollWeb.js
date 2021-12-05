import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import image1 from "./collab1.jpeg";
import image2 from "./collab2.png";
import image3 from "./collab3.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function CollWeb() {
  const [display, setdisplay] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setdisplay(true);
    }
  }, [display]);

  function hoveringCard(num, id) {
    var x = document.getElementById(id);
    if (num === "0") {
      x.style.transform = "scale(1.15)";
      x.style.transition = "transform .3s";
    } else {
      x.style.transform = "scale(1)";
    }
  }

  return (
    <div style={{ backgroundColor: "#f5f6f7" }}>
      <div className="container-lg container-fluid-md">
        <h4 className="text-center fw-bold display-6 mt-3">
          Our{" "}
          <span className="text" style={{ color: "#3ad6ab" }}>
            Collabs
          </span>
        </h4>
        <div className="row pt-4">
          <div
            className="col-lg-4 col-md-6 my-2"
            data-aos="zoom-in"
            data-aos-duration="2500"
          >
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: "78%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <a
                  href="https://betatesters.tech/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    id="img1"
                    onMouseOver={() => hoveringCard("0", "img1")}
                    onMouseLeave={() => hoveringCard("1", "img1")}
                    className="my-3"
                    src={image1}
                    alt="College Explorer"
                    width="200"
                    height="200"
                    style={{ borderRadius: "50%" }}
                  />
                </a>
              </center>
              <div className="card-body">
                <h3 className="card-title">
                  <b>Beta Testers</b>
                </h3>
                <p className="card-text my-4">
                  Creating an <b>impact</b> on the youth who are struggling to
                  ace their <b>skills</b> through <b>vodcasts</b> and guide
                  viewers by clearing their doubts.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 my-2"
            data-aos="zoom-out"
            data-aos-duration="2500"
          >
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: "78%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <a
                  href="https://www.collegeexplorer.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    id="img2"
                    onMouseOver={() => hoveringCard("0", "img2")}
                    onMouseLeave={() => hoveringCard("1", "img2")}
                    className="my-3"
                    src={image2}
                    alt="College Predictor"
                    width="200"
                    height="200"
                    style={{ borderRadius: "50%" }}
                  />
                </a>
              </center>
              <div className="card-body">
                <h3 className="card-title">
                  <b>College Explorer</b>
                </h3>
                <p className="card-text my-4">
                  Students can easily <b>explore</b> more about their dream{" "}
                  <b>colleges</b> which helps them for their <b>admission</b>{" "}
                  process.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-none d-md-block d-lg-none"></div>
          <div
            className="col-lg-4 col-md-6 my-2"
            data-aos="zoom-in"
            data-aos-duration="2500"
          >
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: "78%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <a
                  href="https://codifiedyouth.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="my-3"
                    id="img3"
                    onMouseOver={() => hoveringCard("0", "img3")}
                    onMouseLeave={() => hoveringCard("1", "img3")}
                    src={image3}
                    alt="Podium Talks"
                    width="200"
                    height="200"
                    style={{ borderRadius: "50%" }}
                  />
                </a>
              </center>
              <div className="card-body">
                <h3 className="card-title">
                  <b>Codified Youth</b>
                </h3>
                <p className="card-text my-4">
                  Helping students to get <b>internship</b> opportunities, jobs,
                  <b> placement</b> support, <b>free projects</b> and courses.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-none d-md-block d-lg-none"></div>
        </div>
      </div>
    </div>
  );
}

export default CollWeb;
