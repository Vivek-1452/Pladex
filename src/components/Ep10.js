import React from "react";
// import img from "./EventLibrary/pt-8.png";
import img1 from "./Podcast-amico.png";
import "./Ep.css";

function Ep8() {
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
            10
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
          <h3 className="fw-bold">Why masters over job?</h3>
          <p>
            It has got an interesting story. In my first year I was allotted
            electrical engineering based on my AIEEE rank. After first year
            based on my high CGPA, I was able to get into the Mechanical branch.
            I was confused whether to take electrical engineering or mechanical.
            The way I decided this was whenever I used to think about any
            electrical equipment, suppose electric bulb, I used to think about
            how it worked. How does the bulb glow? Because of the electrical
            resistance. Eventually everything used to come down to friction
            which is a mechanical concept. That is why I decided to take up
            mechanical because of the way I was thinking.{" "}
          </p>
          <br />
          <h3 className="fw-bold">
            What are the things you have learned in Mechanical Engineering I
            your first year?
          </h3>
          <p>
            After I chose Mechanical, my journey got smoothened. I used to think
            that I have a strong grip on Physics. First year was very smooth.
            The most important thing to learn was Engineering Drawing which was
            a new thing I came across. Other than that, most of the basics were
            covered in eleventh and twelfth.
          </p>
          <br />
          <h3 className="fw-bold">
            How did you improve yourself from first year to second year and so
            on?
          </h3>
          <p>
            One of the things that is very important and is something that we
            learned from our seniors, is that we should try and participate in
            as many different activities as we can. Although I was least
            interested in active participation in cultural activities yet I was
            very enthusiastically involved in research activities. What happens
            is that it expands your horizons. You start thinking beyond your
            academics and start connecting things with real life. There is a
            hospital in Allahabad named Trishla Hospital for the Cerebral Palsi
            (CP) patients. We started visiting there, started learning things
            like how we can incorporate engineering and learning to solve their
            problems. The other thing is that we have a lot of time during our
            graduation, especially in engineering. But after we take up a job,
            most of this time goes away. So, it would be good if someone is wise
            and realizes the importance of the time that we get during the
            college years for ourselves.
          </p>
          <br />
          <h3 className="fw-bold">
            What exactly is IES? Is it tough when compared to IAS?
          </h3>
          <p>
            IES is Indian Engineering Services Examination and the exam for IAS
            is Civil Services Examination. Civil Services exam hires for
            generalist post and IES hires for specialist post. Four to five
            streams of engineers compete based on a set pattern of examination
            which is decided by UPSC. In IES, we have limited number of seats.
            If I talk about Mechanical Engineering, even in railways and
            audience factory seats used to be around eighty or ninety. In that
            regard, it is tough to fight. What happens is that most of the
            engineering students are not that convergent with their curriculum.
            But if one has good concepts, then it is easier to compete for IES.
            In civil services exam, participating students are from a vast
            background. Doctors, lawyers, engineers, humanities, all students
            are there. In that regard, competition becomes tougher here. What
            complicates things is that candidates have six attempts. So many
            students are repeaters who have already secured a position in civil
            services. So, it becomes a little challenging for the fresh
            candidates.
          </p>
          <br />
          <h3 className="fw-bold">
            When did you start your preparations for IES and GATE?
          </h3>
          <p>
            When I used to live in NIT Allahabad, I used to consider myself a
            good candidate for research and wanted to go to some foreign college
            for MS and PHD. But once I got into the field, I saw the working of
            real life and changed my trajectory. I decided to first go with the
            Engineering Services. I worked in Maruti for six months and after
            that I left it in December, 2015. I had overestimated myself
            thinking that I would be able to secure a good enough rank to get
            into IISC Bangalore in just one and a half months. But one and a
            half months were not enough for GATE preparation. So, I could not do
            it. Then somehow, I started my own coaching. I taught for
            approximately six months. And the students were working students.
            And they started liking me. Then my real preparation started on 22nd
            July,2016. Then for five months I prepared rigorously and left
            almost all things dear to me. July 2016 to May 2017 is the time that
            I really prepared in a focused manner.
          </p>
          <br />
          <h3 className="fw-bold">
            What are the available opportunities by writing all these exams?
          </h3>
          <p>
            After writing GATE, research opportunities in the elite colleges.
            Other than that, there are PSU’s which provide a very balanced way
            of life; if one is just looking for a good livelihood with good
            resources and a balanced way of life, where you have to work only
            from nine to five after which you are free, and there is not much
            work load. Starting package is around 18LPA. After writing IES,
            opportunities are very vast working profile is very diverse and the
            kind of role you get to play is very significant. In my first
            posting, I have got independent charge, meaning that I am the most
            senior officer at the workplace and all the responsibilities are on
            my shoulders. And in my first posting itself I have got around 215
            employees in my team.
          </p>
          <br />
          <h2 className="fw-bold">
            As you have written GATE, why were you not into higher education?
          </h2>
          <p>
            I am still interested in higher education if I get the opportunity,
            which I’ll definitely get (the government of India provides that
            platform where you can pursue your higher education). Over time,
            people evolve and their interests change. If I had continued higher
            education after graduation might have gone into some technical field
            but now, I am interested in humanities as well. If I get the
            opportunity I would go for humanities subject. Back then I didn’t
            opt for higher education because I had talked to my guide, who was
            my final year project mentor, Prof A D Bhatt. He told me that if I
            wanted to really work in the field of research, he would help me in
            establishing my own lab rather than taking admission for M. tech or
            anything else because there I would be wasting my time. He knows me
            very well. That was the plan back then but then the journey changed
            and I am here.
          </p>
          <br />
          <h3 className="fw-bold">
            What are the challenging projects that you have worked on?
          </h3>
          <p>
            In my second-year internship itself, I was working in IIT Bombay and
            I was from Mechanical background and the work that I had to do was
            coding. I had taken up a work on CFD (Computational Fluid Dynamics).
            My professor told me to write its code. So, in two months time I had
            to learn C language and I had to learn differential equations and
            computational methods. Along with that I had to code it and debug
            it. IIT Delhi was also quite challenging as I had to learn new
            things like the Matlab coding. There I worked on plasma. Another was
            the final year project. I was the group leader so based on my past
            experience and the way students of engineering colleges work, I had
            decided that I would not be taking any coding project or any
            modelling project because there only one guy would work. So, I
            decided to take a project in which all three group members would be
            involved. So, I chose a product development project where I had to
            develop a product from scratch. So, that was a challenging project
            to work on.
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
    </>
  );
}

export default Ep8;
