// App.js
import React from "react";
import "./Event.css";
import image1 from "./collab1.jpeg";
import image2 from "./collab2.png";
import image3 from "./collab3.jpeg";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function EventTemp2() {
  window.onload = function () {
    const divis = document.getElementById("mobile");
    if (window.innerWidth < 769) {
      divis.style.display = "block";
    } else {
      divis.style.display = "none";
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
      label1: "Creating an ",
      label2: "impact on the youth ",
      label3:
        "who are struggling to ace their skills through vodcasts and guide viewers by clearing their doubts.",
      image: image1,
      link: "https://betatesters.tech/",
    },
    {
      id: 2,
      title: "College Explorer",
      label1: "Students can easily ",
      label2: "explore more about their dream colleges ",
      label3: "which helps them for their admission process.",
      image: image2,
      link: "https://www.collegeexplorer.in/",
    },
    {
      id: 3,
      title: "Codified Youth",
      label1: "Helping students to get ",
      label2: "internship opportunities, jobs, get placement support, ",
      label3: "free projects and courses.",
      image: image3,
      link: "https://codifiedyouth.com/",
    },
    // {
    //   id: 4,
    //   title: "Upcoming Event 4",
    //   label1: "Dig into all the ",
    //   label2: "details of colleges ",
    //   label3: "needed for admission process.",
    //   image: "https://pladex.in/images/home-1.png",
    // },
    // {
    //   id: 5,
    //   title: "Upcoming Event 5",
    //   label1: "Enter your rank and ",
    //   label2: "predict the best ",
    //   label3: "college for you at ease and comfort.",
    //   image: "https://pladex.in/images/home-2.png",
    // },
    // {
    //   id: 6,
    //   title: "Upcoming Event 6",
    //   label1: "Listen to the experiences of ",
    //   label2: "striving students ",
    //   label3: "from various colleges.",
    //   image: "https://pladex.in/images/home-3.png",
    // },
  ];

  return (
    <React.Fragment>
      <div
        className="slider-wrapper pt-5 pb-3"
        id="mobile"
        style={{ backgroundColor: "#f5f6f7" }}
      >
        <h4 className="text-center fw-bold display-6 mb-0">
          Our{" "}
          <span className="text" style={{ color: "#3ad6ab" }}>
            Collabs
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
                    border: "none",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px #999",
                  }}
                >
                  <center>
                    <a href={slide.link} target="_blank" rel="noreferrer">
                      <img
                        className="my-3"
                        src={slide.image}
                        alt="Images"
                        width="200"
                        height="200"
                        style={{ borderRadius: "50%" }}
                      />
                    </a>
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
