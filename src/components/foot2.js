import React from "react";
import { Link } from "react-router-dom";
// import Mailto from "react-mailto";
import "./footerCss.css";
// import fb from "./fb.png";
// import insta from "./insta.png";
// import telegram from "./telegram.png";
// import yt from "./yt.png";
// import linkedin from "./linkedin.png";
import heart from "./heart.png";
// import Mailto from "reactv16-mailto";

function foot2() {
  return (
    <div style={{ backgroundColor: "#31343c", color: "white" }}>
      <div className="container-fluid text-start">
        {/* <div className="row text-center">
          <div className="col-md-3 col-1"></div>
          <div className="col-md-6 col-10 pt-5">
            <h4 className="mb-3">NEWSLETTER</h4>
            <p>Subscribe to our newsletter to get latest updates.</p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Email ID"
                aria-label="Email ID"
                aria-describedby="basic-addon2"
                style={{
                  outline: "none",
                }}
              />
              <div className="input-group-append">
                <span
                  className="input-group-text"
                  id="basic-addon2"
                  style={{
                    backgroundColor: "#3ad6ab",
                    outline: "none",
                    borderColor: "#3ad6ab",
                  }}
                >
                  Subscribe
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-1"></div>
        </div> */}
        <div className="row py-5 m-0">
          <div className="col-lg-3 ms-lg-5 my-3">
            <h5 className="mx-auto fw-bold">About Us</h5>
            <br />
            <p>
              Pladex is an integrated platform where students can connect and
              build a community with like-minded peers to present their ideas
              and clear their queries. We aim at bringing the equity of wide
              ranging Ed-resources among all the students.
            </p>
          </div>
          <div className="col-6 col-lg-2 my-3">
            <h5 className="mx-auto fw-bold">Quick Links</h5>
            <br />
            {/* <Link to="/features" className="links">
              <p>Our Features</p>
            </Link> */}
            <Link to="/Focus" className="links">
              <p>Focus Next India</p>
            </Link>
            <Link to="/PodiumTalks" className="links">
              <p>Podium Talks</p>
            </Link>
            <Link to="/EventLibrary" className="links">
              <p>Event Library</p>
            </Link>
          </div>
          <div className="col-6 col-lg-2 my-3">
            <h5 className="mx-auto fw-bold">Community</h5>
            <br />
            <Link to="/Team" className="links">
              <p>Our Team</p>
            </Link>
            <Link to="/JoinUs" className="links">
              <p>Join Us</p>
            </Link>
            <Link to="/HelpAndSupport" className="links">
              <p>Help & Support</p>
            </Link>
          </div>
          <div className="col-md-6 col-lg-2 my-3">
            <h5 className="mx-auto fw-bold">Features</h5>
            <br />
            <Link to="/dlibrary" className="links">
              <p>DLibrary</p>
            </Link>
            <a
              className="links"
              href="https://www.collegeexplorer.in/"
              target="_blank"
              rel="noreferrer"
            >
              <p>College Explorer</p>
            </a>
            <a
              className="links"
              href="https://pladex.in/predictor.html"
              target="_blank"
              rel="noreferrer"
            >
              <p>College Predictor</p>
            </a>
            {/* <p>Quiz Buzz</p> */}
          </div>
          <div className="col-md-6 col-lg-2 my-3">
            <h5 className="mx-auto fw-bold">Contact Us</h5>
            <br />
            <a
              href="mailto:pladexstudentscorner@gmail.com?subject=Contacting for queries/suggestions."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#6dd2ae",
                textDecoration: "none",
                fontSize: "13px",
              }}
            >
              <i class="fa-solid fa-envelope"> </i>
              {"    "}
              pladexstudentscorner@gmail.com
            </a>
            <br />
            <br />
            <a
              href="tel:+918688055328"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#6dd2ae",
                textDecoration: "none",
              }}
            >
              <i class="fa-solid fa-phone"> </i> +91 8688055328
            </a>
            {/* <Mailto email="pladexstudentscorner@gmail.com" obfuscate={true}>
              pladexstudentscorner@gmail.com
            </Mailto> */}
            <br />
            <h5 className="mx-auto mt-4 fw-bold">Follow Us</h5>
            <div className="fs-4 mt-3 mb-3">
              <a
                href="https://www.facebook.com/Pladex-101638408977842"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "white" }}
              >
                <i class="fw-bold fab fa-facebook-f"></i>
                {/* <img src={fb} alt="facebook" style={{ height: "30px" }} /> */}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </a>
              <a
                href="https://www.instagram.com/pladex_official/"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "white" }}
              >
                <i class="fw-bold fab fa-instagram"></i>
                {/* <img src={insta} alt="Instagram" style={{ height: "39px" }} /> */}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </a>
              {/* <a
                href="https://t.me/pladexians"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "white" }}
              >
                <i class="fw-bold fab fa-telegram-plane"></i> */}
              {/* <img src={telegram} alt="Telegram" style={{ height: "38px" }} /> */}
              {/* &nbsp;&nbsp;&nbsp;&nbsp;
              </a> */}
              <a
                href="https://www.youtube.com/c/PLADEXOfficial"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "white" }}
              >
                <i class="fw-bold fab fa-youtube"></i>
                {/* <img src={yt} alt="Youtube" style={{ height: "38px" }} /> */}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </a>
              <a
                href="https://www.linkedin.com/company/pladex-official/"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "white" }}
              >
                <i class="fw-bold fab fa-linkedin"></i>
                {/* <img src={linkedin} alt="LinkedIn" style={{ height: "30px" }} /> */}
              </a>
            </div>
          </div>
        </div>
        <hr
          style={{
            height: "4px",
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 0), #3ad6ab, rgba(0, 0, 0, 0))",
            marginTop: "0",
          }}
        />
        <div className="row text-center">
          <h6 className="my-lg-5 my-3 fw-light">
            Developed with{" "}
            <img
              src={heart}
              alt="love"
              style={{ height: "20px", position: "relative", bottom: "3px" }}
            />{" "}
            by Web Dev team
          </h6>
        </div>
      </div>
    </div>
  );
}

export default foot2;
