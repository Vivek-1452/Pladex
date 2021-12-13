import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import Navnew from "./Navnew";
import main from "./FocusImages/reg.png";
import logo from "./FocusImages/logo.png";
import heart from "./heart.png";
import "./FocusReg.css";
import { eventOptions } from "./multiSelect.ts";
import { Link } from "react-router-dom";

function FocusReg() {
  const currentUrl = window.location.href;
  var params = new URL(currentUrl).searchParams.get("state");

  useEffect(() => {
    if (
      params ==
      "eb3b62d785bda296823ca0e1c582a4f7eec2cadf457bad12ce8f132ccbad9557"
    ) {
      alert("Unable to register! Try again.");
      document.location.href = "/CheckRegister";
    }
  }, []);

  function inputClicking() {
    document.getElementById("dev").style.display = "none";
  }

  const [isLoaded, setIsLoaded] = useState([]);

  useEffect(() => {
    axios
      .post("https://www.pladex.in/auth/data", { withCredentials: true })
      .then((response) => {
        if (response.data.email != null) {
          setIsLoaded([
            response.data.email,
            response.data.firstname,
            response.data.lastname,
            response.data.mobile,
            response.data.college,
            response.data.branch,
          ]);
        }
      });
  }, [isLoaded]);

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

  var colleges = [
    "Others",
    "NIT Agartala",
    "IIIT Agartala",
    "Tripura Institute of Technology",
    "Techno College of Engineering",
    "ICFAI University",
    "TTAADC polytechnic institute",
    "Tripura Institute of Technology",
    "Gomati District Polytechnic",
    "Dhalai District Polytechnic",
    "Women Polytechnic",
    "NIELIT Agartala - National Institute of Electronics and Information Technology",
    "North Tripura District Polytechnic, Dharmanagar",
    "Centre for Computers and Communication Technology",
    "Institute of Communication and Information Technology",
    "NIT Sikkim",
    "Sikkim professional University",
    "SMIT Sikkim",
    "ICFAI SIKKIM",
    "College of Agricultural Engineering and Post Harvest Technology",
    "SRM University",
    "St.Anthony's College",
    "Jowai Polytechnic",
    "District Institute of Education and Training",
    "Tura Polytechnic",
    "Shillong Polytechnic",
    "NIPS School of Hotel Management",
    "Nit Meghalaya",
    "CMJ University",
    "North-eastern Hill University",
    "William Carey University",
    "Mahatma Gandhi University",
    "MIT University",
    "Regional Institute of Science and Technology",
    "Bongaigaon Polytechnic",
    "Dibrugarh Polytechnic",
    "Indian Institute of Handloom Technology",
    "Now Gong Polytechnic",
    "Residential Girls’ Polytechnic",
    "Silchar Polytechnic",
    "IIT Guwahati",
    "IIIT Guwahati",
    "NIT Silchar",
    "Tezpur University",
    "Assam Science and Technology University",
    "Assam Engineering college",
    "Central Institute of Technology",
    "HRH the Prince of Wales Institute of Engineering and Technology",
    "Dibrugarh University",
    "Krishna kanta Handiqui State Open University",
    "Bodoland University",
    "Goal para university",
    "Cotton University",
    "Triguna Sen School of technology",
    "Royal Global University",
    "Bhattadev University",
    "Jorhat engineering college.",
    "Gauhati University",
    "The Assam Kaziranga University",
    "Assam Downtown University",
    "Assam Donbosco University",
    "National Institute of Electronics and Information technology, Aizawl",
    "Mizoram Polytechnic,Lunglei",
    "Regional Institute of Paramedical and Nursing Sciences",
    "NIT Mizoram",
    "Mizoram University, School of Engineering and Technology",
    "NERIST Nirjuli",
    "Himalayan University",
    "Arunachal University of Studies",
    "North-east Frontier Technical University",
    "Arunodaya University",
    "Apex Professional University",
    "Rajiv Gandhi Government Polytechnic,Papum Pare",
    "Government Polytechnic, Khonsa",
    "Nit Arunachal Pradesh",
    "NERIST Nirjuli",
    "Government Polytechnic",
    "Central Institute of Plastic Engineering and Technology",
    "National Institute of Electronics and Information Technology",
    "NIT Manipur",
    "lIIT Manipur",
    "Manipur Institute of Technology",
    "College of Food Technology",
    "Manipur Technical University",
    "College of Dairy Technology",
    "National Institute of Electronics and Information Technology, Kohima",
    "Institute of Communication and Information Technology",
    "Government Polytechnic, Kohima",
    "Global Open University, Dimapur",
    "Khelhoshe Polytechnic,Atoizu",
    "Nagaland Tool Room and Training Centre",
    "Mount Mary College",
    "NIT Nagaland",
    "St.Joseph University, Dimapur",
    "Nagaland University",
    "Others",
  ];

  var branches = [
    "Others",
    "Acoustic engineering",
    "Aeronautical",
    "Aeronautical/astronautical",
    "Aerospace engineering",
    "Aircraft maintenance",
    "Agriculture",
    "Agriculture and food engineering",
    "Agriculture and irrigation engineering",
    "Agriinformatics",
    "Apparel production management",
    "Applied engineering",
    "Applied electronics",
    "Applied electronics and instrumentation",
    "Applied mechanics",
    "Architecture engineering",
    "Artificial engineering",
    "Artificial intelligence and machine learning",
    "Atmospheric sciences",
    "Audio engineering",
    "Automation and robotics",
    "Automobile engineering",
    "Automotive design",
    "Automotive engineering",
    "Autotronics",
    "Avionics engineering",
    "Aviation engineering",
    "Big data analysis",
    "Bio informatics",
    "Bio technology",
    "Biochemical",
    "Biological sciences and bio engineering",
    "Biologically inspired system science",
    "Biomedical engineering",
    "Biomedical instrumentation",
    "Bioprocess technology",
    "Bioscience and bioengineering",
    "Biotechnology/bio technical",
    "Block chain technology",
    "Carpet and textile technology",
    "Ceramic technology",
    "Ceramics and cement technology",
    "Chemical",
    "Chemical and electrochemical engineering",
    "Chemical engineering",
    "Chemical science and technology",
    "Civil engineering",
    "Cloud technology",
    "Computer and information science",
    "Computer science engineering",
    "Construction engineering and management",
    "Cyber security",
    "Dairy technology",
    "Data science",
    "Design and manufacturing",
    "Design engineering",
    "Dyestuff and intermediates technology",
    "Earth sciences",
    "Electrical and computer engineering",
    "Electrical and electronics",
    "Electrical engineering",
    "Electrical engineering(power and automation)",
    "Electronics",
    "Electronics and communication engineering",
    "Electronics and instrumentation",
    "Electronics and media technology",
    "Electronics and nanotechnology",
    "Electronics and telecommunication",
    "Electronics control system",
    "Electronics instrumentation and control",
    "Energy engineering",
    "Energy science and engineering",
    "Energy systems engineering",
    "Engineering design",
    "Engineering physics",
    "Engineering science",
    "Enterprise information systems",
    "Environmental engineering",
    "Environmental engineering and water resources",
    "Fashion and lifestyle design",
    "Fibre technology",
    "Fibres and textile processing technology",
    "Fire protection engineering",
    "Food engineering",
    "Food packaging technology",
    "Food process engineering",
    "Food science and technology",
    "Food technology",
    "Food technology and biochemical",
    "Footwear engineering",
    "Gas and applied petroleum",
    "Genetic engineering",
    "Geo informatics engineering",
    "Geo sciences engineering",
    "Geological engineering",
    "Geomatics engineering",
    "Horticulture",
    "Industrial and production",
    "Industrial automation",
    "Industrial biotechnology",
    "Industrial design",
    "Industrial engineering",
    "Industrial engineering and management",
    "Industrial microbiology",
    "Information and communication technology",
    "Information security",
    "Information technology",
    "Infrastructure engineering",
    "Instrumentation",
    "Instrumentation and control",
    "Jute and fibre technology",
    "Leather technology",
    "Mainframe technology",
    "Manmade fibre technology",
    "Manufacturing",
    "Manufacturing process and automation",
    "Manufacturing technology",
    "Marine",
    "Material science engineering",
    "Mathematics and computing",
    "Mechanical and automobile engineering",
    "Mechanical and industrial",
    "Mechanical engineering",
    "Mechatronics",
    "Medical electronics",
    "Metallurgical and materials",
    "Metallurgical engineering",
    "Microelectronics engineering",
    "Mineral engineering",
    "Minerals and metallurgical",
    "Mining",
    "Mining machinery engineering",
    "Mobile application and information security",
    "Molecular and cellular engineering",
    "Motor sports engineering",
    "Nanotechnology",
    "Nanotechnology and robotics",
    "Naval architecture",
    "Naval architecture and ocean engineering",
    "Naval architecture and ship building",
    "Naval engineering",
    "Nuclear engineering",
    "Nuclear science and technology",
    "Ocean and marine",
    "Oil and paint technology",
    "Oil and gas informatics",
    "Oil technology",
    "Oleo chemicals and surfactants",
    "Open source and open standards",
    "Optics and optoelectronics",
    "Packaging technology",
    "Paint technology",
    "Paper technology",
    "Petrochemical",
    "Petroleum engineering",
    "Petroleum engineering and technology",
    "Petroleum refining and petrochemicals",
    "Pharmaceutical technology",
    "Pharmaceuticals chemistry and technology",
    "Physical sciences",
    "Planning engineering",
    "Plastic and polymer",
    "Plastic technology",
    "Polymer engineering",
    "Polymer science and chemical technology",
    "Polymer science and technology",
    "Polymer technology",
    "Poultry production engineering",
    "Power electronics",
    "Power engineering",
    "Power system engineering",
    "Print and media technology",
    "Printing graphics and packaging",
    "Printing technology",
    "Production",
    "Production and industrial engineering",
    "Professional communication",
    "Pulp and paper technology",
    "Radio frequency and microwave",
    "Robotics",
    "Rubber and plastic technology",
    "Rubber technology",
    "Safety and fire",
    "Silk technology",
    "Software engineering",
    "Soil and water conservation",
    "Solar and alternative technology",
    "Space technology",
    "Structural engineering",
    "Sugar and alcohol technology",
    "Sugar technology",
    "Surface coating technology",
    "System science engineering",
    "Telecom informatics",
    "Telecommunications",
    "Textile chemistry",
    "Textile engineering",
    "Thermal engineering",
    "Tool engineering",
    "TV",
    "Upstream and applied petroleum",
    "Urban and regional planning",
    "Water resources engineering",
  ];

  return (
    <>
      <Navnew logincheck={loginauth} loginhandler={loginhandler} />
      <div
        style={{
          fontFamily: "Product Sans",
          minWidth: "100vw",
          minHeight: "100vh",
          // overflow: "none",
          backgroundImage: `url(${main})`,
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center pt-5"
          // style={{
          //   minWidth: "100vw",
          //   minHeight: "100vh",
          //   // overflow: "none",
          //   backgroundImage: `url(${main})`,
          // }}
        >
          <div
            id="details"
            className="card text-black text-start pt-0"
            style={{
              color: "white",
              // maxWidth: "50vw",
              width: display ? "80vw" : "35vw",
              boxShadow: "0 0 20px #212121",
              opacity: "0.85",
              border: "none",
            }}
          >
            <div className="card-header bg-opacity-100 bg-dark">
              <div className="row py-2">
                <div
                  className={
                    display
                      ? "col-6 text-start"
                      : "col-md-7 d-flex align-items-center"
                  }
                  // style={{ width: "min-content" }}
                >
                  <h5 className="fw-bold" style={{ color: "#3ad6ab" }}>
                    Event Registration
                  </h5>
                </div>
                <div
                  className={
                    display ? "col-6 text-end" : "col-md-5 text-end pe-3"
                  }
                >
                  <img src={logo} alt="Events" width="80" height="50" />
                </div>
              </div>
            </div>
            <div className="card-body px-4">
              <form action="/auth/event" method="POST">
                <div className="row">
                  <div className="form-group col-md-6 pt-3 pb-2 px-2">
                    {/* <label for="firstname">First Name</label> */}
                    <input
                      type="text"
                      // is-valid bg-success
                      className="form-control"
                      style={{ backgroundColor: "rgb(58, 214, 171, 0.3)" }}
                      id="firstname"
                      name="firstname"
                      autocomplete="off"
                      defaultValue={isLoaded[1]}
                      autofocus
                      required
                    />
                    <span class="floating-label opacity-50">First Name</span>
                    {/* <div className="valid-feedback">Looks good!</div> */}
                  </div>
                  <div className="form-group col-md-6 pt-3 pb-2 px-2">
                    {/* <label for="lastname">Last Name</label> */}
                    <input
                      type="text"
                      className="inputText form-control"
                      style={{ backgroundColor: "rgb(58, 214, 171, 0.3)" }}
                      id="lastname"
                      name="lastname"
                      autocomplete="off"
                      defaultValue={isLoaded[2]}
                      autofocus
                      required
                    />
                    <span class="floating-label opacity-50">Last Name</span>
                  </div>
                </div>
                <div className="form-group pt-3 pb-2">
                  {/* <label htmlFor="email">Mali ID</label> */}
                  <input
                    type="email"
                    className="inputText form-control"
                    style={{ backgroundColor: "rgb(58, 214, 171, 0.3)" }}
                    id="email"
                    name="email"
                    value={isLoaded[0]}
                    readOnly
                    required
                  />
                  {/* <span class="floating-label opacity-50">Mail ID</span> */}
                </div>
                <div className="form-group pt-3 pb-2">
                  {/* <label for="number">Mobile Number</label> */}
                  <input
                    type="tel"
                    // is-invalid bg-danger
                    className="inputText form-control"
                    style={{ backgroundColor: "rgb(58, 214, 171, 0.3)" }}
                    id="mobile"
                    name="mobile"
                    autocomplete="off"
                    defaultValue={isLoaded[3]}
                    autofocus
                    required
                  />
                  <span class="floating-label opacity-50">Mobile Number</span>
                  {/* <div className="invalid-feedback">
              Please provide a valid number.
            </div> */}
                </div>
                <div className="form-group pt-3 pb-2">
                  <input
                    type="text"
                    list="college"
                    name="college"
                    defaultValue={isLoaded[4]}
                    className="form-control"
                    style={{ backgroundColor: "rgb(58, 214, 171, 0.3)" }}
                    placeholder="Select College"
                    required
                  />
                  <datalist id="college">
                    {colleges.map((colleges) => (
                      <option value={colleges} id={colleges}>
                        {colleges}
                      </option>
                    ))}
                  </datalist>
                </div>
                {/* <div className="form-group pt-3 pb-2">
                <input
                  type="text"
                  className="inputText form-control"
                  style={{ backgroundColor: "rgb(58, 214, 171, 0.3)" }}
                  id="clg"
                  name="college"
                  autocomplete="off"
                  autofocus
                  required
                />
                <span class="floating-label opacity-50">College Name</span>
              </div> */}
                <div className="form-group pt-3 pb-2">
                  <input
                    type="text"
                    list="branch"
                    name="branch"
                    defaultValue={isLoaded[5]}
                    className="form-control"
                    style={{ backgroundColor: "rgb(58, 214, 171, 0.3)" }}
                    placeholder="Select Branch"
                    required
                  />
                  <datalist id="branch">
                    {branches.map((branches) => (
                      <option value={branches} id={branches}>
                        {branches}
                      </option>
                    ))}
                  </datalist>
                </div>
                <div
                  className="form-group pt-3 pb-2"
                  onClick={() => inputClicking()}
                >
                  <Select
                    isMulti
                    name="event"
                    placeholder="Select Event"
                    style={{ backgroundColor: "rgb(58, 214, 171, 0.3)" }}
                    options={eventOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    required
                  />
                </div>
                {/* <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div> */}
                <center>
                  {/* <Link to="/RegSuccess"> */}
                  <button
                    type="submit"
                    className="btn bg-success mt-4 mb-2 text-white float-end me-3"
                  >
                    Register
                  </button>
                  {/* </Link> */}
                </center>
              </form>
            </div>
          </div>
        </div>
        <div id="dev" className="py-3 text-center text-white">
          <h6 className="m-0 py-3 fw-light">
            Developed with{" "}
            <img
              src={heart}
              alt="love"
              style={{ height: "20px", position: "relative", bottom: "3px" }}
            />{" "}
            by Web Dev team
          </h6>
        </div>
      </div>
    </>
  );
}

export default FocusReg;
