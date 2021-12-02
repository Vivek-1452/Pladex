import React from "react";
import { useState } from "react";
import Foot2 from "./foot2";
import Navnew from "./Navnew";
import img1 from "./Podcast-amico.png";
import "./Ep.css";

function Ep8() {
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
            9
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
          <h3 className="fw-bold">
            What are the career fields one can pursue in civil engineering?
          </h3>
          <p>
            There are many options. There are client jobs, designing jobs,
            project management consultant jobs, surveying jobs and site jobs.
            There are three main bodies in a project: client, PMC, Contractor.
            There are sub-contractors under the contractor. One can work in any
            of these fields. One way to go about it is to get a job during the
            college placements in a construction company. Another way is pursue
            a higher job by preparing for the GATE or any state level exam.
            Third option is to get a job via placements, do a job for two to
            four years later can switch to a PMC or client job.
          </p>
          <br />
          <h3 className="fw-bold">
            Everyone is confused between code and core. How to overcome this
            confusion?
          </h3>
          <p>
            There is a boom in the IT industry and for a few years now, there
            are fewer infrastructure projects, although the scope for
            infrastructure projects will increase in the future. In the coding
            branches like CSE, IT, ECE, the students study not only their core
            subjects but also study what their industry demands. However, in the
            core branches, there is a gap between the industry demand and what
            the students study.
          </p>
          <br />
          <h3 className="fw-bold">
            Does coding play a role in civil engineering?
          </h3>
          <p>Yes, coding plays an important role in civil engineering.</p>
          <br />
          <h3 className="fw-bold">
            Suggest some interview tips to crack core companies?
          </h3>
          <p>
            First of all, have the idea about that company. For example, which
            field is the company working in, what are the different projects it
            has undertaken. All this can easily be found on the official website
            of the company. Secondly, your introduction. Use such keywords that
            ensure that the interviewer can ask only such questions that you
            know. Finally, the most important thing is your skill set. Align
            your skillset with the company’s demand.
          </p>
          <br />
          <h3 className="fw-bold">
            Are you interested in higher studies? If so, what is your choice?
          </h3>
          <p>
            Personally, I am not interested in higher studies. However, if one
            wants to pursue higher studies, the choice depends on that person
            based on many things such as family condition, etc.
          </p>
          <br />
          <h3 className="fw-bold">
            How taking part in college clubs helps one to grow professionally?
          </h3>
          <p>
            Being part of college groups and taking part in activities build
            your personality. They build your leadership quality, communication
            skills and help you face any situation in life.
          </p>
          <br />
          <h3 className="fw-bold">
            How did you bag an internship at L&T and Nagarjuna Constructions
            Company Ltd.? And how was your intern experience?
          </h3>
          <p>
            There is a tremendous gap between what we are taught and what the
            industry needs are. So, to fill that gap I decided to do the
            training in different companies. I went to the Nagarjuna office and
            asked them for the training. I learned about the entire construction
            procedure, about the different types of tests are conducted in the
            foundation, how the type of foundation is decided,etc. I joined LNT
            Constructions Company as a trainee Through observations I got the
            actual knowledge of how Construction Companies work.
          </p>
          <br />
          <h3 className="fw-bold">How to get into L&T?</h3>
          <p>
            I appeared for the interview of the company, but it was not because
            of the placement drive. I went to the office of L&T Company and
            talked to them about the training and they gave some of my friends
            and me the offer to work as interns.
          </p>
          <br />
          <h3 className="fw-bold">
            Any plans of starting your own Construction Company?
          </h3>
          <p>
            I am learning so many things right now, how a construction project
            is going to be completed, how PMC is supporting us and how clients
            hinder us in so many ways; the working of so many different bodies.
            So, if possible in the future, I will surely start my own
            Construction Company or Consulting Field.
          </p>
          <br />
          <h3 className="fw-bold">
            Does pointer really matter when it comes to a job in the core sector
            or the practical skillset?
          </h3>
          <p>
            To some extent CGPA matters because many companies set a minimum
            score of eligibility.
          </p>
          <br />
          <h3 className="fw-bold">
            Are soft skills important these days? If so, how to build them?
          </h3>
          <p>
            Yes, soft skills are always important, in whatever career or
            whatever phase in your life. In this covid period, building them is
            tough to some extent. But there are a lot of events being conducted
            online which you can be a part of.
          </p>
          <br />
          <h3 className="fw-bold">
            Have you ever thought of switching to the IT sector?
          </h3>
          <p>
            In the first year a lot of students want to switch to the IT sector
            thinking that they are in poor branches. But as I studied civil, my
            interest slowly increased and I decided to build career in the core
            sector.
          </p>
        </div>
        <div className="col-lg-2"></div>
      </div>
      <Foot2 />
    </>
  );
}

export default Ep8;
