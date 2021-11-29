import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import Events from "./Events";
import UpcomingEventsWeb from "./UpcomingEventsWeb";
import EventTemp2 from "./EventTemp2";
import HomeSlider from "./HomeSlider";
import OurMission from "./OurMission";
// import CollabWeb from "./CollabWeb";
import CollWeb from "./CollWeb";
import UpcomEve from "./UpcomEve";
import Count from "./Count";
import CollabMob from "./CollabMob";
import FeatMob from "./FeatMob";
// import Navbars from "./navbar";

function Home() {
  const [display, setdisplay] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setdisplay(true);
    }
  }, [display]);

  return (
    <>
      {/* <Navbars /> */}
      <HomeSlider />
      <OurMission />
      {/* <Events /> */}
      {display ? <FeatMob /> : <UpcomEve />}
      {display ? <EventTemp2 /> : <UpcomingEventsWeb />}
      {display ? <CollabMob /> : <CollWeb />}
      <Count />
    </>
  );
}

export default Home;
