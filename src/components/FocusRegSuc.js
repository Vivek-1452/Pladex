import React from "react";
import Zoom from "react-reveal/Zoom";
import { useState } from "react";
import { useEffect } from "react";
import regSuc from "./FocusImages/regSuc.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function FocusRegSuc() {
  const [display, setdisplay] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setdisplay(true);
    }
  }, [display]);

  return (
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
          Wahooo!
        </h1>
        <h2 className="fw-light">
          You've Successfully registered for{" "}
          <br className="d-sm-none d-md-none d-lg-none" />
          <Zoom bottom cascade>
            <span style={{ color: "#6dd2ae" }}>ABC event, DEF event.</span>
          </Zoom>
        </h2>
      </div>
    </div>
  );
}

export default FocusRegSuc;
