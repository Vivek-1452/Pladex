import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Foot2 from "./foot2";
import Navnew from "./Navnew";
import UpcomingEventsWeb from "./UpcomingEventsWeb";
import EventTemp2 from "./EventTemp2";
import HomeSlider from "./HomeSlider";
import OurMission from "./OurMission";
import CollWeb from "./CollWeb";
import UpcomEve from "./UpcomEve";
import Count from "./Count";
import CollabMob from "./CollabMob";
import FeatMob from "./FeatMob";

function Home() {
  const [loginauth, setloginauth] = useState(false);

  const loginhandler = () => {
    setloginauth(true);
  };

  const [display, setdisplay] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setdisplay(true);
    }
  }, [display]);

  return (
    <>
      <Navnew logincheck={loginauth} loginhandler={loginhandler} />
      <HomeSlider />
      <OurMission />
      {display ? <FeatMob /> : <UpcomEve />}
      {display ? <EventTemp2 /> : <UpcomingEventsWeb />}
      {display ? <CollabMob /> : <CollWeb />}
      <Count />
      <Foot2 />
    </>
  );
}

export default Home;
