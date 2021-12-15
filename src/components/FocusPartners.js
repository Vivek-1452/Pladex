import React, { Component } from "react";
import Slider from "react-slick";
import image1 from "./ImgFocusPartners/part1.png";
import image2 from "./ImgFocusPartners/part2.png";
import image3 from "./ImgFocusPartners/part4.png";
import image4 from "./ImgFocusPartners/part3.png";
import image5 from "./ImgFocusPartners/part5.png";
import image6 from "./ImgFocusPartners/part6.jpg";
import image7 from "./ImgFocusPartners/part7.png";
import image8 from "./ImgFocusPartners/part8.jpeg";
import image9 from "./ImgFocusPartners/part9.jpg";

export default class FocusPartners extends Component {
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
      <div className="bg-light pb-5">
        <h4 className="text-center fw-bold display-6 mt-5 mb-1">
          OUR{" "}
          <span className="text" style={{ color: "#3ad6ab" }}>
            PARTNERS
          </span>
        </h4>
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
                  <b>SOCIAL SERVICE CLUB</b>
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
          {/* <div>
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
                  src={image2}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
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
          </div> */}
        </Slider>
      </div>
    );
  }
}
