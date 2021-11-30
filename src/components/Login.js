import { useState } from "react";
import { useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { Redirect } from "react-router";
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
                <span>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </span>
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
              <br />
              <br />
              <br />
              <br />
              <span
                style={{
                  color: "white",
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                }}
              >
                <h1 className="mb-0 fw-bold">Sign Up with</h1>
              </span>
              <br />
              <span
                style={{
                  fontSize: "1.5rem",
                }}
              >
                <button
                  className="mx-4 bg-white"
                  style={{
                    position: "relative",
                    top: "5px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 5px 0px",
                    border: "none",
                    borderRadius: "10px",
                    padding: "5.5px 8px",
                  }}
                >
                  <img src={icon1} alt="Apple" height="30" />
                </button>
                {showLoginButton ? (
                  <GoogleLogin
                    render={(renderProps) => (
                      <button
                        className="mx-3 bg-white"
                        onClick={renderProps.onClick}
                        style={{
                          position: "relative",
                          top: "5px",
                          boxShadow:
                            "rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 5px 0px",
                          border: "none",
                          borderRadius: "10px",
                          padding: "5.5px 8px",
                        }}
                      >
                        <img src={icon2} alt="Google" height="30" />
                      </button>
                    )}
                    clientId={process.env.REACT_APP_CLIENT_ID}
                    // buttonText="Sign Up"
                    onSuccess={onLoginSuccess}
                    onFailure={onFailureSuccess}
                    cookiePolicy={"single_host_origin"}
                  />
                ) : null}
                <button
                  className="mx-4 bg-white"
                  style={{
                    position: "relative",
                    top: "4px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 5px 0px",
                    border: "none",
                    borderRadius: "10px",
                    padding: "6px 8px",
                  }}
                >
                  <img src={icon3} alt="LinkedIn" height="30" />
                </button>
              </span>
              {display1 ? (
                <span>
                  <br />
                  <br />
                </span>
              ) : (
                <span>
                  <br />
                  <br />
                  <br />
                  <br />
                </span>
              )}
              <span style={{ color: "white", fontSize: "1.2rem" }}>
                If you have an account?{" "}
                <span style={{ color: " #0ACF83" }}>Sign In</span>
              </span>
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
              <br />
              <br />
              <span
                style={{
                  color: "black",
                  fontSize: "1.5rem",
                  fontWeight: "lighter",
                }}
              >
                Login with
              </span>
              <br />
              <span
                style={{
                  fontSize: "1.5rem",
                }}
              >
                <button
                  className="mx-5 bg-white"
                  style={{
                    position: "relative",
                    top: "5px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 5px 0px",
                    border: "none",
                    borderRadius: "10px",
                    padding: "5px 8px",
                  }}
                >
                  <img src={icon1} alt="Apple" height="30" />
                </button>
                {showLoginButton ? (
                  <GoogleLogin
                    render={(renderProps) => (
                      <button
                        className="mx-2 bg-white"
                        onClick={renderProps.onClick}
                        style={{
                          position: "relative",
                          top: "5px",
                          boxShadow:
                            "rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 5px 0px",
                          border: "none",
                          borderRadius: "10px",
                          padding: "5px 8px",
                        }}
                      >
                        <img src={icon2} alt="Google" height="30" />
                      </button>
                    )}
                    clientId={process.env.REACT_APP_CLIENT_ID}
                    // buttonText="Sign Up"
                    onSuccess={onLoginSuccess}
                    onFailure={onFailureSuccess}
                    cookiePolicy={"single_host_origin"}
                  />
                ) : null}
                <button
                  className="mx-5 bg-white"
                  style={{
                    position: "relative",
                    top: "4px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 5px 0px",
                    border: "none",
                    borderRadius: "10px",
                    padding: "6px 8px",
                  }}
                >
                  <img src={icon3} alt="LinkedIn" height="30" />
                </button>
              </span>
              <br />
              <br />
              <br />
              <br />
              <br />
              <span style={{ color: "black", fontSize: "1.2rem" }}>
                Don't have an account?{" "}
                <span style={{ color: " #0ACF83" }}>Sign Up</span>
              </span>
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
