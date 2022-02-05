import React from "react";
import { Link } from "react-router-dom";
import "./Event.css";
import image1 from "./ImgFocusPartners/part1.png";
import image2 from "./ImgFocusPartners/part2.png";
import image3 from "./ImgFocusPartners/part4.png";
import image4 from "./ImgFocusPartners/part3.png";
import image5 from "./ImgFocusPartners/part5.png";
import image6 from "./ImgFocusPartners/part6.jpg";
import image7 from "./ImgFocusPartners/part7.png";
import image8 from "./ImgFocusPartners/part8.jpeg";
import image9 from "./ImgFocusPartners/part9.jpg";
import image10 from "./ImgFocusPartners/part10.png";
// import fp11 from "./ImgFocusPartners/fp11.svg";
// import fp12 from "./ImgFocusPartners/fp12.svg";
// import fp13 from "./ImgFocusPartners/fp13.svg";
// import fp14 from "./ImgFocusPartners/fp14.svg";
// import fp15 from "./ImgFocusPartners/fp15.svg";
// import fp16 from "./ImgFocusPartners/fp16.svg";
// import fp17 from "./ImgFocusPartners/fp17.svg";
// import fp18 from "./ImgFocusPartners/fp18.svg";
// import fp19 from "./ImgFocusPartners/fp19.svg";
// import fp20 from "./ImgFocusPartners/fp20.svg";
// import fp21 from "./ImgFocusPartners/fp21.svg";
// import fp22 from "./ImgFocusPartners/fp22.svg";
// import fp23 from "./ImgFocusPartners/fp23.svg";

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
      title: "E-Cell",
      label1: "NIT AGARTALA",
      // label2: "skills through vodcasts ",
      // label3: "and guide viewers by clearing their doubts.",
      image: image1,
    },
    {
      id: 2,
      title: "Literary Club",
      label1: "NIT AGARTALA",
      // label2: "explore more about their dream colleges ",
      // label3: "which helps them for their admission process.",
      image: image2,
    },
    {
      id: 3,
      title: "E-Cell",
      label1: "NIT SILCHAR",
      // label2: "internship opportunities, jobs, ",
      // label3: "placement support, free projects and courses.",
      image: image4,
    },
    {
      id: 4,
      title: "Advay",
      label1: "NIT AGARTALA",
      // label2: "skills through vodcasts ",
      // label3: "and guide viewers by clearing their doubts.",
      image: image3,
    },
    {
      id: 5,
      title: "Dancing Club",
      label1: "NIT Silchar",
      // label2: "skills through vodcasts ",
      // label3: "and guide viewers by clearing their doubts.",
      image: image5,
    },
    {
      id: 6,
      title: "EEE SOCIETY",
      label1: "NIT MIZORAM",
      // label2: "explore more about their dream colleges ",
      // label3: "which helps them for their admission process.",
      image: image6,
    },
    {
      id: 7,
      title: "Illuminits",
      label1: "NIT Silchar",
      // label2: "internship opportunities, jobs, ",
      // label3: "placement support, free projects and courses.",
      image: image7,
    },
    {
      id: 8,
      title: "Social Service Club",
      label1: "NIT NAGALAND",
      // label2: "skills through vodcasts ",
      // label3: "and guide viewers by clearing their doubts.",
      image: image8,
    },
    {
      id: 9,
      title: "MOVIE CLUB",
      label1: "NIT NAGALAND",
      // label2: "skills through vodcasts ",
      // label3: "and guide viewers by clearing their doubts.",
      image: image9,
    },
    {
      id: 10,
      title: "Student Society",
      label1: "NIT Arunachal Pradesh",
      // label2: "skills through vodcasts ",
      // label3: "and guide viewers by clearing their doubts.",
      image: image10,
    },
    //  {
    //   id: 11,
    //   title: "Student Society",
    //   label1: "NIT Arunachal Pradesh",
    //   // label2: "skills through vodcasts ",
    //   // label3: "and guide viewers by clearing their doubts.",
    //   image: fp11,
    // },
    //  {
    //   id: 12,
    //   title: "Student Society",
    //   label1: "NIT Arunachal Pradesh",
    //   // label2: "skills through vodcasts ",
    //   // label3: "and guide viewers by clearing their doubts.",
    //   image: fp12,
    // },
    //  {
    //   id: 13,
    //   title: "Student Society",
    //   label1: "NIT Arunachal Pradesh",
    //   // label2: "skills through vodcasts ",
    //   // label3: "and guide viewers by clearing their doubts.",
    //   image:fp12,
    // },
    //  {
    //   id: 14,
    //   title: "Student Society",
    //   label1: "NIT Arunachal Pradesh",
    //   // label2: "skills through vodcasts ",
    //   // label3: "and guide viewers by clearing their doubts.",
    //   image: fp14,
    // },
    //  {
    //   id: 15,
    //   title: "Student Society",
    //   label1: "NIT Arunachal Pradesh",
    //   // label2: "skills through vodcasts ",
    //   // label3: "and guide viewers by clearing their doubts.",
    //   image: fp15,
    // },
    //  {
    //   id: 16,
    //   title: "Student Society",
    //   label1: "NIT Arunachal Pradesh",
    //   // label2: "skills through vodcasts ",
    //   // label3: "and guide viewers by clearing their doubts.",
    //   image: fp16,
    // },
    //  {
    //   id: 17,
    //   title: "Student Society",
    //   label1: "NIT Arunachal Pradesh",
    //   // label2: "skills through vodcasts ",
    //   // label3: "and guide viewers by clearing their doubts.",
    //   image: fp17,
    // },
    //  {
    //   id: 18,
    //   title: "Student Society",
    //   label1: "NIT Arunachal Pradesh",
    //   // label2: "skills through vodcasts ",
    //   // label3: "and guide viewers by clearing their doubts.",
    //   image: fp18,
    // },
    //  {
    //   id: 19,
    //   title: "Student Society",
    //   label1: "NIT Arunachal Pradesh",
    //   // label2: "skills through vodcasts ",
    //   // label3: "and guide viewers by clearing their doubts.",
    //   image: fp19,
    // },
    //  {
    //   id: 20,
    //   title: "Student Society",
    //   label1: "NIT Arunachal Pradesh",
    //   // label2: "skills through vodcasts ",
    //   // label3: "and guide viewers by clearing their doubts.",
    //   image: fp20,
    // },
    //  {
    //   id: 21,
    //   title: "Student Society",
    //   label1: "NIT Arunachal Pradesh",
    //   // label2: "skills through vodcasts ",
    //   // label3: "and guide viewers by clearing their doubts.",
    //   image: fp21,
    // },
    //  {
    //   id: 22,
    //   title: "Student Society",
    //   label1: "NIT Arunachal Pradesh",
    //   // label2: "skills through vodcasts ",
    //   // label3: "and guide viewers by clearing their doubts.",
    //   image: fp22,
    // },
    //  {
    //   id: 23,
    //   title: "Student Society",
    //   label1: "NIT Arunachal Pradesh",
    //   // label2: "skills through vodcasts ",
    //   // label3: "and guide viewers by clearing their doubts.",
    //   image: fp23,
    // },
  ];

  return (
    <div style={{ backgroundColor: "#f5f6f7" }}>
      <div className="slider-wrapper pt-5 pb-5" id="mobile">
        <div className="pt-0 d-md-none d-lg-none">
          <h4 className="text-center fw-bold display-6 mb-0">
            Our{" "}
            <span className="text" style={{ color: "#3ad6ab" }}>
              Partners
            </span>
            <Link
              to="/AllPartners"
              className="position-absolute"
              style={{ right: "30px" }}
            >
              <i
                className="fas fa-chevron-circle-right fs-3"
                style={{
                  color: "#3ad6ab",
                }}
              ></i>
            </Link>
          </h4>
        </div>
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
                    <h2 className="card-title">
                      <b>{slide.title}</b>
                    </h2>
                    <p className="card-text my-4">
                      {slide.label1}
                      {/* <b>{slide.label2}</b>
                      {slide.label3} */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default EventTemp2;
