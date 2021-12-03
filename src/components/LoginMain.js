import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import main from "./loginbg.png";
// import logo from "./FocusImages/logo.png";
import heart from "./heart.png";
import "./LoginMain.css";
import { Link } from "react-router-dom";

function LoginMain() {
  const [display, setdisplay] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setdisplay(true);
    }
  }, [display]);

  function eyeClick() {
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
        backgroundSize: display ? "cover" : "100%",
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
            marginTop: display ? "15vh" : "12vh",
          }}
        >
          <div className="card-body px-4 px-md-5">
            <div className="text-center mb-3">
              <h4 style={{ fontWeight: "lighter", fontFamily: "cursive" }}>
                Heyaa!
              </h4>
              <h5 style={{ fontWeight: "bolder", fontFamily: "sans-serif" }}>
                Log into your account
              </h5>
            </div>
            <form action="/auth/login" method="POST">
              <div className="form-group pt-3 pb-2" id="float-label">
                <label for="email">Mail ID</label>
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
                <label className="float-end" style={{ fontSize: "13px" }}>
                  Forgot Password?
                </label>
                <div className="input-group pt-0">
                  <input
                    type="password"
                    className="inputText form-control"
                    style={{ backgroundColor: "rgb(58, 214, 171, 0.3)" }}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    autocomplete="off"
                    autofocus
                    required
                  />
                  <div className="input-group-append pt-0">
                    <span
                      className="input-group-text"
                      id="basic-addon2"
                      onClick={() => eyeClick()}
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
              <center>
                {/* <Link to="/FocusRegSuc"> */}
                <button
                  type="submit"
                  className="btn mt-4 mb-2 text-white px-4"
                  style={{ backgroundColor: "#53c29b" }}
                >
                  Login
                </button>
                {/* </Link> */}
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
              Don't have an account?{" "}
              <Link to="/signup" style={{ color: " #0ACF83" }}>
                <span>Sign Up</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 text-center text-white">
        <h6 className="m-0 py-5 fw-light">
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

export default LoginMain;
