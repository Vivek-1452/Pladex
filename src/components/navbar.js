import { FontAwesomeIcon } from "@fortawesome/fontawesome-free";
import { Link } from "react-router-dom";
import { faHamburger } from "@fortawesome/fontawesome-free";
import "./Navbar.css";
const Navbar = () => {
  const togg = () => {
    var element = document.getElementById("hamburger");
    element.classList.toggle("navbarmobshow");
  };
  return (
    <>
      <div class="navbar">
        <div>
          <img src="./collab3.jpeg" alt="" />
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/servicesandfeatures">Features & Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div class="navbarmob">
        <div>
          <img src="./collab3.jpeg" alt="" />
        </div>
        <div className="hamburgermenu">
          <FontAwesomeIcon
            onClick={togg}
            icon={faHamburger}
            size="1x"
            style={{ color: "#0E8DF1" }}
          />
        </div>
        <div className="navbarmobhide" id="hamburger">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/servicesandfeatures">Features & Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
