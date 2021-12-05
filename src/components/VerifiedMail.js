import React from "react";
import Zoom from "react-reveal/Zoom";
import { useState } from "react";
import { useEffect } from "react";
import Navnew from "./Navnew";
import regSuc from "./FocusImages/mailVerified.svg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { InferencePriority } from "typescript";

AOS.init();

function VerifiedMail() {
  function redirect() {
    document.location.href = "/login";
  }

  useEffect(() => {
    setTimeout(() => {
      redirect();
    }, 100000);
  }, []);

  const [loginauth, setloginauth] = useState(false);

  const loginhandler = () => {
    setloginauth(true);
  };

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
          <h3 className="fw-light">
            <Zoom bottom cascade>
              <b>Your Mail ID is successfully verified!</b>
              <br />
              <span className="fs-5">Redirecting to login page.</span>
            </Zoom>
          </h3>
        </div>
      </div>
    </>
  );
}

export default VerifiedMail;
