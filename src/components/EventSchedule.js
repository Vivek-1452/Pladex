import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import events from "./FocusImages/events.png";
// import dec18 from "./FocusImages/dates.png";

AOS.init();

function EventSchedule() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${events})`,
          color: "white",
          overflowX: "hidden",
        }}
      >
        <div className="container-fluid">
          <div className="row py-5">
            <h4 className="text-center fw-bold display-6 mt-3 mb-5">
              EVENT{" "}
              <span className="text" style={{ color: "#3ad6ab" }}>
                SCHEDULE
              </span>
            </h4>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work text-start"
                contentStyle={{
                  background: "#ffd966",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #ffd966",
                }}
                date="December 18"
                iconStyle={{ background: "#ffd966", color: "#fff" }}
                // icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title text-lg-end fw-bold text-dark">
                  18 DEC
                </h3>
                <br />
                <h4 className="vertical-timeline-element-subtitle text-lg-end fw-light text-dark">
                  ENTREPRENEURSHIP & BRAND BUILDING
                </h4>
                {/* <p className="text-lg-end">
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </p> */}
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work text-end"
                contentStyle={{
                  background: "#da6220",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #da6220",
                }}
                date="December 19"
                iconStyle={{ background: "#da6220", color: "#fff" }}
                // icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title text-start fw-bold text-dark">
                  19 DEC
                </h3>
                <br />
                <h4 className="vertical-timeline-element-subtitle text-start fw-light text-dark">
                  MENTAL HEALTH & WELL-BEING
                </h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work text-start"
                contentStyle={{
                  background: "#ffcc7f",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #ffcc7f",
                }}
                date="December 20"
                iconStyle={{ background: "#ffcc7f", color: "#fff" }}
                // icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title text-lg-end fw-bold text-dark">
                  20 DEC
                </h3>
                <br />
                <h4 className="vertical-timeline-element-subtitle text-lg-end fw-light text-dark">
                  WOMEN EMPOWERMENT
                </h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work text-end"
                contentStyle={{
                  background: "#d0e0e3",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #d0e0e3",
                }}
                date="December 21"
                iconStyle={{ background: "#d0e0e3", color: "#fff" }}
                // icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title text-start fw-bold text-dark">
                  21 DEC
                </h3>
                <br />
                <h4 className="vertical-timeline-element-subtitle text-start fw-light text-dark">
                  EMERGING TECHNOLOGIES
                </h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work text-start"
                contentStyle={{
                  background: "#80d2f5",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #80d2f5",
                }}
                date="December 22"
                iconStyle={{ background: "#80d2f5", color: "#fff" }}
                // icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title text-lg-end fw-bold text-dark">
                  22 DEC
                </h3>
                <br />
                <h4 className="vertical-timeline-element-subtitle text-lg-end fw-light text-dark">
                  TACKLING HUMAN TRAFFICKING & SELF DEFENSE
                </h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work text-end"
                contentStyle={{
                  background: "#ffa500",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #ffa500",
                }}
                date="December 23"
                iconStyle={{ background: "#ffa500", color: "#fff" }}
                // icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title text-start fw-bold text-dark">
                  23 DEC
                </h3>
                <br />
                <h4 className="vertical-timeline-element-subtitle text-start fw-light text-dark">
                  SOFT SKILLS & PERSONALITY DEVELOPMENT
                </h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work text-start"
                contentStyle={{
                  background: "#bcbcbc",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #bcbcbc",
                }}
                date="December 24"
                iconStyle={{ background: "#bcbcbc", color: "#fff" }}
                // icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title text-lg-end fw-bold text-dark">
                  24 DEC
                </h3>
                <br />
                <h4 className="vertical-timeline-element-subtitle text-lg-end fw-light text-dark">
                  BASIC LAWS AND RIGHTS
                </h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work text-end"
                contentStyle={{
                  background: "#d5a6bd",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #d5a6bd",
                }}
                date="December 25"
                iconStyle={{ background: "#d5a6bd", color: "#fff" }}
                // icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title text-start fw-bold text-dark">
                  25 DEC
                </h3>
                <br />
                <h4 className="vertical-timeline-element-subtitle text-start fw-light text-dark">
                  FOCUS ONE TALENT
                </h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work text-start"
                contentStyle={{
                  background: "#3ad6ab",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #3ad6ab",
                }}
                date="December 26"
                iconStyle={{ background: "#3ad6ab", color: "#fff" }}
                // icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title text-lg-end fw-bold text-dark">
                  26 DEC
                </h3>
                <br />
                <h4 className="vertical-timeline-element-subtitle text-lg-end fw-light text-dark">
                  CLOSING CEREMONY
                </h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={{ background: "#bb012d", color: "#fff" }}
                // icon={<StarIcon />}
              />
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventSchedule;
