import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Foot2 from "./foot2";
import Navnew from "./Navnew";
import imgabout from "./helpnsupp.svg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function JoinUs() {
  const [loginauth, setloginauth] = useState(false);

  const [mail, setmail] = useState("");

  const loginhandler = () => {
    setloginauth(true);
  };

  const [display, setdisplay] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setdisplay(true);
    }
  }, [display]);

  const clicking = (id) => {
    if (id == "q1") {
      if (document.getElementById("q1").style.display == "none") {
        document.getElementById("q1").style.display = "block";
        document.getElementById("i1").className = "fas fa-minus-circle";
      } else {
        document.getElementById("q1").style.display = "none";
        document.getElementById("i1").className = "fas fa-plus-circle";
      }
    } else if (id == "q2") {
      if (document.getElementById("q2").style.display == "none") {
        document.getElementById("q2").style.display = "block";
        document.getElementById("i2").className = "fas fa-minus-circle";
      } else {
        document.getElementById("q2").style.display = "none";
        document.getElementById("i2").className = "fas fa-plus-circle";
      }
    } else if (id == "q3") {
      if (document.getElementById("q3").style.display == "none") {
        document.getElementById("q3").style.display = "block";
        document.getElementById("i3").className = "fas fa-minus-circle";
      } else {
        document.getElementById("q3").style.display = "none";
        document.getElementById("i3").className = "fas fa-plus-circle";
      }
    } else if (id == "q4") {
      if (document.getElementById("q4").style.display == "none") {
        document.getElementById("q4").style.display = "block";
        document.getElementById("i4").className = "fas fa-minus-circle";
      } else {
        document.getElementById("q4").style.display = "none";
        document.getElementById("i4").className = "fas fa-plus-circle";
      }
    } else if (id == "q5") {
      if (document.getElementById("q5").style.display == "none") {
        document.getElementById("q5").style.display = "block";
        document.getElementById("i5").className = "fas fa-minus-circle";
      } else {
        document.getElementById("q5").style.display = "none";
        document.getElementById("i5").className = "fas fa-plus-circle";
      }
    } else if (id == "q6") {
      if (document.getElementById("q6").style.display == "none") {
        document.getElementById("q6").style.display = "block";
        document.getElementById("i6").className = "fas fa-minus-circle";
      } else {
        document.getElementById("q6").style.display = "none";
        document.getElementById("i6").className = "fas fa-plus-circle";
      }
    }
  };

  return (
    <>
      <Navnew logincheck={loginauth} loginhandler={loginhandler} />
      <div className="container-fluid pt-0">
        <div
          className="row py-3"
          style={{
            backgroundImage: "linear-gradient(180deg, #6dd2ae 0%, white 90%)",
          }}
        >
          <div className="row">
            <div className="col-lg-9 col-md-7 col-5 px-lg-0 px-md-0 ps-lg-4 ps-md-4 ps-1">
              <h1
                className="fw-bold ps-4 mt-lg-4 mt-2"
                style={{ textAlign: "left", marginBottom: "60px" }}
              >
                Help & Support
              </h1>
              <div className="d-lg-block d-md-block d-none pt-1">
                <h5 className="mt-5 mb-3" style={{ fontFamily: "cursive" }}>
                  Everything you need to know about Pladex.
                </h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 col-7 pe-0 py-5">
              <img
                src={imgabout}
                alt=""
                style={{ height: "100%", width: "80%", float: "right" }}
              />
            </div>
          </div>
        </div>
        {/* <h4 className="text-center fw-bold display-6 my-4">
        Join{" "}
        <span className="text" style={{ color: "#3ad6ab" }}>
          Us
        </span>
      </h4> */}
        <div className="row py-1 py-md-4 px-3 px-md-5">
          <div
            className="col-lg-4 col-md-5 text-start px-3 py-md-3 pt-4"
            style={{
              borderRadius: display ? "15px 15px 0 0" : "15px",
              backgroundColor: "#fcfcfc",
              borderRight: display ? "0" : "10px solid white",
            }}
          >
            <p className="fw-bold mb-0" style={{ color: "#3ad6ab" }}>
              Support
            </p>
            <h1>FAQs</h1>
            <p style={{ color: "#595959" }}>
              Everything you need to know about us. Can't find the answer you're
              looking for? Please mail to us.
            </p>
          </div>
          <div
            className="col-lg-8 col-md-7 text-start px-3 py-md-3 pb-4"
            style={{
              borderRadius: display ? "0 0 15px 15px" : "15px",
              backgroundColor: "#fcfcfc",
            }}
          >
            <div className="row">
              <div className="col-10">
                <p className="fw-bold mb-0">col-lg-9 col-md-7 col-5 px-lg-0?</p>
                <p id="q1" style={{ color: "#595959", display: "none" }}>
                  Everything you need to know about us. Can't find the answer
                  you're looking for. Please mail to us. Everything you need to
                  know about us. Can't find the answer you're looking for.
                  Please mail to us.
                </p>
              </div>
              <div className="col-2">
                <button
                  className="btn p-0 float-end"
                  onClick={() => clicking("q1")}
                >
                  <i id="i1" className="fas fa-plus-circle"></i>
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <p className="fw-bold mb-0">col-lg-9 col-md-7 col-5 px-lg-0?</p>
                <p id="q2" style={{ color: "#595959", display: "none" }}>
                  Everything you need to know about us. Can't find the answer
                  you're looking for. Please mail to us. Everything you need to
                  know about us. Can't find the answer you're looking for.
                  Please mail to us.
                </p>
              </div>
              <div className="col-2">
                <button
                  className="btn p-0 float-end"
                  onClick={() => clicking("q2")}
                >
                  <i id="i2" className="fas fa-plus-circle"></i>
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <p className="fw-bold mb-0">col-lg-9 col-md-7 col-5 px-lg-0?</p>
                <p id="q3" style={{ color: "#595959", display: "none" }}>
                  Everything you need to know about us. Can't find the answer
                  you're looking for. Please mail to us. Everything you need to
                  know about us. Can't find the answer you're looking for.
                  Please mail to us.
                </p>
              </div>
              <div className="col-2">
                <button
                  className="btn p-0 float-end"
                  onClick={() => clicking("q3")}
                >
                  <i id="i3" className="fas fa-plus-circle"></i>
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <p className="fw-bold mb-0">col-lg-9 col-md-7 col-5 px-lg-0?</p>
                <p id="q4" style={{ color: "#595959", display: "none" }}>
                  Everything you need to know about us. Can't find the answer
                  you're looking for. Please mail to us. Everything you need to
                  know about us. Can't find the answer you're looking for.
                  Please mail to us.
                </p>
              </div>
              <div className="col-2">
                <button
                  className="btn p-0 float-end"
                  onClick={() => clicking("q4")}
                >
                  <i id="i4" className="fas fa-plus-circle"></i>
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <p className="fw-bold mb-0">col-lg-9 col-md-7 col-5 px-lg-0?</p>
                <p id="q5" style={{ color: "#595959", display: "none" }}>
                  Everything you need to know about us. Can't find the answer
                  you're looking for. Please mail to us. Everything you need to
                  know about us. Can't find the answer you're looking for.
                  Please mail to us.
                </p>
              </div>
              <div className="col-2">
                <button
                  className="btn p-0 float-end"
                  onClick={() => clicking("q5")}
                >
                  <i id="i5" className="fas fa-plus-circle"></i>
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <p className="fw-bold mb-0">col-lg-9 col-md-7 col-5 px-lg-0?</p>
                <p id="q6" style={{ color: "#595959", display: "none" }}>
                  Everything you need to know about us. Can't find the answer
                  you're looking for. Please mail to us. Everything you need to
                  know about us. Can't find the answer you're looking for.
                  Please mail to us.
                </p>
              </div>
              <div className="col-2">
                <button
                  className="btn p-0 float-end"
                  onClick={() => clicking("q6")}
                >
                  <i id="i6" className="fas fa-plus-circle"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row px-2 px-md-5 py-5 mx-2 mx-md-4 my-5 bg-light"
          style={{ borderRadius: "15px" }}
        >
          <div className="col-md-6 text-start">
            <h3 className="fw-bold">Join 1000+ students</h3>
            <p style={{ color: "#595959" }}>
              Stay in loop with everything you need to know.
            </p>
          </div>
          <div className="col-md-6">
            <form
              action="https://docs.google.com/forms/d/e/1FAIpQLSdGcfaJF8cxduf2dd8FjzJSBXhk6nLqHRdLH22a78cWkIqo-g/formResponse"
              method="POST"
            >
              {/* <center> */}
              <div
                className={
                  display
                    ? "input-group pt-0 mb-2 w-100"
                    : "input-group pt-0 mb-2 w-75"
                }
              >
                <input
                  type="email"
                  id="Email"
                  name="entry.881454754"
                  className="form-control"
                  placeholder="Enter your Mail"
                  value={mail}
                  onChange={(e) => setmail(e.target.value)}
                  style={{
                    borderRadius: "5px",
                    // border: "none",
                    outline: "none",
                    padding: "8px 15px",
                    width: display ? "65%" : "70%",
                  }}
                />
                <button
                  className="btn ms-1"
                  type="submit"
                  style={{
                    border: "none",
                    outline: "none",
                    borderRadius: "5px",
                    width: display ? "30%" : "25%",
                    backgroundColor: "#6dd2ae",
                  }}
                >
                  Subscribe
                </button>
              </div>
              {/* </center> */}
            </form>
            <p className="text-start" style={{ color: "#595959" }}>
              We'll catch you up as soon as possible.
            </p>
          </div>
        </div>
      </div>
      <Foot2 />
    </>
  );
}

export default JoinUs;
