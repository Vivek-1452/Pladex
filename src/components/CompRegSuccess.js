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
            width={display ? "400" : "450"}
            height={display ? "300" : "300"}
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
              <br />
              <p className="fs-6" style={{ color: "" }}>
                <u>Share our competitions through</u>
              </p>
              <div className="d-inline-block w-auto">
                <a
                  href="whatsapp://send?text=I'm inviting you to check out *FOCUS NEXT INDIA EVENT- India's Largest Virtual Event by PLADEX*.%0A%0AExciting contests and informative live interactive sessions are being held!%0ATake part in this 12 day digital journey and *win exciting prizes*.%0AHurry up!! *Only the first 1000 registrations are for free*.%0A*Register now* and grab your tokens.!!!!!%0A%0Ahttps://www.pladex.in/Focus"
                  target="_blank"
                  rel="noreferrer"
                  className="btn mx-auto"
                  style={{
                    // backgroundColor: "#25d366",
                    backgroundColor: "rgb(37, 211, 102, 0.2)",
                    width: "auto",
                    color: "#25d366",
                    borderRadius: "50%",
                    padding: "10px 13px",
                  }}
                >
                  <i className="fab fa-whatsapp fs-3"></i>
                </a>
                <br />
                <p className="mt-1 mb-0 me-md-3 me-1 fs-6 d-inline-block w-auto">
                  WhatsApp
                </p>
              </div>
              <div className="d-inline-block w-auto">
                <a
                  href="https://web.whatsapp.com/send?text=I'm inviting you to check out *FOCUS NEXT INDIA EVENT- India's Largest Virtual Event by PLADEX*.%0A%0AExciting contests and informative live interactive sessions are being held!%0ATake part in this 12 day digital journey and *win exciting prizes*.%0AHurry up!! *Only the first 1000 registrations are for free*.%0A*Register now* and grab your tokens.!!!!!%0A%0Ahttps://www.pladex.in/Focus"
                  target="_blank"
                  rel="noreferrer"
                  className="btn mx-auto"
                  style={{
                    // backgroundColor: "#25d366",
                    backgroundColor: "rgb(37, 211, 102, 0.8)",
                    width: "auto",
                    color: "white",
                    borderRadius: "50%",
                    padding: "10px 13px",
                  }}
                >
                  <i className="fab fa-whatsapp fs-3"></i>
                </a>
                <br />
                <p className="mt-1 mb-0 ms-md-3 ms-1 fs-6 d-inline-block w-auto">
                  WhatsApp web
                </p>
              </div>
            </Zoom>
          </h2>
        </div>
      </div>
    </>
  );
}

export default CompRegSuccess;
