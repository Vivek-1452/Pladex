import { useState } from "react";
import { useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import banner from "./banner.png";
import icon1 from "./IconApple.png";
import icon2 from "./IconGoogle.png";
import icon3 from "./IconLinkedIn.png";

require("dotenv").config();

const Login = ({ loginhandler }) => {
  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogoutButton, setShowLogoutButton] = useState(false);
  const onLoginSuccess = (res) => {
    console.log("Login Successfull", res.profileObj);
    setShowLoginButton(false);
    setShowLogoutButton(true);
    loginhandler();
  };

  const onFailureSuccess = (res) => {
    console.log("Login Failed", res);
  };

  const [display, setdisplay] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1200) {
      setdisplay(true);
    }
  }, [display]);

  const [display1, setdisplay1] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 575) {
      setdisplay1(true);
    }
  }, [display1]);

  return (
    <div className="pt-0" style={{ maxHeight: "100vh", overflow: "hidden" }}>
      {showLogoutButton ? <Redirect to="/detail" /> : null}

      {display ? (
        <div
          className="d-flex flex-column justify-content-around align-items-center pt-0"
          style={{
            color: "#A4A4A4",
            fontSize: "2.5rem",
            backgroundImage: `url(${banner})`,
            minHeight: "100vh",
            minWidth: "100vw",
          }}
        >
          <div
            // className="card d-inline-flex flex-column justify-content-around align-items-center py-5 px-sm-5 px-3"
            className={
              display
                ? "d-inline-flex flex-column justify-content-around align-items-center py-5 px-sm-5 px-3"
                : "card d-inline-flex flex-column justify-content-around align-items-center py-5 px-sm-5 px-3"
            }
            style={{ opacity: "0.87" }}
          >
            <h1
              style={{
                color: "#A4A4A4",
                fontSize: "2rem",
              }}
            >
              {display ? (
                <span></span>
              ) : (
                <span>
                  <span>Welcome!</span>
                  <br />
                  <br />
                  <span
                    style={{
                      color: "#0ACF83",
                      fontSize: "2.5rem",
                    }}
                  >
                    Join The Community
                  </span>
                </span>
              )}
              {/* <span
                style={{
                  color: "white",
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                }}
              >
                <h1 className="mb-0 fw-bold">Login with</h1>
              </span> */}
              <br />
              <span
                style={{
                  fontSize: "1.2rem",
                }}
              >
                <form>
                  <div
                    className="card bg-opacity-75 border-0"
                    style={{ boxShadow: "0 0 4px #434343" }}
                  >
                    <div className="card-body">
                      <center>
                        <div
                          className="form-group pt-3 pb-2"
                          id="float-label"
                          style={{ width: "85%" }}
                        >
                          {/* <label htmlFor="email">Mali ID</label> */}
                          <input
                            type="email"
                            className="inputText form-control"
                            id="email"
                            autocomplete="off"
                            autofocus
                            required
                          />
                          <span class="floating-label opacity-50">Mail ID</span>
                        </div>
                        <div
                          className="form-group pt-3 pb-2"
                          id="float-label"
                          style={{ width: "85%" }}
                        >
                          {/* <label htmlFor="email">Mali ID</label> */}
                          <input
                            type="password"
                            className="inputText form-control"
                            id="password"
                            autocomplete="off"
                            autofocus
                            required
                          />
                          <span class="floating-label opacity-50">
                            Password
                          </span>
                        </div>
                        <div
                          className="form-group pt-3 pb-2"
                          id="float-label"
                          style={{ width: "85%" }}
                        >
                          {/* <label htmlFor="email">Mali ID</label> */}
                          <input
                            type="password"
                            className="inputText form-control"
                            id="cnfmpassword"
                            autocomplete="off"
                            autofocus
                            required
                          />
                          <span class="floating-label opacity-50">
                            Confirm Password
                          </span>
                        </div>
                        <div
                          className="form-group pt-3 pb-2 my-1 w-50"
                          id="float-label"
                          style={{ width: "85%" }}
                        >
                          <input
                            type="submit"
                            className="inputText form-control bg-opacity-75 bg-success"
                            id="submit"
                            value="Sign Up"
                            autocomplete="off"
                            autofocus
                            required
                          />
                        </div>
                        <hr
                          className="my-4"
                          style={{
                            height: "2px",
                            background:
                              "linear-gradient(to right, rgba(0, 0, 0, 0), #6dd2ae, rgba(0, 0, 0, 0))",
                          }}
                        />
                        <div
                          className="my-3 px-2"
                          style={{ color: "black", fontSize: "1.2rem" }}
                        >
                          Already have an account?{" "}
                          <Link to="/login" style={{ color: " #0ACF83" }}>
                            <span>Login</span>
                          </Link>
                        </div>
                      </center>
                    </div>
                    {/* <div className="card-footer">
                      <div
                        className="my-1"
                        style={{ color: "black", fontSize: "1.2rem" }}
                      >
                        Don't have an account?{" "}
                        <Link to="/SignupMail" style={{ color: " #0ACF83" }}>
                          <span>Sign Up</span>
                        </Link>
                      </div>
                    </div> */}
                  </div>
                </form>
              </span>
              {/* {display1 ? (
                <span>
                  <br />
                </span>
              ) : (
                <span>
                  <br />
                  <br />
                  <br />
                  <br />
                </span>
              )} */}
              {/* <span style={{ color: "white", fontSize: "1.2rem" }}>
                If you have an account?{" "}
                <span style={{ color: " #0ACF83" }}>Sign In</span>
              </span> */}
            </h1>
          </div>
        </div>
      ) : (
        <div className="row pt-0">
          <div className="col-lg-6 p-0">
            <figure>
              <img
                src={banner}
                alt="banner"
                className="img-fluid "
                style={{ width: "100%", height: "100vh" }}
              />
            </figure>
          </div>

          <div className="col-lg-6 d-flex flex-column justify-content-around align-items-center p-0">
            <h1 style={{ color: "#A4A4A4", fontSize: "2.5rem" }}>
              Welcome!
              <br />
              <span
                style={{
                  color: "#0ACF83",
                  fontSize: "3rem",
                }}
              >
                Join The Community
              </span>
              <br />
              <br />
              {/* <span
                style={{
                  color: "black",
                  fontSize: "1.5rem",
                  fontWeight: "lighter",
                }}
              >
                Login with
              </span> */}
              <br />
              <span
                style={{
                  fontSize: "1.2rem",
                }}
              >
                <form>
                  <div
                    className="card bg-opacity-75 border-0"
                    style={{ boxShadow: "0 0 4px #434343" }}
                  >
                    <div className="card-body">
                      <center>
                        <div
                          className="form-group pt-3 pb-2"
                          id="float-label"
                          style={{ width: "85%" }}
                        >
                          {/* <label htmlFor="email">Mali ID</label> */}
                          <input
                            type="email"
                            className="inputText form-control"
                            id="email"
                            autocomplete="off"
                            autofocus
                            required
                          />
                          <span class="floating-label opacity-50">Mail ID</span>
                        </div>
                        <div
                          className="form-group pt-3 pb-2"
                          id="float-label"
                          style={{ width: "85%" }}
                        >
                          {/* <label htmlFor="email">Mali ID</label> */}
                          <input
                            type="password"
                            className="inputText form-control"
                            id="password"
                            autocomplete="off"
                            autofocus
                            required
                          />
                          <span class="floating-label opacity-50">
                            Password
                          </span>
                        </div>
                        <div
                          className="form-group pt-3 pb-2"
                          id="float-label"
                          style={{ width: "85%" }}
                        >
                          {/* <label htmlFor="email">Mali ID</label> */}
                          <input
                            type="password"
                            className="inputText form-control"
                            id="cnfmpassword"
                            autocomplete="off"
                            autofocus
                            required
                          />
                          <span class="floating-label opacity-50">
                            Confirm Password
                          </span>
                        </div>
                        <div
                          className="form-group pt-3 pb-2 my-1 w-25"
                          id="float-label"
                          style={{ width: "85%" }}
                        >
                          <input
                            type="submit"
                            className="inputText form-control bg-opacity-75 bg-success"
                            id="submit"
                            value="Sign Up"
                            autocomplete="off"
                            autofocus
                            required
                          />
                        </div>
                        <hr
                          className="my-4"
                          style={{
                            height: "2px",
                            background:
                              "linear-gradient(to right, rgba(0, 0, 0, 0), #6dd2ae, rgba(0, 0, 0, 0))",
                          }}
                        />
                        <div
                          className="my-3"
                          style={{ color: "black", fontSize: "1.2rem" }}
                        >
                          Already have an account?{" "}
                          <Link to="/login" style={{ color: " #0ACF83" }}>
                            <span>Login</span>
                          </Link>
                        </div>
                      </center>
                    </div>
                    {/* <div className="card-footer">
                      <div
                        className="my-1"
                        style={{ color: "black", fontSize: "1.2rem" }}
                      >
                        Don't have an account?{" "}
                        <Link to="/SignupMail" style={{ color: " #0ACF83" }}>
                          <span>Sign Up</span>
                        </Link>
                      </div>
                    </div> */}
                  </div>
                </form>
              </span>
              <br />
              {/* <br />
              <span style={{ color: "black", fontSize: "1.2rem" }}>
                Don't have an account?{" "}
                <Link to="/SignupMail" style={{ color: " #0ACF83" }}>
                  <span>Sign Up</span>
                </Link>
              </span> */}
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
