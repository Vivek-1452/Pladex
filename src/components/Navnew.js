import { Container, Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import { Redirect } from "react-router";
import { useState } from "react";
const Navnew = ({ logincheck, loginhandler }) => {
  const [active, setactive] = useState([
    { id: 1, state: true },
    { id: 2, state: false },
    { id: 3, state: false },
    { id: 4, state: false },
    { id: 5, state: false },
    { id: 6, state: false },
  ]);
  const toggleclass = (e) => {
    setactive(e);
  };
  const onSignoutSuccess = () => {
    alert("Logged out");
    return <Redirect to="/"></Redirect>;
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
        <Navbar expand="md" className="py-1 pe-md-0 pe-5">
          <NavbarBrand className="ps-5 pt-3">
            <a href="." className="text-dark text-decoration-none">
              <h2
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: "bold",
                  fontSize: "32px",
                }}
              >
                <b>
                  PL
                  <span className="text-primary">
                    <i
                      className="fas fa-location-arrow px-1"
                      style={{ color: "#3ad6ab" }}
                    ></i>
                  </span>
                  DEX
                </b>
              </h2>
            </a>
          </NavbarBrand>

          <NavbarToggle />
          <NavbarCollapse className="justify-content-end" id="navbarCollapse">
            <Nav className="d-flex align-items-center position-relative pe-5 my-0 py-0">
              <Link
                className={
                  active[0].state
                    ? "mx-2 my-2 links text-dark px-3 py-2 active text-decoration-none"
                    : "mx-2 my-2 links text-dark px-3 py-2 notactive text-decoration-none"
                }
                to="/"
                onClick={() => {
                  toggleclass([
                    { id: 1, state: true },
                    { id: 2, state: false },
                    { id: 3, state: false },
                    { id: 4, state: false },
                    { id: 5, state: false },
                    { id: 6, state: false },
                  ]);
                }}
              >
                Home
              </Link>
              <Link
                className={
                  active[1].state
                    ? "mx-2 my-2 links text-dark px-3 py-2 active text-decoration-none"
                    : "mx-2 my-2 links text-dark px-3 py-2 notactive text-decoration-none"
                }
                to="Features"
                onClick={() => {
                  toggleclass([
                    { id: 1, state: false },
                    { id: 2, state: true },
                    { id: 3, state: false },
                    { id: 4, state: false },
                    { id: 5, state: false },
                    { id: 6, state: false },
                  ]);
                }}
              >
                Features
              </Link>
              <Link
                className={
                  active[2].state
                    ? "mx-2 my-2 links text-dark px-3 py-2 active text-decoration-none"
                    : "mx-2 my-2 links text-dark px-3 py-2 notactive text-decoration-none"
                }
                to="AboutUs"
                onClick={() => {
                  toggleclass([
                    { id: 1, state: false },
                    { id: 2, state: false },
                    { id: 3, state: true },
                    { id: 4, state: false },
                    { id: 5, state: false },
                    { id: 6, state: false },
                  ]);
                }}
              >
                About Us
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
                className={
                  active[5].state
                    ? "mx-2 my-2 links text-dark px-3 py-2 active text-decoration-none"
                    : "mx-2 my-2 links text-dark px-3 py-2 notactive text-decoration-none"
                }
                to="JoinUs"
                onClick={() => {
                  toggleclass([
                    { id: 1, state: false },
                    { id: 2, state: false },
                    { id: 3, state: false },
                    { id: 4, state: false },
                    { id: 5, state: false },
                    { id: 6, state: true },
                  ]);
                }}
              >
                Join Us
              </Link>
              {logincheck ? (
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
              )}
            </Nav>
          </NavbarCollapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Navnew;
