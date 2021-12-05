import React from "react";
import Zoom from "react-reveal/Zoom";
import { useState } from "react";
import { useEffect } from "react";
import Navnew from "./Navnew";
import regSuc from "./FocusImages/mailSent.svg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { InferencePriority } from "typescript";

AOS.init();

function ResetValidation() {
  function redirect() {
    document.location.href = "/login";
  }

  useEffect(() => {
    setTimeout(() => {
      redirect();
    }, 7000);
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
        className="pt-0"
        style={{
          height: "85vh",
          width: "100vw",
          display: "table-cell",
          verticalAlign: "middle",
        }}
      >
        <Zoom>
          <img
            src={regSuc}
            alt="Successfully registered"
            width={display ? "400" : "700"}
            height={display ? "370" : "500"}
            data-aos="zoom-in"
            data-aos-duration="20000"
          />
        </Zoom>
        <div className="my-sm-2 mx-3 my-4">
          <h1 className="fw-bold" style={{ color: "#50bc95" }}>
            Holaa!
          </h1>
          <h2 className="fw-light">
            We'll send you a reset link, <br className="d-md-none" />
            <Zoom bottom cascade>
              <b>If the entered Mail ID is registered.</b>
              <br />
              Redirecting to login page.
            </Zoom>
          </h2>
        </div>
      </div>
    </>
  );
}

export default ResetValidation;
