import React, { useState, useEffect } from "react";
import "./Detail.css";
import Personal from "./detailpersonal.svg";
import Education from "./detaileducation.svg";
import bg from "./bro.png";
import bgLeft from "./bgLeft.gif";
import bgRight from "./bgRight.gif";
function Details() {
  var course = [
    "Degree",
    "Btech",
    "Mtech",
    "Bca",
    "Mca",
    "Mba",
    "BS-MS",
    "Diploma",
    "Mbbs",
  ];
  var list = ["Degree", "Btech", "Mtech", "Mba", "BS-MS", "Diploma"];
  var branch = [];
  branch[0] = [];
  branch["Btech"] = [
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
  branch["Mtech"] = [
    "Advanced manufacturing technology",
    "AERONAUTICAL ENGINEERING",
    "AEROSPACE ENGINEERING",
    "AGRICULTURAL ENGINEERING",
    "ALLOY TECHNOLOGY",
    "AQUA CULTURAL ENGINEERING",
    "ARTIFICIAL INTELLIGENCE &MACHINE LEARNING",
    "AUTOMOBILE ENGINEERING",
    "BIOMEDICAL ENGINEERING",
    "BIOTECHNOLOGY",
    "CHEMICAL ENGINEERING",
    "CIRCUITS AND MICRO CONTROLLERS",
    "CIVIL ENGINEERING",
    "COMMUNICATION SYSTEMS",
    "COMPUTER AIDED DESIGN",
    "COMPUTER INTEGRATED MANUFACTURING",
    "COMPUTER SCIENCE ENGINEERING",
    "CONSTRUCTION TECHNOLOGY",
    "CONTROL SYSTEMS",
    "CYBER SECURITY",
    "DESIGN & MANUFACTURING",
    "DIGITAL SYSTEM AND SIGNAL PROCESSING",
    "Earthquake",
    "ELECTRICAL DEVICES AND POWER SYSTEMS",
    "ELECTRICAL ENGINEERING",
    "ELECTRONICS & COMMUNICATION",
    "ELECTRONICS & ELECTRICAL ENGINEERING",
    "EMBEDDED SYSTEMS",
    "ENERGY SYSTEM ENGINEERING",
    "ENGINEERING PHYSICS",
    "FLUID DYNAMICS",
    "FOOD TECHNOLOGY",
    "Foundry and forge technology",
    "Fuel  Engineering",
    "GEOTECHNICAL ENGINEERING",
    "INDUSTRIAL ELECTRICAL SYSTEMS",
    "INDUSTRIAL ENGINEERING",
    "INFORMATION TECHNOLOGY",
    "Manufacturing science and engineering",
    "MECHANICAL ENGINEERING",
    "MECHATRONICS",
    "Oils oleochemicals and surfactants",
    "Plastic Engineering",
    "POWER ENGINEERING",
    "ROBOTICS",
    "SIGNAL PROCESSING",
    "SOFTWARE ENGINEERING",
    "VLSI TECHNOLOGY AND DESIGN",
  ];
  branch["Degree"] = [
    "MPC ",
    "CPZ",
    "CDZ",
    "MECs",
    "MPCs",
    "MDC",
    "BBC ",
    "ASE",
    "MSCs",
    "HEP",
    "MPE",
    "BBZ",
    "HEC",
    "ASCs",
    "B-Com ",
    "B-Com general",
    "BA",
  ];
  branch["Mba"] = [
    "MBA in General Management ",
    "MBA in Marketing ",
    "MBA in Human Resource Management ",
    "MBA in Consulting ",
    "MBA in Entrepreneurship ",
    "MBA in Finance ",
    "MBA in Operations Management ",
    "MBA in Management Information Systems ",
    "MBA in Global Management ",
    "MBA in Engineering Management ",
    "MBA in Technology Management ",
    "MBA in Finance",
    "MBA in Information Technology (IT)",
    "MBA in Logistics Management",
    "MBA in Business Management",
    "MBA in Rural Management",
    "MBA in Health Care Management",
    "MBA in Event Management",
    "MBA in Business Analytics",
  ];
  branch["Diploma"] = [
    "Diploma automobile",
    " Diploma in aeronautical engineering",
    " Diploma in aerospace engineering",
    " Diploma in agriculture engineering",
    " Diploma in art and craft",
    " Diploma in biotechnology",
    " Diploma in BLT",
    " Diploma in ceramic",
    " Diploma in chemical engineering",
    " Diploma in civil engineering",
    " Diploma in computer science",
    "Diploma in diary technology and engineering",
    " Diploma in electrical",
    " Diploma in electronics and telecommunication",
    "Diploma in electronics communication",
    " Diploma in fashion engineering",
    " Diploma in food processing and technology",
    " Diploma in genetic engineering",
    " Diploma in information technology",
    " Diploma in instrumentation and control",
    " Diploma in interior decoration",
    " Diploma in mechanical engineering",
    " Diploma in metallurgy engineering",
    " Diploma in metallurgy engineering",
    " Diploma in mining",
    " Diploma in petroleum engineering",
    " Diploma in textile engineering",
    "Diploma in nutrition & dietetics",
    " Diploma in radiology",
    " Diploma in medical nursing assistant",
    " Diploma in dialysis",
    " Diploma in physiotherapy",
    " Diploma in medical lab technician",
    " Diploma in medical record technology",
    " Diploma in sanitary inspector",
    " Diploma in audiology and speech therapy",
    " Diploma in x-ray technology",
  ];
  const [state, setstate] = useState({ selectedbranch: 0 });
  const [states, setstates] = useState({ detailtagname: "Personal Details" });
  var count = 0;
  function getbranch(event) {
    for (var i = 0; i < list.length; i++) {
      if (event.target.value === list[i]) {
        count++;
      }
    }
    if (count > 0) {
      setstate({ selectedbranch: event.target.value });
      document.getElementById("branchlist").style.display = "";
    } else {
      document.getElementById("branchlist").style.display = "none";
    }
  }
  function personal() {
    document.getElementById("personal").style.display = "block";
    document.getElementById("education").style.display = "none";
  }
  function education() {
    document.getElementById("personal").style.display = "none";
    document.getElementById("education").style.display = "block";
    document.getElementById("persoaldetailimg").style.opacity = 0.2;
    document.getElementById("educationdetailimg").style.opacity = 1;
    setstates({ detailtagname: "Education Details" });
  }
  function previous() {
    document.getElementById("personal").style.display = "block";
    document.getElementById("education").style.display = "none";
    document.getElementById("persoaldetailimg").style.opacity = 1;
    document.getElementById("educationdetailimg").style.opacity = 0.2;
    setstates({ detailtagname: "Personal Details" });
  }

  const [display, setdisplay] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setdisplay(true);
    }
  }, [display]);

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: display
          ? `url(${bgRight})`
          : `url(${bgLeft}), url(${bgRight})`,
        backgroundRepeat: display ? "no-repeat" : "no-repeat, no-repeat",
        backgroundAttachment: display ? "fixed" : "fixed, fixed",
        backgroundPosition: display ? "right bottom" : "left top, right bottom",
        backgroundColor: "#f1f1f1",
      }}
    >
      <div
        className="maindetail my-auto"
        style={{
          height: "auto",
          position: display ? "relative" : "",
          top: display ? "5%" : "",
        }}
      >
        <div
          className="text-center"
          style={{ marginBottom: display ? "50px" : "" }}
        >
          <div>
            <img
              src={Personal}
              alt=""
              id="persoaldetailimg"
              className="mx-5"
            ></img>
            <img
              src={Education}
              alt=""
              id="educationdetailimg"
              className="mx-5"
              style={{ opacity: "0.2" }}
            ></img>
          </div>
          <div className="my-md-3 my-2 tag fw-bold fs-3">
            {states.detailtagname}
          </div>
        </div>
        <div
          className="detail card"
          id="personal"
          style={{
            backgroundImage: `url(${bg})`,
            width: display ? "85%" : "45%",
            backgroundRepeat: "no-repeat",
            backgroundSize: display ? "cover" : "85%",
            backgroundPosition: "center",
          }}
        >
          <div className="detailsform card-body">
            <form className="card-text">
              <div className="row px-lg-3">
                <div className="form-group pt-3 pb-2 px-2">
                  <select
                    id="title"
                    className="form-control"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.04)" }}
                  >
                    <option selected className="opacity-50">
                      Select Title
                    </option>
                    <option>Mr.</option>
                    <option>Mrs.</option>
                    <option>Ms.</option>
                  </select>
                </div>
                <div className="row p-0 m-0">
                  <div className="form-group col-md-6 pt-3 pb-2 px-2">
                    <input
                      type="text"
                      // is-valid bg-success
                      className="form-control"
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.04)" }}
                      id="firstname"
                      autocomplete="off"
                      autofocus
                      required
                    />
                    <span class="floating-label opacity-50">First Name</span>
                    {/* <div className="valid-feedback">Looks good!</div> */}
                  </div>
                  <div className="form-group col-md-6 pt-3 pb-2 px-2">
                    <input
                      type="text"
                      className="inputText form-control"
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.04)" }}
                      id="lastname"
                      autocomplete="off"
                      autofocus
                      required
                    />
                    <span class="floating-label opacity-50">Last Name</span>
                  </div>
                </div>
                <div className="form-group pt-3 pb-2 px-2">
                  {/* <label for="number">Mobile Number</label> */}
                  <input
                    type="tel"
                    // is-invalid bg-danger
                    className="inputText form-control"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.04)" }}
                    id="mobile"
                    autocomplete="off"
                    autofocus
                    required
                  />
                  <span class="floating-label opacity-50">Mobile Number</span>
                  {/* <div className="invalid-feedback">
                  Please provide a valid number.
                </div> */}
                </div>
                <div className="form-group pt-3 pb-2 px-2">
                  <input
                    type="number"
                    className="inputText form-control"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.04)" }}
                    id="location"
                    autocomplete="off"
                    autofocus
                    required
                  />
                  <span class="floating-label opacity-50">Area Pincode</span>
                </div>

                <div className="form-group pt-3 pb-2 px-2">
                  <input
                    type="text"
                    className="inputText form-control"
                    id="blood"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.04)" }}
                    autocomplete="off"
                    autofocus
                    required
                  />
                  <span class="floating-label opacity-50">Blood Group</span>
                </div>
                {/* <div className="form-group pt-md-3 pt-0 pb-2 px-2">
                {display ? (
                  <label
                    className="opacity-50 text-start"
                    style={{ fontSize: "13px" }}
                  >
                    Will you donate in emergency situation?
                  </label>
                ) : (
                  <span class="floating-label opacity-50">
                    Will you donate in emergency situation?
                  </span>
                )}

                <input
                  type="text"
                  className="inputText form-control"
                  id="donate"
                  style={{ background: "transparent" }}
                  autocomplete="off"
                  autofocus
                  required
                  placeholder={display ? "Yes/No" : ""}
                />
              </div> */}
              </div>
              <div className="my-3 text-center">
                <button
                  className="btn bg-opacity-75 bg-success px-5 fs-5"
                  onClick={education}
                  value="Next"
                  style={{
                    borderRadius: "50px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.24) 0px 5px 5px 0px, rgba(0, 0, 0, 0.24) 0px 0px 5px 0px",
                  }}
                >
                  Next
                </button>
              </div>
            </form>{" "}
          </div>
        </div>
        <div
          className="detail card my-auto"
          id="education"
          style={{
            width: display ? "85%" : "45%",
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: display ? "cover" : "90%",
            backgroundPosition: "center",
            paddingBottom: "30px",
            display: "none",
          }}
        >
          <div className="detailsform card-body my-5">
            <form className="card-text">
              <div className="form-group pt-3 pb-2">
                {/* <label className="text-start">Degree</label> */}
                <input
                  onChange={getbranch}
                  list="degree"
                  className="form-control"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.04)" }}
                  placeholder="Select Degree"
                  required
                ></input>
                <datalist id="degree">
                  {course.map((courses) => (
                    <option value={courses} id={courses}>
                      {courses}
                    </option>
                  ))}
                </datalist>
              </div>
              <div className="form-group pt-3 pb-2">
                {/* <label>College Name</label> */}
                <input
                  type="text"
                  name="collegename"
                  className="form-control"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.04)" }}
                  placeholder="Select College"
                  required
                />
              </div>
              <div
                id="branchlist"
                style={{ display: "none" }}
                className="branchinput pt-3 pb-2"
              >
                {/* <label>Branch Name</label> */}
                <input
                  className="form-control"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
                  list="branch"
                  placeholder="Select Branch"
                  required
                ></input>
                <datalist id="branch">
                  {branch[state.selectedbranch].map((branchs) => (
                    <option value={branchs} id={branchs}>
                      {branchs}
                    </option>
                  ))}
                </datalist>
              </div>
              <div className="row">
                <div
                  className="form-group col-md-6 pt-0 pb-2"
                  style={{ paddingLeft: "10px", paddingRight: "15px" }}
                >
                  <label className="float-start">Start Year</label>
                  <input
                    className="form-control"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.04)" }}
                    type="number"
                    placeholder="e.g: 2019"
                  />
                </div>
                <div
                  className="form-group col-md-6 pt-0 pb-2"
                  style={{ paddingLeft: "10px", paddingRight: "15px" }}
                >
                  <label className="float-start">Expected End Year</label>
                  <input
                    className="form-control"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.04)" }}
                    type="number"
                    placeholder="e.g: 2023"
                  />
                </div>
              </div>
              <div className="mt-5 mx-auto">
                <button
                  // className="btn bg-opacity-75 bg-success px-5 fs-5"
                  className="btn px-3 mx-3 my-1 w-auto bg-opacity-50 bg-warning fs-5"
                  value="Previous"
                  onClick={previous}
                  style={{
                    borderRadius: "50px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.24) 0px 5px 5px 0px, rgba(0, 0, 0, 0.24) 0px 0px 5px 0px",
                  }}
                >
                  Previous
                </button>
                <button
                  className="btn px-4 mx-3 my-1 w-auto bg-opacity-75 bg-success fs-5"
                  type="submit"
                  value="Submit"
                  style={{
                    borderRadius: "50px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.24) 0px 5px 5px 0px, rgba(0, 0, 0, 0.24) 0px 0px 5px 0px",
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Details;
