import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Foot2 from "./foot2";
import Navnew from "./Navnew";
import img1 from "./ImgFocusPartners/partHead.svg";
import image1 from "./ImgFocusPartners/part1.png";
import image2 from "./ImgFocusPartners/part2.png";
import image3 from "./ImgFocusPartners/part3.png";
import image4 from "./ImgFocusPartners/part4.png";
import image5 from "./ImgFocusPartners/part5.png";
import image6 from "./ImgFocusPartners/part6.jpg";
import image7 from "./ImgFocusPartners/part7.png";
import image8 from "./ImgFocusPartners/part8.jpeg";
import image9 from "./ImgFocusPartners/part9.jpg";
import image10 from "./ImgFocusPartners/part10.png";
import image11 from "./ImgFocusPartners/part11.png";
import image12 from "./ImgFocusPartners/part12.png";
import image13 from "./ImgFocusPartners/part13.png";
import image14 from "./ImgFocusPartners/part14.png";
import image15 from "./ImgFocusPartners/part15.png";
import image16 from "./ImgFocusPartners/part16.png";
import image17 from "./ImgFocusPartners/part17.png";
import image18 from "./ImgFocusPartners/part18.png";
import image19 from "./ImgFocusPartners/part19.jpeg";
import image20 from "./ImgFocusPartners/part20.jpeg";
import image21 from "./ImgFocusPartners/part21.png";
import image22 from "./ImgFocusPartners/part22.png";
import image23 from "./ImgFocusPartners/part23.png";
import image24 from "./ImgFocusPartners/part24.jpeg";
import image25 from "./ImgFocusPartners/part25.png";
import image26 from "./ImgFocusPartners/part26.png";
import image27 from "./ImgFocusPartners/part27.png";
import image28 from "./ImgFocusPartners/part28.jpg";
import image29 from "./ImgFocusPartners/part29.png";

