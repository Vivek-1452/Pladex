import React from "react";
import slide1 from "./ImgHomeSlider/dlibrary.png";
// import slide2 from "./ImgHomeSlider/focus.png";
// import slide3 from "./ImgHomeSlider/logigate.png";
import slide4 from "./ImgHomeSlider/podiumtalks.png";
// import slide5 from "./ImgHomeSlider/abhiniyu.png";
import slide6 from "./ImgHomeSlider/techietalks.svg";

function HomeSlider() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide carousel-fade p-0"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
          style={{
            backgroundColor: "#6dd2ae",
            width: "9px",
            height: "8px",
            borderRadius: "50%",
            margin: "0 8px",
          }}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          style={{
            backgroundColor: "#6dd2ae",
            width: "9px",
            height: "8px",
            borderRadius: "50%",
            margin: "0 8px",
          }}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          style={{
            backgroundColor: "#6dd2ae",
            width: "9px",
            height: "8px",
            borderRadius: "50%",
            margin: "0 8px",
          }}
        ></button>
        {/* <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
          style={{
            backgroundColor: "#6dd2ae",
            width: "9px",
            height: "8px",
            borderRadius: "50%",
            margin: "0 8px",
          }}
        ></button> */}
      </div>
      <div className="carousel-inner p-0">
        {/* <div
          className="carousel-item active p-0"
          style={{ backgroundColor: "#f5f6f7", border: "none" }}
        >
          <img
            // src="https://pladex.in/images/home-1.png"
            src={slide2}
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div
          className="carousel-item p-0"
          style={{ backgroundColor: "#f5f6f7", border: "none" }}
        >
          <img
            // src="https://pladex.in/images/home-1.png"
            src={slide5}
            className="d-block w-100"
            alt="..."
          />
        </div> */}
        <div
          className="carousel-item active p-0"
          style={{ backgroundColor: "#f5f6f7", border: "none" }}
        >
          <img
            // src="https://pladex.in/images/home-2.png"
            src={slide6}
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div
          className="carousel-item p-0"
          style={{ backgroundColor: "#f5f6f7", border: "none" }}
        >
          <img
            // src="https://pladex.in/images/home-2.png"
            src={slide1}
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div
          className="carousel-item p-0"
          style={{ backgroundColor: "#f5f6f7", border: "none" }}
        >
          <img
            // src="https://pladex.in/images/home-3.png"
            src={slide4}
            className="d-block w-100"
            alt="..."
          />
        </div>
        {/* <div
          className="carousel-item p-0"
          style={{ backgroundColor: "#f5f6f7", border: "none" }}
        >
          <img
            // src="https://pladex.in/images/home-3.png"
            src={slide4}
            className="d-block w-100"
            alt="..."
          />
        </div> */}
      </div>
    </div>
  );
}

export default HomeSlider;
