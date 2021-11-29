import React from "react";
import hemanth from "./TeamImages/Hemanth.jpg";

function WD() {
  const myStyle2 = {
    position: "relative",
    top: "-40px",
    borderRadius: "30px",
    height: "150px",
    width: "150px",
    margin: "auto",
  };

  const myStyle3 = {
    display: "none",
    margin: "auto",
    backgroundColor: "#3ab6ad",
    textAlign: "center",
    height: "auto",
    width: "80%",
    borderRadius: "50px",
  };

  const myStyleImg = {
    borderRadius: "30px",
    boxShadow: "5px -3px 10px #888888",
  };

  function myFunction(
    id,
    id1,
    id2,
    id3,
    id4,
    id5,
    id6,
    id7,
    id8,
    id9,
    id10,
    icon
  ) {
    var x = document.getElementById(id);
    var a = document.getElementById(id1);
    var b = document.getElementById(id2);
    var c = document.getElementById(id3);
    var d = document.getElementById(id4);
    var e = document.getElementById(id5);
    var f = document.getElementById(id6);
    var g = document.getElementById(id7);
    var h = document.getElementById(id8);
    var i = document.getElementById(id9);
    var j = document.getElementById(id10);
    var y = document.getElementById(icon);
    if (y.className === "fas fa-chevron-up w-auto mt-2") {
      x.style.height = "auto";
      a.style.display = "block";
      b.style.display = "block";
      c.style.display = "block";
      d.style.display = "block";
      e.style.display = "block";
      f.style.display = "block";
      g.style.display = "block";
      h.style.display = "block";
      i.style.display = "block";
      j.style.display = "block";
      y.className = "fas fa-chevron-down w-auto mt-2";
    } else {
      x.style.height = "0";
      a.style.display = "none";
      b.style.display = "none";
      c.style.display = "none";
      d.style.display = "none";
      e.style.display = "none";
      f.style.display = "none";
      g.style.display = "none";
      h.style.display = "none";
      i.style.display = "none";
      j.style.display = "none";
      y.className = "fas fa-chevron-up w-auto mt-2";
    }
  }

  return (
    <React.Fragment>
      <div className="row ps-5 py-3">
        <i
          class="fas fa-chalkboard-teacher float-start w-auto my-auto"
          style={{ color: "#cfac86" }}
        ></i>
        <h4 className="fw-bold float-start w-auto my-auto">Web Developers</h4>
        <i
          id="fouric"
          class="fas fa-chevron-up w-auto mt-2"
          onClick={() =>
            myFunction(
              "four",
              "dev41",
              "dev42",
              "dev43",
              "dev44",
              "dev45",
              "dev46",
              "dev47",
              "dev48",
              "dev49",
              "dev410",
              "fouric"
            )
          }
          style={{ position: "absolute", right: "5%" }}
        ></i>
      </div>
      <div className="row" id="four" style={{ height: "0" }}>
        <hr
          style={{
            height: "1.5px",
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 0), green, rgba(0, 0, 0, 0))",
          }}
        />
        <div className="col-md-4 mb-5">
          <div id="dev41" className="pb-3 mt-5" style={myStyle3}>
            <div style={myStyle2}>
              <img
                src={hemanth}
                height="100%"
                width="100%"
                alt="Vivek"
                style={myStyleImg}
              />
            </div>

            <h5>Hemanth</h5>
            <h6>B.Tech, NIT Agartala</h6>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div id="dev42" className="pb-3 mt-5" style={myStyle3}>
            <div style={myStyle2}>
              <img
                src={hemanth}
                height="100%"
                width="100%"
                alt="Vivek"
                style={myStyleImg}
              />
            </div>

            <h5>Hemanth</h5>
            <h6>B.Tech, NIT Agartala</h6>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div id="dev43" className="pb-3 mt-5" style={myStyle3}>
            <div style={myStyle2}>
              <img
                src={hemanth}
                height="100%"
                width="100%"
                alt="Vivek"
                style={myStyleImg}
              />
            </div>

            <h5>Hemanth</h5>
            <h6>B.Tech, NIT Agartala</h6>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div id="dev44" className="pb-3 mt-5" style={myStyle3}>
            <div style={myStyle2}>
              <img
                src={hemanth}
                height="100%"
                width="100%"
                alt="Vivek"
                style={myStyleImg}
              />
            </div>

            <h5>Hemanth</h5>
            <h6>B.Tech, NIT Agartala</h6>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div id="dev45" className="pb-3 mt-5" style={myStyle3}>
            <div style={myStyle2}>
              <img
                src={hemanth}
                height="100%"
                width="100%"
                alt="Vivek"
                style={myStyleImg}
              />
            </div>

            <h5>Hemanth</h5>
            <h6>B.Tech, NIT Agartala</h6>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div id="dev46" className="pb-3 mt-5" style={myStyle3}>
            <div style={myStyle2}>
              <img
                src={hemanth}
                height="100%"
                width="100%"
                alt="Vivek"
                style={myStyleImg}
              />
            </div>

            <h5>Hemanth</h5>
            <h6>B.Tech, NIT Agartala</h6>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div id="dev47" className="pb-3 mt-5" style={myStyle3}>
            <div style={myStyle2}>
              <img
                src={hemanth}
                height="100%"
                width="100%"
                alt="Vivek"
                style={myStyleImg}
              />
            </div>

            <h5>Hemanth</h5>
            <h6>B.Tech, NIT Agartala</h6>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div id="dev48" className="pb-3 mt-5" style={myStyle3}>
            <div style={myStyle2}>
              <img
                src={hemanth}
                height="100%"
                width="100%"
                alt="Vivek"
                style={myStyleImg}
              />
            </div>

            <h5>Hemanth</h5>
            <h6>B.Tech, NIT Agartala</h6>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div id="dev49" className="pb-3 mt-5" style={myStyle3}>
            <div style={myStyle2}>
              <img
                src={hemanth}
                height="100%"
                width="100%"
                alt="Vivek"
                style={myStyleImg}
              />
            </div>

            <h5>Hemanth</h5>
            <h6>B.Tech, NIT Agartala</h6>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div id="dev410" className="pb-3 mt-5" style={myStyle3}>
            <div style={myStyle2}>
              <img
                src={hemanth}
                height="100%"
                width="100%"
                alt="Vivek"
                style={myStyleImg}
              />
            </div>

            <h5>Hemanth</h5>
            <h6>B.Tech, NIT Agartala</h6>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default WD;
