import React from "react";
import image1 from "./college explorer.png";
import image2 from "./college predictor.png";
import image3 from "./podium talks.png";

function HomeFeatures() {
  return (
    <React.Fragment>
      <div className="container-fluid" style={{ width: "95%" }}>
        <div className="row fs-5 my-5">
          <div className="col-lg-4 col-md-6 my-2">
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: "72%",
                height: "95%",
                border: "none",
                borderRadius: "10px",
                boxShadow: "0 0 10px #999",
              }}
            >
              <center>
                <img
                  className="my-3"
                  src={image1}
                  alt="College Explorer"
                  width="120"
                  height="120"
                />
              </center>
              <div className="card-body">
                <h3 className="card-title">
                  <b>College Explorer</b>
                </h3>
                <p className="card-text my-4">
                  Dig into all the <strong>details</strong> of
                  <strong> colleges</strong> needed for admission process.
                </p>
                <button
                  className="btn w-auto mx-auto px-4 my-2"
                  style={{ backgroundColor: "#3ad6ab", color: "white" }}
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 my-2">
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: "72%",
                height: "95%",
                border: "none",
                borderRadius: "10px",
                boxShadow: "0 0 10px #999",
              }}
            >
              <center>
                <img
                  className="my-3"
                  src={image2}
                  alt="College Predictor"
                  width="120"
                  height="120"
                />
              </center>
              <div className="card-body">
                <h3 className="card-title">
                  <b>College Predictor</b>
                </h3>
                <p className="card-text my-4">
                  Enter your rank and <strong>predict</strong> the
                  <strong> best</strong> college for you at ease and comfort.
                </p>
                <button
                  className="btn w-auto mx-auto px-4 my-2"
                  style={{ backgroundColor: "#3ad6ab", color: "white" }}
                >
                  Predict
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-lg-none"></div>
          <div className="col-lg-4 col-md-6 my-2">
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: "72%",
                height: "95%",
                border: "none",
                borderRadius: "10px",
                boxShadow: "0 0 10px #999",
              }}
            >
              <center>
                <img
                  className="my-3"
                  src={image3}
                  alt="Podium Talks"
                  width="120"
                  height="120"
                />
              </center>
              <div className="card-body">
                <h3 className="card-title">
                  <b>Podium Talks</b>
                </h3>
                <p className="card-text my-4">
                  <strong>Listen</strong> to the experiences of
                  <strong> striving</strong> students from various colleges.
                </p>
                <button
                  className="btn w-auto mx-auto px-4 my-2"
                  style={{ backgroundColor: "#3ad6ab", color: "white" }}
                >
                  Listen
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-lg-none"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomeFeatures;
