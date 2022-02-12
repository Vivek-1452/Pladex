import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Carousel } from "3d-react-carousal";
import imgk1 from "./ImgTestimonials/Kesavpavan.svg";
import imgk2 from "./ImgTestimonials/Manjula.svg";
import imgk3 from "./ImgTestimonials/Nikhil.svg";
import imgk4 from "./ImgTestimonials/Saranya.svg";
import imgk5 from "./ImgTestimonials/Sneha.svg";
import "./testimonialsCss.css";

function Testimonials() {
  const [display, setdisplay] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setdisplay(true);
    }
  }, [display]);

  let slides1 = [
    <img
      src="https://images.unsplash.com/photo-1607637508975-bf0090d7a0b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyZHN8ZW58MHx8MHx8&w=1000&q=80"
      alt="1"
    />,
    <img
      src="https://media.istockphoto.com/photos/playing-cards-picture-id182243945?k=20&m=182243945&s=612x612&w=0&h=oobOg8cwrMToYSlf2ki5KOM9xr1YiPB0A5VgJGMT2ZQ="
      alt="2"
    />,
    <img
      src="https://images.unsplash.com/photo-1501003878151-d3cb87799705?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OXx8fGVufDB8fHx8&w=1000&q=80"
      alt="3"
    />,
  ];

  let slides = [
    <div
      className="card cardyy"
      style={{
        width: "100%",
      }}
    >
      <div className="card-body">
        <img
          id="img1"
          src={imgk1}
          className="mt-1 mb-3"
          //src = "https://mk0qomafemocnned3wjh.kinstacdn.com/wp-content/uploads/2019/02/AI-thispersondoesnotexist.jpg"
          height="80"
          width="80"
          style={{ borderRadius: "50%" }}
          alt="pers"
        />
        {/*  <p style={{ color: "#3ad6ab" }}>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </p>*/}{" "}
        <p className="mb-5">
          I heard about Pladex from my friend. So, I checked out the website
          Pladex.in. Firstly, the interface got me, dude! That was so nice and
          well-matched with the colors pleasing to my eyes. I got into it a tad
          bit and I found this vast feature called D-Library where I could find
          whatever book needed for my domain in B.Tech. The events were so
          informative as they have been live and interactive where I got to
          clear my doubts in the live chat. Thanks to Pladex for being so
          perseverant.
        </p>{" "}
        <h4> Kesav Pavan </h4> <p> BASE University, Bengaluru </p>{" "}
      </div>{" "}
    </div>,

    //2
    <div
      className="card cardyy"
      style={{
        width: "100%",
      }}
    >
      <div className="card-body">
        <img
          id="img1"
          src={imgk5}
          className="mt-1 mb-3"
          // src = "https://mk0qomafemocnned3wjh.kinstacdn.com/wp-content/uploads/2019/02/AI-thispersondoesnotexist.jpg"
          height="80"
          width="80"
          style={{ borderRadius: "50%" }}
          alt="pers"
        />
        {/* <p style={{ color: "#3ad6ab" }}>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </p>*/}{" "}
        <p className="mb-5">
          I got to know Pladex through the competition named CAMPUS GALLERY
          which fascinated me a lot because I could see all the aesthetic
          pictures of many colleges in India. I even participated in it and I
          knew that the FOCUS NEXT INDIA EVENT was a triumph. So, I watched all
          of their sessions and loved them a lot. The way you picked those
          speakers who are well versed and inspiring, made me watch all their
          videos. I want Pladex to keep going and reach a pinnacle soon.{" "}
        </p>{" "}
        <h4> Sneha </h4> <p> NIT Allahabad</p>{" "}
      </div>{" "}
    </div>,
    //3

    <div
      className="card cardyy"
      style={{
        width: "100%",
      }}
    >
      <div className="card-body">
        <img
          id="img1"
          src={imgk3}
          className="mt-1 mb-3"
          //src = "https://mk0qomafemocnned3wjh.kinstacdn.com/wp-content/uploads/2019/02/AI-thispersondoesnotexist.jpg"
          height="80"
          width="80"
          style={{ borderRadius: "50%" }}
          alt="pers"
        />
        {/*<p style={{ color: "#3ad6ab" }}>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </p>*/}{" "}
        <p className="mb-5">
          I am a 2nd year B. Tech student at Nit Agartala. I visited the Pladex
          website one day and my eyes were caught up with features. I just love
          this attribute of Pladex that they bring out a feature or any event at
          the right time that students need them. The way they manage to get the
          perfect timing, Kudos! So is the marketing. The events are hella
          helpful to students who are striving to learn and achieve something.
          Keep going! All the best.{" "}
        </p>{" "}
        <h4> Nikhil </h4> <p> NIT Agartala</p>{" "}
      </div>{" "}
    </div>,

    //4

    <div
      className="card cardyy"
      style={{
        width: "100%",
      }}
    >
      <div className="card-body">
        <img
          id="img1"
          src={imgk4}
          className="mt-1 mb-3"
          //src = "https://mk0qomafemocnned3wjh.kinstacdn.com/wp-content/uploads/2019/02/AI-thispersondoesnotexist.jpg"
          height="80"
          width="80"
          style={{ borderRadius: "50%" }}
          alt="pers"
        />
        {/* <p style={{ color: "#3ad6ab" }}>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </p>*/}{" "}
        <p className="mb-5">
          My graduation started online and the same is going on. I thought I
          would gain nothing and even tensed about my career. Looking for
          guidance, then I came across the Pladex which conducts the live
          sessions named Podium Talks with the experts who are placed in
          top-notch companies. I got my doubts cleared and with that knowledge,
          I chose my path. In return for such help, I could only thank Pladex
          heartfully. And I even hope for many such features could hit the
          necessities of many. Thank you!
        </p>{" "}
        <h4> Sathvika</h4> <p> NIT Mizoram </p>{" "}
      </div>{" "}
    </div>,

    //5

    <div
      className="card cardyy"
      style={{
        width: "100%",
      }}
    >
      <div className="card-body">
        <img
          id="img1"
          src={imgk2}
          className="mt-1 mb-3"
          //src = "https://mk0qomafemocnned3wjh.kinstacdn.com/wp-content/uploads/2019/02/AI-thispersondoesnotexist.jpg"
          height="80"
          width="80"
          style={{ borderRadius: "50%" }}
          alt="pers"
        />
        {/*  <p style={{ color: "#3ad6ab" }}>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </p>*/}{" "}
        <p className="mb-5">
          I was very interested in many extracurricular activities, but I could
          not get the representation of all my works. Then my friend once
          suggested me to participate in the contests conducted by PLADEX. I
          found that there are six kinds of contests in the FOCUS NEXT INDIA
          event. I found it very interesting and excited to participate. I thank
          PLADEX for the event and hope for many such events for the students
          waiting to showcase their talents.
        </p>{" "}
        <h4> Manjula</h4> <p> Nit Jamshedpur </p>{" "}
      </div>{" "}
    </div>,
  ];

  return (
    <div className="py-5" style={{ backgroundColor: "#f5f6f7" }}>
      {" "}
      {/* autoplay={true} interval={1000} */} <Carousel slides={slides} />{" "}
    </div>
  );
}

export default Testimonials;
