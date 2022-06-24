import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import { GoogleLogout } from "react-google-login";
// import { Redirect } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Navnew = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  // const [isLoaded2, setIsLoaded2] = useState(false);
  // if (window.location.origin == "https://www.pladex.in") {

  var log1 = window.location.origin + "/logout";

  useEffect(() => {
    if (window.location.origin == "https://www.pladex.in") {
      axios.post("https://www.pladex.in/authenticate").then((response) => {
        if (response.data.status == "authenticated") {
          setIsLoaded(true);
        }
      });
    } else {
      axios.post("https://pladex.in/authenticate").then((response) => {
        if (response.data.status == "authenticated") {
          setIsLoaded(true);
        }
      });
    }
  }, [isLoaded]);

  useEffect(() => {
    if (props.prop1 == "home") {
      document.getElementById("nav1").style.borderBottom = "2px solid #3ad6ab";
    } else if (props.prop1 == "features") {
      document.getElementById("nav2").style.borderBottom = "2px solid #3ad6ab";
    } else if (props.prop1 == "events") {
      document.getElementById("nav3").style.borderBottom = "2px solid #3ad6ab";
    } else if (props.prop1 == "join") {
      document.getElementById("nav4").style.borderBottom = "2px solid #3ad6ab";
    }
    // }, 3000);
  }, []);

  const [active, setactive] = useState([
    { id: 1, state: true },
    { id: 2, state: false },
    { id: 3, state: false },
    { id: 4, state: false },
    { id: 5, state: false },
    { id: 6, state: false },
  ]);
  // const toggleclass = (e) => {
  //   setactive(e);
  // };
  // const onSignoutSuccess = () => {
  //   alert("Logged out");
  //   return <Redirect to="/"></Redirect>;
  // };

  const clicking = (id1, id2, id3, id4) => {
    // document.getElementById(id1).style.borderBottom = "2px solid #3ad6ab";
    // document.getElementById(id2).style.borderBottom = "none";
    // document.getElementById(id3).style.borderBottom = "none";
    // document.getElementById(id4).style.borderBottom = "none";

    if (id1 == "nav1") {
      document.location.href = "/";
    } else if (id1 == "nav2") {
      document.location.href = "/Features";
    } else if (id1 == "nav3") {
      document.location.href = "/EventLibrary";
    } else if (id1 == "nav4") {
      document.location.href = "/JoinUs";
    }
  };

  return (
    <div
      className="p-0"
      style={{ fontFamily: "Product Sans", height: "68px", width: "100vw" }}
    >
      <Container
        className="navBar bg-light p-0"
        fluid
        style={{ width: "100vw" }}
      >
        <Navbar expand="md" className="py-1 pe-md-0 pe-lg-5">
          <NavbarBrand className="ps-md-5 ps-4 pt-3">
            <a href="." className="text-dark text-decoration-none">
              <h2
                style={{
                  fontFamily: "system-ui",
                  fontSize: "32px",
                  fontWeight: "bold",
                }}
              >
                PL
                <span className="text-primary">
                  <i
                    className="fas fa-location-arrow px-1"
                    style={{ color: "#3ad6ab" }}
                  ></i>
                </span>
                DEX
              </h2>
            </a>
          </NavbarBrand>

          <NavbarToggle />
          <NavbarCollapse className="justify-content-end" id="navbarCollapse">
            <Nav className="d-flex align-items-center position-relative my-0 py-0">
              <Link
                id="nav1"
                className={
                  active[0].state
                    ? "mx-2 my-2 links text-dark px-3 py-2 active text-decoration-none"
                    : "mx-2 my-2 links text-dark px-3 py-2 notactive text-decoration-none"
                }
                // to="/"
                // onClick={() => {
                //   toggleclass([
                //     { id: 1, state: true },
                //     { id: 2, state: false },
                //     { id: 3, state: false },
                //     { id: 4, state: false },
                //     { id: 5, state: false },
                //     { id: 6, state: false },
                //   ]);
                // }}
                onClick={() => clicking("nav1", "nav2", "nav3", "nav4")}
              >
                Home
              </Link>
              <Link
                id="nav2"
                className={
                  active[1].state
                    ? "mx-2 my-2 links text-dark px-3 py-2 active text-decoration-none"
                    : "mx-2 my-2 links text-dark px-3 py-2 notactive text-decoration-none"
                }
                // to="Features"
                // onClick={() => {
                //   toggleclass([
                //     { id: 1, state: false },
                //     { id: 2, state: true },
                //     { id: 3, state: false },
                //     { id: 4, state: false },
                //     { id: 5, state: false },
                //     { id: 6, state: false },
                //   ]);
                // }}
                onClick={() => clicking("nav2", "nav1", "nav3", "nav4")}
              >
                Features
              </Link>
              <Link
                id="nav3"
                className={
                  active[2].state
                    ? "mx-2 my-2 links text-dark px-3 py-2 active text-decoration-none"
                    : "mx-2 my-2 links text-dark px-3 py-2 notactive text-decoration-none"
                }
                // to="AboutUs"
                // onClick={() => {
                //   toggleclass([
                //     { id: 1, state: false },
                //     { id: 2, state: false },
                //     { id: 3, state: true },
                //     { id: 4, state: false },
                //     { id: 5, state: false },
                //     { id: 6, state: false },
                //   ]);
                // }}
                onClick={() => clicking("nav3", "nav2", "nav1", "nav4")}
              >
                Events
              </Link>
              {/* <Link
                className={
                  active[3].state
                    ? "mx-2 links text-dark px-3 py-2 active text-decoration-none"
                    : "mx-2 links text-dark px-3 py-2 notactive text-decoration-none"
                }
                to="faq"
                onClick={() => {
                  toggleclass([
                    { id: 1, state: false },
                    { id: 2, state: false },
                    { id: 3, state: false },
                    { id: 4, state: true },
                    { id: 5, state: false },
                    { id: 6, state: false },
                  ]);
                }}
              >
                FAQs
              </Link> */}
              {/* <Link
                className={
                  active[4].state
                    ? "mx-2 links text-dark px-3 py-2 active text-decoration-none"
                    : "mx-2 links text-dark px-3 py-2 notactive text-decoration-none"
                }
                to="contact"
                onClick={() => {
                  toggleclass([
                    { id: 1, state: false },
                    { id: 2, state: false },
                    { id: 3, state: false },
                    { id: 4, state: false },
                    { id: 5, state: true },
                    { id: 6, state: false },
                  ]);
                }}
              >
                Contact Us
              </Link> */}
              <Link
                id="nav4"
                className={
                  active[5].state
                    ? "mx-2 my-2 links text-dark px-3 py-2 active text-decoration-none"
                    : "mx-2 my-2 links text-dark px-3 py-2 notactive text-decoration-none"
                }
                // to="JoinUs"
                // onClick={() => {
                //   toggleclass([
                //     { id: 1, state: false },
                //     { id: 2, state: false },
                //     { id: 3, state: false },
                //     { id: 4, state: false },
                //     { id: 5, state: false },
                //     { id: 6, state: true },
                //   ]);
                // }}
                onClick={() => clicking("nav4", "nav2", "nav3", "nav1")}
              >
                Join Us
              </Link>
              {/* {logincheck ? (
                <GoogleLogout
                  clientId="623615460174-undrui8pi574v6qqtra0vo35vr58olqr.apps.googleusercontent.com"
                  buttonText="Logout"
                  onLogoutSuccess={onSignoutSuccess}
                ></GoogleLogout>
              ) : (
                <Link
                  to="login"
                  className="mx-2 links text-light rounded px-3 py-2 text-decoration-none"
                  style={{ backgroundColor: "#53c29b" }}
                >
                  Login
                </Link>
              )} */}
              {isLoaded ? (
                <a
                  // href="https://www.pladex.in/logout"
                  href={log1}
                  className="mx-2 links text-light rounded px-3 py-2 text-decoration-none"
                  style={{ backgroundColor: "#31343c", color: "white" }}
                >
                  Logout
                </a>
              ) : (
                <Link
                  to="/login"
                  className="mx-2 links text-light rounded px-3 py-2 text-decoration-none"
                  style={{ backgroundColor: "#53c29b" }}
                >
                  Login
                </Link>
              )}
            </Nav>
          </NavbarCollapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Navnew;
