import React from "react";
import { useState } from "react";
import Foot2 from "./foot2";
import Navnew from "./Navnew";
import img1 from "./Podcast-amico.png";
import "./Ep.css";

function Ep1() {
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
            1
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
            How can a normal student get placed at Microsoft?{" "}
          </h2>
          <p>
            Keep exploring technology and software.
            <br />
            Learn required programming languages and build own projects.{" "}
          </p>
          <br />
          <h2 className="fw-bold">
            Why did you choose Computer Science engineering of all others?{" "}
          </h2>
          <p>
            <span>&#8226; </span> I’m personally interested in coding from
            childhood and I had some prior knowledge of C++, Java as it is part
            of my school curriculum. So, I pursued engineering and started
            learning to build new projects. The acknowledgment of my work from
            my seniors and batchmates further motivated me to move on.
          </p>
          <br />
          <h2 className="fw-bold">
            What were you thinking of how CSE would be and how it is in real?
          </h2>
          <p>
            I thought curriculum would be more oriented so that one could get
            more practical experience and can learn many things like machine
            learning & such, but in reality, it was way more theory oriented.
            But also, an engineer gets a lot of time apart from the curriculum
            to learn and explore things so I can balance my classes and kept
            learning whatever I want.
          </p>
          <br />
          <h2 className="fw-bold">
            What was your interview experience in Microsoft?
          </h2>
          <p>
            Problems in Ds Algo were asked and it’s all about the way you
            approach a problem and how you optimize it, not the solution. There
            would be a maximum of three rounds and questions related to
            object-oriented programming, operating systems, networking & so
            forth would be asked.
          </p>
          <br />
          <h2 className="fw-bold">
            What are the feasible platforms to learn coding?
          </h2>
          <p>
            I initially started with Hacker rank, switched to geeks for geeks
            and finally started using LeetCode and Codeforces. All of these are
            helpful. It’s only about with which platform you’re comfortable
            with. Try all platforms and stick to one further.
          </p>
          <br />
          <h2 className="fw-bold">How do you solve a problem?</h2>
          <p>
            At the beginning, I used to get puzzled when I see a problem. After
            so much of practice and guidance, then I got familiar with the
            methods to solve a problem.
          </p>
          <br />
          <h2 className="fw-bold">
            What kind of mistakes a beginner might come across?
          </h2>
          <p>
            At the beginning, I used to switch learning languages from one to
            other in a few months without building a perfect foundation. Then I
            started learning problem solving consistently. I suggest you to
            complete a coding language first and build some projects
            accordingly.
          </p>
          <br />
          <h2 className="fw-bold">
            How were you able to manage competitive coding and academics as
            well?
          </h2>
          <p>
            I used to study for my academics in the last 15 days before exam. I
            was able to learn some things from classes that are useful.
            Meanwhile, during the rest of the time, I did my coding and built my
            own projects.
          </p>
          <br />
          <h2 className="fw-bold">
            Any suggestion to students from other branches?
          </h2>
          <p>
            If you are really interested in coding, go for it. Branch really
            doesn’t matter. It’s all about your passion towards programming and
            depends on how you’re able to manage everything with consistency.
          </p>
          <br />
          <h2 className="fw-bold">
            Is internship necessary? Do projects really matter when getting a
            placement?
          </h2>
          <p>
            For a placement, internship isn’t mandatory. It is something out of
            your own internship. Internship is more about a learning thing. Try
            to get at least one internship to get some experience and
            exploration. If you’re making one project and learning a lot of
            things from it, that is enough to present in your resume.
          </p>
          <br />
          <h2 className="fw-bold">
            What do you tell students who lose confidents at some point?
          </h2>
          <p>
            It’s just a beginning not the end. Being eager enough and passionate
            about your career is important in life. It’s never late to start
            learning. Start and don’t lose your hope.
          </p>
          <br />
          <h2 className="fw-bold">Why didn’t you go for higher studies?</h2>
          <p>
            I really love computer science. My job incites me to learn lot of
            technologies every day. I keep learning every day and I like my job
            so much so I didn’t go for any higher studies.
          </p>
          <br />
          <h2 className="fw-bold">What was your inspiration throughout?</h2>
          <p>
            I was inspired by a lot of my seniors. Many of them achieved many
            things that are beyond expectation and that inspired me a lot.
          </p>
          <br />
          <h2 className="fw-bold">
            Why do you think Microsoft stands apart from other MNCs?
          </h2>
          <p>
            I like the culture and quite enjoying my work. I’m hoping all other
            MNCs have the same ambience.
          </p>
          <br />
          <h2 className="fw-bold">
            Have you ever thought of building a start-up?
          </h2>
          <p>
            I haven’t thought of any start-up till now. An idea of start-up is
            such makes me devote my entire time for it. At this point, I don’t
            have any idea and enjoying my work.
          </p>
          <br />
          <h2 className="fw-bold">
            How can tier 3 colleges crack FAANG companies?
          </h2>
          <p>
            There’s nothing like tier 1, 2 or 3 in career. It’s about your
            skills and passion. You can always achieve what you want if you’re
            determined and skilled enough.
          </p>
          <br />
          <h2 className="fw-bold">
            How participating in hackathons help in your career growth?
          </h2>
          <p>
            There would be deadline for creating and submitting your work in
            hackathons which results in the origination of a complete creative
            self in you. You learn lot of things from others as well.
          </p>
          <br />
          <h2 className="fw-bold">
            How do you feel after exploring almost all topics in coding?
          </h2>
          <p>
            I’ve quitted many times in the beginning due to an imperfect start.
            I started with basics and explored many advanced topics eventually
            by solving many problems. Learning something new everyday and
            learning from my mistakes kept me going. Finally, I’ve learnt many
            ways of how to approach a problem.
          </p>
          <br />
          <h2 className="fw-bold">Any strategies for the beginners?</h2>
          <p>
            Firstly, learn up to data structures to a perfection. Try to learn
            good techniques to approach a problem through practice. Don’t get
            despaired if you couldn’t solve any problem. Keep practicing and
            learning.
          </p>
          <br />
          <h2 className="fw-bold">
            Can you state any few difficulties you faced in the beginning?
          </h2>
          <p>
            In the beginning, the ideas for approaching the problem hardly come
            into my mind. So, keep practicing to solve this issue. I wasn’t able
            to solve the high rated problems in the beginning.
          </p>
          <br />
          <h2 className="fw-bold">
            How were you able to hold on to programming even you’ve tries to
            quit it sometimes?
          </h2>
          <p>
            I was short of many strategies to solve ds problems. But I thought,
            If I keep trying and learning things, I could do better in
            approaching a problem.
          </p>
          <br />
          <h2 className="fw-bold">How do you tackle with failures?</h2>
          <p>
            Sometimes, you succeed and sometimes you learn. There’s nothing like
            failure. When you fail, you learn. That helps you in the future.
          </p>
          <br />
          <h2 className="fw-bold">How were you so consistent and focused?</h2>
          <p>
            After doing something for a long time, anyone might feel deviated.
            Just take a break and give yourself some time to get relaxed. Spend
            time with friends and family to get some energy back again. Keep
            going.
          </p>
          <br />
          <h2 className="fw-bold">How social media influenced you?</h2>
          <p>
            I tend to not use social media very much. I would reply in 6 months
            or 1 year if you text me. I spend a lot of time with other things
            rather than social media. I use LinkedIn since I receive lot of
            positivity from it.
          </p>
          <br />
          <h2 className="fw-bold">Are IT jobs stressful?</h2>
          <p>
            This can’t be said in general. It would be based on the company. My
            company opts for work life balance so my job isn’t that stressful.
          </p>
          <br />
          <h2 className="fw-bold">
            How many languages are to be learnt for a placement?
          </h2>
          <p>
            Try to be perfect in one language and stick to it. The languages you
            learn would be based on the kind of work you do.
          </p>
          <br />
          <h2 className="fw-bold">How to tackle questions in interview?</h2>
          <p>
            Don’t answer any question if you’re not confident about the answer.
            Apologise that you don’t know the answer. Interviewers judge you
            only about the things you know.
          </p>
          <br />
          <h2 className="fw-bold">
            How do you engage yourself in upcoming technologies?
          </h2>
          <p>
            I learn about new things everyday in this industry. Learning small
            parts everyday could make a better software engineer.
          </p>
          <br />
          <h2 className="fw-bold">
            How could you sense your development of intuition in coding?
          </h2>
          <p>
            Try to learn it. If you are able to do it and you like it, then you
            feel the sense of achievement.
          </p>
          <br />
          <h2 className="fw-bold">Any advice to juniors?</h2>
          <p>
            There is no roadmap for anything. Everyone who succeeds has a
            different roadmap compared to others. There are always many things
            to keep learning. Your method of achieving things would be different
            from others. Don’t be disheartened due to your mistakes. Start it
            and you eventually take it.
          </p>
        </div>
        <div className="col-lg-2"></div>
      </div>
      <Foot2 />
    </>
  );
}

export default Ep1;
