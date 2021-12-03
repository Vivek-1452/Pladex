import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router";
import $ from "jquery";
import main from "./loginbg.png";
// import logo from "./FocusImages/logo.png";
import heart from "./heart.png";
import "./LoginMain.css";
import { Link } from "react-router-dom";

function SignupMain() {
  const [prop1, setprop1] = useState(false);

  const currentUrl = window.location.href;
  var params = new URL(currentUrl).searchParams.get("state");
  useEffect(() => {
    if (
      params ==
      "28d6dfcb31c48f6b8957860b99726bb863c5dc424e2d466105683c4b9d1ae3e2"
    ) {
      setprop1(true);
    }
  }, [prop1]);

  const [prop2, setprop2] = useState(false);

  useEffect(() => {
    if (
      params ==
      "f00201589c87b5c0dff5aad0b1a189dde6af1f0ba445b44bcb00091ac408d418"
    ) {
      setprop2(true);
    }
  }, [prop2]);

  const [display, setdisplay] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setdisplay(true);
    }
  }, [display]);

  function eyeClick(pass) {
    if (pass === "norm") {
      var icon = document.getElementById("icon");
      var input = document.getElementById("password");
      var type = input.type;

      if (type === "password") {
        icon.className = "fas fa-eye-slash";
        input.type = "text";
      } else if (type === "text") {
        icon.className = "fas fa-eye";
        input.type = "password";
      }
    } else if (pass === "cnfm") {
      var cnfmicon = document.getElementById("cnfmicon");
      var cnfminput = document.getElementById("cnfmpassword");
      var cnfmtype = cnfminput.type;

      if (cnfmtype === "password") {
        cnfmicon.className = "fas fa-eye-slash";
        cnfminput.type = "text";
      } else if (cnfmtype === "text") {
        cnfmicon.className = "fas fa-eye";
        cnfminput.type = "password";
      }
    }
  }

  function passCheck() {
    var pass = document.getElementById("password").value;
    var cnfmPass = document.getElementById("cnfmpassword").value;

    if (pass == null) {
      document.getElementById("submit").disabled = true;
    } else if (pass === cnfmPass) {
      document.getElementById("match").style.display = "none";
      document.getElementById("submit").disabled = false;
    } else {
      document.getElementById("match").style.display = "block";
      document.getElementById("submit").disabled = true;
    }
  }

  return (
    <div
      style={{
        fontFamily: "Product Sans",
        minWidth: "100vw",
        minHeight: "100vh",
        // overflow: "none",
        backgroundImage: `url(${main})`,
        backgroundPosition: display ? "center" : "center",
        backgroundRepeat: display ? "no-repeat" : "no-repeat",
        backgroundSize: display ? "cover" : "cover",
      }}
    >
      <div
        className="d-flex justify-content-center align-items-center pt-5"
        // style={{
        //   minWidth: "100vw",
        //   minHeight: "100vh",
        //   // overflow: "none",
        //   backgroundImage: `url(${main})`,
        // }}
      >
        <div
          id="details"
          className="card text-black text-start pt-0"
          style={{
            color: "white",
            // maxWidth: "50vw",
            width: display ? "80vw" : "35vw",
            boxShadow: "0 0 20px #212121",
            opacity: "0.95",
            border: "none",
            // marginTop: "100px",
            marginTop: display ? "9vh" : "4vh",
          }}
        >
          <div className="card-body px-4 px-md-5">
            <div className="text-center mb-3">
              <h4
                className={prop1 ? "d-none" : "d-block"}
                style={{ fontWeight: "lighter", fontFamily: "cursive" }}
              >
                Welcome
              </h4>
              <h4
                className={prop1 ? "d-block" : "d-none"}
                style={{ fontWeight: "lighter", fontFamily: "cursive" }}
              >
                Welcome Back!
              </h4>
              <h5
                className={prop1 ? "d-none" : "d-block"}
                style={{ fontWeight: "bolder", fontFamily: "sans-serif" }}
              >
                Create your account
              </h5>
              <h5
                className={prop1 ? "mt-3 d-block" : "d-none"}
                style={{
                  fontWeight: "bolder",
                  fontFamily: "serif",
                  color: "red",
                }}
              >
                Entered Mail ID is already registered!
              </h5>
            </div>
            <form action="/auth/register" method="POST">
              <div className="form-group pt-3 pb-2" id="float-label">
                <label for="email">Mail ID</label>
                {/* <label
                  id="match"
                  className={prop1 ? "float-end d-block" : "float-end d-none"}
                  style={{ color: "red" }}
                >
                  Registered Mail ID!
                </label> */}
                <label
                  id="match"
                  className={prop2 ? "float-end d-block" : "float-end d-none"}
                  style={{ color: "red" }}
                >
                  Invalid entry! Try again.
                </label>
                <input
                  type="email"
                  className="inputText form-control"
                  style={{ backgroundColor: "rgb(58, 214, 171, 0.3)" }}
                  id="email"
                  name="email"
                  placeholder="Enter your mail id"
                  autocomplete="off"
                  autofocus
                  required
                />
              </div>
              <div className="form-group pt-3 pb-2" id="float-label">
                <label for="password">Password</label>
                <div className="input-group pt-0">
                  <input
                    type="password"
                    className="inputText form-control"
                    style={{ backgroundColor: "rgb(58, 214, 171, 0.3)" }}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    onKeyUp={() => passCheck()}
                    autocomplete="off"
                    autofocus
                    required
                  />
                  <div className="input-group-append pt-0">
                    <span
                      className="input-group-text"
                      id="basic-addon2"
                      onClick={() => eyeClick("norm")}
                    >
                      <i
                        id="icon"
                        className="fas fa-eye"
                        style={{ paddingTop: "5px", paddingBottom: "5px" }}
                      ></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-group pt-3 pb-2" id="float-label">
                <label for="password">Confirm Password</label>
                <label
                  id="match"
                  className="float-end"
                  style={{ fontSize: "13px", color: "red", display: "none" }}
                >
                  Not matching!
                </label>
                <div className="input-group pt-0">
                  <input
                    type="password"
                    className="inputText form-control"
                    style={{ backgroundColor: "rgb(58, 214, 171, 0.3)" }}
                    id="cnfmpassword"
                    placeholder="re-Enter your password"
                    onKeyUp={() => passCheck()}
                    autocomplete="off"
                    autofocus
                    required
                  />
                  <div className="input-group-append pt-0">
                    <span
                      className="input-group-text"
                      id="basic-addon2"
                      onClick={() => eyeClick("cnfm")}
                    >
                      <i
                        id="cnfmicon"
                        className="fas fa-eye"
                        style={{ paddingTop: "5px", paddingBottom: "5px" }}
                      ></i>
                    </span>
                  </div>
                </div>
              </div>
              <center>
                <button
                  id="submit"
                  type="submit"
                  className="btn mt-4 mb-2 text-white px-4"
                  style={{ backgroundColor: "#53c29b" }}
                >
                  Sign Up
                </button>
              </center>
            </form>

            <hr
              className="my-4"
              style={{
                height: "2px",
                background:
                  "linear-gradient(to right, rgba(0, 0, 0, 0), #6dd2ae, rgba(0, 0, 0, 0))",
              }}
            />
            <div className="my-3 px-2 text-center">
              Already have an account?{" "}
              <Link to="/login" style={{ color: " #0ACF83" }}>
                <span>Login</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-2 text-center text-white">
        <h6 className="m-0 pt-5 fw-light">
          Developed with{" "}
          <img
            src={heart}
            alt="love"
            style={{ height: "20px", position: "relative", bottom: "3px" }}
          />{" "}
          by Web Dev team
        </h6>
      </div>
    </div>
  );
}

export default SignupMain;
