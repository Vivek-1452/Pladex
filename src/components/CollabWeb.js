import React from "react";
import image1 from "./collab1.jpeg";
import image2 from "./collab2.png";
import image3 from "./collab3.jpeg";

function Events() {
  window.onload = function () {
    const slide = document.getElementById("web_col");
    if (window.innerWidth < 769) {
      slide.style.display = "none";
    } else {
      slide.style.display = "block";
    }
  };

  return (
    <div id="web_col" style={{ backgroundColor: "#f5f6f7" }}>
      <h4 className="text-center fw-bold display-6 mt-5">
        Our{" "}
        <span className="text" style={{ color: "#3ad6ab" }}>
          Collabs
        </span>
      </h4>
      <div
        id="carouselExampleIndicatorsss"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators" style={{ bottom: "-10px" }}>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicatorsss"
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
            data-bs-target="#carouselExampleIndicatorsss"
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
          {/* <button
            type="button"
            data-bs-target="#carouselExampleIndicatorsss"
            data-bs-slide-to="2"
            className="mx-1"
            aria-label="Slide 3"
            style={{
              height: "8px",
              width: "9px",
              borderRadius: "80%",
              backgroundColor: "black",
            }}
          ></button> */}
        </div>

        {/* <!--Slides--> */}
        <div
          className="carousel-inner pt-0"
          role="listbox"
          style={{ padding: "3%", marginTop: "2%" }}
        >
          {/* <!--First slide--> */}
          <div
            className="carousel-item active"
            style={{ backgroundColor: "#f5f6f7", border: "none" }}
          >
            <div className="row">
              <div className="col-md-4 my-2">
                <div
                  className="card mx-auto my-2"
                  style={{
                    minWidth: "250px",
                    width: "72%",
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
                      Creating an <b>impact</b> on the youth who are struggling
                      to ace their <b>skills</b> through <b>vodcasts</b> and
                      guide viewers by clearing their doubts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2 clearfix d-none d-md-block">
                <div
                  className="card mx-auto my-2"
                  style={{
                    minWidth: "250px",
                    width: "72%",
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
                      alt="College Predictor"
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
                      <b>colleges</b> which helps them for their{" "}
                      <b>admission</b> process.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2 clearfix d-none d-md-block">
                <div
                  className="card mx-auto my-2"
                  style={{
                    minWidth: "250px",
                    width: "72%",
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
                      alt="Podium Talks"
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
                      Helping students to get <b>internship</b> opportunities,
                      jobs, get <b>placement</b> support, <b>free projects</b>{" "}
                      and courses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--/.First slide--> */}

          {/* <!--Second slide--> */}
          <div
            className="carousel-item"
            style={{ backgroundColor: "#f5f6f7", border: "none" }}
          >
            <div className="row" style={{ backgroundColor: "#f5f6f7" }}>
              <div className="col-md-4 my-2">
                <div
                  className="card mx-auto my-2"
                  style={{
                    minWidth: "250px",
                    width: "72%",
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
                      <b>College Explorer</b>
                    </h3>
                    <p className="card-text my-4">
                      Dig into all the <strong>details</strong> of
                      <strong> colleges</strong> needed for admission process.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2 clearfix d-none d-md-block">
                <div
                  className="card mx-auto my-2"
                  style={{
                    minWidth: "250px",
                    width: "72%",
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
                      alt="College Predictor"
                      width="200"
                      height="200"
                      style={{ borderRadius: "50%" }}
                    />
                  </center>
                  <div className="card-body">
                    <h3 className="card-title">
                      <b>College Predictor</b>
                    </h3>
                    <p className="card-text my-4">
                      Enter your rank and <strong>predict</strong> the
                      <strong> best</strong> college for you at ease and
                      comfort.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2 clearfix d-none d-md-block">
                <div
                  className="card mx-auto my-2"
                  style={{
                    minWidth: "250px",
                    width: "72%",
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
                      alt="Podium Talks"
                      width="200"
                      height="200"
                      style={{ borderRadius: "50%" }}
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--/.Second slide--> */}

          {/* <!--Third slide--> */}
          {/* <div className="carousel-item">
            <div className="row" style={{ backgroundColor: "#f5f6f7" }}>
              <div className="col-md-4 my-2">
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
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2 clearfix d-none d-md-block">
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
                      <strong> best</strong> college for you at ease and
                      comfort.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2 clearfix d-none d-md-block">
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
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <!--/.Third slide--> */}
        </div>
        {/* <!--/.Slides--> */}
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicatorsss"
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
          href="#carouselExampleIndicatorsss"
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
