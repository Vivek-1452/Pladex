import React from "react";
import { useState } from "react";
import Foot2 from "./foot2";
import Navnew from "./Navnew";
import img1 from "./Podcast-amico.png";
import "./Ep.css";

function Ep4() {
  const [loginauth, setloginauth] = useState(false);

  const loginhandler = () => {
    setloginauth(true);
  };
  return (
    <>
      <Navnew logincheck={loginauth} loginhandler={loginhandler} />
      <div
        className="row py-3"
        style={{
          backgroundImage: "linear-gradient(180deg, #6dd2ae 0%, white 90%)",
        }}
      >
        <div className="row">
          <div className="col-lg-9 col-md-7 col-4 px-lg-0 px-md-0 ps-lg-4 ps-md-4 ps-1">
            <h1
              className="fw-bold ps-4 mt-lg-4 mt-2"
              style={{ textAlign: "left", marginBottom: "60px" }}
            >
              {/* The <span style={{ color: "#3ad6ab" }}>content</span> you consume{" "}
          defines you. */}
              Podium Talks
            </h1>
            <div className="d-lg-block d-md-block d-none pt-0">
              <h5 className="mt-5 mb-3 fw-light">
                Experience the live interaction with real life heroes.
              </h5>
              <a
                href="https://www.youtube.com/watch?v=q8m43j9XlHo&list=PLxbSDADGvebUKUEfsxYUgur0uBhXoj6Oa"
                target="_blank"
                rel="noreferrer"
                className="btn mx-auto px-4 py-2 fs-4"
                style={{
                  backgroundColor: "#25d366",
                  width: "auto",
                  color: "white",
                }}
              >
                <i className="far fa-play-circle fs-3"></i>&nbsp; Watch
              </a>
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
      <div className="container-fluid row py-5 bg-light mx-0">
        <h1 className="text-center display-5 fw-bold mt-3 mb-5">
          Episode{" "}
          <span className="text" style={{ color: "#3ad6ab" }}>
            4
          </span>
        </h1>
        <div className="col-lg-2"></div>
        <div className="col-lg-8 text-start">
          {/* <div>
            <img
              className="mt-4 mb-5"
              src={img}
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </div> */}
          <h2 className="fw-bold">
            Have you ever felt that if had he chosen any IT field instead of ECE
            then he could have learnt more and got more exposure to tech field?
          </h2>
          <p>
            Apart from me there are other friends of mine who also bagged a FANG
            job from ECE only. So from this what we have learnt is that it’s not
            about the branch but it’s about the interest you have for something.
            If you want a job at FANG then it’s your job to do. Your academics
            and stuff is not responsible for getting you the job.
          </p>
          <br />
          <h2 className="fw-bold">
            Does competitive programming play a major role in getting a job?
          </h2>
          <p>
            Yes for getting a job it does play big role. I can’t say only
            competitive programming but mostly DSA. I would say DSA play a big
            role more than competitive programming. I, myself did CP for only
            two months.
          </p>
          <br />
          <h2 className="fw-bold">
            What is your suggestion for the beginners in coding? 
          </h2>
          <p>
            First choose one language and get comfortable with that language
            along with its libraries and code and then you can learn DSA from
            any YouTuber or E-learning platforms like Udemy and Coursera. After
            that, solve DSA questions from LeetCode, GFG (Geeks for Geeks) or
            HackerRank.
          </p>
          <br />
          <h2 className="fw-bold">
            Are programming and analytics really in demand nowadays?
          </h2>
          <p>
            Yes, programming and analytics is booming now and will be booming
            forever.
          </p>
          <br />
          <h2 className="fw-bold">
            How to tackle rejections during interviews?
          </h2>
          <p>
            First we need to have a good network in the respective organization
            we are applying for and secondly we need to open to those networks
            working there about the disapprovals because they would point out
            your mistakes for which you were not selected at ease.
          </p>
          <br />
          <h2 className="fw-bold">
            How did you apply for an internship at DRDO?
          </h2>
          <p>
            I have some good contacts working in there. I just spoke with them
            and shared my resume and as such ended up getting an internship over
            there.
          </p>
          <br />
          <h2 className="fw-bold">When to start learning DSA?</h2>
          <p>
            DSA can be learnt in a couple of months rather concentrate on
            learning the language more. Get comfortable with the language you
            are learning as many understand but cant code, then go to DSA.
          </p>
          <br />
          <h2 className="fw-bold">How to apply for amazon off-campus?</h2>
          <p>
            Try for references, contacting reputed HR’s or any SDE’S , or
            seniors if you know already send them your resume and work. Is your
            resume is worthy enough then you get a chance to get into the
            company.{" "}
          </p>
        </div>
        <div className="col-lg-2"></div>
      </div>
      <Foot2 />
    </>
  );
}

export default Ep4;
