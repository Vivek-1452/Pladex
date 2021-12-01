import React from "react";
import { Link } from "react-router-dom";
import imgabout from "./ImgOurFeatures.png";
import image1 from "./ImgOurFeatures/feature1.png";
import image2 from "./ImgOurFeatures/feature2.png";
import image3 from "./ImgOurFeatures/feature3.png";
import image4 from "./ImgOurFeatures/feature4.png";
import image5 from "./ImgOurFeatures/feature5.png";
import image6 from "./ImgOurFeatures/feature6.png";
import image7 from "./ImgOurFeatures/feature7.png";
import image8 from "./ImgOurFeatures/feature8.png";
import image9 from "./ImgOurFeatures/feature9.png";
import image10 from "./ImgOurFeatures/feature10.png";
import image11 from "./ImgOurFeatures/feature11.png";
import image12 from "./ImgOurFeatures/feature12.png";
import image13 from "./ImgOurFeatures/feature13.png";
import image14 from "./ImgOurFeatures/feature14.png";
import image15 from "./ImgOurFeatures/features15.png";

function OurFeatures() {
  const myStyle1 = {
    minWidth: "250px",
    width: "72%",
    height: "95%",
    border: "none",
    borderRadius: "10px",
    boxShadow: "0 0 10px #d4d0d0",
  };

  return (
    <div
      className="pt-0 pb-2"
      style={{
        backgroundImage: "linear-gradient(315deg, #d5fefd 0%, #fffcff 74%)",
      }}
    >
      <div className="container-fluid pt-0">
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
                Our Features
              </h1>
              <div className="d-lg-block d-md-block d-none pt-1">
                <h5 className="mt-5 mb-3" style={{ fontFamily: "cursive" }}>
                  A product is described by how all features work together!
                </h5>
                {/* <a
                href="."
                className="btn mx-auto px-4 py-2 fs-4"
                style={{
                  backgroundColor: "#25d366",
                  width: "auto",
                  color: "white",
                }}
              >
                <i className="fab fa-whatsapp fs-3"></i>&nbsp; Get notified
              </a> */}
              </div>
            </div>
            <div className="col-lg-3 col-md-5 col-8 pe-0">
              <img
                src={imgabout}
                alt=""
                style={{ height: "100%", width: "80%", float: "right" }}
              />
            </div>
          </div>
        </div>
        <div className="row fs-6 py-4 mx-auto" style={{ width: "95%" }}>
          {/* <h4 className="text-center fw-bold display-6 mb-5">
            Our{" "}
            <span className="text" style={{ color: "#3ad6ab" }}>
              Features
            </span>
          </h4> */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div
              className="card mx-auto py-2"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={myStyle1}
            >
              <center>
                <a
                  href="https://www.collegeexplorer.in/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    className="my-3"
                    src={image1}
                    alt="College Explorer"
                    width="70"
                    height="70"
                  />
                </a>
              </center>
              <div className="card-body">
                <h4 className="card-title">
                  <b>College Explorer</b>
                </h4>
                <p className="card-text my-4">
                  Students can easily <strong>explore</strong> more about their
                  dream colleges which helps them for their admission process.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div
              className="card mx-auto py-2"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={myStyle1}
            >
              <center>
                <a
                  href="https://pladex.in/predictor.html"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    className="my-3"
                    src={image2}
                    alt="College Predictor"
                    width="70"
                    height="70"
                  />
                </a>
              </center>
              <div className="card-body">
                <h4 className="card-title">
                  <b>College Predictor</b>
                </h4>
                <p className="card-text my-4">
                  Get to know your admission chances into your{" "}
                  <strong>dream colleges</strong> based on your rank, percentile
                  and other details.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div
              className="card mx-auto py-2"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={myStyle1}
            >
              <center>
                <Link to="/PodTalks" style={{ textDecoration: "none" }}>
                  <img
                    className="my-3"
                    src={image3}
                    alt="Podium Talks"
                    width="70"
                    height="70"
                  />
                </Link>
              </center>
              <div className="card-body">
                <h4 className="card-title">
                  <b>Podium Talks</b>
                </h4>
                <p className="card-text my-4">
                  Listen to the <strong>experiences</strong> and{" "}
                  <strong>strategies</strong> of successful students from
                  various colleges and different domains.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div
              className="card mx-auto py-2"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={myStyle1}
            >
              <center>
                <img
                  className="my-3"
                  src={image9}
                  alt="D-Library"
                  width="70"
                  height="70"
                />
              </center>
              <div className="card-body">
                <h4 className="card-title">
                  <b>DLibrary</b>
                </h4>
                <p className="card-text my-4">
                  A vast <strong>digital library</strong> composed of free
                  Ebooks of all genres, competitive materials and handwritten
                  notes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div
              className="card mx-auto py-2"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={myStyle1}
            >
              <center>
                <Link to="/ComingSoon">
                  <img
                    className="my-3"
                    src={image4}
                    alt="Campus Media"
                    width="70"
                    height="70"
                  />
                </Link>
              </center>
              <div className="card-body">
                <h4 className="card-title">
                  <b>Logigate</b>
                </h4>
                <p className="card-text my-4">
                  <strong>Brainstorming</strong> quizzes to brush up your
                  knowledge in mental ability & reasoning to enhance your
                  interview performance.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div
              className="card mx-auto py-2"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={myStyle1}
            >
              <center>
                <Link to="/ComingSoon">
                  <img
                    className="my-3"
                    src={image6}
                    alt="Campus Media"
                    width="70"
                    height="70"
                  />
                </Link>
              </center>
              <div className="card-body">
                <h4 className="card-title">
                  <b>Campus Media</b>
                </h4>
                <p className="card-text my-4">
                  Students can <strong>connect</strong> with all the colleges
                  clubs and their events, contests and many more across India.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div
              className="card mx-auto py-2"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={myStyle1}
            >
              <center>
                <Link to="/ComingSoon">
                  <img
                    className="my-3"
                    src={image7}
                    alt="Career Booster"
                    width="70"
                    height="70"
                  />
                </Link>
              </center>
              <div className="card-body">
                <h4 className="card-title">
                  <b>Career Booster</b>
                </h4>
                <p className="card-text my-4">
                  One-stop platform to learn new skills and{" "}
                  <strong>courses </strong> for <strong>free</strong> provided
                  by top experts and get certified.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div
              className="card mx-auto py-2"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={myStyle1}
            >
              <center>
                <Link to="/ComingSoon">
                  <img
                    className="my-3"
                    src={image8}
                    alt="Career Portal"
                    width="70"
                    height="70"
                  />
                </Link>
              </center>
              <div className="card-body">
                <h4 className="card-title">
                  <b>Career Portal</b>
                </h4>
                <p className="card-text my-4">
                  Directly connect with global companies to grab{" "}
                  <strong>internships, jobs</strong> and get exposed to the
                  pratical knowledge.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div
              className="card mx-auto py-2"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={myStyle1}
            >
              <center>
                <Link to="/ComingSoon">
                  <img
                    className="my-3"
                    src={image5}
                    alt="Student Community"
                    width="70"
                    height="70"
                  />
                </Link>
              </center>
              <div className="card-body">
                <h4 className="card-title">
                  <b>Student Community</b>
                </h4>
                <p className="card-text my-4">
                  Students can form <strong>network</strong> with peers of same
                  interests and also clarify their doubts in friendly
                  communities.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div
              className="card mx-auto py-2"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={myStyle1}
            >
              <center>
                <Link to="/ComingSoon">
                  <img
                    className="my-3"
                    src={image10}
                    alt="Journals"
                    width="70"
                    height="70"
                  />
                </Link>
              </center>
              <div className="card-body">
                <h4 className="card-title">
                  <b>Journals</b>
                </h4>
                <p className="card-text my-4">
                  Professionalize UG and PG knowledge by going through the
                  articles and <strong>research</strong> papers written by the{" "}
                  <strong> experts</strong>.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div
              className="card mx-auto py-2"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={myStyle1}
            >
              <center>
                <Link to="/ComingSoon">
                  <img
                    className="my-3"
                    src={image11}
                    alt="Career Counselling"
                    width="70"
                    height="70"
                  />
                </Link>
              </center>
              <div className="card-body">
                <h4 className="card-title">
                  <b>Career Counselling</b>
                </h4>
                <p className="card-text my-4">
                  Need any career-related guidance from an{" "}
                  <strong>experienced mentor</strong>? Affiliate with them and
                  get your problems resolved.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div
              className="card mx-auto py-2"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={myStyle1}
            >
              <center>
                <Link to="/ComingSoon">
                  <img
                    className="my-3"
                    src={image12}
                    alt="Web Blog"
                    width="70"
                    height="70"
                  />
                </Link>
              </center>
              <div className="card-body">
                <h4 className="card-title">
                  <b>Web Blog</b>
                </h4>
                <p className="card-text my-4">
                  Showcase your talents, share your <strong>voices</strong>,{" "}
                  <strong> experiences</strong>, <strong>thoughts</strong> with
                  the Pladex community through your Blog.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div
              className="card mx-auto py-2"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={myStyle1}
            >
              <center>
                <Link to="/ComingSoon">
                  <img
                    className="my-3"
                    src={image13}
                    alt="Podcasts"
                    width="70"
                    height="70"
                  />
                </Link>
              </center>
              <div className="card-body">
                <h4 className="card-title">
                  <b>Podcasts</b>
                </h4>
                <p className="card-text my-4">
                  Platform for <strong>sharing ideas</strong> by inspired
                  thinkers who can influence people's view on technology,
                  business & culture.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div
              className="card mx-auto py-2"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={myStyle1}
            >
              <center>
                <Link to="/ComingSoon">
                  <img
                    className="my-3"
                    src={image14}
                    alt="Scholarships"
                    width="70"
                    height="70"
                  />
                </Link>
              </center>
              <div className="card-body">
                <h4 className="card-title">
                  <b>Scholarships</b>
                </h4>
                <p className="card-text my-4">
                  Facing <strong>financial problems</strong>? No worries!
                  Students can visit our scholarship section and apply as per
                  your eligibility.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-lg-none"></div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div
              className="card mx-auto py-2"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={myStyle1}
            >
              <center>
                <Link to="/ComingSoon">
                  <img
                    className="my-3"
                    src={image15}
                    alt="Compete 360°"
                    width="70"
                    height="70"
                  />
                </Link>
              </center>
              <div className="card-body">
                <h4 className="card-title">
                  <b>Compete 360°</b>
                </h4>
                <p className="card-text my-4">
                  Participate in challenges, hackathons,{" "}
                  <strong>intercollege contests</strong> and show off your
                  skills, get recognized and rewarded.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-lg-none"></div>
        </div>
      </div>
    </div>
  );
}

export default OurFeatures;