function AllPartners() {
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
              Our Partners
            </h1>
            <div className="d-lg-block d-md-block d-none pt-1">
              <h4 className="mt-5 mb-3" style={{ fontFamily: "cursive" }}>
                Partner up to produce meaning AND value!
              </h4>
            </div>
          </div>
          <div className="col-lg-3 col-md-5 col-8 pe-0 py-5">
            <img
              src={img1}
              alt=""
              style={{ height: "100%", width: "80%", float: "right" }}
            />
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#f5f6f7" }}>
        <div
          className={
            display ? "row py-4 mx-auto" : "container row py-4 mx-auto"
          }
        >
          {/* <h1 className="text-center fw-bold my-3">
          OUR{" "}
          <span className="text" style={{ color: "#3ad6ab" }}>
            PARTNERS
          </span>
        </h1> */}
          <div className="col-md-6 col-lg-4 my-2 my-md-4">
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                // width: "70%",
                width: display ? "85%" : "80%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3 bg-dark"
                  src={image1}
                  alt="E-Cell"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title ">
                  <b>E-Cell</b>
                </h2>
                <p className="card-text my-4">NIT AGARTALA</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-md-4">
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: display ? "85%" : "80%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3 bg-dark"
                  src={image2}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title ">
                  <b>Literary Club</b>
                </h2>
                <p className="card-text my-4">NIT AGARTALA</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-md-4">
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: display ? "85%" : "80%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3"
                  src={image4}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title ">
                  <b>Dramatics Club</b>
                </h2>
                <p className="card-text my-4">NIT SILCHAR</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-md-4">
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: display ? "85%" : "80%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3"
                  src={image3}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title ">
                  <b>Aaveg</b>
                </h2>
                <p className="card-text my-4">NIT AGARTALA</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-md-4">
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: display ? "85%" : "80%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3"
                  src={image5}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title ">
                  <b>Sanganan Prayog</b>
                </h2>
                <p className="card-text my-4">NIT AGARTALA</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-md-4">
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: display ? "85%" : "80%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3"
                  src={image6}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title ">
                  <b>EEE SOCIETY</b>
                </h2>
                <p className="card-text my-4">NIT MIZORAM</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-md-4">
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: display ? "85%" : "80%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3 bg-dark"
                  src={image7}
                  alt="E-Cell"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title ">
                  <b>E-Cell</b>
                </h2>
                <p className="card-text my-4">NIT NAGALAND</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-md-4">
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: display ? "85%" : "80%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3 bg-dark"
                  src={image8}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h3 className="card-title ">
                  <b>Social Service Club</b>
                </h3>
                <p className="card-text my-4">NIT NAGALAND</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-md-4">
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: display ? "85%" : "80%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3"
                  src={image9}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title ">
                  <b>MOVIE CLUB</b>
                </h2>
                <p className="card-text my-4">NIT NAGALAND</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-md-4">
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: display ? "85%" : "80%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3"
                  src={image10}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h3 className="card-title ">
                  <b>Student Society</b>
                </h3>
                <p className="card-text my-4">NIT Arunachal Pradesh</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-md-4">
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: display ? "85%" : "80%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3"
                  src={image11}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title ">
                  <b>Aaveg</b>
                </h2>
                <p className="card-text my-4">NIT AGARTALA</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-md-4">
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: display ? "85%" : "80%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3"
                  src={image12}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title ">
                  <b>Sanganan Prayog</b>
                </h2>
                <p className="card-text my-4">NIT AGARTALA</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-md-4">
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: display ? "85%" : "80%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3 bg-dark"
                  src={image13}
                  alt="E-Cell"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title ">
                  <b>E-Cell</b>
                </h2>
                <p className="card-text my-4">NIT NAGALAND</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-md-4">
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: display ? "85%" : "80%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3 bg-dark"
                  src={image14}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title ">
                  <b>CODECHEF</b>
                </h2>
                <p className="card-text my-4">IIIT AGARTALA</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-md-4">
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: display ? "85%" : "80%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3"
                  src={image15}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title">
                  <b>Magnetophone</b>
                </h2>
                <p className="card-text my-4">NIT MANIPUR</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-md-4">
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: display ? "85%" : "80%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3"
                  src={image16}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title py-4">
                  <b>NIT Meghalaya</b>
                </h2>
                {/* <p className="card-text my-4">NIT AGARTALA</p> */}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-md-4">
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: display ? "85%" : "80%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3"
                  src={image17}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title ">
                  <b>Photography Club</b>
                </h2>
                <p className="card-text my-4">NIT MEGHALAYA</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-md-4">
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: display ? "85%" : "80%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3"
                  src={image18}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title py-4">
                  <b>CView</b>
                </h2>
                {/* <p className="card-text my-4">-----</p> */}
              </div>
            </div>
          </div>
          {/* <div className="col-md-3 col-lg-4 d-sm-none d-md-block d-lg-block"></div> */}
          <div className="col-md-6 col-lg-4 my-2 my-md-4">
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: display ? "85%" : "80%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3 bg-dark"
                  src={image19}
                  alt="E-Cell"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title ">
                  <b>Photography Club</b>
                </h2>
                <p className="card-text my-4">NIT AGARTALA</p>
              </div>
            </div>
          </div>
          {/* <div className="col-md-3 col-lg-4 d-sm-none d-md-block d-lg-block"></div> */}

          <div className="col-md-6 col-lg-4 my-2 my-md-4">
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: display ? "85%" : "80%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3 bg-dark"
                  src={image20}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h3 className="card-title ">
                  <b>ME CLUB</b>
                </h3>
                <p className="card-text my-4">NIT NAGALAND</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-md-4">
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: display ? "85%" : "80%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3"
                  src={image21}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title ">
                  <b>NSS</b>
                </h2>
                <p className="card-text my-4">Mount Mary College</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-md-4">
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: display ? "85%" : "80%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3"
                  src={image22}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h3 className="card-title ">
                  <b>Learning & Service Club</b>
                </h3>
                <p className="card-text my-4">Pachhunga University College</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-md-4">
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: display ? "85%" : "80%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3"
                  src={image23}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title py-4">
                  <b>NERIST</b>
                </h2>
                {/* <p className="card-text my-4">NIT AGARTALA</p> */}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-md-4">
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: display ? "85%" : "80%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3"
                  src={image24}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title ">
                  <b>FITNESS CLUB</b>
                </h2>
                <p className="card-text my-4">NIT NAGALAND</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-md-4">
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: display ? "85%" : "80%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3"
                  src={image25}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title pt-2">
                  <b>Tripura Mathmetical Association</b>
                </h2>
                {/* <p className="card-text my-4">NIT NAGALAND</p> */}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-md-4">
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: display ? "85%" : "80%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3"
                  src={image26}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title py-4">
                  <b>SJU</b>
                </h2>
                {/* <p className="card-text my-4">NIT NAGALAND</p> */}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-md-4">
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: display ? "85%" : "80%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3"
                  src={image27}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title ">
                  <b>CODING CLUB</b>
                </h2>
                <p className="card-text my-4">NIT MEGHALAYA</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-md-4">
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: display ? "85%" : "80%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3"
                  src={image28}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title py-4">
                  <b>ACCESS</b>
                </h2>
                {/* <p className="card-text my-4">NIT NAGALAND</p> */}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-md-4">
            <div
              className="card mx-auto my-2"
              style={{
                minWidth: "250px",
                width: display ? "85%" : "80%",
                height: "95%",
                border: "1px solid #3ad6ab",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="my-3"
                  src={image29}
                  alt="College Explorer"
                  width="200"
                  height="200"
                  style={{ borderRadius: "50%" }}
                />
              </center>
              <div className="card-body">
                <h2 className="card-title ">
                  <b>MUSIC CLUB</b>
                </h2>
                <p className="card-text my-4">NIT NAGALAND</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Foot2 />
    </>
  );
}

export default AllPartners;
