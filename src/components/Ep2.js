import React from "react";
import img from "./EventLibrary/pt-2.png";
import img1 from "./Podcast-amico.png";
import "./Ep.css";

function Ep2() {
  return (
    <>
      <div
        className="row py-3"
        style={{
          backgroundImage: "linear-gradient(180deg, #6dd2ae 0%, white 90%)",
        }}
      >
        <div className="row">
          <div className="col-lg-9 col-md-7 col-4 px-lg-0 px-md-0 ps-lg-4 ps-md-4 ps-1">
            <h1
              className="fw-bold ps-4 mt-lg-5 mt-2"
              style={{ textAlign: "left", marginBottom: "80px" }}
            >
              {/* The <span style={{ color: "#3ad6ab" }}>content</span> you consume{" "}
          defines you. */}
              Podium Talks
            </h1>
            <div className="d-lg-block d-md-block d-none">
              <h5 className="mt-5 mb-3 fw-light">
                Experience the live interaction with real life heroes.
              </h5>
              <a
                href="."
                className="btn mx-auto px-4 py-2 fs-4"
                style={{
                  backgroundColor: "#3ad6ab",
                  width: "auto",
                  color: "white",
                }}
              >
                {/* <i
                  className="fas fa-location-arrow"
                  style={{ color: "#3ad6ab" }}
                ></i>
                &nbsp;  */}
                Explore
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-5 col-8 pe-0">
            <img
              src={img1}
              alt=""
              style={{ height: "100%", width: "90%", float: "right" }}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid row py-5 bg-light mx-0">
        <h1 className="text-center display-5 fw-bold mt-3 mb-4">
          Episode{" "}
          <span className="text" style={{ color: "#3ad6ab" }}>
            2
          </span>
        </h1>
        <div className="col-lg-2"></div>
        <div className="col-lg-8 text-start">
          <div>
            <img
              className="mt-4 mb-5"
              src={img}
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <h2 className="fw-bold">
            According to you, which is advisable: self-preparation or coaching
            with regards to GATE examination?
          </h2>
          <p>
            Actually both will do for GATE preparation. If you join in a
            coaching institute they will give you a planned schedule, timetable,
            exams. All we have to do is simply follow them and study but when it
            comes to self-preparation you will have to need more dedication,
            planning and efforts. Everything has to be done by you. You can also
            follow some crash courses on YouTube which are quite good.
          </p>
          <br />
          <h2 className="fw-bold">
            How were you able to manage your BTech semesters and GATE
            preparation paralelly? How difficult was it for you?
          </h2>
          <p>
            To start with, it was tough. It takes a lot of effort to balance
            both. As I was a residential student so my first preference & task
            was to choose a proper and favourable environment to study. Places
            like library or computer lab will do the job.
          </p>
          <br />
          <h2 className="fw-bold">
            What is more suggestible: a 3rd year GATE examination or 4th year
            GATE examination?
          </h2>
          <p>
            I would suggest giving both attempts. But the major difference you
            would find in both attempts is the pressure you would have in 4th
            year attempt.
          </p>
          <br />
          <h2 className="fw-bold">
            Suggestions you would like to give to students planning to appear
            for GATE examination in 3rd year.
          </h2>
          <p>
            My first and foremost advice would be to complete the syllabus of 6
            semesters perfectly and focus on their revision and stop worrying
            about 4th year syllabus. I would suggest you to just go through the
            basics of 4th year syllabus and rather focus more on handling exam
            pressure; exam strategies etc. which will in-turn help us in the
            final year attempt.
          </p>
          <br />
          <h2 className="fw-bold">
            What are some of the best resources available on internet for GATE
            preparation?
          </h2>
          <p>
            Some websites like eceengineerig.net contain good notes of ECE
            subjects and you can also follow some lectures on YouTube.
          </p>
          <br />
          <h2 className="fw-bold">
            Important books you would like to suggest to GATE aspirants?{" "}
          </h2>
          <p>
            I personally never followed any reference books during my
            preparation. I had joined in a coaching institute and the material
            given by them was sufficient for me.
          </p>
          <br />
          <h2 className="fw-bold">
            Many students dream to grab a job in the PSUs through GATE exam? So,
            what would be a safe line rank for those students?
          </h2>
          <p>
            With regards to electronics department you would have very less
            openings in PSU’s. The cut-off score may vary from year to year. You
            can use the official GATE website for the exact scores.
          </p>
          <br />
          <h2 className="fw-bold">
            What is a safe rank that has to be secured by student aspiring to
            join in IISC Bangalore?
          </h2>
          <p>
            Soring 800 or more in GATE will help you get a seat in all top IIT’s
            & IISC Bangalore.
          </p>
          <br />
          <h2 className="fw-bold">
            What would be the best preparation strategy before the last five
            months of GATE examination?
          </h2>
          <p>
            The major thing you should be focusing on during this period is
            revision. We should make a review of what we have learnt? How well
            we have learnt? To what extent do we remember the old subjects?
            Apart from that we should also focus on giving test series and learn
            from our mistakes.
          </p>
          <br />
          <h2 className="fw-bold">
            What role do the test series play in the preparation journey? What
            is the ideal time to begin with then and how to effectively utilize
            those test series?
          </h2>
          <p>
            As I have said before they play a very important role in our
            preparation. We should use them to know where we more often make
            mistakes and rectify them. I would suggest you to take test series
            parallely with your preparation.
          </p>
          <br />
          <h2 className="fw-bold">
            Could you please share us some insights about your personal strategy
            of attempting the GATE exam and also about your daily routine?
          </h2>
          <p>
            The first thing I would do on regular day is to make a timetable and
            choose a subject to study on that day. If you are confused to choose
            between subjects always use the divide and study strategy. Allot 3
            days each for different subjects in a week. Apart from that I used
            to give test series in the night on math & aptitude which are quite
            scoring subjects.
          </p>
          <br />
          <h2 className="fw-bold">
            Other than Indian universities which other country universities
            accept GATE rank for higher studies?
          </h2>
          <p>
            Some universities in Germany consider GATE score for admission
            purpose. But I would suggest you to take GRE exam if you have abroad
            plans.
          </p>
          <br />
          <h2 className="fw-bold">
            What are the most important topics for GATE (electronics)
            examination?
          </h2>
          <p>
            This basically depends on the institute that is preparing the paper
            in that year. If IIT Madras is the organizer then you should focus
            on Analog Circuits. In case of IIT Bombay it is Communication
            network. Go through the past year papers as well and analyse them.
          </p>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </>
  );
}

export default Ep2;
