import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  function NavHover(ind, num, id) {
    var a = document.getElementById(id);

    if (ind === "0") {
      if (num === "0") {
        a.style.backgroundColor = "#3ad6ab";
      } else {
        a.style.backgroundColor = "white";
      }
    } else {
      if (num === "0") {
        a.style.backgroundColor = "#3ad6ab";
      } else {
        a.style.backgroundColor = "white";
      }
    }
  }

  function NavClick(num, id) {
    // var a = document.getElementById(id);
    // a.style.color = "#3ad6ab";
  }

  // function NavOut(id) {
  //   alert("hi");
  //   var a = document.getElementById(id);
  //   a.style.color = "black";
  // }

  return (
    <nav
      className="navbar navbar-expand-md navbar-light w-100 py-2 ps-5 position-sticky top-0 bg-white"
      style={{
        zIndex: 10,
        boxShadow: "0 8px 6px -6px #afafaf",
        opacity: "0.95",
        color: "white",
      }}
    >
      <a href="." className="navbar-brand mt-1">
        <h2
          style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: "bold" }}
        >
          <b>
            PL{" "}
            <span className="text-primary logo-updown">
              <i
                className="fas fa-location-arrow"
                style={{ color: "#3ad6ab" }}
              ></i>
            </span>{" "}
            DEX
          </b>
        </h2>
      </a>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarMenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse position-absolute"
        id="navbarMenu"
        style={{ right: "1rem" }}
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/home" style={{ textDecoration: "none" }}>
              <a
                href="."
                id="homenav"
                onMouseOver={() => NavHover("1", "0", "homenav")}
                onMouseLeave={() => NavHover("1", "1", "homenav")}
                onClick={() => NavClick("0", "homenav")}
                className="nav-link p-1 mx-2"
                style={{ color: "black", borderRadius: "5px" }}
              >
                Home
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/features" style={{ textDecoration: "none" }}>
              <a
                href="."
                id="feat_nav"
                onMouseOver={() => NavHover("1", "0", "feat_nav")}
                onMouseLeave={() => NavHover("1", "1", "feat_nav")}
                onClick={() => NavClick("0", "feat_nav")}
                className="nav-link p-1 mx-2"
                style={{ color: "black", borderRadius: "5px" }}
              >
                Feautures
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" style={{ textDecoration: "none" }}>
              <a
                href="."
                id="ab_nav"
                onMouseOver={() => NavHover("1", "0", "ab_nav")}
                onMouseLeave={() => NavHover("1", "1", "ab_nav")}
                className="nav-link p-1 mx-2"
                style={{ color: "black", borderRadius: "5px" }}
              >
                About Us
              </a>
            </Link>
          </li>
          {/* <li claclassNamess="nav-item">
            <Link to="/team" style={{ textDecoration: "none" }}>
              <a
                href="."
                id="team_nav"
                onMouseOver={() => NavHover("1", "0", "team_nav")}
                onMouseLeave={() => NavHover("1", "1", "team_nav")}
                className="nav-link p-1 mx-2"
                style={{ color: "black", borderRadius: "5px" }}
              >
                Team
              </a>
            </Link>
          </li> */}
          {/* <li className="nav-item">
            <Link to="/faq" style={{ textDecoration: "none" }}>
              <a
                href="."
                id="faq_nav"
                onMouseOver={() => NavHover("1", "0", "faq_nav")}
                onMouseLeave={() => NavHover("1", "1", "faq_nav")}
                className="nav-link p-1 mx-2"
                style={{ color: "black", borderRadius: "5px" }}
              >
                FAQs
              </a>
            </Link>
          </li> */}
          {/* <li className="nav-item">
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <a
                href="."
                id="con_nav"
                onMouseOver={() => NavHover("1", "0", "con_nav")}
                onMouseLeave={() => NavHover("1", "1", "con_nav")}
                className="nav-link p-1 mx-2"
                style={{ color: "black", borderRadius: "5px" }}
              >
                Contact US
              </a>
            </Link>
          </li> */}
          <li className="nav-item">
            <Link to="/join" style={{ textDecoration: "none" }}>
              <a
                href="."
                id="join_nav"
                onMouseOver={() => NavHover("1", "0", "join_nav")}
                onMouseLeave={() => NavHover("1", "1", "join_nav")}
                className="nav-link p-1 mx-2"
                style={{ color: "black", borderRadius: "5px" }}
              >
                Join US
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
