// App.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Event.css";
import img1 from "./Icons3d/stud.png";
import img2 from "./Icons3d/inst.png";
import img3 from "./Icons3d/eve.png";
import img4 from "./Icons3d/don.png";
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
      title: "Beta Testers",
      label1: "Students",
      label2: "637",
      label3:
        "who are struggling to ace their skills through vodcasts and guide viewers by clearing their doubts.",
      image: img1,
    },
    {
      id: 2,
      title: "College Explorer",
      label1: "Institutions",
      label2: "27",
      label3: "which helps them for their admission process.",
      image: img2,
    },
    {
      id: 3,
      title: "Codified Youth",
      label1: "Events",
      label2: "14",
      label3: "free projects and courses.",
      image: img3,
    },
    {
      id: 4,
      title: "Upcoming Event 4",
      label1: "Title 4",
      label2: "123",
      label3: "needed for admission process.",
      image: img4,
    },
    {
      id: 5,
      title: "Upcoming Event 5",
      label1: "Title 5",
      label2: "456",
      label3: "college for you at ease and comfort.",
      image: img1,
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
        className="slider-wrapper py-5"
        id="mobile"
        style={{ backgroundColor: "#f5f6f7", backgroundImage: `url(${bg})` }}
      >
        <Slider {...settings}>
          {slidesData.map((slide) => (
            <div>
              <div className="slick-slide w-100" key={slide.id}>
                <div
                  className="mx-auto my-2 pb-3"
                  style={{
                    minWidth: "250px",
                    width: "80%",
                    height: "95%",
                    border: "none",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px #999",
                    backgroundColor: "whitesmoke",
                  }}
                  data-aos="flip-left"
                  data-aos-duration="2500"
                >
                  <center>
                    <div className="my-2">
                      <img
                        src={slide.image}
                        alt="Students"
                        height="150"
                        width="150"
                      />
                      <h4 className="fw-bold">{slide.label1}</h4>
                      <h5>{slide.label2}</h5>
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
