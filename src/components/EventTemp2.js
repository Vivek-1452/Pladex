import React from "react";
import { Link } from "react-router-dom";
import "./Event.css";
import image1 from "./ImgUpcomEvents/Img1.png";
import image2 from "./ImgUpcomEvents/Img2.png";
import image3 from "./ImgUpcomEvents/Img3.png";
import image4 from "./ImgUpcomEvents/Img4.png";
import image5 from "./ImgUpcomEvents/Img5.png";
import image6 from "./ImgUpcomEvents/Img6.png";
import image7 from "./ImgUpcomEvents/Img7.png";
import image8 from "./ImgUpcomEvents/Img8.png";

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
      title: "Upcoming Event 1",
      label1: "Dig into all the ",
      label2: "details of colleges ",
      label3: "needed for admission process.",
      image: image1,
    },
    {
      id: 2,
      title: "Upcoming Event 2",
      label1: "Enter your rank and ",
      label2: "predict the best ",
      label3: "college for you at ease and comfort.",
      image: image2,
    },
    {
      id: 3,
      title: "Upcoming Event 3",
      label1: "Listen to the experiences of ",
      label2: "striving students ",
      label3: "from various colleges.",
      image: image3,
    },
    {
      id: 4,
      title: "Upcoming Event 4",
      label1: "Dig into all the ",
      label2: "details of colleges ",
      label3: "needed for admission process.",
      image: image4,
    },
    {
      id: 5,
      title: "Upcoming Event 5",
      label1: "Enter your rank and ",
      label2: "predict the best ",
      label3: "college for you at ease and comfort.",
      image: image5,
    },
    {
      id: 6,
      title: "Upcoming Event 6",
      label1: "Listen to the experiences of ",
      label2: "striving students ",
      label3: "from various colleges.",
      image: image6,
    },
    {
      id: 7,
      title: "Upcoming Event 7",
      label1: "Listen to the experiences of ",
      label2: "striving students ",
      label3: "from various colleges.",
      image: image7,
    },
    // {
    //   id: 8,
    //   title: "Upcoming Event 8",
    //   label1: "Listen to the experiences of ",
    //   label2: "striving students ",
    //   label3: "from various colleges.",
    //   image: image8,
    // },
  ];

  return (
    <React.Fragment>
      <div className="slider-wrapper pt-5 pb-3 mb-4" id="mobile">
        <h4 className="text-center fw-bold display-6 mb-0">
          Upcoming{" "}
          <span className="text" style={{ color: "#3ad6ab" }}>
            Events
          </span>
        </h4>
        <Slider {...settings}>
          {slidesData.map((slide) => (
            <div className="pt-0">
              <div className="slick-slide w-100 pt-0" key={slide.id}>
                <div
                  className="card mx-auto my-2 pt-0"
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
                    <img
                      className="mb-3"
                      src={slide.image}
                      alt="Images"
                      // width="120"
                      // height="120"
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "10px 10px 0 0",
                      }}
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
                    <Link to="/EveReg" style={{ textDecoration: "none" }}>
                      <button
                        className="btn w-auto mx-auto px-4 my-2"
                        style={{ backgroundColor: "#3ad6ab", color: "white" }}
                      >
                        Explore
                      </button>
                    </Link>
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
