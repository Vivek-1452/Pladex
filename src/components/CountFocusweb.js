import React from "react";
import img1 from "./Icons3d/stud.png";
import img2 from "./Icons3d/inst.png";
import img3 from "./Icons3d/eve.png";
import img4 from "./Icons3d/don.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function CountFocusweb() {
  return (
    <>
      <div
        style={{
          // backgroundImage: "linear-gradient(to right, black , #636363)",
          background: "linear-gradient(to right, #101010, #4b4b4b, #101010)",
          color: "whitesmoke",
        }}
      >
        <div className="container row mx-auto px-lg-5 py-5">
          <div
            className="col-md-2 col-6 my-2"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <img src={img1} alt="Students" height="150" width="150" />
            <h4 className="fw-bold">Students</h4>
            <h5>637</h5>
          </div>
          <div
            className="col-md-2 col-6 my-2"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <img src={img2} alt="Institutions" height="150" width="150" />
            <h4 className="fw-bold">Institutions</h4>
            <h5>12</h5>
          </div>
          <div
            className="col-md-2 col-6 my-2"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <img src={img3} alt="Events" height="150" width="150" />
            <h4 className="fw-bold">Events</h4>
            <h5>38</h5>
          </div>
          <div
            className="col-md-2 col-6 my-2"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <img src={img4} alt="Donations" height="150" width="150" />
            <h4 className="fw-bold">Title 4</h4>
            <h5>123</h5>
          </div>
          <div
            className="col-md-2 col-6 my-2"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <img src={img1} alt="Donations" height="150" width="150" />
            <h4 className="fw-bold">Title 5</h4>
            <h5>456</h5>
          </div>
          <div
            className="col-md-2 col-6 my-2"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <img src={img1} alt="Donations" height="150" width="150" />
            <h4 className="fw-bold">Title 6</h4>
            <h5>789</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountFocusweb;
