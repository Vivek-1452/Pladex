import React from "react";
import Zoom from "react-reveal/Zoom";
import { useState } from "react";
import { useEffect } from "react";
import Navnew from "./Navnew";
import regSuc from "./error.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { InferencePriority } from "typescript";

AOS.init();

function ErrorRedirect() {
  function redirect() {
    document.location.href = "/";
  }

  useEffect(() => {
    setTimeout(() => {
      redirect();
    }, 4000);
  }, []);

  const [display, setdisplay] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setdisplay(true);
    }
  }, [display]);

  return (
    <>
      {/* <Navnew logincheck={loginauth} loginhandler={loginhandler} /> */}
      <div
        className="pt-3"
        style={{
          height: "85vh",
          width: "100vw",
          display: "table-cell",
          verticalAlign: "middle",
          overflow: "hidden",
        }}
      >
        <Zoom>
          <img
            className="mb-5"
            src={regSuc}
            alt="Successfully registered"
            width={display ? "300" : "320"}
            height={display ? "280" : "300"}
            data-aos="zoom-in"
            data-aos-duration="20000"
          />
        </Zoom>
        <div className="my-sm-2 mx-3 mt-4">
          <h1 className="fw-bold" style={{ color: "#50bc95" }}>
            Oops!
          </h1>
          <h2 className="fw-light">
            <b>Something unexpected error has occured.</b>{" "}
            <br className="d-md-none" />
            <Zoom bottom cascade>
              Redirecting to login page.
            </Zoom>
          </h2>
        </div>
      </div>
    </>
  );
}

export default ErrorRedirect;
