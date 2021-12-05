import React from "react";
import img1 from "./Icons3d/stud.png";
import img2 from "./Icons3d/inst.png";
import img3 from "./Icons3d/eve.png";
import img4 from "./Icons3d/don.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function Count() {
  return (
    <div style={{ backgroundColor: "#f5f6f7" }}>
      <div className="container row mx-auto px-lg-5">
        <div
          className="col-md-3 col-6 my-4"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1800"
        >
          <img src={img1} alt="Students" height="150" width="150" />
          {/* <i
            class="fas fa-user-graduate my-3"
            style={{ fontSize: "60px", color: "#70e9c7" }}
          ></i> */}
          <h4 className="fw-bold">Students</h4>
          <h5>469</h5>
        </div>
        <div
          className="col-md-3 col-6 my-4"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1800"
        >
          <img src={img2} alt="Institutions" height="150" width="150" />
          {/* <i
            class="fas fa-university my-3"
            style={{ fontSize: "60px", color: "#70e9c7" }}
          ></i> */}
          <h4 className="fw-bold">Institutions</h4>
          <h5>37</h5>
        </div>
        <div
          className="col-md-3 col-6 my-4"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1800"
        >
          <img src={img3} alt="Events" height="150" width="150" />
          {/* <i
            class="fas fa-calendar-alt my-3"
            style={{ fontSize: "60px", color: "#70e9c7" }}
          ></i> */}
          <h4 className="fw-bold">Events</h4>
          <h5>11</h5>
        </div>
        <div
          className="col-md-3 col-6 my-4"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1800"
        >
          <img src={img4} alt="Donations" height="150" width="150" />
          {/* <i
            class="fas fa-hand-holding-usd my-3"
            style={{ fontSize: "60px", color: "#70e9c7" }}
          ></i> */}
          <h4 className="fw-bold">Donations</h4>
          <h5>$ 119.08</h5>
        </div>
      </div>
    </div>
  );
}

export default Count;
