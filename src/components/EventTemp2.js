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
// import image8 from "./ImgUpcomEvents/Img8.png";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./coll.css";

function EventTemp2() {
  // window.onload = function () {
  //   const divi = document.getElementById("mobile");
  //   if (window.innerWidth < 769) {
  //     divi.style.display = "block";
  //   } else {
  //     divi.style.display = "none";
  //   }
  // };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
  };

  const slidesData = [
    // {
    //   id: 1,
    //   title: "Entrepreneurship",
    //   label1: "Construct and Evolve. Get inspired to be an entrepreneur!",
    //   // label2: "details of colleges ",
    //   // label3: "needed for admission process.",
    //   image: image2,
    //   date: "Dec 18",
    //   time: "6:07 PM",
    // },
    {
      id: 1,
      title: "Mental Health",
      label1:
        "Know feasible ways to relieve stress & anxiety and be mentally fit.",
      // label2: "striving students ",
      // label3: "from various colleges.",
      image: image3,
      date: "Dec 19",
      time: "6:07 PM",
    },
    {
      id: 2,
      title: "Women Empowerment",
      label1: "Importance of women empowerment in sustainable development.",
      // label2: "predict the best ",
      // label3: "college for you at ease and comfort.",
      image: image1,
      date: "Dec 20",
      time: "6:07 PM",
    },
    {
      id: 3,
      title: "Emerging Technologies",
      label1:
        "Latest on boarding technology is more than just technical intelligence.",
      // label2: "details of colleges ",
      // label3: "needed for admission process.",
      image: image4,
      date: "Dec 21",
      time: "6:07 PM",
    },
    {
      id: 4,
      title: "Self Defense",
      label1: "How to tackle hassle conditions and defend yourself?",
      // label2: "predict the best ",
      // label3: "college for you at ease and comfort.",
      image: image5,
      date: "Dec 22",
      time: "6:07 PM",
    },
    {
      id: 5,
      title: "Personality Development",
      label1: "Hone your soft skills and develop a positive influence.",
      // label2: "striving students ",
      // label3: "from various colleges.",
      image: image6,
      date: "Dec 23",
      time: "6:07 PM",
    },
    {
      id: 6,
      title: "Basic Laws and Rights",
      label1: "Basic laws & rights that all the students need to be aware of.",
      // label2: "striving students ",
      // label3: "from various colleges.",
      image: image7,
      date: "Dec 24",
      time: "6:07 PM",
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
        <div className="pt-0 d-none d-md-block">
          <h4 className="text-center fw-bold display-6 mb-0">
            Upcoming{" "}
            <span className="text" style={{ color: "#3ad6ab" }}>
              Events
            </span>
          </h4>
          <Link to="/EventLibrary">
            <h5
              className="text-end mt-4 mb-0 me-5 fw-bold"
              style={{ color: "black", textDecoration: "underline" }}
            >
              <span>More</span>{" "}
              <i
                class="fas fa-chevron-circle-right"
                style={{ color: "#3ad6ab" }}
              ></i>
            </h5>
          </Link>
        </div>
        <div className="pt-0 d-md-none d-lg-none">
          <h4 className="text-center fw-bold display-6 mb-0">
            Upcoming{" "}
            <span className="text" style={{ color: "#3ad6ab" }}>
              Events
            </span>
            <Link
              to="/EventLibrary"
              className="position-absolute"
              style={{ right: "30px" }}
            >
              {/* <h5
                className="text-end mt-4 mb-0 me-5 fw-bold"
                style={{ color: "black", textDecoration: "underline" }}
              > */}
              <i
                className="fas fa-chevron-circle-right fs-3"
                style={{
                  color: "#3ad6ab",
                }}
              ></i>
              {/* </h5> */}
            </Link>
          </h4>
        </div>
        <Slider {...settings} className="pt-0">
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
                    <h3 className="card-title" style={{ color: "#da6220" }}>
                      <b>{slide.title}</b>
                    </h3>
                    <p className="card-text my-4">
                      {slide.label1}
                      <b>{slide.label2}</b>
                      {slide.label3}
                    </p>
                    {/* <Link to="/EveReg" style={{ textDecoration: "none" }}>
                      <button
                        className="btn w-auto mx-auto px-4 my-2"
                        style={{ backgroundColor: "#3ad6ab", color: "white" }}
                      >
                        Register
                      </button>
                    </Link> */}
                    <p className="float-start my-3 ms-3">
                      {slide.date} | {slide.time}
                    </p>
                    <Link
                      to={{
                        pathname: "/CheckRegister",
                        state: "eventReg",
                      }}
                    >
                      <button
                        className="btn w-auto me-3 px-4 my-2 float-end"
                        style={{ backgroundColor: "#3ad6ab", color: "white" }}
                      >
                        Register
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
