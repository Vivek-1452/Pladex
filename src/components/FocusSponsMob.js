import React from "react";
// import { Link } from "react-router-dom";
import "./Event.css";
import image1 from "./collab1.jpeg";
// import image1 from "./college explorer.png";
// import image2 from "./college predictor.png";
// import image3 from "./podium talks.png";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function EventTemp2() {
  window.onload = function () {
    const divi = document.getElementById("mobile");
    if (window.innerWidth < 769) {
      divi.style.display = "block";
    } else {
      divi.style.display = "none";
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
  };

  const slidesData = [
    {
      id: 1,
      title: "Beta Testers",
      label1:
        "Creating an impact on the youth who are struggling to ace their ",
      label2: "skills through vodcasts ",
      label3: "and guide viewers by clearing their doubts.",
      image: image1,
    },
    {
      id: 2,
      title: "Beta Testers",
      label1:
        "Creating an impact on the youth who are struggling to ace their ",
      label2: "skills through vodcasts ",
      label3: "and guide viewers by clearing their doubts.",
      image: image1,
    },
    {
      id: 3,
      title: "Beta Testers",
      label1:
        "Creating an impact on the youth who are struggling to ace their ",
      label2: "skills through vodcasts ",
      label3: "and guide viewers by clearing their doubts.",
      image: image1,
    },
    {
      id: 4,
      title: "Beta Testers",
      label1:
        "Creating an impact on the youth who are struggling to ace their ",
      label2: "skills through vodcasts ",
      label3: "and guide viewers by clearing their doubts.",
      image: image1,
    },
    {
      id: 5,
      title: "Beta Testers",
      label1:
        "Creating an impact on the youth who are struggling to ace their ",
      label2: "skills through vodcasts ",
      label3: "and guide viewers by clearing their doubts.",
      image: image1,
    },
  ];

  return (
    <React.Fragment>
      <div className="slider-wrapper pt-5 pb-3 mb-4" id="mobile">
        <h4 className="text-center fw-bold display-6 mb-0">
          OUR{" "}
          <span className="text" style={{ color: "#3ad6ab" }}>
            SPONSORS
          </span>
        </h4>
        <Slider {...settings}>
          {slidesData.map((slide) => (
            <div className="pt-0">
              <div className="slick-slide w-100 pt-0" key={slide.id}>
                <div
                  className="card mx-auto my-2"
                  style={{
                    minWidth: "250px",
                    width: "90%",
                    height: "95%",
                    // border: "1px solid #3ad6ab",
                    borderRadius: "10px",
                    boxShadow: "0 0 5px #999",
                  }}
                >
                  <center>
                    <img
                      className="my-3"
                      src={slide.image}
                      alt="College Explorer"
                      width="200"
                      height="200"
                      style={{ borderRadius: "50%" }}
                    />
                  </center>
                  <div className="card-body">
                    <h3 className="card-title">
                      <b>{slide.title}</b>
                    </h3>
                    <p className="card-text my-4">
                      {slide.label1}
                      <b>{slide.label2}</b>
                      {slide.label3}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </React.Fragment>
  );
}

export default EventTemp2;
