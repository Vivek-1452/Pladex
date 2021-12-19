import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
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

export default class FocusPartners extends Component {
  render() {
    const hovering = (num, id) => {
      var x = document.getElementById(id);
      if (num === "0") {
        x.style.textDecoration = "underline";
      } else {
        x.style.textDecoration = "none";
      }
    };

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
      <div className="bg-light pb-5">
        <div className="pb-3">
          <h4
            className="text-center fw-bold display-6 mt-3 mb-1 ps-5 ms-5 w-auto"
            style={{ display: "inline-block" }}
          >
            OUR{" "}
            <span className="text" style={{ color: "#3ad6ab" }}>
              PARTNERS
            </span>
          </h4>
          <Link to="/AllPartners">
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
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: "70%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3 bg-dark"
                  src={image1}
                  alt="E-Cell"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title ">
                  <b>E-Cell</b>
                </h2>
                <p className="card-text my-4">NIT AGARTALA</p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: "70%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3 bg-dark"
                  src={image2}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title ">
                  <b>Literary Club</b>
                </h2>
                <p className="card-text my-4">NIT AGARTALA</p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: "70%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3"
                  src={image4}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title ">
                  <b>E-Cell</b>
                </h2>
                <p className="card-text my-4">NIT SILCHAR</p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: "70%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3"
                  src={image3}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title ">
                  <b>Aaveg</b>
                </h2>
                <p className="card-text my-4">NIT AGARTALA</p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: "70%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3"
                  src={image5}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title ">
                  <b>Sanganan Prayog</b>
                </h2>
                <p className="card-text my-4">NIT AGARTALA</p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: "70%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3"
                  src={image6}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title ">
                  <b>EEE SOCIETY</b>
                </h2>
                <p className="card-text my-4">NIT MIZORAM</p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: "70%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3"
                  src={image7}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title ">
                  <b>E-Cell</b>
                </h2>
                <p className="card-text my-4">NIT NAGALAND</p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: "70%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3"
                  src={image8}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h3 className="card-title ">
                  <b>Social Service Club</b>
                </h3>
                <p className="card-text my-4">NIT NAGALAND</p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: "70%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3"
                  src={image9}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title ">
                  <b>MOVIE CLUB</b>
                </h2>
                <p className="card-text my-4">NIT NAGALAND</p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: "70%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3"
                  src={image10}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h3 className="card-title ">
                  <b>Student Society</b>
                </h3>
                <p className="card-text my-4">NIT Arunachal Pradesh</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
