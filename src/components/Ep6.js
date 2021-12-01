import React from "react";
// import img from "./EventLibrary/pt-6.png";
import img1 from "./Podcast-amico.png";
import "./Ep.css";

function Ep6() {
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
            6
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
            Was studying in IIM your dream from the beginning?
          </h2>
          <p>
            Yes I wanted to get into a good MBA college like IIM A,B,C . so I
            worked on it even while I was working in a full time role. So keep
            on studying and trying surely it will come to you.
          </p>
          <br />
          <h2 className="fw-bold">
            Was mechanical engineering your choice or by chance?
          </h2>
          <p>
            It was definitely my choice. Even my first few choices in the
            counselling process were mechanical.
          </p>
          <br />
          <h2 className="fw-bold">
            What skills are to be learnt by a first year mechanical undergrad?
          </h2>
          <p>
            Being a fresher they have fresh minds so you can explore numerous
            domains and learn various coding or managerial skills.
          </p>
          <br />
          <h2 className="fw-bold">
            What is the most important design software a mechanical engineer
            should learn?
          </h2>
          <p>
            As per me I learned AutoCAD, SolidWorks, CATIA, Tenses. There are
            many other design interfaces but these would be sufficient.
          </p>
          <br />
          <h2 className="fw-bold">
            As a mechanical engineer is it important to have both core and
            coding skills?
          </h2>
          <p>
            Your core skills will get you into the job but once you get in
            interfaces like PowerPoint, Excel should be bread and butter for
            you. So I would suggest you to have both skills.
          </p>
          <br />
          <h2 className="fw-bold">
            What are some good internship opportunities available for mechanical
            engineers in present industry?{" "}
          </h2>
          <p>
            My advice would to go for an internship at Core Company for students
            aspiring to get into core industry. After your internship you should
            be in a comfortable position to explain what you have learned there?
            How your learning’s can help the firm? What can be achieved?
          </p>
          <br />
          <h2 className="fw-bold">
            Could you please suggest some platforms from where students can do
            internships?
          </h2>
          <p>
            You can try some websites like naukri.com (or) you can visit a
            company’s website and go to the career section and apply for an
            internship. For that you should be having a very good CV, strong
            profile and good enough technical skills.
          </p>
          <br />
          <h2 className="fw-bold">How to apply for off-campus internship?</h2>
          <p>
            Firstly, you should have a very good LinkedIn profile and then a
            very good CV. With the above ones you can pitch-in with HR’s of
            various firms through LinkedIn itself or you can even try websites
            like naukri.com
          </p>
          <br />
          <h2 className="fw-bold">
            Procedure to apply for internship at DRDO!
          </h2>
          <p>
            There are many ways you can get an internship opportunity at DRDO.
            In this case I am very thankful to my then HOD. He had some contact
            in DRDO. You also need to have a minimal CGPA of 8.5 grade points.
          </p>
          <br />
          <h2 className="fw-bold">
            Suggest an effective way to choose a minor project and what role do
            they play in placement process?
          </h2>
          <p>
            Yes, Minor project do play a role in placement process. You should
            be in a position to explain them about the project. So wisely choose
            a minor project in the domain of your interest.
          </p>
          <br />
          <h2 className="fw-bold">
            Many core students shift to IT sector as they struggle to find
            opportunities in core field. What is your viewpoint on it?
          </h2>
          <p>
            The myth of getting a job in core sector is completely wrong. Core
            sector does have a lot of opportunities. If you very keen to get
            placed in a core company then I would advise you to go for it.
          </p>
          <br />
          <h2 className="fw-bold">
            Roles of mechanical engineer other than manufacturing and designing.{" "}
          </h2>
          <p>
            You can also get into operational sole and production students can
            also move into managerial sector and marketing sector. It mostly
            depends on the firm.
          </p>
          <br />
          <h2 className="fw-bold">
            Is automation in industries at full scale a good thing for the
            mankind?{" "}
          </h2>
          <p>
            Yes, it is definitely a good thing for mankind. It increases the
            amount of production. Things like semi-automation and automation
            increases the amount of production and also reduces the cost of
            production. Even big companies like Amazon, Flipkart warehouses are
            completely automated.
          </p>
          <br />
          <h2 className="fw-bold">
            What is the scope of mechanical engineers in the future?
          </h2>
          <p>
            I would simply say mechanical engineering is an evergreen branch and
            it is never going to run out of opportunities and scope.
          </p>
          <br />
          <h2 className="fw-bold">
            Suggest some preparation strategies for students aspiring to get
            placed in PSUs.
          </h2>
          <p>
            Firstly, get clear with all the GATE concepts and also go through
            the past exam papers also look into the firm’s functionality and
            prepare accordingly.
          </p>
          <br />
          <h2 className="fw-bold">
            Some insights about your CAT preparation journey . How were you able
            to balance your preparation and job?
          </h2>
          <p>
            It was a challenging journey. Aptitude was the driving force I
            started preparing for CAT. I started preparing for CAT before my
            placement at Sterlite and you can use books of Arun Sharma. It’s all
            about you. If you want it you have to fight for it.
          </p>
          <br />
          <h2 className="fw-bold">Why have chosen MBA at IIM over core job?</h2>
          <p>
            As I said before I was into a general management role. I found a gap
            between my knowledge and work so I decided to go for IIM to pursue
            my MBA so that my growth at workplace would be much better later on.
          </p>
          <br />
          <h2 className="fw-bold">
            We are all aware of the famous fictional character Iron man. Can
            such an invention be made in the upcoming years? What is your
            opinion on it?
          </h2>
          <p>
            Yes, definitely there is a chance. You can see people like Elon Musk
            doing wonders at invention. Things like Hyper loop, Electric cars
            were once fictional things but now they are into functionality so
            everything is possible and this suite can be used in various domains
            like military, heavy manufacturing industries etc.
          </p>
          <br />
          <h2 className="fw-bold">
            What are the important aspects to be mentioned in a CV?{" "}
          </h2>
          <p>
            For core placements , we need to have core skills, projects and what
            impact does it make these three key points are necessary in CV. CGPA
            matters at the end of the day for core placements. And show them you
            can well manage.
          </p>
          <br />
          <h2 className="fw-bold">
            Is coding necessary for good placements in core field?
          </h2>
          <p>
            It all depends on the individual on which field we are planning to
            choose further. Learning coding or any other stuff will never go in
            vain. Learn coding, go to hackathons. Wherever you go python is much
            better these days.
          </p>
          <br />
          <h2 className="fw-bold">
            His interview experiences with different companies.
          </h2>
          <p>
            Only basic questions mentioned in the cv were asked including some
            core topics. If there is a scope to ask the interviewer make use of
            it and ask them your queries or suggestions or anything related to
            their firm. Think from the interviewer point of view on what he
            expects and try answering.
          </p>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </>
  );
}

export default Ep6;
