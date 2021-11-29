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
// import image8 from "./ImgUpcomEvents/Img8.png";

export default class UpcomingEventsWeb extends Component {
  render() {
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
      <div className="pb-5">
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
          <Link to="/EveReg">
            <h5
              className="text-end float-end pt-5 me-5 fw-bold"
              style={{ color: "", textDecoration: "underline" }}
            >
              <span style={{ color: "", textDecoration: "underline" }}>
                More
              </span>{" "}
              ➤
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
                    <b>Priyanka Das</b>
                  </span>
                </h3>
                <p className="card-text my-4">
                  Dig into all the <strong>details</strong> of
                  <strong> colleges</strong> needed for admission process.
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
                  src={image2}
                  alt="Upcoming Event 2"
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
                    <b>Mark Laitflang Stone</b>
                  </span>
                </h3>
                <p className="card-text my-4">
                  Enter your rank and <strong>predict</strong> the
                  <strong> best</strong> college for you at ease and comfort.
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
                  src={image3}
                  alt="Upcoming Event 3"
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
                    <b>Simi Hanspal</b>
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
                    <b>Siddhartha Ghosh</b>
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
                    <b>Hasina Kharbhih</b>
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
                    <b>Shikhar Prajapati</b>
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
                    <b>Aditya Trivedi</b>
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
