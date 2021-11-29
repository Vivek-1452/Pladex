import React from "react";

function NewsLetter() {
  return (
    <React.Fragment>
      <div className="container text-center">
        <div className="row my-3">
          <div className="col-md-2"></div>
          <div
            className="col-md-8 pt-5 pb-3"
            style={{ backgroundColor: "#f5f6f7", borderRadius: "10px" }}
          >
            <h5>
              <i class="fas fa-envelope" style={{ color: "#3ad6ab" }}></i>
              <strong> Newsletter</strong>
            </h5>
            <br />
            <p>
              <strong>
                {" "}
                Subscribe to get latest updates and notifications of new
                features and events at PLADEX
              </strong>
            </p>
            <div className="row mt-4 mb-3">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <form>
                  <div className="input-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your Mail ID"
                      style={{
                        borderRadius: "5px",
                        border: "none",
                        outline: "none",
                        padding: "8px 15px",
                        width: "75%",
                      }}
                    />
                    <button
                      className="btn btn-primary py-2 px-2"
                      type="submit"
                      name="newsletter_submit"
                      style={{
                        border: "none",
                        outline: "none",
                        borderRadius: "5px",
                        width: "25%",
                      }}
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NewsLetter;
