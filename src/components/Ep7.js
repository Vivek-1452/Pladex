import React from "react";
import { useState } from "react";
import Foot2 from "./foot2";
import Navnew from "./Navnew";
import img1 from "./Podcast-amico.png";
import "./Ep.css";

function Ep7() {
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
            7
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
            When should an under graduate start his/her preparation for GRE?
          </h2>
          <p>
            If you want to do masters right after under graduation, then prepare
            for GRE in Feb/March 3rd year. As GRE score is valid for 5 years,
            better to take the exam in 3rd year only because you would be
            relatively free than with a job.
          </p>
          <br />
          <h2 className="fw-bold">
            What was the driving force that made you passionate about
            electronics?
          </h2>
          <p>
            My dad used to repair electronics and I was playing with them. So, I
            thought it would be better if I go into electronics.
          </p>
          <br />
          <h2 className="fw-bold">
            Why did you choose masters over any job after graduation?
          </h2>
          <p>
            I have actually worked for 3 years and I felt my knowledge wasn’t
            still enough for the job. So I thought I’ll better do masters and
            fill the gap.
          </p>
          <br />
          <h2 className="fw-bold">
            What mistakes students might make while preparing a CV or Resume?
          </h2>
          <p>
            CV sometimes goes to 3 or 4 pages but resume is the one we actually
            use for applying for a job. Resume must be of one page. Avoid
            writing slop description in the resume. Make it explicit enough like
            – Problem – Solution – Result.
          </p>
          <br />
          <h2 className="fw-bold">What is your role at Silicon labs?</h2>
          <p>
            I’m an Analog Design Engineer. Basically, silicon labs make
            electronic chips. The work culture is good and flexible with
            unlimited leaves as well. Everyone in the team is experienced and
            there’s a lot to learn from them.
          </p>
          <br />
          <h2 className="fw-bold">
            Can one get a decent GRE with self-preparation?
          </h2>
          <p>
            Self-preparation is better as the GRE exam is not much difficult
            when compared to GATE and CAT. If you rely on coaching classes, it
            may not work. Prepare yourself by downloading resources from the
            internet.
          </p>
          <br />
          <h2 className="fw-bold">How to get internships in MNCs?</h2>
          <p>
            In the US, the companies will be very happy to hire interns. They
            think interns are future employees, monitor your work from time to
            time and make you a permanent employee if you’re good. It also
            depends on the branch because chemical and mechanical students find
            it difficult to get internships. You can apply internships on
            company’s website and interview would be of 2 rounds.
          </p>
          <br />
          <h2 className="fw-bold">
            Can you suggest preparation strategies for GRE?
          </h2>
          <p>
            For GRE, many engineers are good at math section but some are bad at
            verbal section. So, prepare for verbal sections and practice from
            different exams. TOFEL is very easy. Practice listening and speaking
            session for 1 week and that would be enough.
          </p>
          <br />
          <h2 className="fw-bold">
            How is the demand of electronic engineer in the present industry?
          </h2>
          <p>
            It actually depends on the skills and what kind of field you want to
            go into. Analog field has a good demand, so do RF. When it comes to
            energy sector like power electronics, the demand would depend on the
            market.
          </p>
          <br />
          <h2 className="fw-bold">
            There are many topics in electronics. Is it needed to have a
            profound understanding about every topic?
          </h2>
          <p>
            It’s good to know physics well. But others depend on the kind of the
            job. But basics should be known.
          </p>
          <br />
          <h2 className="fw-bold">
            Can you tell us about your interview of Godrej?
          </h2>
          <p>
            It was just one round and that was the only core company came to our
            college. I was very nervous but I don’t know how I got selected.
            They just asked me about my undergrad project and some basic
            questions. And the job was a mix of manufacturing and office job.
            This is simple and I’m fine with it.
          </p>
          <br />
          <h2 className="fw-bold">
            How were you able to learn so many skills, doing over 15 projects
            and winning many awards?{" "}
          </h2>
          <p>
            During undergrad, I was very lucky to have friends who were into
            projects and competitions. I started to get project experience
            through free lancing too. Don’t give up when you’re down.
          </p>
          <br />
          <h2 className="fw-bold">
            What does masters in electronics in abroad lead to?{" "}
          </h2>
          <p>
            Usually, we have many options after masters. If you’re more into
            research, one can continue into Ph.D. which is fully sponsored. Or
            you can go into a job and start working.
          </p>
          <br />
          <h2 className="fw-bold">
            Is it really important to maintain a good CGPA?
          </h2>
          <p>
            Having a good GPA is important when you try for an internship. In
            US, they see all your previous experience, skills and projects as
            well. If we maintain all other things, one particular thing may not
            harm you.
          </p>
          <br />
          <h2 className="fw-bold">
            Your suggestions to students who aspire to pursue core sector
            without switching to IT sector?
          </h2>
          <p>
            Most of them are choosing IT because there are no much choices. If
            you are really interested in core, go for it. Develop your skills
            and have some plans about what you can do in core. Be motivated and
            learn even if you have to go for masters.
          </p>
          <br />
          <h2 className="fw-bold">
            Which has more opportunities, Electrical or Electronic sector?
          </h2>
          <p>
            In the US, both have the same demand actually. Everything comes
            under electrical here. While in India, opportunities in electrical
            may be less than in electronics. Go to your area of interest and try
            to create opportunities for yourself in that field.
          </p>
          <br />
          <h2 className="fw-bold">
            Can you tell us about the major projects you’ve done during
            graduation and how did they help your career?
          </h2>
          <p>
            I used to do any kind of projects. I used to some lighting work on
            the stalls in the exhibitions of Mumbai. One major project was
            pre-charging circuit and it was very fun doing it.
          </p>
          <br />
          <h2 className="fw-bold">
            Why have you opted for masters in abroad rather than in India?
          </h2>
          <p>
            I’ve tried to give GATE exam to get into an IIT but I didn’t get
            into any. So I chose to do masters in abroad for more opportunities.
          </p>
          <br />
          <h2 className="fw-bold">
            What is your take on electrical branch is the toughest one?{" "}
          </h2>
          <p>
            I think electrical is very broad field. It’s not tough but takes a
            while to understand and learn. Every field has its challenges. We
            need to be patient and learn from many experienced people.
          </p>
          <br />
          <h2 className="fw-bold">Advantages of choosing robotics in USA?</h2>
          <p>
            Lot of factories in US are automated as there is no much manpower in
            this country. I think it has a good scope here.
          </p>
          <br />
          <h2 className="fw-bold">
            What role do student exchange programs play?
          </h2>
          <p>
            I think it’s good to have that experience because that allows you to
            live in a foreign country for one semester. This helps you decide if
            you want to masters in that country or not.
          </p>
          <br />
          <h2 className="fw-bold">
            How electronics can evolve in the future?{" "}
          </h2>
          <p>
            It’s growing already since the demand for chips is very high. 5G is
            coming and many want to develop it. I think there are going to be
            more jobs than people in this field.
          </p>
        </div>
        <div className="col-lg-2"></div>
      </div>
      <Foot2 />
    </>
  );
}

export default Ep7;
