// App.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Event.css";
import "./upcom.css";
import img1 from "./Icons3d/stud.png";
import img2 from "./Icons3d/inst.png";
import img3 from "./Icons3d/eve.png";
import img4 from "./Icons3d/don.png";
import img5 from "./Icons3d/spon.png";
import img6 from "./Icons3d/part.png";
import bg from "./FocusImages/iconsBg.png";

function CountFocusmob() {
  window.onload = function () {
    const divis = document.getElementById("mobile");
    if (window.innerWidth < 769) {
      divis.style.display = "block";
    } else {
      divis.style.display = "none";
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
  };

  const slidesData = [
    {
      id: 1,
      label1: "Students",
      label2: "469",
      image: img1,
      label12: "Institutions",
      label22: "37",
      image2: img2,
    },
    {
      id: 2,
      label1: "Events",
      label2: "11",
      image: img3,
      label12: "Sponsors",
      label22: "3",
      image2: img5,
    },
    {
      id: 3,
      label1: "Partners",
      label2: "5",
      image: img6,
      label12: "Donations",
      label22: "$ 0.00",
      image2: img4,
    },
    // {
    //   id: 6,
    //   title: "Upcoming Event 6",
    //   label1: "Title 6",
    //   label2: "789",
    //   label3: "from various colleges.",
    //   image: img1,
    // },
  ];

  return (
    <React.Fragment>
      <div
        className="slider-wrapper py-md-5 pb-5 pt-0"
        id="mobile"
        style={{ backgroundColor: "#f5f6f7", backgroundImage: `url(${bg})` }}
      >
        <Slider {...settings}>
          {slidesData.map((slide) => (
            <div className="pt-0">
              <div className="slick-slide w-100 pt-0" key={slide.id}>
                <div
                  className="mx-auto my-2 pb-3 pt-0"
                  style={{
                    minWidth: "250px",
                    width: "80%",
                    height: "95%",
                    border: "none",
                    borderRadius: "10px",
                    // boxShadow: "0 0 10px #999",
                    // backgroundColor: "whitesmoke",
                  }}
                  data-aos="zoom-in"
                  data-aos-duration="2500"
                >
                  <center>
                    <div className="row pt-0">
                      <div className="col-6 pt-0">
                        <div
                          className="mb-2 pt-0"
                          style={{ display: "inline-block", width: "auto" }}
                        >
                          <img
                            src={slide.image}
                            alt="Students"
                            height="150"
                            width="150"
                          />
                          <h4
                            className="fw-bold"
                            style={{
                              display: "inline-block",
                              width: "auto",
                              color: "white",
                            }}
                          >
                            {slide.label1}
                          </h4>
                          <br />
                          <h5
                            style={{
                              display: "inline-block",
                              width: "auto",
                              color: "white",
                            }}
                          >
                            {slide.label2}
                          </h5>
                        </div>
                      </div>
                      <div className="col-6 pt-0">
                        <div
                          className="mb-2 pt-0"
                          style={{ display: "inline-block", width: "auto" }}
                        >
                          <img
                            src={slide.image2}
                            alt="Students"
                            height="150"
                            width="150"
                          />
                          <h4
                            className="fw-bold"
                            style={{
                              display: "inline-block",
                              width: "auto",
                              color: "white",
                            }}
                          >
                            {slide.label12}
                          </h4>
                          <br />
                          <h5
                            style={{
                              display: "inline-block",
                              width: "auto",
                              color: "white",
                            }}
                          >
                            {slide.label22}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </center>
                  {/* <div className="card-body">
                    <h3 className="card-title">
                      <b>{slide.title}</b>
                    </h3>
                    <p className="card-text my-4">
                      {slide.label1}
                      <b>{slide.label2}</b>
                      {slide.label3}
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </React.Fragment>
  );
}

export default CountFocusmob;
