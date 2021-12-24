import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import img1 from "./Icons3d/stud.png";
import img2 from "./Icons3d/inst.png";
import img3 from "./Icons3d/eve.png";
import img4 from "./Icons3d/don.png";
import img5 from "./Icons3d/spon.png";
import img6 from "./Icons3d/part.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function CountFocusweb() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    if (window.location.origin == "https://www.pladex.in") {
      axios.get("https://www.pladex.in/count_students").then((response) => {
        setStudents(response.data);
      });
    } else {
      axios.get("https://pladex.in/count_students").then((response) => {
        setStudents(response.data);
      });
    }
  }, [students]);

  const [inst, setInst] = useState([]);

  useEffect(() => {
    if (window.location.origin == "https://www.pladex.in") {
      axios.get("https://www.pladex.in/count_inst").then((response) => {
        setInst(response.data);
      });
    } else {
      axios.get("https://pladex.in/count_inst").then((response) => {
        setInst(response.data);
      });
    }
  }, [inst]);

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
            <h5>{students.count_students}</h5>
          </div>
          <div
            className="col-md-2 col-6 my-2"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <img src={img2} alt="Institutions" height="150" width="150" />
            <h4 className="fw-bold">Institutions</h4>
            <h5>{inst.count}</h5>
          </div>
          <div
            className="col-md-2 col-6 my-2"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <img src={img3} alt="Events" height="150" width="150" />
            <h4 className="fw-bold">Events</h4>
            <h5>11</h5>
          </div>
          <div
            className="col-md-2 col-6 my-2"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <img src={img5} alt="Donations" height="150" width="150" />
            <h4 className="fw-bold">Sponsors</h4>
            <h5>3</h5>
          </div>
          <div
            className="col-md-2 col-6 my-2"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <img src={img6} alt="Donations" height="150" width="150" />
            <h4 className="fw-bold">Partners</h4>
            <h5>26</h5>
          </div>
          <div
            className="col-md-2 col-6 my-2"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <img src={img4} alt="Donations" height="150" width="150" />
            <h4 className="fw-bold">Donations</h4>
            <h5>$ 0.00</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountFocusweb;
