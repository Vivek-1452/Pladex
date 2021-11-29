import React from "react";

function ContactUs() {
  const myStyle1 = {
    backgroundColor: "#1ab483",
    padding: "8px",
    color: "white",
    borderRadius: "5px",
  };

  function hovering(num) {
    var x = document.getElementById("sub");
    if (num === "0") {
      x.style.backgroundColor = "black";
    } else {
      x.style.backgroundColor = "#3ad6ab";
    }
  }

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(315deg, #1de2c8 0%, #fffbfc 74%)",
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-1"></div>
          <div className="col-lg-8 col-md-10">
            <div
              className="row bg-white"
              style={{ marginTop: "15%", borderRadius: "10px" }}
            >
              <div className="col-md-6 text-start p-4">
                <h4 className="fw-bold">
                  <span style={{ color: "#3ad6ab" }}>Contact</span> US
                </h4>
                <br />
                {/* <h5 className="fw-bold">How to reach us?</h5> */}
                <h6>
                  We are at your hand anytime. For any queries or feedback, Feel
                  free to contact us at:
                </h6>
                <br />
                <div>
                  <i
                    class="fas fa-envelope-open-text fs-6 me-3 float-start"
                    style={myStyle1}
                  ></i>
                  <p className="fw-bold float-start">contact@pladex.in</p>
                </div>
                <br />
                <br />
                <div>
                  <i
                    class="fas fa-phone-alt fs-6 me-3 float-start"
                    style={myStyle1}
                  ></i>
                  <p className="fw-bold float-start">+918688055328</p>
                </div>
                <br />
                <br />
                <div>
                  <i
                    class="fas fa-map-marker-alt fs-6 me-3 float-start"
                    style={myStyle1}
                  ></i>
                  <p className="fw-bold float-start">+918688055328</p>
                </div>
                <br />
                <br />
                <br />

                <div>
                  <h6>Connect with us:</h6>
                  <i class="fab fa-facebook-f fs-6 me-2" style={myStyle1}></i>
                  <i class="fab fa-instagram fs-6 me-2" style={myStyle1}></i>
                  <i class="fab fa-linkedin-in fs-6 me-2" style={myStyle1}></i>
                  <i class="fab fa-youtube fs-6 me-2" style={myStyle1}></i>
                  <i
                    class="fab fa-telegram-plane fs-6 me-2"
                    style={myStyle1}
                  ></i>
                </div>
              </div>
              <hr
                className="d-lg-none d-md-none"
                style={{
                  height: "1.5px",
                  background:
                    "linear-gradient(to right, rgba(0, 0, 0, 0), green, rgba(0, 0, 0, 0))",
                }}
              />
              <div className="col-md-6 text-start p-4">
                <h4 className="fw-bold">
                  <span style={{ color: "#3ad6ab" }}>Contact</span> US
                </h4>
                <br />
                <form>
                  <input
                    type="text"
                    placeholder="Name"
                    style={{
                      width: "90%",
                      height: "45px",
                      borderRadius: "5px",
                      outline: "none",
                      padding: "10px 10px 10px 20px",
                      marginBottom: "10px",
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Email-ID"
                    style={{
                      width: "90%",
                      height: "45px",
                      borderRadius: "5px",
                      outline: "none",
                      padding: "10px 10px 10px 20px",
                      marginBottom: "10px",
                    }}
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    style={{
                      width: "90%",
                      height: "45px",
                      borderRadius: "5px",
                      outline: "none",
                      padding: "10px 10px 10px 20px",
                      marginBottom: "10px",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Message"
                    style={{
                      width: "90%",
                      height: "100px",
                      borderRadius: "5px",
                      outline: "none",
                      padding: "0 0 0 20px",
                      marginBottom: "15px",
                    }}
                  />
                  <button
                    type="submit"
                    id="sub"
                    className="btn btn-success px-3"
                    onMouseOver={() => hovering("0")}
                    onMouseLeave={() => hovering("1")}
                    style={{
                      marginLeft: "73%",
                      backgroundColor: "#3ad6ab",
                      border: "none",
                    }}
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-1"></div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
