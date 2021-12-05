import React from "react";
import Zoom from "react-reveal/Zoom";
import { useState } from "react";
import { useEffect } from "react";
import Navnew from "./Navnew";
import regSuc from "./FocusImages/regSuc.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { InferencePriority } from "typescript";

AOS.init();

function CompRegSuccess() {
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
      <Navnew logincheck={loginauth} loginhandler={loginhandler} />
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
            width={display ? "400" : "650"}
            height={display ? "350" : "450"}
            data-aos="zoom-in"
            data-aos-duration="20000"
          />
        </Zoom>
        <div className="my-sm-2 mx-3 my-4">
          <h1 className="fw-bold" style={{ color: "#50bc95" }}>
            Wahooo!
          </h1>
          <h2 className="fw-light">
            <Zoom bottom cascade>
              <p>You've Successfully registered for the competitions.</p>
              Check your Mail for info.
            </Zoom>
          </h2>
        </div>
      </div>
    </>
  );
}

export default CompRegSuccess;
