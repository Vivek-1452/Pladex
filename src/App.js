import "./App.css";
import { Switch } from "react-router";
import { Route } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
// import Nav from "./components/Nav";
// import Footer from "./components/Footer";
// import NewsLetter from "./components/NewsLetter";
import Home from "./components/Home";
import OurFeatures from "./components/OurFeatures";
import AboutUs from "./components/AboutUs";
// import Team from "./components/Team";
// import Faq from "./components/Faq";
// import ContactUs from "./components/ContactUs";
import JoinUs from "./components/JoinUs";
import EventReg from "./components/EventReg";
import Foot2 from "./components/foot2";
import Navnew from "./components/Navnew";
// import Login from "./components/Login";
import LoginMail from "./components/LoginMain";
import Details from "./components/Details";
import PodiumTalks from "./components/PodimTalks";
import Focus from "./components/Focus";
import Ep10 from "./components/Ep10";
import Ep9 from "./components/Ep9";
import Ep8 from "./components/Ep8";
import Ep7 from "./components/Ep7";
import Ep6 from "./components/Ep6";
import Ep5 from "./components/Ep5";
import Ep4 from "./components/Ep4";
import Ep3 from "./components/Ep3";
import Ep2 from "./components/Ep2";
import Ep1 from "./components/Ep1";
import FocusReg from "./components/FocusReg";
import FocusCompReg from "./components/FocusCompReg";
import FocusSponsors from "./components/FocusSponsors";
import FocusSponsMob from "./components/FocusSponsMob";
import FocusPartners from "./components/FocusPartners";
import FocusPartnMob from "./components/FocusPartnMob";
import FocusRegSuc from "./components/FocusRegSuc";
import ComingSoon from "./components/ComingSoon";
import SignupMail from "./components/SignupMail";
import LoginMain from "./components/LoginMain";
import SignupMain from "./components/SignupMain";
// import Navbar from "./components/navbar";

function App() {
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
    <Router>
      <div className="App p-0">
        <ScrollToTop>
          <Switch>
            <Route path="/" exact>
              <Navnew logincheck={loginauth} loginhandler={loginhandler} />
              <Home />
              <Foot2 />
            </Route>
            <Route path="/features">
              <Navnew logincheck={loginauth} loginhandler={loginhandler} />
              <OurFeatures />
              <Foot2 />
            </Route>
            <Route path="/about">
              <Navnew logincheck={loginauth} loginhandler={loginhandler} />
              <AboutUs />
              <Foot2 />
            </Route>
            {/* <Route path="/faq"><Navnew logincheck={loginauth} loginhandler={loginhandler}/><Faq/><Foot2/></Route> */}
            {/* <Route path="/contact"><Navnew logincheck={loginauth} loginhandler={loginhandler}/><ContactUs/><Foot2/></Route> */}
            <Route path="/join">
              <Navnew logincheck={loginauth} loginhandler={loginhandler} />
              <JoinUs />
              <Foot2 />
            </Route>
            <Route path="/EveReg">
              <Navnew logincheck={loginauth} loginhandler={loginhandler} />
              <EventReg />
              <Foot2 />
            </Route>
            <Route path="/PodTalks">
              <Navnew logincheck={loginauth} loginhandler={loginhandler} />
              <PodiumTalks />
              <Foot2 />
            </Route>
            <Route path="/Focus">
              <Navnew logincheck={loginauth} loginhandler={loginhandler} />
              <Focus />
              {display ? <FocusSponsMob /> : <FocusSponsors />}
              {display ? <FocusPartnMob /> : <FocusPartners />}
              <Foot2 />
            </Route>
            <Route path="/ep10">
              <Navnew logincheck={loginauth} loginhandler={loginhandler} />
              <Ep10 />
              <Foot2 />
            </Route>
            <Route path="/ep9">
              <Navnew logincheck={loginauth} loginhandler={loginhandler} />
              <Ep9 />
              <Foot2 />
            </Route>
            <Route path="/ep8">
              <Navnew logincheck={loginauth} loginhandler={loginhandler} />
              <Ep8 />
              <Foot2 />
            </Route>
            <Route path="/ep7">
              <Navnew logincheck={loginauth} loginhandler={loginhandler} />
              <Ep7 />
              <Foot2 />
            </Route>
            <Route path="/ep6">
              <Navnew logincheck={loginauth} loginhandler={loginhandler} />
              <Ep6 />
              <Foot2 />
            </Route>
            <Route path="/ep5">
              <Navnew logincheck={loginauth} loginhandler={loginhandler} />
              <Ep5 />
              <Foot2 />
            </Route>
            <Route path="/ep4">
              <Navnew logincheck={loginauth} loginhandler={loginhandler} />
              <Ep4 />
              <Foot2 />
            </Route>
            <Route path="/ep3">
              <Navnew logincheck={loginauth} loginhandler={loginhandler} />
              <Ep3 />
              <Foot2 />
            </Route>
            <Route path="/ep2">
              <Navnew logincheck={loginauth} loginhandler={loginhandler} />
              <Ep2 />
              <Foot2 />
            </Route>
            <Route path="/ep1">
              <Navnew logincheck={loginauth} loginhandler={loginhandler} />
              <Ep1 />
              <Foot2 />
            </Route>
            <Route path="/FocusReg">
              <Navnew logincheck={loginauth} loginhandler={loginhandler} />
              <FocusReg />
              {/* <Foot2 /> */}
            </Route>
            <Route path="/FocusCompReg">
              <Navnew logincheck={loginauth} loginhandler={loginhandler} />
              <FocusCompReg />
              {/* <Foot2 /> */}
            </Route>
            <Route path="/FocusRegSuc">
              <Navnew logincheck={loginauth} loginhandler={loginhandler} />
              <FocusRegSuc />
              {/* <Foot2 /> */}
            </Route>
            <Route path="/ComingSoon">
              <Navnew logincheck={loginauth} loginhandler={loginhandler} />
              <ComingSoon />
              {/* <Foot2 /> */}
            </Route>

            <Route path="/login">
              {/* <Login loginhandler={loginhandler} /> */}
              <LoginMain />
            </Route>
            <Route path="/SignupMail">
              {/* <Login loginhandler={loginhandler} /> */}
              <SignupMain />
            </Route>
            <Route path="/detail">
              <Details />
            </Route>

            {/* <Route path="/home" component={Home}></Route>
          <Route path="/features" component={OurFeatures}></Route>
          <Route path="/about" component={AboutUs}></Route> */}
            {/* <Route path="/team" component={Team}></Route> */}
            {/* <Route path="/faq" component={Faq}></Route> */}
            {/* <Route path="/contact" component={ContactUs}></Route> */}
            {/* <Route path="/join" component={JoinUs}></Route>
          <Route path="/EveReg" component={EventReg}></Route>
          <Route path="/PodTalks" component={PodiumTalks}></Route>
          <Route path="/ep8" component={Ep8}></Route>
          <Route path="/ep7" component={Ep7}></Route>
          <Route path="/ep6" component={Ep6}></Route>
          <Route path="/ep5" component={Ep5}></Route>
          <Route path="/ep4" component={Ep4}></Route>
          <Route path="/ep3" component={Ep3}></Route>
          <Route path="/ep2" component={Ep2}></Route>
          <Route path="/ep1" component={Ep1}></Route> */}
          </Switch>
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
