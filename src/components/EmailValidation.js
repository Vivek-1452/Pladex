import React from "react";
import Zoom from "react-reveal/Zoom";
import { useState } from "react";
import { useEffect } from "react";
import Navnew from "./Navnew";
import regSuc from "./FocusImages/mailSent.svg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
// import axios from "axios";
// import { InferencePriority } from "typescript";

AOS.init();

function EmailValidation() {
  // function redirect() {
  //   // window.location.href = "http://65.1.96.8/login";
  //   // window.location.href = "localhost:3000/login";
  //   document.location.href = "/login";
  // }

  // useEffect(() => {
  //   setTimeout(() => {
  //     redirect();
  //   }, 15000);
  // }, []);

  // const [myState, setMystate] = useState({});

  // const [info, setInfo] = useState([]);

  // const [infocomp, setInfocomp] = useState([]);

  // useEffect(() => {
  //   axios.post("https://www.pladex.in/auth/eventdata").then((response) => {
  //     const myInfo = response.data.eventdata;
  //     setInfo(myInfo);
  //     if (response.data.state == "event") {
  //       document.getElementById("eventdisplay").style.display = "block";
  //       document.getElementById("compdisplay").style.display = "none";
  //     }
  //   });
  // }, [info]);

  // useEffect(() => {
  //   axios
  //     .post("https://www.pladex.in/auth/competitiondata")
  //     .then((response) => {
  //       const myInfocomp = response.data.competitiondata;
  //       setInfocomp(myInfocomp);
  //       if (response.data.state == "competition") {
  //         document.getElementById("eventdisplay").style.display = "none";
  //         document.getElementById("compdisplay").style.display = "block";
  //       }
  //     });
  // }, [infocomp]);

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
            width={display ? "400" : "600"}
            height={display ? "370" : "400"}
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
              <b>
                Kindly click on the verification link sent to your registered
                Mail ID (might be in <span style={{ color: "red" }}>spam!</span>
                ).
              </b>
              <br />
              <br className="d-md-none d-block" />
              Didn't get an verification mail?
              <form
                method="POST"
                action="auth/resend_mail"
                className="d-inline-block w-auto"
              >
                <button
                  id="submit"
                  type="submit"
                  className="btn my-2 text-white px-4"
                  style={{ backgroundColor: "#53c29b" }}
                >
                  Re-send!
                </button>
              </form>
            </Zoom>
          </h3>
        </div>
      </div>
    </>
  );
}

export default EmailValidation;
