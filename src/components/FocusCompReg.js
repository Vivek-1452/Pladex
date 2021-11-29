import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import main from "./FocusImages/reg.png";
import logo from "./FocusImages/logo.png";
import heart from "./heart.png";
import "./FocusReg.css";

function FocusCompReg() {
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
            boxShadow: "0 0 5px white",
            opacity: "0.85",
          }}
        >
          <div className="card-header bg-opacity-25 bg-success">
            <div className="row py-2">
              <div
                className={
                  display
                    ? "col-6 text-start"
                    : "col-md-7 d-flex align-items-center"
                }
                // style={{ width: "min-content" }}
              >
                <h5 className="fw-bold">Competition Registration</h5>
              </div>
              <div
                className={
                  display ? "col-6 text-end" : "col-md-5 text-end pe-3"
                }
              >
                <img src={logo} alt="Events" width="80" height="50" />
              </div>
            </div>
          </div>
          <div className="card-body px-4">
            <form>
              <div className="row">
                <div className="form-group col-md-6 pt-3 pb-2 px-2">
                  {/* <label for="firstname">First Name</label> */}
                  <input
                    type="text"
                    // is-valid bg-success
                    className="form-control bg-opacity-25 bg-primary"
                    id="firstname"
                    autocomplete="off"
                    autofocus
                    required
                  />
                  <span class="floating-label opacity-50">First Name</span>
                  {/* <div className="valid-feedback">Looks good!</div> */}
                </div>
                <div className="form-group col-md-6 pt-3 pb-2 px-2">
                  {/* <label for="lastname">Last Name</label> */}
                  <input
                    type="text"
                    className="inputText form-control bg-opacity-25 bg-primary"
                    id="lastname"
                    autocomplete="off"
                    autofocus
                    required
                  />
                  <span class="floating-label opacity-50">Last Name</span>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 pt-1 pb-2 px-2">
                  {/* <label for="college">College</label> */}
                  {/* <div className="input-group"> */}
                  <select
                    id="college"
                    className="form-control bg-opacity-25 bg-primary"
                  >
                    <option selected>Select College</option>
                    <option>ABC University</option>
                    <option>DEF University</option>
                  </select>
                  {/* <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    <i
                      className="fas fa-caret-down py-2
                    "
                    ></i>
                  </span>
                </div> */}
                  {/* </div> */}
                </div>
                <div className="form-group col-md-6 pt-1 pb-2 px-2">
                  {/* <label for="branch">Branch</label> */}
                  <select
                    id="branch"
                    className="form-control bg-opacity-25 bg-primary"
                  >
                    <option selected className="opacity-50">
                      Select Branch
                    </option>
                    <option>ABC Engineering</option>
                    <option>DEF Engineering</option>
                  </select>
                </div>
              </div>
              <div className="form-group pt-3 pb-2">
                {/* <label for="state">State</label> */}
                <select
                  id="state"
                  className="form-control bg-opacity-25 bg-primary"
                >
                  <option selected className="opacity-50">
                    Select State
                  </option>
                  <option>ABC State</option>
                  <option>DEF State</option>
                </select>
              </div>
              <div className="form-group pt-3 pb-2">
                {/* <label for="event">Event</label> */}
                <select
                  id="event"
                  className="form-control bg-opacity-25 bg-primary"
                >
                  <option selected className="opacity-50">
                    Select Competition
                  </option>
                  <option>ABC Competition</option>
                  <option>DEF Competition</option>
                </select>
              </div>
              <div className="form-group pt-3 pb-2" id="float-label">
                {/* <label htmlFor="email">Mali ID</label> */}
                <input
                  type="email"
                  className="inputText form-control bg-opacity-25 bg-primary"
                  id="email"
                  autocomplete="off"
                  autofocus
                  required
                />
                <span class="floating-label opacity-50">Mail ID</span>
              </div>
              <div className="form-group pt-3 pb-2">
                {/* <label for="number">Mobile Number</label> */}
                <input
                  type="tel"
                  // is-invalid bg-danger
                  className="inputText form-control bg-opacity-25 bg-primary"
                  id="mobile"
                  autocomplete="off"
                  autofocus
                  required
                />
                <span class="floating-label opacity-50">Mobile Number</span>
                {/* <div className="invalid-feedback">
              Please provide a valid number.
            </div> */}
              </div>
              {/* <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div> */}
              <center>
                <button
                  type="submit"
                  className="btn bg-success mt-4 mb-2 text-white float-end me-3"
                >
                  Register
                </button>
              </center>
            </form>
          </div>
        </div>
      </div>
      <div className="py-3 text-center text-white">
        <h6 className="m-0 py-3 fw-light">
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

export default FocusCompReg;
