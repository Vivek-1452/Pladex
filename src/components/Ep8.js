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
            8
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
          <h2 className="fw-bold">Why masters over job?</h2>
          <p>
            I was into academic career route and wanted to become a scientist
            and do research so this was the path that made sense to me.
          </p>
          <br />
          <h2 className="fw-bold">
            How did you find passion in chemical engineering?
          </h2>
          <p>
            My dream of becoming scientist boosted me to choose chemical
            engineering. The scope of research in this field is vast if you
            complete your undergrad in chemical. And having vast career
            opportunities I opted chemical engineering as my career choice.
          </p>
          <br />
          <h2 className="fw-bold">
            What are the available job opportunities for chemical students in
            India?
          </h2>
          <p>
            After graduation we can either get into industry as petroleum
            industry , petrochemical industry or the pharmaceutical industry. we
            can sit for on/off-campus placements else give GATE and get into
            PSUs.
            <br />
            For academia one can get into masters or choose PhD.
          </p>
          <br />
          <h2 className="fw-bold">
            When should an undergrad start preparing for GRE?
          </h2>
          <p>
            If you are planning to go abroad right after your graduation the
            best time to give GRE is in the 3rd year. Generally people apply for
            fall sessions so preparing for GRE requires 3-6 months prior the
            examination.
          </p>
          <br />
          <h2 className="fw-bold">
            How to get a decent score in GRE with self- preparation ?
          </h2>
          <p>
            Self preparation is enough for many students as the quantitative
            math is logically easy compared to JEE and the aspirants should
            mainly focus on the verbal section, vocabulary. But in case of
            coaching institutions they give us set method and expensive too.
          </p>
          <br />
          <h2 className="fw-bold">
            Why masters abroad and not in India at IITs?
          </h2>
          <p>
            The amount of research opportunities , fundings or projects is high
            in abroad. if you are not sure the best way is to opt masters.
          </p>
          <br />
          <h2 className="fw-bold">
            Effective ways to prepare a CV and resume for admission into
            masters?{" "}
          </h2>
          <p>
            CV details everything that you have done with all the publications
            and all the research experience whereas resume is where you
            highlight the most important points. People don’t highlight or Focus
            on right things in resume. Highlight your GPA, skills and
            accomplishments and then the research experiences like internship
            and what you did during that intern is the most important aspect
            that must be focused on. Elevating the most relevant skills is also
            important.
          </p>
          <br />
          <h2 className="fw-bold">
            Suggestions for students who aspire to get jobs in core sector?
          </h2>
          <p>
            Focus on what you are studying during your core and consult people
            who have already gone through the interview. Have a little logical
            with technical knowledge if you are planning to go for core and
            always outlook for opportunities. Besides this communication skills
            do matter. And importantly if you don’t any answer rather than
            saying no try to explain some basic stuff and then make effort to
            build the answer.
          </p>
          <br />
          <h2 className="fw-bold">
            How was your Edu- packed research intern and also research trainee
            at BITS experience and how to enroll?
          </h2>
          <p>
            If you are planning to for research start applying for interns early
            and start sending mails to professors where you want to work , that
            is how could make my research training at BITS regarding bioenergy.
            Edu-packed came to our college and interviewed students and select
            students and send them to a university abroad. And this intern was
            more into metallurgy and material science. I learnt new techniques
            during that intern and how a research group works.
          </p>
          <br />
          <h2 className="fw-bold">
            Most challenging project he worked on and how it helped in his
            career growth?
          </h2>
          <p>
            Yeast surface display was my masters project and academic research
            is all about trouble shooting when things don’t work.
          </p>
          <br />
          <h2 className="fw-bold">
            What were the challenges he faced being a graduate teaching
            assistant at Cornell university?
          </h2>
          <p>
            I did work as a teaching assistant in the undergraduate biology
            department and I didn’t have a strong background in biology. This
            was challenging to me at first because I had to go through this
            material which was new to me but then I made sure that I was
            thorough with it so that I was in a position where I could clear
            doubts.
          </p>
          <br />
          <h2 className="fw-bold">
            How is the work experience at Dana-Farber Cancer Institute?
          </h2>
          <p>
            A hospital that also specializes in doing research for treating
            cancer. The work experience was more like an academic lab rather
            than an industry because I get to work in a lab on some projects but
            at the same time I have the option to do little different things in
            my own way. There was always a collaborative and supportive positive
            environment and share their experiences is helping me to grow a lot.
          </p>
          <br />
          <h2 className="fw-bold">
            What is your role at Dana-Farber Cancer institute?
          </h2>
          <p>
            I work as a research technician in Dr. Eric Smith’s Lab which
            specializes in designing cardi cell therapies and immunotherapies.
          </p>
          <br />
          <h2 className="fw-bold">
            Does pointer really matter for placements or the skill set?
          </h2>
          <p>
            Maintain a minimum pointer of 7 on scale of 10 and put forth your
            skills in your interview process. High pointer is an add-on during
            interviews.
          </p>
          <br />
          <h2 className="fw-bold">
            How is the demand for chemical engineers in abroad and India?
          </h2>
          <p>
            It depends in India people look at core or PSUs or petrochemical
            industries but a major thing they neglect is the pharmaceutical
            industries. While in abroad the scope of diversifying is always
            there leading to vast opportunities.
          </p>
          <br />
          <h2 className="fw-bold">
            What is the minimum score required for GRE/IELTS and some
            preparation strategies?
          </h2>
          <p>
            7-7.5 band score is a good for IELTS and for GRE anything in the
            range of 315 to 320 is a decent score but lot of universities
            stopped using GRE scores and to mention an application abroad is a
            collection of various factors like LORs, SOPs, research experience ,
            CGPA .So, finally we have to balance out those factors and make a
            strong application.
          </p>
        </div>
        <div className="col-lg-2"></div>
      </div>
      <Foot2 />
    </>
  );
}

export default Ep8;
