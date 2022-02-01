import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Carousel } from "3d-react-carousal";
import "./testimonialsCss.css";

function Testimonials() {
  const [display, setdisplay] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setdisplay(true);
    }
  }, [display]);

  // let slides1 = [
  //   <img
  //     src="https://images.unsplash.com/photo-1607637508975-bf0090d7a0b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyZHN8ZW58MHx8MHx8&w=1000&q=80"
  //     alt="1"
  //   />,
  //   <img
  //     src="https://media.istockphoto.com/photos/playing-cards-picture-id182243945?k=20&m=182243945&s=612x612&w=0&h=oobOg8cwrMToYSlf2ki5KOM9xr1YiPB0A5VgJGMT2ZQ="
  //     alt="2"
  //   />,
  //   <img
  //     src="https://images.unsplash.com/photo-1501003878151-d3cb87799705?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OXx8fGVufDB8fHx8&w=1000&q=80"
  //     alt="3"
  //   />,
  // ];

  let slides = [
    <div
      className="card cardy"
      style={{
        width: "100%",
      }}
    >
      <div className="card-body">
        <img
          className="mt-1 mb-3"
          src="https://mk0qomafemocnned3wjh.kinstacdn.com/wp-content/uploads/2019/02/AI-thispersondoesnotexist.jpg"
          height="80"
          width="80"
          style={{ borderRadius: "50%" }}
          alt="pers"
        />
        <p>*****</p>
        <p className="mb-5">
          dfdbkj sdhf shdg h sghd ksfhdg khsd ghsf ghkd fghldkfhg kjdfkjgsid
          fhaehrgojrg jr sjggnifhwrinv asrijgj o;sg ifhgf fdhgohrfjbk
          sdfgpbsfbgrg uigsfhgjbug uih hrgoiuhfdguiusrgb uif uhg ig iuhrg
          ihfdguh fgoiuh sfg dfdbkj sdhf shdg h sghd ksfhdg khsd ghsf ghkd
          fghldkfhg kjdfkjgsid fhaehrgojrg jr sjggnifhwrinv asrijgj o;sg ifhgf
          fdhgohrfjbk sdfgpbsfbgrg uigsfhgjbug uih hrgoiuhfdguiusrgb uif uhg ig
          iuhrg ihfdguh fgoiuh sfg
        </p>
        <h4>Patrick Jane</h4>
        <p>Consultant</p>
      </div>
    </div>,
    <div
      className="card cardy"
      style={{
        width: "100%",
      }}
    >
      <div className="card-body">
        <img
          className="mt-1 mb-3"
          src="https://mk0qomafemocnned3wjh.kinstacdn.com/wp-content/uploads/2019/02/AI-thispersondoesnotexist.jpg"
          height="80"
          width="80"
          style={{ borderRadius: "50%" }}
          alt="pers"
        />
        <p>*****</p>
        <p className="mb-5">
          dfdbkj sdhf shdg h sghd ksfhdg khsd ghsf ghkd fghldkfhg kjdfkjgsid
          fhaehrgojrg jr sjggnifhwrinv asrijgj o;sg ifhgf fdhgohrfjbk
          sdfgpbsfbgrg uigsfhgjbug uih hrgoiuhfdguiusrgb uif uhg ig iuhrg
          ihfdguh fgoiuh sfg dfdbkj sdhf shdg h sghd ksfhdg khsd ghsf ghkd
          fghldkfhg kjdfkjgsid fhaehrgojrg jr sjggnifhwrinv asrijgj o;sg ifhgf
          fdhgohrfjbk sdfgpbsfbgrg uigsfhgjbug uih hrgoiuhfdguiusrgb uif uhg ig
          iuhrg ihfdguh fgoiuh sfg
        </p>
        <h4>p2 Jane</h4>
        <p>Consultant</p>
      </div>
    </div>,
    <div
      className="card cardy"
      style={{
        width: "100%",
      }}
    >
      <div className="card-body">
        <img
          className="mt-1 mb-3"
          src="https://mk0qomafemocnned3wjh.kinstacdn.com/wp-content/uploads/2019/02/AI-thispersondoesnotexist.jpg"
          height="80"
          width="80"
          style={{ borderRadius: "50%" }}
          alt="pers"
        />
        <p>*****</p>
        <p className="mb-5">
          dfdbkj sdhf shdg h sghd ksfhdg khsd ghsf ghkd fghldkfhg kjdfkjgsid
          fhaehrgojrg jr sjggnifhwrinv asrijgj o;sg ifhgf fdhgohrfjbk
          sdfgpbsfbgrg uigsfhgjbug uih hrgoiuhfdguiusrgb uif uhg ig iuhrg
          ihfdguh fgoiuh sfg dfdbkj sdhf shdg h sghd ksfhdg khsd ghsf ghkd
          fghldkfhg kjdfkjgsid fhaehrgojrg jr sjggnifhwrinv asrijgj o;sg ifhgf
          fdhgohrfjbk sdfgpbsfbgrg uigsfhgjbug uih hrgoiuhfdguiusrgb uif uhg ig
          iuhrg ihfdguh fgoiuh sfg
        </p>
        <h4>p3 Jane</h4>
        <p>Consultant</p>
      </div>
    </div>,
    <div
      className="card cardy"
      style={{
        width: "100%",
      }}
    >
      <div className="card-body">
        <img
          className="mt-1 mb-3"
          src="https://mk0qomafemocnned3wjh.kinstacdn.com/wp-content/uploads/2019/02/AI-thispersondoesnotexist.jpg"
          height="80"
          width="80"
          style={{ borderRadius: "50%" }}
          alt="pers"
        />
        <p>*****</p>
        <p className="mb-5">
          dfdbkj sdhf shdg h sghd ksfhdg khsd ghsf ghkd fghldkfhg kjdfkjgsid
          fhaehrgojrg jr sjggnifhwrinv asrijgj o;sg ifhgf fdhgohrfjbk
          sdfgpbsfbgrg uigsfhgjbug uih hrgoiuhfdguiusrgb uif uhg ig iuhrg
          ihfdguh fgoiuh sfg dfdbkj sdhf shdg h sghd ksfhdg khsd ghsf ghkd
          fghldkfhg kjdfkjgsid fhaehrgojrg jr sjggnifhwrinv asrijgj o;sg ifhgf
          fdhgohrfjbk sdfgpbsfbgrg uigsfhgjbug uih hrgoiuhfdguiusrgb uif uhg ig
          iuhrg ihfdguh fgoiuh sfg
        </p>
        <h4>p4 Jane</h4>
        <p>Consultant</p>
      </div>
    </div>,
  ];

  return (
    <div className="py-5" style={{ backgroundColor: "#f5f6f7" }}>
      {/* autoplay={true} interval={1000} */}
      <Carousel slides={slides} />
    </div>
  );
}

export default Testimonials;
