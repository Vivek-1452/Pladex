import React from "react";

function Footer() {
  return (
    <React.Fragment>
      <footer
        style={{
          textAlign: "center",
          backgroundColor: "#333",
          color: "white",
          padding: "25px 0 10px 0",
        }}
      >
        <h2 className="fw-bold fs-2 my-3">
          <strong>
            PL{" "}
            <span class="text-primary">
              <i class="fas fa-location-arrow" style={{ color: "#3ad6ab" }}></i>
            </span>{" "}
            DEX
          </strong>
        </h2>
        <h5>
          <span style={{ color: "#3ad6ab" }}>PLA</span>tform for the stu
          <span style={{ color: "#3ad6ab" }}>D</span>ents to conn
          <span style={{ color: "#3ad6ab" }}>E</span>ct & e
          <span style={{ color: "#3ad6ab" }}>X</span>plore
        </h5>
        <h5 className="mt-5 mb-4" style={{ color: "#3ad6ab" }}>
          NEWSLETTER
        </h5>
        <p>
          <strong>
            {" "}
            Subscribe to get latest updates and notifications of new features
            and events at PLADEX
          </strong>
        </p>
        <div className="row mb-5">
          <div className="col-1 col-md-2 col-lg-3"></div>
          <div className="col-10 col-md-8 col-lg-6">
            <form>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Mail ID"
                  style={{
                    borderRadius: "5px 0 0 5px",
                    border: "none",
                    outline: "none",
                    padding: "8px 15px",
                    width: "75%",
                  }}
                />
                <button
                  className="btn btn-primary py-2 px-1"
                  type="submit"
                  name="newsletter_submit"
                  style={{
                    border: "none",
                    outline: "none",
                    borderRadius: "0 5px 5px 0",
                    width: "25%",
                  }}
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="col-1 col-md-2 col-lg-3"></div>
        </div>
        <div className="row mb-5">
          <div className="col-lg-3 col-md-4 col-sm-2">
            <h6>Features</h6>
            <a>College expolrer</a>
            <br />
            <a>College predictor</a>
            <br />
            <a>Podium talks</a>
            <br />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-2">
            <h6>Features2</h6>
            <a>College expolrer</a>
            <br />
            <a>College predictor</a>
            <br />
            <a>Podium talks</a>
            <br />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-2">
            <h6>Features3</h6>
            <a>College expolrer</a>
            <br />
            <a>College predictor</a>
            <br />
            <a>Podium talks</a>
            <br />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-2">
            <h6>Features4</h6>
            <a>College expolrer</a>
            <br />
            <a>College predictor</a>
            <br />
            <a>Podium talks</a>
            <br />
          </div>
        </div>
        <div className="fs-5 mt-3 mb-3">
          <i class="fw-bold fab fa-facebook-f"></i>&nbsp;&nbsp;&nbsp;&nbsp;
          <i class="fw-bold fab fa-instagram"></i>&nbsp;&nbsp;&nbsp;&nbsp;
          <i class="fw-bold fab fa-telegram-plane"></i>&nbsp;&nbsp;&nbsp;&nbsp;
          <i class="fw-bold fab fa-youtube"></i>&nbsp;&nbsp;&nbsp;&nbsp;
          <i class="fw-bold fab fa-linkedin"></i>
        </div>
        <p className="m-0">
          Copyright ©2021 PL
          <span class="text-primary">
            <i class="fas fa-location-arrow" style={{ color: "#3ad6ab" }}></i>
          </span>
          DEX. Designed with 💗 by Web Dev Team
        </p>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
