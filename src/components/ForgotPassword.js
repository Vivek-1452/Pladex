import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import main from "./loginbg.svg";
// import logo from "./FocusImages/logo.png";
import heart from "./heart.png";
import "./LoginMain.css";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [prop1, setprop1] = useState(false);

  const currentUrl = window.location.href;
  var params = new URL(currentUrl).searchParams.get("state");

  useEffect(() => {
    if (
      params ==
      "de94195c224cf3b02b613c0963efd15361f7a3f238c6e4b236395dcc39aa3bfc"
    ) {
      setprop1(true);
    }
  }, [prop1]);

  const [display, setdisplay] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setdisplay(true);
    }
  }, [display]);

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
            marginTop: display ? "20vh" : "16vh",
          }}
        >
          <div className="card-body px-4 px-md-5">
            <div className="text-center mb-3">
              <h4
                className={prop1 ? "d-none" : "d-block"}
                style={{ fontWeight: "lighter", fontFamily: "cursive" }}
              >
                Sorry to hear!
              </h4>
              <h4
                className={prop1 ? "d-block" : "d-none"}
                style={{ fontWeight: "lighter", fontFamily: "cursive" }}
              >
                Uh-Oh!
              </h4>
              <h6
                id="log"
                className={prop1 ? "d-none" : "d-block"}
                style={{ fontWeight: "bolder", fontFamily: "sans-serif" }}
              >
                Enter <b>registered</b> Mail ID!
              </h6>
              <h6
                className={prop1 ? "d-block" : "d-none"}
                style={{
                  fontWeight: "bolder",
                  fontFamily: "sans-serif",
                  color: "red",
                }}
              >
                Invalid/Expired Link! Try again.
              </h6>
            </div>
            <form action="/forgot_password" method="POST">
              <div className="form-group pt-3 pb-2" id="float-label">
                <label for="email">Mail ID</label>
                <input
                  type="email"
                  className="inputText form-control"
                  style={{ backgroundColor: "rgb(58, 214, 171, 0.3)" }}
                  id="email"
                  name="email"
                  placeholder="Enter your registered mail id"
                  autocomplete="off"
                  autofocus
                  required
                />
              </div>
              <center>
                {/* <Link to="/FocusRegSuc"> */}
                <button
                  type="submit"
                  className="btn mt-4 mb-2 text-white px-4"
                  style={{ backgroundColor: "#53c29b" }}
                >
                  Send Reset Link
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
              Remember your password?{" "}
              <Link to="/login" style={{ color: " #0ACF83" }}>
                <span>Login</span>
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

export default ForgotPassword;
