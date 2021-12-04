import React from "react";
import { Link } from "react-router-dom";
// import image1 from "./college explorer.png";
// import image2 from "./college predictor.png";
// import image3 from "./podium talks.png";
import image1 from "./iconDlibrary.png";
import image2 from "./iconClgExplorer.png";
import image3 from "./iconClgPredictor.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function FeatMob() {
  return (
    <div className="row py-4 mx-auto" style={{ backgroundColor: "#f5f6f7" }}>
      {/* <h4 className="text-center fw-bold display-6 mb-4">
        Home{" "}
        <span className="text" style={{ color: "#3ad6ab" }}>
          Features
        </span>
      </h4> */}
      <div
        className="col-lg-4 col-md-6 mb-4"
        data-aos="zoom-in-up"
        data-aos-duration="2500"
      >
        <div
          className="card mx-auto my-2"
          style={{
            minWidth: "250px",
            width: "90%",
            height: "95%",
            border: "2px #3ad6ab",
            borderRadius: "10px",
            boxShadow: "0 0 10px #999",
          }}
        >
          <center>
            <img
              className="my-3"
              src={image1}
              alt="Dlibrary"
              width="120"
              height="120"
            />
          </center>
          <div className="card-body">
            <h3 className="card-title">
              <b>D-Library</b>
            </h3>
            <p className="card-text my-4">
              A vast digital library composed of free <strong>E-books</strong>{" "}
              of all genres, competitive materials and{" "}
              <strong>handwritten notes</strong>.
            </p>
            <Link to="/ComingSoon">
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
      <div
        className="col-lg-4 col-md-6 mb-4"
        data-aos="zoom-in-up"
        data-aos-duration="2500"
      >
        <div
          className="card mx-auto my-2"
          style={{
            minWidth: "250px",
            width: "90%",
            height: "95%",
            border: "2px #3ad6ab",
            borderRadius: "10px",
            boxShadow: "0 0 10px #999",
          }}
        >
          <center>
            <img
              className="my-3"
              src={image2}
              alt="College Explorer"
              width="120"
              height="120"
            />
            {/* <img
              className="my-2"
              src="https://pladex.in/images/home-1.png"
              alt="College Explorer"
              // width="320"
              // height="220"
              style={{ height: "95%", width: "95%" }}
            /> */}
          </center>
          <div className="card-body">
            <h3 className="card-title">
              <b>College Explorer</b>
            </h3>
            <p className="card-text my-4">
              Dig into all the <strong>details</strong> of{" "}
              <strong>colleges</strong> needed for admission process.
            </p>
            <a
              href="https://www.collegeexplorer.in/"
              target="_blank"
              rel="noreferrer"
              className="btn w-auto mx-auto px-4 my-2"
              style={{ backgroundColor: "#3ad6ab", color: "white" }}
            >
              Explore
            </a>
          </div>
        </div>
      </div>
      <div
        className="col-lg-4 col-md-6 mb-4"
        data-aos="zoom-in-up"
        data-aos-duration="2500"
      >
        <div
          className="card mx-auto my-2"
          style={{
            minWidth: "250px",
            width: "90%",
            height: "95%",
            border: "2px #3ad6ab",
            borderRadius: "10px",
            boxShadow: "0 0 10px #999",
          }}
        >
          <center>
            <img
              className="my-3"
              src={image3}
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
              Enter your rank and <strong>predict</strong> the{" "}
              <strong>best college</strong> for you at ease.
            </p>
            <a
              href="https://pladex.in/predictor.html"
              target="_blank"
              rel="noreferrer"
              className="btn w-auto mx-auto px-4 my-2"
              style={{ backgroundColor: "#3ad6ab", color: "white" }}
            >
              Explore
            </a>
          </div>
        </div>
      </div>
      {/* <div
        className="col-lg-4 col-md-6 mb-4"
        data-aos="zoom-in-up"
        data-aos-duration="2500"
      >
        <div
          className="card mx-auto my-2"
          style={{
            minWidth: "250px",
            width: "90%",
            height: "95%",
            border: "2px #3ad6ab",
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
              <strong>Listen</strong> to the experiences of{" "}
              <strong>striving</strong> students from various colleges.
            </p>
            <Link to="/PodTalks" style={{ textDecoration: "none" }}>
              <button
                className="btn w-auto mx-auto px-4 my-2"
                style={{ backgroundColor: "#3ad6ab", color: "white" }}
              >
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div> */}
      {/* <div
        className="col-lg-4 col-md-6 mb-4"
        data-aos="zoom-in-up"
        data-aos-duration="2500"
      >
        <div
          className="card mx-auto my-2"
          style={{
            minWidth: "250px",
            width: "90%",
            height: "95%",
            border: "2px #3ad6ab",
            borderRadius: "10px",
            boxShadow: "0 0 10px #999",
          }}
        >
          <center>
            <img
              className="my-3"
              src={image2}
              alt="Quiz Buzz"
              width="120"
              height="120"
            />
          </center>
          <div className="card-body">
            <h3 className="card-title">
              <b>Quiz Buzz</b>
            </h3>
            <p className="card-text my-4">
              Brainstorming quizzes to brush up your knowledge in{" "}
              <strong>mental ability</strong> & <strong>reasoning</strong> to
              enhance your interview performance.
            </p>
            <button
              className="btn w-auto mx-auto px-4 my-2"
              style={{ backgroundColor: "#3ad6ab", color: "white" }}
            >
              Explore
            </button>
          </div>
        </div>
      </div> */}
      {/* <div
        className="col-lg-4 col-md-6 mb-4"
        data-aos="zoom-in-up"
        data-aos-duration="2500"
      >
        <div
          className="card mx-auto my-2"
          style={{
            minWidth: "250px",
            width: "90%",
            height: "95%",
            border: "2px #3ad6ab",
            borderRadius: "10px",
            boxShadow: "0 0 10px #999",
          }}
        >
          <center>
            <img
              className="my-3"
              src={image3}
              alt="Donations"
              width="120"
              height="120"
            />
          </center>
          <div className="card-body">
            <h3 className="card-title">
              <b>Donations</b>
            </h3>
            <p className="card-text my-4">
              Smaller offerings could make bigger changes. Foster the team by
              <strong> donating</strong> us and make a difference!
            </p>
            <Link to="/ComingSoon">
              <button
                className="btn w-auto mx-auto px-4 my-2"
                style={{ backgroundColor: "#3ad6ab", color: "white" }}
              >
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default FeatMob;
