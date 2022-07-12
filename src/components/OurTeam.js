import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Foot2 from "./foot2";
import Navnew from "./Navnew";
import img1 from "./teamHeader.svg";
import vivek from "./TeamImages/vivek.jpg";
import gopi from "./TeamImages/noimg.png";
import sneha from "./TeamImages/sneha.jpg";
// import venkatesh from "./TeamImages/venky.png";
import kishan from "./TeamImages/kishan.jpg";
import akhil from "./TeamImages/akhil.jpg";
import priya from "./TeamImages/priya.jpeg";
import sathvika from "./TeamImages/sathvika.png";
import sai from "./TeamImages/sai.jpeg";
import nishant from "./TeamImages/nishant.png";
import "./OurTeam.css";

function OurTeam() {
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
        className="row py-3 mx-0"
        style={{
          backgroundImage: "linear-gradient(180deg, #6dd2ae 0%, white 90%)",
          width: "100vw",
        }}
      >
        <div className="row">
          <div className="col-lg-9 col-md-7 col-4 px-lg-0 px-md-0 ps-lg-4 ps-md-4 ps-1">
            <h1
              className="fw-bold ps-4 mt-lg-4 mt-2"
              style={{ textAlign: "left", marginBottom: "60px" }}
            >
              Our Team
            </h1>
            <div className="d-lg-block d-md-block d-none pt-1">
              <h5 className="mt-5 mb-3" style={{ fontFamily: "cursive" }}>
                Pladex is lovingly built and maintained by these fine folks.
              </h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-5 col-8 pe-0">
            <img
              src={img1}
              alt=""
              style={{ height: "100%", width: "80%", float: "right" }}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto" style={{ width: "100vw" }}>
        <div
          className="row mx-auto my-4"
          style={{ width: display ? "100%" : "85%" }}
        >
          <div
            className="col-md-6 col-lg-4 pt-0 px-3"
            style={{ height: "auto" }}
          >
            <div className="pt-0">
              <center>
                <img
                  className="bg-dark"
                  src={vivek}
                  alt="vivek"
                  style={{ width: "100%" }}
                />
              </center>
            </div>
            <span style={{ position: "relative", top: "-120px" }}>
              <div className="w-100 d-inline-block pt-0">
                <div
                  className="float-start text-white w-auto d-inline-block ps-3 pe-1 py-1"
                  style={{ borderRadius: "0 3px 3px 0" }}
                >
                  <h6
                    style={{
                      fontSize: "13px",
                      marginBottom: "0",
                      paddingBottom: "3px",
                      borderBottom: "3px solid white",
                      fontFamily: "Mochiy Pop P One, sans-serif",
                    }}
                  >
                    Front-end lead
                  </h6>
                </div>
              </div>
              <div className="w-100 d-inline-block pt-0">
                <div
                  className="float-start text-white w-auto d-inline-block ps-3 pe-1 py-0"
                  style={{ borderRadius: "0 3px 3px 0" }}
                >
                  <h6
                    className="text-start"
                    style={{
                      fontSize: "30px",
                      marginBottom: "0",
                      fontFamily: "Bebas Neue, cursive",
                    }}
                  >
                    VIVEK
                    <br /> PAIDI
                  </h6>
                </div>
              </div>
            </span>
          </div>
          <div
            className="col-md-6 col-lg-4 pt-0 px-3"
            style={{ height: "auto" }}
          >
            <div className="pt-0">
              <center>
                <img
                  className="bg-dark"
                  src={sneha}
                  alt="sneha"
                  style={{ width: "100%" }}
                />
              </center>
            </div>
            <span style={{ position: "relative", top: "-120px" }}>
              <div className="w-100 d-inline-block pt-0">
                <div
                  className="float-start text-white w-auto d-inline-block ps-3 pe-1 py-1"
                  style={{ borderRadius: "0 3px 3px 0" }}
                >
                  <h6
                    className="crh"
                    style={{
                      fontSize: "13px",
                      marginBottom: "0",
                      paddingBottom: "3px",
                      borderBottom: "3px solid white",
                      fontFamily: "Mochiy Pop P One, sans-serif",
                    }}
                  >
                    Front-end lead
                  </h6>
                </div>
              </div>
              <div className="w-100 d-inline-block pt-0">
                <div
                  className="float-start text-white w-auto d-inline-block ps-3 pe-1 py-0"
                  style={{ borderRadius: "0 3px 3px 0" }}
                >
                  <h6
                    className="text-start cr"
                    style={{
                      fontSize: "30px",
                      marginBottom: "0",
                      fontFamily: "Bebas Neue, cursive",
                    }}
                  >
                    SNEHA
                    <br /> CHADIPIRALLA
                  </h6>
                </div>
              </div>
            </span>
          </div>
          <div
            className="col-md-6 col-lg-4 pt-0 px-3"
            style={{ height: "auto" }}
          >
            <div className="pt-0">
              <center>
                <img
                  className="bg-dark"
                  src={gopi}
                  alt="gopi"
                  style={{ width: "100%" }}
                />
              </center>
            </div>
            <span style={{ position: "relative", top: "-120px" }}>
              <div className="w-100 d-inline-block pt-0">
                <div
                  className="float-start text-white w-auto d-inline-block ps-3 pe-1 py-1"
                  style={{ borderRadius: "0 3px 3px 0" }}
                >
                  <h6
                    style={{
                      fontSize: "13px",
                      marginBottom: "0",
                      paddingBottom: "3px",
                      borderBottom: "3px solid white",
                      fontFamily: "Mochiy Pop P One, sans-serif",
                    }}
                  >
                    Back-end lead
                  </h6>
                </div>
              </div>
              <div className="w-100 d-inline-block pt-0">
                <div
                  className="float-start text-white w-auto d-inline-block ps-3 pe-1 py-0"
                  style={{ borderRadius: "0 3px 3px 0" }}
                >
                  <h6
                    className="text-start"
                    style={{
                      fontSize: "30px",
                      marginBottom: "0",
                      fontFamily: "Bebas Neue, cursive",
                    }}
                  >
                    GOPI CHAND
                    <br /> KOMMANABOYINA
                  </h6>
                </div>
              </div>
            </span>
          </div>
          {/* <div
            className="col-md-6 col-lg-4 pt-0 px-3"
            style={{ height: "auto" }}
          >
            <div className="pt-0">
              <center>
                <img
                  className="bg-dark"
                  src={venkatesh}
                  alt="venkatesh"
                  style={{ width: "100%" }}
                />
              </center>
            </div>
            <span style={{ position: "relative", top: "-120px" }}>
              <div className="w-100 d-inline-block pt-0">
                <div
                  className="float-start text-white w-auto d-inline-block ps-3 pe-1 py-1"
                  style={{ borderRadius: "0 3px 3px 0" }}
                >
                  <h6
                    className="text-start"
                    style={{
                      fontSize: "13px",
                      marginBottom: "0",
                      paddingBottom: "3px",
                      borderBottom: "3px solid white",
                      fontFamily: "Mochiy Pop P One, sans-serif",
                    }}
                  >
                    Back-end lead
                  </h6>
                </div>
              </div>
              <div className="w-100 d-inline-block pt-0">
                <div
                  className="float-start text-white w-auto d-inline-block ps-3 pe-1 py-0"
                  style={{ borderRadius: "0 3px 3px 0" }}
                >
                  <h6
                    className="text-start"
                    style={{
                      fontSize: "30px",
                      marginBottom: "0",
                      fontFamily: "Bebas Neue, cursive",
                    }}
                  >
                    VENKATESH
                    <br /> PATNALA
                  </h6>
                </div>
              </div>
            </span>
          </div> */}
          <div
            className="col-md-6 col-lg-4 pt-0 px-3"
            style={{ height: "auto" }}
          >
            <div className="pt-0">
              <center>
                <img
                  className="bg-dark"
                  src={kishan}
                  alt="kishan"
                  style={{ width: "100%" }}
                />
              </center>
            </div>
            <span style={{ position: "relative", top: "-120px" }}>
              <div className="w-100 d-inline-block pt-0">
                <div
                  className="float-start text-white w-auto d-inline-block ps-3 pe-1 py-1"
                  style={{ borderRadius: "0 3px 3px 0" }}
                >
                  <h6
                    className="text-start"
                    style={{
                      fontSize: "13px",
                      marginBottom: "0",
                      paddingBottom: "3px",
                      borderBottom: "3px solid white",
                      fontFamily: "Mochiy Pop P One, sans-serif",
                    }}
                  >
                    Designing team lead
                  </h6>
                </div>
              </div>
              <div className="w-100 d-inline-block pt-0">
                <div
                  className="float-start text-white w-auto d-inline-block ps-3 pe-1 py-0"
                  style={{ borderRadius: "0 3px 3px 0" }}
                >
                  <h6
                    className="text-start"
                    style={{
                      fontSize: "30px",
                      marginBottom: "0",
                      fontFamily: "Bebas Neue, cursive",
                    }}
                  >
                    SRI KISHAN
                    <br />
                    CHITTA
                  </h6>
                </div>
              </div>
            </span>
          </div>
          <div
            className="col-md-6 col-lg-4 pt-0 px-3"
            style={{ height: "auto" }}
          >
            <div className="pt-0">
              <center>
                <img
                  className="bg-dark"
                  src={akhil}
                  alt="akhil"
                  style={{ width: "100%" }}
                />
              </center>
            </div>
            <span style={{ position: "relative", top: "-120px" }}>
              <div className="w-100 d-inline-block pt-0">
                <div
                  className="float-start text-white w-auto d-inline-block ps-3 pe-1 py-1"
                  style={{ borderRadius: "0 3px 3px 0" }}
                >
                  <h6
                    style={{
                      fontSize: "13px",
                      marginBottom: "0",
                      paddingBottom: "3px",
                      borderBottom: "3px solid white",
                      fontFamily: "Mochiy Pop P One, sans-serif",
                    }}
                  >
                    Editing team lead
                  </h6>
                </div>
              </div>
              <div className="w-100 d-inline-block pt-0">
                <div
                  className="float-start text-white w-auto d-inline-block ps-3 pe-1 py-0"
                  style={{ borderRadius: "0 3px 3px 0" }}
                >
                  <h6
                    className="text-start"
                    style={{
                      fontSize: "30px",
                      marginBottom: "0",
                      fontFamily: "Bebas Neue, cursive",
                    }}
                  >
                    AKHILNAIK
                    <br /> TEJAVATH
                  </h6>
                </div>
              </div>
            </span>
          </div>
          <div
            className="col-md-6 col-lg-4 pt-0 px-3"
            style={{ height: "auto" }}
          >
            <div className="pt-0">
              <center>
                <img
                  className="bg-dark"
                  src={priya}
                  alt="priya"
                  style={{ width: "100%" }}
                />
              </center>
            </div>
            <span style={{ position: "relative", top: "-120px" }}>
              <div className="w-100 d-inline-block pt-0">
                <div
                  className="float-start text-white w-auto d-inline-block ps-3 pe-1 py-1"
                  style={{ borderRadius: "0 3px 3px 0" }}
                >
                  <h6
                    style={{
                      fontSize: "13px",
                      marginBottom: "0",
                      paddingBottom: "3px",
                      borderBottom: "3px solid white",
                      fontFamily: "Mochiy Pop P One, sans-serif",
                    }}
                  >
                    Event Management team lead
                  </h6>
                </div>
              </div>
              <div className="w-100 d-inline-block pt-0">
                <div
                  className="float-start text-white w-auto d-inline-block ps-3 pe-1 py-0"
                  style={{ borderRadius: "0 3px 3px 0" }}
                >
                  <h6
                    className="text-start"
                    style={{
                      fontSize: "30px",
                      marginBottom: "0",
                      fontFamily: "Bebas Neue, cursive",
                    }}
                  >
                    SAI PRIYA
                    <br /> MODRACHA
                  </h6>
                </div>
              </div>
            </span>
          </div>
          <div
            className="col-md-6 col-lg-4 pt-0 px-3"
            style={{ height: "auto" }}
          >
            <div className="pt-0">
              <center>
                <img
                  className="bg-dark"
                  src={sathvika}
                  alt="sathvika"
                  style={{ width: "100%" }}
                />
              </center>
            </div>
            <span style={{ position: "relative", top: "-120px" }}>
              <div className="w-100 d-inline-block pt-0">
                <div
                  className="float-start text-white w-auto d-inline-block ps-3 pe-1 py-1"
                  style={{ borderRadius: "0 3px 3px 0" }}
                >
                  <h6
                    style={{
                      fontSize: "13px",
                      marginBottom: "0",
                      paddingBottom: "3px",
                      borderBottom: "3px solid white",
                      fontFamily: "Mochiy Pop P One, sans-serif",
                    }}
                  >
                    Content team lead
                  </h6>
                </div>
              </div>
              <div className="w-100 d-inline-block pt-0">
                <div
                  className="float-start text-white w-auto d-inline-block ps-3 pe-1 py-0"
                  style={{ borderRadius: "0 3px 3px 0" }}
                >
                  <h6
                    className="text-start"
                    style={{
                      fontSize: "30px",
                      marginBottom: "0",
                      fontFamily: "Bebas Neue, cursive",
                    }}
                  >
                    SATHVIKA
                    <br /> PADICUNDALA
                  </h6>
                </div>
              </div>
            </span>
          </div>
          <div
            className="col-md-6 col-lg-4 pt-0 px-3"
            style={{ height: "auto" }}
          >
            <div className="pt-0">
              <center>
                <img
                  className="bg-dark"
                  src={sai}
                  alt="sai"
                  style={{ width: "100%" }}
                />
              </center>
            </div>
            <span style={{ position: "relative", top: "-120px" }}>
              <div className="w-100 d-inline-block pt-0">
                <div
                  className="float-start text-white w-auto d-inline-block ps-3 pe-1 py-1"
                  style={{ borderRadius: "0 3px 3px 0" }}
                >
                  <h6
                    style={{
                      fontSize: "13px",
                      marginBottom: "0",
                      paddingBottom: "3px",
                      borderBottom: "3px solid white",
                      fontFamily: "Mochiy Pop P One, sans-serif",
                    }}
                  >
                    Marketing team lead
                  </h6>
                </div>
              </div>
              <div className="w-100 d-inline-block pt-0">
                <div
                  className="float-start text-white w-auto d-inline-block ps-3 pe-1 py-0"
                  style={{ borderRadius: "0 3px 3px 0" }}
                >
                  <h6
                    className="text-start"
                    style={{
                      fontSize: "30px",
                      marginBottom: "0",
                      fontFamily: "Bebas Neue, cursive",
                    }}
                  >
                    SAI RAM
                    <br /> BANOTH
                  </h6>
                </div>
              </div>
            </span>
          </div>
          <div
            className="col-md-6 col-lg-4 pt-0 px-3"
            style={{ height: "auto" }}
          >
            <div className="pt-0">
              <center>
                <img
                  className="bg-dark"
                  src={nishant}
                  alt="nishant"
                  style={{ width: "100%" }}
                />
              </center>
            </div>
            <span style={{ position: "relative", top: "-120px" }}>
              <div className="w-100 d-inline-block pt-0">
                <div
                  className="float-start text-white w-auto d-inline-block ps-3 pe-1 py-1"
                  style={{ borderRadius: "0 3px 3px 0" }}
                >
                  <h6
                    style={{
                      fontSize: "13px",
                      marginBottom: "0",
                      paddingBottom: "3px",
                      borderBottom: "3px solid white",
                      fontFamily: "Mochiy Pop P One, sans-serif",
                    }}
                  >
                    App Dev team lead
                  </h6>
                </div>
              </div>
              <div className="w-100 d-inline-block pt-0">
                <div
                  className="float-start text-white w-auto d-inline-block ps-3 pe-1 py-0"
                  style={{ borderRadius: "0 3px 3px 0" }}
                >
                  <h6
                    className="text-start"
                    style={{
                      fontSize: "30px",
                      marginBottom: "0",
                      fontFamily: "Bebas Neue, cursive",
                    }}
                  >
                    NISHANT NITIN
                    <br /> MISHRA
                  </h6>
                </div>
              </div>
            </span>
          </div>

          {/* <div className="col-lg-2"></div> */}
        </div>
      </div>
      <Foot2 />
    </>
  );
}

export default OurTeam;
