import React from "react";
import { Link } from "react-router-dom";
// import image1 from "./college explorer.png";
// import image2 from "./college predictor.png";
// import image3 from "./podium talks.png";

function Events() {
  window.onload = function () {
    const slid = document.getElementById("web");
    if (window.innerWidth < 769) {
      slid.style.display = "none";
    } else {
      slid.style.display = "block";
    }
  };

  return (
    <div id="web">
      <h4 className="text-center fw-bold display-6 mt-3">
        Upcoming{" "}
        <span className="text" style={{ color: "#3ad6ab" }}>
          Events
        </span>
      </h4>
      <div
        id="carouselExampleIndicatorss"
        className="carousel slide pt-0"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators" style={{ bottom: "-10px" }}>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicatorss"
            data-bs-slide-to="0"
            className="active mx-1"
            aria-current="true"
            aria-label="Slide 1"
            style={{
              height: "8px",
              width: "9px",
              borderRadius: "80%",
              backgroundColor: "black",
            }}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicatorss"
            className="mx-1"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            style={{
              height: "8px",
              width: "9px",
              borderRadius: "80%",
              backgroundColor: "black",
            }}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicatorss"
            data-bs-slide-to="2"
            className="mx-1"
            aria-label="Slide 3"
            style={{
              height: "8px",
              width: "9px",
              borderRadius: "80%",
              backgroundColor: "black",
            }}
          ></button>
        </div>

        {/* <!--Slides--> */}
        <div
          className="carousel-inner pt-0"
          role="listbox"
          style={{ padding: "3%", marginTop: "2%" }}
        >
          {/* <!--First slide--> */}
          <div
            className="carousel-item active pt-0"
            style={{ backgroundColor: "white", border: "none" }}
          >
            <div className="row pt-0">
              <div className="col-md-4 my-2">
                <div
                  className="card mx-auto my-2 pt-0"
                  style={{
                    minWidth: "250px",
                    width: "85%",
                    height: "95%",
                    border: "none",
                    borderRadius: "10px",
                    boxShadow: "0 0 4px #999",
                  }}
                >
                  <center>
                    <img
                      className="mb-2"
                      src="https://pladex.in/images/home-1.png"
                      alt="College Explorer"
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
                      <b>Upcoming Event 1</b>
                    </h3>
                    <p className="card-text my-4">
                      Dig into all the <strong>details</strong> of
                      <strong> colleges</strong> needed for admission process.
                    </p>
                    <Link to="/EveReg" style={{ textDecoration: "none" }}>
                      <a
                        href="https://www.collegeexplorer.in"
                        className="btn w-auto mx-auto px-4 my-2"
                        style={{ backgroundColor: "#3ad6ab", color: "white" }}
                      >
                        Register
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2 clearfix d-none d-md-block">
                <div
                  className="card mx-auto my-2"
                  style={{
                    minWidth: "250px",
                    width: "85%",
                    height: "95%",
                    border: "none",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px #999",
                  }}
                >
                  <center>
                    <img
                      className="my-2"
                      src="https://pladex.in/images/home-1.png"
                      alt="College Explorer"
                      // width="320"
                      // height="220"
                      style={{ height: "95%", width: "95%" }}
                    />
                  </center>
                  <div className="card-body">
                    <h3 className="card-title">
                      <b>Upcoming Event 2</b>
                    </h3>
                    <p className="card-text my-4">
                      Enter your rank and <strong>predict</strong> the
                      <strong> best</strong> college for you at ease and
                      comfort.
                    </p>
                    <Link to="/EveReg" style={{ textDecoration: "none" }}>
                      <a
                        href="https://www.collegeexplorer.in"
                        className="btn w-auto mx-auto px-4 my-2"
                        style={{ backgroundColor: "#3ad6ab", color: "white" }}
                      >
                        Register
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2 clearfix d-none d-md-block">
                <div
                  className="card mx-auto my-2"
                  style={{
                    minWidth: "250px",
                    width: "85%",
                    height: "95%",
                    border: "none",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px #999",
                  }}
                >
                  <center>
                    <img
                      className="my-2"
                      src="https://pladex.in/images/home-1.png"
                      alt="College Explorer"
                      // width="320"
                      // height="220"
                      style={{ height: "95%", width: "95%" }}
                    />
                  </center>
                  <div className="card-body">
                    <h3 className="card-title">
                      <b>Upcoming Event 3</b>
                    </h3>
                    <p className="card-text my-4">
                      <strong>Listen</strong> to the experiences of
                      <strong> striving</strong> students from various colleges.
                    </p>
                    <Link to="/EveReg" style={{ textDecoration: "none" }}>
                      <a
                        href="https://www.collegeexplorer.in"
                        className="btn w-auto mx-auto px-4 my-2"
                        style={{ backgroundColor: "#3ad6ab", color: "white" }}
                      >
                        Register
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--/.First slide--> */}

          {/* <!--Second slide--> */}
          <div
            className="carousel-item pt-0"
            style={{ backgroundColor: "white", border: "none" }}
          >
            <div className="row pt-0" style={{ backgroundColor: "white" }}>
              <div className="col-md-4 my-2">
                <div
                  className="card mx-auto my-2"
                  style={{
                    minWidth: "250px",
                    width: "85%",
                    height: "95%",
                    border: "none",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px #999",
                  }}
                >
                  <center>
                    <img
                      className="my-2"
                      src="https://pladex.in/images/home-2.png"
                      alt="College Explorer"
                      // width="320"
                      // height="220"
                      style={{ height: "95%", width: "95%" }}
                    />
                  </center>
                  <div className="card-body">
                    <h3 className="card-title">
                      <b>Upcoming Event 1</b>
                    </h3>
                    <p className="card-text my-4">
                      Dig into all the <strong>details</strong> of
                      <strong> colleges</strong> needed for admission process.
                    </p>
                    <Link to="/EveReg" style={{ textDecoration: "none" }}>
                      <a
                        href="https://www.collegeexplorer.in"
                        className="btn w-auto mx-auto px-4 my-2"
                        style={{ backgroundColor: "#3ad6ab", color: "white" }}
                      >
                        Register
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2 clearfix d-none d-md-block">
                <div
                  className="card mx-auto my-2"
                  style={{
                    minWidth: "250px",
                    width: "85%",
                    height: "95%",
                    border: "none",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px #999",
                  }}
                >
                  <center>
                    <img
                      className="my-2"
                      src="https://pladex.in/images/home-2.png"
                      alt="College Explorer"
                      // width="320"
                      // height="220"
                      style={{ height: "95%", width: "95%" }}
                    />
                  </center>
                  <div className="card-body">
                    <h3 className="card-title">
                      <b>Upcoming Event 2</b>
                    </h3>
                    <p className="card-text my-4">
                      Enter your rank and <strong>predict</strong> the
                      <strong> best</strong> college for you at ease and
                      comfort.
                    </p>
                    <Link to="/EveReg" style={{ textDecoration: "none" }}>
                      <a
                        href="https://www.collegeexplorer.in"
                        className="btn w-auto mx-auto px-4 my-2"
                        style={{ backgroundColor: "#3ad6ab", color: "white" }}
                      >
                        Register
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2 clearfix d-none d-md-block">
                <div
                  className="card mx-auto my-2"
                  style={{
                    minWidth: "250px",
                    width: "85%",
                    height: "95%",
                    border: "none",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px #999",
                  }}
                >
                  <center>
                    <img
                      className="my-2"
                      src="https://pladex.in/images/home-2.png"
                      alt="College Explorer"
                      // width="320"
                      // height="220"
                      style={{ height: "95%", width: "95%" }}
                    />
                  </center>
                  <div className="card-body">
                    <h3 className="card-title">
                      <b>Upcoming Event 3</b>
                    </h3>
                    <p className="card-text my-4">
                      <strong>Listen</strong> to the experiences of
                      <strong> striving</strong> students from various colleges.
                    </p>
                    <Link to="/EveReg" style={{ textDecoration: "none" }}>
                      <a
                        href="https://www.collegeexplorer.in"
                        className="btn w-auto mx-auto px-4 my-2"
                        style={{ backgroundColor: "#3ad6ab", color: "white" }}
                      >
                        Register
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--/.Second slide--> */}

          {/* <!--Third slide--> */}
          <div
            className="carousel-item pt-0"
            style={{ backgroundColor: "white", border: "none" }}
          >
            <div className="row pt-0" style={{ backgroundColor: "white" }}>
              <div className="col-md-4 my-2">
                <div
                  className="card mx-auto my-2"
                  style={{
                    minWidth: "250px",
                    width: "85%",
                    height: "95%",
                    border: "none",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px #999",
                  }}
                >
                  <center>
                    <img
                      className="my-2"
                      src="https://pladex.in/images/home-3.png"
                      alt="College Explorer"
                      // width="320"
                      // height="220"
                      style={{ height: "95%", width: "95%" }}
                    />
                  </center>
                  <div className="card-body">
                    <h3 className="card-title">
                      <b>Upcoming Event 1</b>
                    </h3>
                    <p className="card-text my-4">
                      Dig into all the <strong>details</strong> of
                      <strong> colleges</strong> needed for admission process.
                    </p>
                    <Link to="/EveReg" style={{ textDecoration: "none" }}>
                      <a
                        href="https://www.collegeexplorer.in"
                        className="btn w-auto mx-auto px-4 my-2"
                        style={{ backgroundColor: "#3ad6ab", color: "white" }}
                      >
                        Register
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2 clearfix d-none d-md-block">
                <div
                  className="card mx-auto my-2"
                  style={{
                    minWidth: "250px",
                    width: "85%",
                    height: "95%",
                    border: "none",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px #999",
                  }}
                >
                  <center>
                    <img
                      className="my-2"
                      src="https://pladex.in/images/home-3.png"
                      alt="College Explorer"
                      // width="320"
                      // height="220"
                      style={{ height: "95%", width: "95%" }}
                    />
                  </center>
                  <div className="card-body">
                    <h3 className="card-title">
                      <b>Upcoming Event 2</b>
                    </h3>
                    <p className="card-text my-4">
                      Enter your rank and <strong>predict</strong> the
                      <strong> best</strong> college for you at ease and
                      comfort.
                    </p>
                    <Link to="/EveReg" style={{ textDecoration: "none" }}>
                      <a
                        href="https://www.collegeexplorer.in"
                        className="btn w-auto mx-auto px-4 my-2"
                        style={{ backgroundColor: "#3ad6ab", color: "white" }}
                      >
                        Register
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2 clearfix d-none d-md-block">
                <div
                  className="card mx-auto my-2"
                  style={{
                    minWidth: "250px",
                    width: "85%",
                    height: "95%",
                    border: "none",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px #999",
                  }}
                >
                  <center>
                    <img
                      className="my-2"
                      src="https://pladex.in/images/home-3.png"
                      alt="College Explorer"
                      // width="320"
                      // height="220"
                      style={{ height: "95%", width: "95%" }}
                    />
                  </center>
                  <div className="card-body">
                    <h3 className="card-title">
                      <b>Upcoming Event 3</b>
                    </h3>
                    <p className="card-text my-4">
                      <strong>Listen</strong> to the experiences of
                      <strong> striving</strong> students from various colleges.
                    </p>
                    <Link to="/EveReg" style={{ textDecoration: "none" }}>
                      <a
                        href="https://www.collegeexplorer.in"
                        className="btn w-auto mx-auto px-4 my-2"
                        style={{ backgroundColor: "#3ad6ab", color: "white" }}
                      >
                        Register
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--/.Third slide--> */}
        </div>
        {/* <!--/.Slides--> */}
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicatorss"
          role="button"
          data-bs-slide="prev"
          style={{ width: "5%" }}
        >
          <span aria-hidden="true">
            <i
              class="fas fa-chevron-circle-left fs-2"
              style={{ color: "#3ad6ab" }}
            ></i>
          </span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicatorss"
          role="button"
          data-bs-slide="next"
          style={{ width: "5%" }}
        >
          <span aria-hidden="true">
            <i
              class="fas fa-chevron-circle-right fs-2"
              style={{ color: "#3ad6ab" }}
            ></i>
          </span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Events;
