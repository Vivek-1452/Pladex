import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import image1 from "./ImgUpcomEvents/Img1.png";
import image2 from "./ImgUpcomEvents/Img2.png";
import image3 from "./ImgUpcomEvents/Img3.png";
import image4 from "./ImgUpcomEvents/Img4.png";
import image5 from "./ImgUpcomEvents/Img5.png";
import image6 from "./ImgUpcomEvents/Img6.png";
import image7 from "./ImgUpcomEvents/Img7.png";
import "./upcom.css";
// import image8 from "./ImgUpcomEvents/Img8.png";

export default class UpcomingEventsWeb extends Component {
  render() {
    const hovering = (num, id) => {
      var x = document.getElementById(id);
      if (num === "0") {
        x.style.textDecoration = "underline";
      } else {
        x.style.textDecoration = "none";
      }
    };

    // const hoveringCard = (num, id) => {
    //   var x = document.getElementById(id);
    //   if (num === "0") {
    //     x.style.transform = "scale(1.08)";
    //     x.style.transition = "transform .3s";
    //   } else {
    //     x.style.transform = "scale(1)";
    //   }
    // };

    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };

    return (
      <div className="pb-5 pt-0">
        <div className="pb-3">
          <h4
            className="text-center fw-bold display-6 mt-3 mb-1 ps-5 ms-5 w-auto"
            style={{ display: "inline-block" }}
          >
            Upcoming{" "}
            <span className="text" style={{ color: "#3ad6ab" }}>
              Events
            </span>
          </h4>
          <Link to="/EventLibrary">
            <h5
              className="text-end float-end pt-5 me-5 fw-bold"
              id="more"
              onMouseOver={() => hovering("0", "more")}
              onMouseLeave={() => hovering("1", "more")}
              style={{ color: "#31343c" }}
            >
              <span>More</span>{" "}
              <i
                class="fas fa-chevron-circle-right"
                style={{ color: "#3ad6ab" }}
              ></i>
            </h5>
          </Link>
        </div>
        <Slider {...settings}>
          <div>
            <div
              className="card mx-auto my-2 pt-0"
              style={{
                minWidth: "250px",
                width: "75%",
                height: "95%",
                border: "none",
                borderRadius: "10px",
                boxShadow: "0 0 4px #999",
              }}
            >
              <center>
                <img
                  className="mb-2"
                  src={image1}
                  alt="Upcoming Event 1"
                  // width="320"
                  // height="220"
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "10px 10px 0 0",
                  }}
                />
              </center>
              <div className="card-body">
                <h3 className="card-title">
                  <span className="text" style={{ color: "#da6220" }}>
                    {/* <b>Women Empowerment</b> */}
                  </span>
                </h3>
                <p className="card-text my-4">
                  Importance of women empowerment in sustainable development.
                </p>
                <p className="float-lg-start my-3 ms-3">Dec 20 | 6:07 PM</p>
                <Link
                  to={{
                    pathname: "/CheckRegister",
                    state: "eventReg",
                  }}
                >
                  <button
                    className="btn w-auto mx-3 px-4 my-2 float-lg-end"
                    // id="women"
                    // onMouseOver={() => hovering("0", "women")}
                    // onMouseLeave={() => hovering("1", "women")}
                    style={{ backgroundColor: "#3ad6ab", color: "white" }}
                  >
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div
              className="card mx-auto my-2 pt-0"
              style={{
                minWidth: "250px",
                width: "75%",
                height: "95%",
                border: "none",
                borderRadius: "10px",
                boxShadow: "0 0 4px #999",
              }}
            >
              <center>
                <img
                  className="mb-2"
                  src={image4}
                  alt="Upcoming Event 4"
                  // width="320"
                  // height="220"
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "10px 10px 0 0",
                  }}
                />
              </center>
              <div className="card-body">
                <h3 className="card-title">
                  <span className="text" style={{ color: "#da6220" }}>
                    {/* <b>Emerging Technologies</b> */}
                  </span>
                </h3>
                <p className="card-text my-4">
                  Latest on boarding technology is more than just technical
                  intelligence.
                </p>
                <p className="float-lg-start my-3 ms-3">Dec 21 | 6:07 PM</p>
                <Link
                  to={{
                    pathname: "/CheckRegister",
                    state: "eventReg",
                  }}
                >
                  <button
                    className="btn w-auto mx-3 px-4 my-2 float-lg-end"
                    // id="tech"
                    // onMouseOver={() => hovering("0", "tech")}
                    // onMouseLeave={() => hovering("1", "tech")}
                    style={{ backgroundColor: "#3ad6ab", color: "white" }}
                  >
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div
              className="card mx-auto my-2 pt-0"
              style={{
                minWidth: "250px",
                width: "75%",
                height: "95%",
                border: "none",
                borderRadius: "10px",
                boxShadow: "0 0 4px #999",
              }}
            >
              <center>
                <img
                  className="mb-2"
                  src={image5}
                  alt="Upcoming Event 5"
                  // width="320"
                  // height="220"
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "10px 10px 0 0",
                  }}
                />
              </center>
              <div className="card-body">
                <h3 className="card-title">
                  <span className="text" style={{ color: "#da6220" }}>
                    {/* <b>Self Defense</b> */}
                  </span>
                </h3>
                <p className="card-text my-4">
                  How to tackle hassle conditions and defend yourself?
                </p>
                <p className="float-lg-start my-3 ms-3">Dec 22 | 6:07 PM</p>
                <Link
                  to={{
                    pathname: "/CheckRegister",
                    state: "eventReg",
                  }}
                >
                  <button
                    className="btn w-auto mx-3 px-4 my-2 float-lg-end"
                    // id="tackl"
                    // onMouseOver={() => hovering("0", "tackl")}
                    // onMouseLeave={() => hovering("1", "tackl")}
                    style={{ backgroundColor: "#3ad6ab", color: "white" }}
                  >
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div
              className="card mx-auto my-2 pt-0"
              style={{
                minWidth: "250px",
                width: "75%",
                height: "95%",
                border: "none",
                borderRadius: "10px",
                boxShadow: "0 0 4px #999",
              }}
            >
              <center>
                <img
                  className="mb-2"
                  src={image6}
                  alt="Upcoming Event 6"
                  // width="320"
                  // height="220"
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "10px 10px 0 0",
                  }}
                />
              </center>
              <div className="card-body">
                <h3 className="card-title">
                  <span className="text" style={{ color: "#da6220" }}>
                    {/* <b>Personality Development</b> */}
                  </span>
                </h3>
                <p className="card-text my-4">
                  Hone your soft skills and develop a positive influence.
                </p>
                <p className="float-lg-start my-3 ms-3">Dec 23 | 6:07 PM</p>
                <Link
                  to={{
                    pathname: "/CheckRegister",
                    state: "eventReg",
                  }}
                >
                  <button
                    className="btn w-auto mx-3 px-4 my-2 float-lg-end"
                    // id="soft"
                    // onMouseOver={() => hovering("0", "soft")}
                    // onMouseLeave={() => hovering("1", "soft")}
                    style={{ backgroundColor: "#3ad6ab", color: "white" }}
                  >
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div
              className="card mx-auto my-2 pt-0"
              style={{
                minWidth: "250px",
                width: "75%",
                height: "95%",
                border: "none",
                borderRadius: "10px",
                boxShadow: "0 0 4px #999",
              }}
            >
              <center>
                <img
                  className="mb-2"
                  src={image7}
                  alt="Upcoming Event 7"
                  // width="320"
                  // height="220"
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "10px 10px 0 0",
                  }}
                />
              </center>
              <div className="card-body">
                <h3 className="card-title">
                  <span className="text" style={{ color: "#da6220" }}>
                    {/* <b>Basic Laws and Rights</b> */}
                  </span>
                </h3>
                <p className="card-text my-4">
                  Basic laws & rights that all the students need to be aware of.
                </p>
                <p className="float-lg-start my-3 ms-3">Dec 24 | 6:07 PM</p>
                <Link
                  to={{
                    pathname: "/CheckRegister",
                    state: "eventReg",
                  }}
                >
                  <button
                    className="btn w-auto mx-3 px-4 my-2 float-lg-end"
                    // id="laws"
                    // onMouseOver={() => hovering("0", "laws")}
                    // onMouseLeave={() => hovering("1", "laws")}
                    style={{ backgroundColor: "#3ad6ab", color: "white" }}
                  >
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* <div>
            <div
              className="card mx-auto my-2 pt-0"
              style={{
                minWidth: "250px",
                width: "75%",
                height: "95%",
                border: "none",
                borderRadius: "10px",
                boxShadow: "0 0 4px #999",
              }}
            >
              <center>
                <img
                  className="mb-2"
                  src={image8}
                  alt="Upcoming Event 8"
                  // width="320"
                  // height="220"
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "10px 10px 0 0",
                  }}
                />
              </center>
              <div className="card-body">
                <h3 className="card-title">
                  <span className="text" style={{ color: "black" }}>
                    <b>Focus One Talent</b>
                  </span>
                </h3>
                <p className="card-text my-4">
                  <strong>Listen</strong> to the experiences of
                  <strong> striving</strong> students from various colleges.
                </p>
                <Link to="/FocusReg" style={{ textDecoration: "none" }}>
                  <button
                    className="btn w-auto mx-auto px-4 my-2"
                    style={{ backgroundColor: "#3ad6ab", color: "white" }}
                  >
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
    );
  }
}
