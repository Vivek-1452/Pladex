import React from "react";
import AD from "./AD";
import BOD from "./BOD";
import MD from "./MD";
import VP from "./VP";
import WD from "./WD";

function Team() {
  return (
    <div className="container-fluid">
      <h4 className="text-center fw-bold display-6 my-3">
        Our{" "}
        <span className="text" style={{ color: "#3ad6ab" }}>
          Team
        </span>
      </h4>
      <BOD />
      <MD />
      <VP />
      <WD />
      <AD />
    </div>
  );
}

export default Team;
