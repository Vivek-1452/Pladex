import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Foot2 from "./foot2";
import Navnew from "./Navnew";
import image1 from "./ImgUpcomEvents/Img1.png";
import image2 from "./ImgUpcomEvents/Img2.png";
import image3 from "./ImgUpcomEvents/Img3.png";
import image4 from "./ImgUpcomEvents/Img4.png";
import image5 from "./ImgUpcomEvents/Img5.png";
import image6 from "./ImgUpcomEvents/Img6.png";
import image7 from "./ImgUpcomEvents/Img7.png";
import pt1 from "./EventLibrary/pt-1.png";
import pt2 from "./EventLibrary/pt-2.png";
import pt3 from "./EventLibrary/pt-3.png";
import pt4 from "./EventLibrary/pt-4.png";
import pt5 from "./EventLibrary/pt-5.png";
import pt6 from "./EventLibrary/pt-6.png";
import pt7 from "./EventLibrary/pt-7.png";
import pt8 from "./EventLibrary/pt-8.png";
import pt9 from "./EventLibrary/pt-9.png";
import pt10 from "./EventLibrary/pt-10.png";
import img1 from "./Events-amico.png";

function EventReg() {
  const [loginauth, setloginauth] = useState(false);

  const loginhandler = () => {
    setloginauth(true);
  };

  function btnClk(typ) {
    if (typ === "all") {
      document.getElementById("CS/ep1").style.display = "block";
      document.getElementById("EC/ep2").style.display = "block";
      document.getElementById("EE/ep3").style.display = "block";
      document.getElementById("EC/ep4").style.display = "block";
      document.getElementById("ME/ep5").style.display = "block";
      document.getElementById("ME/ep6").style.display = "block";
      document.getElementById("EC/ep7").style.display = "block";
      document.getElementById("CH/ep8").style.display = "block";
      document.getElementById("CV/ep9").style.display = "block";
      document.getElementById("ME/ep10").style.display = "block";
      document.getElementById("all").style.backgroundColor = "#262626";
      document.getElementById("cse").style.backgroundColor = "#fbfbfb";
      document.getElementById("ece").style.backgroundColor = "#fbfbfb";
      document.getElementById("mech").style.backgroundColor = "#fbfbfb";
      document.getElementById("chem").style.backgroundColor = "#fbfbfb";
      document.getElementById("civil").style.backgroundColor = "#fbfbfb";
      document.getElementById("all").style.color = "white";
      document.getElementById("cse").style.color = "black";
      document.getElementById("ece").style.color = "black";
      document.getElementById("mech").style.color = "black";
      document.getElementById("chem").style.color = "black";
      document.getElementById("civil").style.color = "black";
    } else if (typ === "cse") {
      document.getElementById("CS/ep1").style.display = "block";
      document.getElementById("EC/ep2").style.display = "none";
      document.getElementById("EE/ep3").style.display = "none";
      document.getElementById("EC/ep4").style.display = "none";
      document.getElementById("ME/ep5").style.display = "none";
      document.getElementById("ME/ep6").style.display = "none";
      document.getElementById("EC/ep7").style.display = "none";
      document.getElementById("CH/ep8").style.display = "none";
      document.getElementById("CV/ep9").style.display = "none";
      document.getElementById("ME/ep10").style.display = "none";
      document.getElementById("all").style.backgroundColor = "#fbfbfb";
      document.getElementById("cse").style.backgroundColor = "#262626";
      document.getElementById("ece").style.backgroundColor = "#fbfbfb";
      document.getElementById("mech").style.backgroundColor = "#fbfbfb";
      document.getElementById("chem").style.backgroundColor = "#fbfbfb";
      document.getElementById("civil").style.backgroundColor = "#fbfbfb";
      document.getElementById("all").style.color = "black";
      document.getElementById("cse").style.color = "white";
      document.getElementById("ece").style.color = "black";
      document.getElementById("mech").style.color = "black";
      document.getElementById("chem").style.color = "black";
      document.getElementById("civil").style.color = "black";
    } else if (typ === "ece") {
      document.getElementById("CS/ep1").style.display = "none";
      document.getElementById("EC/ep2").style.display = "block";
      document.getElementById("EE/ep3").style.display = "none";
      document.getElementById("EC/ep4").style.display = "block";
      document.getElementById("ME/ep5").style.display = "none";
      document.getElementById("ME/ep6").style.display = "none";
      document.getElementById("EC/ep7").style.display = "block";
      document.getElementById("CH/ep8").style.display = "none";
      document.getElementById("CV/ep9").style.display = "none";
      document.getElementById("ME/ep10").style.display = "none";
      document.getElementById("all").style.backgroundColor = "#fbfbfb";
      document.getElementById("cse").style.backgroundColor = "#fbfbfb";
      document.getElementById("ece").style.backgroundColor = "#262626";
      document.getElementById("mech").style.backgroundColor = "#fbfbfb";
      document.getElementById("chem").style.backgroundColor = "#fbfbfb";
      document.getElementById("civil").style.backgroundColor = "#fbfbfb";
      document.getElementById("all").style.color = "black";
      document.getElementById("cse").style.color = "black";
      document.getElementById("ece").style.color = "white";
      document.getElementById("mech").style.color = "black";
      document.getElementById("chem").style.color = "black";
      document.getElementById("civil").style.color = "black";
    } else if (typ === "mech") {
      document.getElementById("CS/ep1").style.display = "none";
      document.getElementById("EC/ep2").style.display = "none";
      document.getElementById("EE/ep3").style.display = "none";
      document.getElementById("EC/ep4").style.display = "none";
      document.getElementById("ME/ep5").style.display = "block";
      document.getElementById("ME/ep6").style.display = "block";
      document.getElementById("EC/ep7").style.display = "none";
      document.getElementById("CH/ep8").style.display = "none";
      document.getElementById("CV/ep9").style.display = "none";
      document.getElementById("ME/ep10").style.display = "block";
      document.getElementById("all").style.backgroundColor = "#fbfbfb";
      document.getElementById("cse").style.backgroundColor = "#fbfbfb";
      document.getElementById("ece").style.backgroundColor = "#fbfbfb";
      document.getElementById("mech").style.backgroundColor = "#262626";
      document.getElementById("chem").style.backgroundColor = "#fbfbfb";
      document.getElementById("civil").style.backgroundColor = "#fbfbfb";
      document.getElementById("all").style.color = "black";
      document.getElementById("cse").style.color = "black";
      document.getElementById("ece").style.color = "black";
      document.getElementById("mech").style.color = "white";
      document.getElementById("chem").style.color = "black";
      document.getElementById("civil").style.color = "black";
    } else if (typ === "chem") {
      document.getElementById("CS/ep1").style.display = "none";
      document.getElementById("EC/ep2").style.display = "none";
      document.getElementById("EE/ep3").style.display = "none";
      document.getElementById("EC/ep4").style.display = "none";
      document.getElementById("ME/ep5").style.display = "none";
      document.getElementById("ME/ep6").style.display = "none";
      document.getElementById("EC/ep7").style.display = "none";
      document.getElementById("CH/ep8").style.display = "block";
      document.getElementById("CV/ep9").style.display = "none";
      document.getElementById("ME/ep10").style.display = "none";
      document.getElementById("all").style.backgroundColor = "#fbfbfb";
      document.getElementById("cse").style.backgroundColor = "#fbfbfb";
      document.getElementById("ece").style.backgroundColor = "#fbfbfb";
      document.getElementById("mech").style.backgroundColor = "#fbfbfb";
      document.getElementById("chem").style.backgroundColor = "#262626";
      document.getElementById("civil").style.backgroundColor = "#fbfbfb";
      document.getElementById("all").style.color = "black";
      document.getElementById("cse").style.color = "black";
      document.getElementById("ece").style.color = "black";
      document.getElementById("mech").style.color = "black";
      document.getElementById("chem").style.color = "white";
      document.getElementById("civil").style.color = "black";
    } else if (typ === "civil") {
      document.getElementById("CS/ep1").style.display = "none";
      document.getElementById("EC/ep2").style.display = "none";
      document.getElementById("EE/ep3").style.display = "none";
      document.getElementById("EC/ep4").style.display = "none";
      document.getElementById("ME/ep5").style.display = "none";
      document.getElementById("ME/ep6").style.display = "none";
      document.getElementById("EC/ep7").style.display = "none";
      document.getElementById("CH/ep8").style.display = "none";
      document.getElementById("CV/ep9").style.display = "block";
      document.getElementById("ME/ep10").style.display = "none";
      document.getElementById("all").style.backgroundColor = "#fbfbfb";
      document.getElementById("cse").style.backgroundColor = "#fbfbfb";
      document.getElementById("ece").style.backgroundColor = "#fbfbfb";
      document.getElementById("mech").style.backgroundColor = "#fbfbfb";
      document.getElementById("chem").style.backgroundColor = "#fbfbfb";
      document.getElementById("civil").style.backgroundColor = "#262626";
      document.getElementById("all").style.color = "black";
      document.getElementById("cse").style.color = "black";
      document.getElementById("ece").style.color = "black";
      document.getElementById("mech").style.color = "black";
      document.getElementById("chem").style.color = "black";
      document.getElementById("civil").style.color = "white";
    }
  }

  return (
    <>
      <Navnew logincheck={loginauth} loginhandler={loginhandler} />
      <div
        className="row py-3"
        style={{
          backgroundImage: "linear-gradient(180deg, #6dd2ae 0%, white 90%)",
        }}
      >
        <div className="row">
          <div className="col-lg-9 col-md-7 col-4 px-lg-0 px-md-0 ps-lg-4 ps-md-4 ps-1">
            <h1
              className="fw-bold ps-4 mt-lg-4 mt-2"
              style={{ textAlign: "left", marginBottom: "60px" }}
            >
              {/* The <span style={{ color: "#3ad6ab" }}>content</span> you consume{" "}
          defines you. */}
              Event Library
            </h1>
            <div className="d-lg-block d-md-block d-none pt-0">
              <h5 className="mt-5 mb-3 fw-light">
                Join the WhatsApp group to get regular event updates
              </h5>
              <a
                href="https://chat.whatsapp.com/EYzfc3YDJ4E2hcdtngSsyJ"
                target="_blank"
                rel="noreferrer"
                className="btn mx-auto px-4 py-2 fs-4"
                style={{
                  backgroundColor: "#25d366",
                  width: "auto",
                  color: "white",
                }}
              >
                <i className="fab fa-whatsapp fs-3"></i>&nbsp; Get notified
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-5 col-8 pe-0">
            <img
              src={img1}
              alt=""
              style={{ height: "100%", width: "80%", float: "right" }}
            />
          </div>
        </div>
      </div>
      <div
        className="row d-lg-none d-md-none d-block pt-4"
        style={{ backgroundColor: "#f5f6f7" }}
      >
        <h6 className="mb-3 fw-light">
          Join the WhatsApp group to get regular event updates
        </h6>
        <a
          href="https://chat.whatsapp.com/EYzfc3YDJ4E2hcdtngSsyJ"
          target="_blank"
          rel="noreferrer"
          className="btn mx-auto px-4 py-2 fs-5"
          style={{
            backgroundColor: "#25d366",
            width: "auto",
            color: "white",
          }}
        >
          <i className="fab fa-whatsapp fs-3"></i>&nbsp; Get notified
        </a>
      </div>
      <div className="row py-4 mx-auto" style={{ backgroundColor: "#f5f6f7" }}>
        <h2 className="text-center fw-bold my-3">
          Upcoming{" "}
          <span className="text" style={{ color: "#3ad6ab" }}>
            Events
          </span>
        </h2>
        <div className="col-md-6 col-lg-4 my-4">
          <div
            className="card mx-auto my-2 pt-0"
            style={{
              minWidth: "250px",
              width: "80%",
              height: "95%",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 0 3px #999",
            }}
          >
            <center>
              <img
                className="mb-2"
                src={image2}
                alt="Upcoming Event 2"
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
                <span className="text" style={{ color: "#da6220" }}>
                  {/* <b>Entrepreneurship</b> */}
                </span>
              </h3>
              <p className="card-text my-4">
                Construct and Evolve. Get inspired to be an entrepreneur!
              </p>
              <p className="float-lg-start my-3 ms-3">Dec 18 | 6:30 PM</p>
              <Link to="/CheckRegister">
                <button
                  className="btn w-auto mx-3 px-4 my-2 float-lg-end"
                  style={{ backgroundColor: "#3ad6ab", color: "white" }}
                >
                  {/* <AddToCalendar event={event} listItems={items} /> */}
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-4">
          <div
            className="card mx-auto my-2 pt-0"
            style={{
              minWidth: "250px",
              width: "80%",
              height: "95%",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 0 3px #999",
            }}
          >
            <center>
              <img
                className="mb-2"
                src={image1}
                alt="Upcoming Event 1"
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
                <span className="text" style={{ color: "#da6220" }}>
                  {/* <b>Women Empowerment</b> */}
                </span>
              </h3>
              <p className="card-text my-4">
                Importance of women empowerment in sustainable development.
              </p>
              <p className="float-lg-start my-3 ms-3">Dec 19 | 6:30 PM</p>
              <Link to="/CheckRegister">
                <button
                  className="btn w-auto mx-3 px-4 my-2 float-lg-end"
                  style={{ backgroundColor: "#3ad6ab", color: "white" }}
                >
                  {/* <AddToCalendar event={event} listItems={items} /> */}
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-4">
          <div
            className="card mx-auto my-2 pt-0"
            style={{
              minWidth: "250px",
              width: "80%",
              height: "95%",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 0 3px #999",
            }}
          >
            <center>
              <img
                className="mb-2"
                src={image3}
                alt="Upcoming Event 3"
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
                <span className="text" style={{ color: "#da6220" }}>
                  {/* <b>Mental Health</b> */}
                </span>
              </h3>
              <p className="card-text my-4">
                Know feasible ways to relieve stress & anxiety and be mentally
                fit.
              </p>
              <p className="float-lg-start my-3 ms-3">Dec 20 | 6:30 PM</p>
              <Link to="/CheckRegister">
                <button
                  className="btn w-auto mx-3 px-4 my-2 float-lg-end"
                  style={{ backgroundColor: "#3ad6ab", color: "white" }}
                >
                  {/* <AddToCalendar event={event} listItems={items} /> */}
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-4">
          <div
            className="card mx-auto my-2 pt-0"
            style={{
              minWidth: "250px",
              width: "80%",
              height: "95%",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 0 3px #999",
            }}
          >
            <center>
              <img
                className="mb-2"
                src={image4}
                alt="Upcoming Event 4"
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
                <span className="text" style={{ color: "#da6220" }}>
                  {/* <b>Emerging Technologies</b> */}
                </span>
              </h3>
              <p className="card-text my-4">
                Latest on boarding technology is more than just technical
                intelligence.
              </p>
              <p className="float-lg-start my-3 ms-3">Dec 21 | 6:30 PM</p>
              <Link to="/CheckRegister">
                <button
                  className="btn w-auto mx-3 px-4 my-2 float-lg-end"
                  style={{ backgroundColor: "#3ad6ab", color: "white" }}
                >
                  {/* <AddToCalendar event={event} listItems={items} /> */}
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-4">
          <div
            className="card mx-auto my-2 pt-0"
            style={{
              minWidth: "250px",
              width: "80%",
              height: "95%",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 0 3px #999",
            }}
          >
            <center>
              <img
                className="mb-2"
                src={image5}
                alt="Upcoming Event 5"
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
                <span className="text" style={{ color: "#da6220" }}>
                  {/* <b>Self Defense</b> */}
                </span>
              </h3>
              <p className="card-text my-4">
                How to tackle hassle conditions and defend yourself?
              </p>
              <p className="float-lg-start my-3 ms-3">Dec 22 | 6:30 PM</p>
              <Link to="/CheckRegister">
                <button
                  className="btn w-auto mx-3 px-4 my-2 float-lg-end"
                  style={{ backgroundColor: "#3ad6ab", color: "white" }}
                >
                  {/* <AddToCalendar event={event} listItems={items} /> */}
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-4">
          <div
            className="card mx-auto my-2 pt-0"
            style={{
              minWidth: "250px",
              width: "80%",
              height: "95%",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 0 3px #999",
            }}
          >
            <center>
              <img
                className="mb-2"
                src={image6}
                alt="Upcoming Event 6"
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
                <span className="text" style={{ color: "#da6220" }}>
                  {/* <b>Personality Development</b> */}
                </span>
              </h3>
              <p className="card-text my-4">
                Hone your soft skills and develop a positive influence.
              </p>
              <p className="float-lg-start my-3 ms-3">Dec 23 | 6:30 PM</p>
              <Link to="/CheckRegister">
                <button
                  className="btn w-auto mx-3 px-4 my-2 float-lg-end"
                  style={{ backgroundColor: "#3ad6ab", color: "white" }}
                >
                  {/* <AddToCalendar event={event} listItems={items} /> */}
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-lg-4 d-sm-none d-md-block d-lg-block"></div>
        <div className="col-md-6 col-lg-4 my-4">
          <div
            className="card mx-auto my-2 pt-0"
            style={{
              minWidth: "250px",
              width: "80%",
              height: "95%",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 0 3px #999",
            }}
          >
            <center>
              <img
                className="mb-2"
                src={image7}
                alt="Upcoming Event 7"
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
                <span className="text" style={{ color: "#da6220" }}>
                  {/* <b>Basic Laws and Rights</b> */}
                </span>
              </h3>
              <p className="card-text my-4">
                Basic laws & rights that all the students need be aware of.
              </p>
              <p className="float-lg-start my-3 ms-3">Dec 24 | 6:30 PM</p>
              <Link to="/CheckRegister">
                <button
                  className="btn w-auto mx-3 px-4 my-2 float-lg-end"
                  style={{ backgroundColor: "#3ad6ab", color: "white" }}
                >
                  {/* <AddToCalendar event={event} listItems={items} /> */}
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-lg-4 d-sm-none d-md-block d-lg-block"></div>
      </div>

      {/* Event library */}

      <div className="row py-4">
        <h2 className="text-center fw-bold my-3">
          Event{" "}
          <span className="text" style={{ color: "#3ad6ab" }}>
            library
          </span>
        </h2>
        <div className="text-start ms-md-4 ms-3 my-4">
          <button
            id="all"
            className="btn btn-dark px-4 m-2"
            style={{ border: "1px solid #31343c" }}
            onClick={() => btnClk("all")}
          >
            All
          </button>
          <button
            id="cse"
            className="btn btn-light px-4 m-2"
            style={{ border: "1px solid #31343c", outline: "none" }}
            onClick={() => btnClk("cse")}
          >
            CSE
          </button>
          <button
            id="ece"
            className="btn btn-light px-4 m-2"
            style={{ border: "1px solid #31343c" }}
            onClick={() => btnClk("ece")}
          >
            ECE
          </button>
          <button
            id="mech"
            className="btn btn-light px-4 m-2"
            style={{ border: "1px solid #31343c" }}
            onClick={() => btnClk("mech")}
          >
            Mech
          </button>
          <button
            id="chem"
            className="btn btn-light px-4 m-2"
            style={{ border: "1px solid #31343c" }}
            onClick={() => btnClk("chem")}
          >
            Chemical
          </button>
          <button
            id="civil"
            className="btn btn-light px-4 m-2"
            style={{ border: "1px solid #31343c" }}
            onClick={() => btnClk("civil")}
          >
            Civil
          </button>
        </div>
        <div className="col-md-6 col-lg-4 my-4" id="ME/ep10">
          <div
            className="card mx-auto my-2 pt-0"
            style={{
              minWidth: "250px",
              width: "75%",
              height: "95%",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 0 3px #999",
            }}
          >
            <center>
              <img
                className="mb-2"
                src={pt10}
                alt="Podium Talks 10"
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
              <h3 className="card-title">{/* <b>Episode 10</b> */}</h3>
              {/* <h5>Week 8</h5> */}
              <p className="card-text my-4">
                Watch how a <b>Mechanical Engineer</b> cracked <b>IES</b> who is
                now working at Indian railways.
              </p>
              <Link to="/ep10" style={{ textDecoration: "none" }}>
                <a
                  href="."
                  className="btn btn-light mx-2 px-3 my-2 float-lg-start"
                >
                  Documentation
                </a>
              </Link>
              <a
                href="https://youtu.be/UTDBHHTPO3I"
                target="_blank"
                rel="noreferrer"
                className="btn w-auto m-2 px-3 float-lg-end"
                style={{ backgroundColor: "#3ad6ab", color: "white" }}
              >
                Watch now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-4" id="CV/ep9">
          <div
            className="card mx-auto my-2 pt-0"
            style={{
              minWidth: "250px",
              width: "75%",
              height: "95%",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 0 3px #999",
            }}
          >
            <center>
              <img
                className="mb-2"
                src={pt9}
                alt="Podium Talks 9"
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
              <h3 className="card-title">{/* <b>Episode 9</b> */}</h3>
              {/* <h5>Week 8</h5> */}
              <p className="card-text my-4">
                Listen from him how a life of a <b>Civil Engineer</b> would be
                at <b>L&T</b>.
              </p>
              <Link to="/ep9" style={{ textDecoration: "none" }}>
                <a
                  href="."
                  className="btn btn-light mx-2 px-3 my-2 float-lg-start"
                >
                  Documentation
                </a>
              </Link>
              <a
                href="https://youtu.be/UTDBHHTPO3I"
                target="_blank"
                rel="noreferrer"
                className="btn w-auto m-2 px-3 float-lg-end"
                style={{ backgroundColor: "#3ad6ab", color: "white" }}
              >
                Watch now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-4" id="CH/ep8">
          <div
            className="card mx-auto my-2 pt-0"
            style={{
              minWidth: "250px",
              width: "75%",
              height: "95%",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 0 3px #999",
            }}
          >
            <center>
              <img
                className="mb-2"
                src={pt8}
                alt="Podium Talks 8"
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
              <h3 className="card-title">{/* <b>Episode 8</b> */}</h3>
              {/* <h5>Week 8</h5> */}
              <p className="card-text my-4">
                Hear from the <b>Cornell's chemical graduate</b> how he
                constantly has been in the research field.
              </p>
              <Link to="/ep8" style={{ textDecoration: "none" }}>
                <a
                  href="."
                  className="btn btn-light mx-2 px-3 my-2 float-lg-start"
                >
                  Documentation
                </a>
              </Link>
              <a
                href="https://youtu.be/UTDBHHTPO3I"
                target="_blank"
                rel="noreferrer"
                className="btn w-auto m-2 px-3 float-lg-end"
                style={{ backgroundColor: "#3ad6ab", color: "white" }}
              >
                Watch now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-4" id="EC/ep7">
          <div
            className="card mx-auto my-2 pt-0"
            style={{
              minWidth: "250px",
              width: "75%",
              height: "95%",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 0 3px #999",
            }}
          >
            <center>
              <img
                className="mb-2"
                src={pt7}
                alt="Podium Talks 7"
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
              <h3 className="card-title">{/* <b>Episode 7</b> */}</h3>
              <p className="card-text my-4">
                Know how he reached <b>Texas A&M</b> all the way from University
                of Mumbai pursuing <b>Electronics</b>.
              </p>
              <Link to="/ep7" style={{ textDecoration: "none" }}>
                <a
                  href="."
                  className="btn btn-light mx-2 px-3 my-2 float-lg-start"
                >
                  Documentation
                </a>
              </Link>
              <a
                href="https://www.youtube.com/watch?v=CfwvNextxqY"
                target="_blank"
                rel="noreferrer"
                className="btn w-auto m-2 px-3 float-lg-end"
                style={{ backgroundColor: "#3ad6ab", color: "white" }}
              >
                Watch now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-4" id="ME/ep6">
          <div
            className="card mx-auto my-2 pt-0"
            style={{
              minWidth: "250px",
              width: "75%",
              height: "95%",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 0 3px #999",
            }}
          >
            <center>
              <img
                className="mb-2"
                src={pt6}
                alt="Podium Talks 6"
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
              <h3 className="card-title">{/* <b>Episode 6</b> */}</h3>
              <p className="card-text my-4">
                Watch the insights of how he cracked <b>CAT</b> exam and set
                down in <b>IIM Ahmedabad</b>.
              </p>
              <Link to="/ep6" style={{ textDecoration: "none" }}>
                <a
                  href="."
                  className="btn btn-light mx-2 px-3 my-2 float-lg-start"
                >
                  Documentation
                </a>
              </Link>
              <a
                href="https://www.youtube.com/watch?v=7u6qK869afE"
                target="_blank"
                rel="noreferrer"
                className="btn w-auto m-2 px-3 float-lg-end"
                style={{ backgroundColor: "#3ad6ab", color: "white" }}
              >
                Watch now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-4" id="ME/ep5">
          <div
            className="card mx-auto my-2 pt-0"
            style={{
              minWidth: "250px",
              width: "75%",
              height: "95%",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 0 3px #999",
            }}
          >
            <center>
              <img
                className="mb-2"
                src={pt5}
                alt="Podium Talks 5"
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
              <h3 className="card-title">{/* <b>Episode 5</b> */}</h3>
              <p className="card-text my-4">
                Peek at the roadmap how she landed at <b>ExxonMobil</b> from{" "}
                <b>Mechanical branch</b>.
              </p>
              <Link to="/ep5" style={{ textDecoration: "none" }}>
                <a
                  href="."
                  className="btn btn-light mx-2 px-3 my-2 float-lg-start"
                >
                  Documentation
                </a>
              </Link>
              <a
                href="https://www.youtube.com/watch?v=QaHIhpg4Y3k"
                target="_blank"
                rel="noreferrer"
                className="btn w-auto m-2 px-3 float-lg-end"
                style={{ backgroundColor: "#3ad6ab", color: "white" }}
              >
                Watch now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-4" id="EC/ep4">
          <div
            className="card mx-auto my-2 pt-0"
            style={{
              minWidth: "250px",
              width: "75%",
              height: "95%",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 0 3px #999",
            }}
          >
            <center>
              <img
                className="mb-2"
                src={pt4}
                alt="Podium Talks 4"
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
              <h3 className="card-title">{/* <b>Episode 4</b> */}</h3>
              <p className="card-text my-4">
                Know how one can balance various aspects in life such as{" "}
                <b>academics</b> and <b>passion</b>.
              </p>
              <Link to="/ep4" style={{ textDecoration: "none" }}>
                <a
                  href="."
                  className="btn btn-light mx-2 px-3 my-2 float-lg-start"
                >
                  Documentation
                </a>
              </Link>
              <a
                href="https://www.youtube.com/watch?v=YD1qgxbkv6E"
                target="_blank"
                rel="noreferrer"
                className="btn w-auto m-2 px-3 float-lg-end"
                style={{ backgroundColor: "#3ad6ab", color: "white" }}
              >
                Watch now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-4" id="EE/ep3">
          <div
            className="card mx-auto my-2 pt-0"
            style={{
              minWidth: "250px",
              width: "75%",
              height: "95%",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 0 3px #999",
            }}
          >
            <center>
              <img
                className="mb-2"
                src={pt3}
                alt="Podium Talks 3"
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
              <h3 className="card-title">{/* <b>Episode 3</b> */}</h3>
              <p className="card-text my-4">
                Experience how she overcame all the <b>stereotypical hurdles</b>{" "}
                and explored various career paths.
              </p>
              <Link to="/ep3" style={{ textDecoration: "none" }}>
                <a
                  href="."
                  className="btn btn-light mx-2 px-3 my-2 float-lg-start"
                >
                  Documentation
                </a>
              </Link>
              <a
                href="https://www.youtube.com/watch?v=uhRAyxTv1YA"
                target="_blank"
                rel="noreferrer"
                className="btn w-auto m-2 px-3 float-lg-end"
                style={{ backgroundColor: "#3ad6ab", color: "white" }}
              >
                Watch now
              </a>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-2"></div> */}
        <div className="col-md-6 col-lg-4 my-4" id="EC/ep2">
          <div
            className="card mx-auto my-2 pt-0"
            style={{
              minWidth: "250px",
              width: "75%",
              height: "95%",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 0 3px #999",
            }}
          >
            <center>
              <img
                className="mb-2"
                src={pt2}
                alt="Podium Talks 2"
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
              <h3 className="card-title">{/* <b>Episode 2</b> */}</h3>
              <p className="card-text my-4">
                Know all preparation strategies to crack <b>GATE</b> examination
                with <b>AIR 4</b>.
              </p>
              <Link to="/ep2" style={{ textDecoration: "none" }}>
                <a
                  href="."
                  className="btn btn-light mx-2 px-3 my-2 float-lg-start"
                >
                  Documentation
                </a>
              </Link>
              <a
                href="https://www.youtube.com/watch?v=aF3HvqwdJxQ"
                target="_blank"
                rel="noreferrer"
                className="btn w-auto m-2 px-3 float-lg-end"
                style={{ backgroundColor: "#3ad6ab", color: "white" }}
              >
                Watch now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-4" id="CS/ep1">
          <div
            className="card mx-auto my-2 pt-0"
            style={{
              minWidth: "250px",
              width: "75%",
              height: "95%",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 0 3px #999",
            }}
          >
            <center>
              <img
                className="mb-2"
                src={pt1}
                alt="Podium Talks 1"
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
              <h3 className="card-title">{/* <b>Episode 1</b> */}</h3>
              <p className="card-text my-4">
                Ace <b>competitive coding</b> and get tips on tackling interview
                sessions of <b>MNCs</b>.
              </p>
              <Link to="/ep1" style={{ textDecoration: "none" }}>
                <a
                  href="."
                  className="btn btn-light mx-2 px-3 my-2 float-lg-start"
                >
                  Documentation
                </a>
              </Link>
              <a
                href="https://www.youtube.com/watch?v=q8m43j9XlHo"
                target="_blank"
                rel="noreferrer"
                className="btn w-auto m-2 px-3 float-lg-end"
                style={{ backgroundColor: "#3ad6ab", color: "white" }}
              >
                Watch now
              </a>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-2"></div> */}
      </div>
      <Foot2 />
    </>
  );
}

export default EventReg;
