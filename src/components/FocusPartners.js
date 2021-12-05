import React, { Component } from "react";
import Slider from "react-slick";
import image1 from "./collab1.jpeg";
import image2 from "./collab2.png";
import image3 from "./collab3.jpeg";

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
                  className="my-3"
                  src={image1}
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
                  src={image2}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
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
                  src={image1}
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
                  src={image1}
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
