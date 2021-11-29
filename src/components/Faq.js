import React from "react";

function Faq() {
  function myFunction(id, icon) {
    var x = document.getElementById(id);
    var y = document.getElementById(icon);
    if (x.style.display !== "block") {
      x.style.display = "block";
      y.className = "fas fa-times mt-1 me-2";
    } else {
      x.style.display = "none";
      y.className = "fas fa-plus mt-1 me-2";
    }
  }
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(315deg, #1de2c8 0%, #fffbfc 74%)",
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <div className="container py-4">
        <h4 className="text-center fw-bold display-6 mb-5">FAQs</h4>
        <div className="row mx-2">
          <div className="col-lg-2"></div>
          <div
            className="col-lg-8"
            style={{
              borderRadius: "10px",
              backgroundColor: "white",
              boxShadow: "0 0 10px #d4d0d0",
              minHeight: "60px",
            }}
          >
            <div className="text-start">
              <p className="fw-bold mt-3 ps-1">
                What is the role of pladex in student's lives?{" "}
                <i
                  id="onei"
                  className="fas fa-plus mt-1 me-2"
                  onClick={() => myFunction("one", "onei")}
                  style={{ float: "right" }}
                ></i>
              </p>
              <p id="one" className="px-2" style={{ display: "none" }}>
                <hr
                  style={{
                    height: "1.5px",
                    background:
                      "linear-gradient(to right, rgba(0, 0, 0, 0), #3ad6ab, rgba(0, 0, 0, 0))",
                  }}
                />
                We are here to connect students and form a community to let them
                share their ideas and create a world class digital education
                system in India.
              </p>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
        <br />
        <div className="row mx-2">
          <div className="col-lg-2"></div>
          <div
            className="col-lg-8"
            style={{
              borderRadius: "10px",
              backgroundColor: "white",
              boxShadow: "0 0 10px #d4d0d0",
              minHeight: "60px",
            }}
          >
            <div className="text-start">
              <p className="fw-bold mt-3 ps-1">
                Who are you?{" "}
                <i
                  id="twoi"
                  className="fas fa-plus mt-1 me-2"
                  onClick={() => myFunction("two", "twoi")}
                  style={{ float: "right" }}
                ></i>
              </p>
              <p id="two" className="px-2" style={{ display: "none" }}>
                <hr
                  style={{
                    height: "1.5px",
                    background:
                      "linear-gradient(to right, rgba(0, 0, 0, 0), #3ad6ab, rgba(0, 0, 0, 0))",
                  }}
                />
                We, the students from different colleges and from different
                domains have come together to form a community of students as
                our main motto.
              </p>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
        <br />
        <div className="row mx-2">
          <div className="col-lg-2"></div>
          <div
            className="col-lg-8"
            style={{
              borderRadius: "10px",
              backgroundColor: "white",
              boxShadow: "0 0 10px #d4d0d0",
              minHeight: "60px",
            }}
          >
            <div className="text-start">
              <p className="fw-bold mt-3 ps-1">
                Who can join in your start-up?{" "}
                <i
                  id="threei"
                  className="fas fa-plus mt-1 me-2"
                  onClick={() => myFunction("three", "threei")}
                  style={{ float: "right" }}
                ></i>
              </p>
              <p id="three" className="px-2" style={{ display: "none" }}>
                <hr
                  style={{
                    height: "1.5px",
                    background:
                      "linear-gradient(to right, rgba(0, 0, 0, 0), #3ad6ab, rgba(0, 0, 0, 0))",
                  }}
                />
                Under-Grad students who are passionate, committed, consistent
                and should have an interest in any of the required sections of
                our start-up.
              </p>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
        <br />
        <div className="row mx-2">
          <div className="col-lg-2"></div>
          <div
            className="col-lg-8"
            style={{
              borderRadius: "10px",
              backgroundColor: "white",
              boxShadow: "0 0 10px #d4d0d0",
              minHeight: "60px",
            }}
          >
            <div className="text-start">
              <p className="fw-bold mt-3 ps-1">
                Is there any non technical field in your startup?{" "}
                <i
                  id="fouri"
                  className="fas fa-plus mt-1 me-2"
                  onClick={() => myFunction("four", "fouri")}
                  style={{ float: "right" }}
                ></i>
              </p>
              <p id="four" className="px-2" style={{ display: "none" }}>
                <hr
                  style={{
                    height: "1.5px",
                    background:
                      "linear-gradient(to right, rgba(0, 0, 0, 0), #3ad6ab, rgba(0, 0, 0, 0))",
                  }}
                />
                Yes, you can be a community influencer or you can be a part of
                students to assist junior students in counselling process during
                their admissions or you can be part of live management team for
                podium talks.
              </p>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
        <br />
        <div className="row mx-2">
          <div className="col-lg-2"></div>
          <div
            className="col-lg-8"
            style={{
              borderRadius: "10px",
              backgroundColor: "white",
              boxShadow: "0 0 10px #d4d0d0",
              minHeight: "60px",
            }}
          >
            <div className="text-start">
              <p className="fw-bold mt-3 ps-1">
                Can anyone be a part of your startup?{" "}
                <i
                  id="fivei"
                  className="fas fa-plus mt-1 me-2"
                  onClick={() => myFunction("five", "fivei")}
                  style={{ float: "right" }}
                ></i>
              </p>
              <p id="five" className="px-2" style={{ display: "none" }}>
                <hr
                  style={{
                    height: "1.5px",
                    background:
                      "linear-gradient(to right, rgba(0, 0, 0, 0), #3ad6ab, rgba(0, 0, 0, 0))",
                  }}
                />
                UG students who are passionate, committed, consistent and have
                an expertise in any of the required sections can be a part of
                our start-up.
              </p>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
        <br />
        <div className="row mx-2">
          <div className="col-lg-2"></div>
          <div
            className="col-lg-8"
            style={{
              borderRadius: "10px",
              backgroundColor: "white",
              boxShadow: "0 0 10px #d4d0d0",
              minHeight: "60px",
            }}
          >
            <div className="text-start">
              <p className="fw-bold mt-3 ps-1">
                What are the different technical sections in your start-up?{" "}
                <i
                  id="sixi"
                  className="fas fa-plus mt-1 me-2"
                  onClick={() => myFunction("six", "sixi")}
                  style={{ float: "right" }}
                ></i>
              </p>
              <p id="six" className="px-2" style={{ display: "none" }}>
                <hr
                  style={{
                    height: "1.5px",
                    background:
                      "linear-gradient(to right, rgba(0, 0, 0, 0), #3ad6ab, rgba(0, 0, 0, 0))",
                  }}
                />
                Content Writing, Video Editing, Web Development, Social Media
                Marketing, Poster Making, App Development, Financial Management
                and Sponsorship.
              </p>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
