import React from "react";
import { useState } from "react";
import Foot2 from "./foot2";
import Navnew from "./Navnew";
import img1 from "./Podcast-amico.png";
import "./Ep.css";

function Ep5() {
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
            5
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
          <h2 className="fw-bold">Have you ever been into coding?</h2>
          <p>
            Yes. We used to have C in first year curriculum of BTech. Apart from
            that as a mechanical engineer you need to know the basics of MATLAB.
            I can understand the basics of coding.
          </p>
          <br />
          <h2 className="fw-bold">
            Did you have a dilemma choosing between IT and core?
          </h2>
          <p>
            Even before joining the college I was pretty aware of myself that I
            want to get into Mechanical Engineering. So I never had a dilemma
            choosing between them.
          </p>
          <br />
          <h2 className="fw-bold">
            What do you say to peoples who believes in Stereotypes about woman
            in mechanical engineering?
          </h2>
          <p>
            Actually lot of peoples are breaking through the stereotypes so,
            that is just a misconception that girls are not suitable for
            mechanical engineering. It actually depends on the person's interest
            and passion. Some cases did exist in our college where some girls
            were better at mechanical than boys.
          </p>
          <br />
          <h2 className="fw-bold">
            What are the Skills learned in B.Tech path that helped in career
            growth/ to get a job?
          </h2>
          <p>
            It’s a plethora of different skills actually and every skills I've
            learnt in the college has helped me to get a job, be it the sports,
            orals, the class which I have been through and all the subjects I
            have studied already and the soft skills mostly.
          </p>
          <br />
          <h2 className="fw-bold">Are internships really necessary?</h2>
          <p>
            Internships are like really important according to my understanding
            and that too in case of mechanical engineering it is very true
            because we’ll have a lot of in hand work in the college, we need to
            go to lab and have a proper understanding.
          </p>
          <br />
          <h2 className="fw-bold">
            Interview experience with Dr Reddy’s and ExxonMobil!
          </h2>
          <p>
            About Dr Reddy’s interview, the online test was not very hard, It
            was pretty centric and they ask very basic questions only. If you
            have basic understanding in the previous mechanical stuff you’ll be
            able to qualify the online test and then you need to see through the
            interview process. And coming to Exxon Mobil this was a little hard.
            We had to write an online test first and then we need to go through
            the group discussion and then the person interviewed. The ExxonMobil
            actually gives huge importance to communication skills . My
            interview with Exxon Mobil interview was completely based on my
            resume i.e. they were asking me questions completely from my resume
            which is actually a good part because they evaluate your skills from
            what you’ve already learned.
          </p>
          <br />
          <h2 className="fw-bold">How to build an effective resume?</h2>
          <p>
            Resume is the most important aspects when it comes to the placements
            because show them exactly who you are. Let your seniors or friends
            look at the resume. The first resume you prepare won’t be good
            enough. You might need to change your resume many times have
            patience and let the resume be the best of it.
          </p>
          <br />
          <h2 className="fw-bold">
            What are the basic Softwares required for a mechanical undergrad to
            learn?
          </h2>
          <p>
            Firstly I’ve learned CAD, SolidWorks ,Creo, Ansys etc. and these are
            all the basics software which you need to learn. And apart from this
            MATLAB is very important for all the aspirants. Even if you’re
            aspiring to be a data scientist, MATLAB is very important.
          </p>
          <br />
          <h2 className="fw-bold">
            Is it possible to get a good placement for tier 3 college student?
          </h2>
          <p>
            Yes of course, for this the person needs to be very well aware of
            the core topics if they are opting for core interviews and in case
            of IT the person needs to be very good at coding. You need to have a
            pretty strong resume and your communication skills should be
            top-notch.
          </p>
          <br />
          <h2 className="fw-bold">
            What are the various Career options for Mechanical Engineers?
          </h2>
          <p>
            Yeah so firstly the jobs, you can just go to all the campus
            placement jobs. There will be like a number of jobs which are
            available and in case if you’re interested in management, software ,
            there will be companies based on management which you can apply. And
            also off campus placements and through GATE also will be able to get
            into a number jobs or higher studies. Also you can go abroad and do
            your MS mechanical engineering or CSE or MBA anything it's
            completely based on you and how you want to mould your future.
          </p>
          <br />
          <h2 className="fw-bold">Are you interested in higher studies?</h2>
          <p>
            So I’m not completely sure of it since I’ve told I’m interested in
            managerial positions. I do have a plan of doing an MBA but I don’t
            know how it goes I’ll see firstly I’m going to join this job and
            then it depends on how the things go.
          </p>
          <br />
          <h2 className="fw-bold">How to get into PSUs?</h2>
          <p>
            Check out the company page and apply through their career portal and
            before applying get to know about the interview process on before
            hand. Get to know well about the company and be strong at your
            technical skills.
          </p>
        </div>
        <div className="col-lg-2"></div>
      </div>
      <Foot2 />
    </>
  );
}

export default Ep5;
