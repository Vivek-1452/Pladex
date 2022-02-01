import axios from "axios";
//import "./filter.css";
// import Filter from "./filter (1)";
import Navnew from "../Navnew";
import Foot2 from "../foot2";
import ReactPaginate from "react-paginate";
import Dropdown from "react-bootstrap/Dropdown";
import React, { useEffect, useState } from "react";
import "./btechsubject.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Likes from "../images/book likes.svg";
import Share from "../images/share.svg";
import Save from "../images/book save.svg";
import Dots from "../images/bookdot.svg";
import Btechimg1 from "../images/btechsubjectimg1.svg";
import Btechimg2 from "../images/btechsubjectnotfoundimg.svg";
import { Link } from "react-router-dom";
import searchtag1 from "../images/booksearch1.svg";
import line from "../images/book searchline.svg";
import Comment from "../images/book comment.svg";
import filter from "lodash.filter";
import Svg from "./Svgimg";
// import Select from 'react-select-nested';

function Btechsubject() {
  const [book, setbook] = useState([]);
  const [searchdata, setsearchdata] = useState(book);
  const [search, setsearch] = useState("");
  const [searchby, setsearchby] = useState("Bookname");
  const [filtere, setfilter] = useState("");
  const [filtertxt, setfiltertxt] = useState({
    key: " ",
    value: " ",
  });
  const [page, setpage] = useState(0);
  const usersperpage = 18;
  const pagesvisited = page * usersperpage;
  const [active, setactive] = useState([
    { id: 1, state: true },
    { id: 2, state: false },
    { id: 3, state: false },
    { id: 4, state: false },
    { id: 5, state: false },
    { id: 6, state: false },
  ]);
  const toggleclass = (e) => {
    setactive(e);
  };
  const clicking = (id1, id2, id3, id4, id5) => {
    document.getElementById(id1).style.borderBottom = "2px solid #3ad6ab";
    document.getElementById(id2).style.borderBottom = "none";
    document.getElementById(id3).style.borderBottom = "none";
    document.getElementById(id4).style.borderBottom = "none";
    document.getElementById(id5).style.borderBottom = "none";
  };

  const Displayusers = searchdata
    .slice(pagesvisited, pagesvisited + usersperpage)
    .map((book) => {
      return (
        <div
          className="card col-md-4 px-2 py-3 my-2 justify-content-center"
          id={book._id}
          style={{ minWidth: 400 }}
        >
          <div className="maincard h-100 ">
            <div className="card-body px-5 justify-content-center">
              <p
                className="card-title title"
                style={{ overflow: "hidden", height: 70 }}
              >
                {book.Bookname}
              </p>
              <div className="d-flex">
                {
                  <div className="my-2" style={{ marginRight: "20px" }}>
                    {book.Bookimglink.length > 3 ? (
                      <img src={book.Bookimglink} width="100px" alt="img"></img>
                    ) : (
                      <Svg bookname={book.Bookname} author={book.Authors} />
                    )}
                  </div>
                }
                <div>
                  {/* <img src={Dots} style={{width:'3px'}} alt="img"></img> </div> */}

                  {/* <div className="d-flex flex-row-reverse"></div> */}

                  <p
                    className="card-text mt-2"
                    style={{ overflow: "hidden", height: 20 }}
                  >
                    <span className="span1">Author : </span>
                    <span className="span2">{book.Authors}</span>
                  </p>
                  <p
                    className="card-text"
                    style={{ overflow: "hidden", height: 20 }}
                  >
                    <span className="span1">Subject : </span>
                    <span className="span2">{book.Subject}</span>
                  </p>
                  <p className="card-text">
                    <span className="span1">Branch : </span>
                    <span className="span2">{book.Branch}</span>
                  </p>

                  <div className="lower my-2" style={{ display: "flex" }}>
                    <span className="lowerimg1">
                      <img src={Share} className="mx-3" alt="img"></img>
                    </span>
                    <img
                      src={Likes}
                      className="mx-1"
                      alt="img"
                      id="likeimg"
                    ></img>
                    <span>{book.Likes}</span>
                    <span className="lowerimg2 mx-3">
                      <img src={Save} alt="img"></img>
                    </span>
                    <span className="mx-3">
                      <img src={Comment} alt="img"></img>
                    </span>
                  </div>
                  <a href={book.Booklink} className="btn btn1">
                    Download
                  </a>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(searchdata.length / usersperpage);

  const changePage = ({ selected }) => {
    setpage(selected);
  };
  function subfilterFunction(e) {
    setsearchby(e.target.value);
    console.log(searchby);
    console.log("h0");
  }
  function subfilterFunction1(e) {
    setfilter(e.target.value);
    console.log(filtere);
    console.log("hi");
  }

  const handlefilter1 = (e) => {
    setfilter(e.target.value);
    console.log(filtere);
    const query = filtere;
    const filteredData = filter(book, (user) => {
      return containSearchf(user, query);
    });
    setsearchdata(filteredData);
  };

  const handleSearch = () => {
    const query = search;
    if (query === "") {
      setsearchdata(book);
    }
    const filteredData = filter(book, (user) => {
      if (searchby === "Bookname") {
        return containSearch(user, query);
      } else if (searchby === "Author") {
        return containSearch1(user, query);
      } else if (searchby === "Subject") {
        return containSearch2(user, query);
      } else {
        return containSearchf(user, query);
      }
    });
    setsearchdata(filteredData);
    //axios.get("/bookapi/:" + search).then((response) => {
    //console.log(search);
    //setsearchdata(response.data);
    //});
  };
  const containSearch = ({ Bookname }, query) => {
    const quer = query.toLowerCase();
    const name = Bookname.toLowerCase();
    if (name.includes(quer)) {
      return true;
    }
    return false;
  };
  const containSearch1 = ({ Authors }, query) => {
    const quer = query.toLowerCase();
    if (Authors) {
      const name2 = Authors.toLowerCase();
      if (name2.includes(quer)) {
        return true;
      }
      return false;
    }
  };

  const containSearch2 = ({ Subject }, query) => {
    const quer = query.toLowerCase();
    const name3 = Subject.toLowerCase();
    if (name3.includes(quer)) {
      return true;
    }
    return false;
  };

  const containSearchf = ({ ShortForm, Bookname, Authors, Subject }, query) => {
    const name4 = ShortForm;
    const name5 = Bookname;
    const name6 = Authors;
    const name7 = Subject;
    const quer = query;
    if (name4.includes(searchby)) {
      if (name5.includes(quer)) {
        return true;
      }
      if (name6.includes(quer)) {
        return true;
      }
      if (name7.includes(quer)) {
        return true;
      }
    }
    return false;
  };

  function filterFunction() {
    var count = 0;
    var input, filter, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    for (i = 0; i < book.length; i++) {
      var txt = book[i].bookname;
      if (txt.toUpperCase().indexOf(filter) > -1) {
        document.getElementById(book[i]._id).style.display = "block";
        count++;
      } else {
        document.getElementById(book[i]._id).style.display = "none";
      }
    }
    if (count === 0) {
      document.getElementById("notfound").style.visibility = "visible";
      document.getElementById("bookrow").style.display = "none";
    } else {
      document.getElementById("notfound").style.visibility = "hidden";
      document.getElementById("bookrow").style.display = "block";
    }
  }

  const handleHome = () => {
    setsearchdata(book);
    clicking("btn1", "btn2", "btn3", "btn4", "btn5");
    // document.getElementById('btn1').style.boxShadow = " 0px 3px green";
  };

  const handleTrend = () => {
    console.log("hello");
    clicking("btn2", "btn1", "btn3", "btn4", "btn5");
    //document.getElementById('btn2').style.boxShadow = " 0px 3px green";
    axios.get("/bookapi/sort").then((response) => {
      // console.log(response.data)
      setsearchdata(response.data);
    });
  };
  useEffect(() => {
    axios.get("/bookapi").then((response) => {
      // console.log(response.data)
      setbook(response.data);
      setsearchdata(response.data);
    });
  }, []);
  // console.log(filtertxt.key);
  // console.log(filtertxt.value);

  return (
    <>
      <Navnew />
      <div className="books pt-0" style={{ overflowX: "hidden" }}>
        {/* <button className="button btn btn-success mx-3" id="searchbtn" onClick={handlefilter1}>Search</button> */}

        <div
          className="row py-3"
          style={{
            backgroundImage: "linear-gradient(180deg, #6dd2ae 0%, white 90%)",
          }}
        >
          <div className="row">
            <div className="col-lg-9 col-md-7 col-4 px-lg-0 px-md-0 ps-lg-4 ps-md-4 ps-1">
              <h1
                className="fw-bold ps-4 mt-lg-4 mt-2"
                style={{ textAlign: "left", marginBottom: "60px" }}
              >
                {/* The <span style={{ color: "#3ad6ab" }}>content</span> you consume{" "}
          defines you. */}
                {/* There is a book for everyone */}
                DLibrary
              </h1>
              <div className="d-lg-block d-md-block d-none pt-3">
                {/* <h5 className="mt-5 mb-3" style={{ fontFamily: "cursive" }}>
                A product is described by how all features work together!
              </h5> */}
                <div
                  className="input-group col-md-4 justicy-content-center mx-auto"
                  style={{ width: "40%", minWidth: "500", borderRadius: 5 }}
                >
                  <div className="input-group-prepend d-flex pt-0">
                    <select
                      className="btn dropdown shadow-none py-2"
                      name="searchby"
                      defaultValue="Bookname"
                      onChange={subfilterFunction}
                      style={{
                        height: 45,
                        width: 100,
                        backgroundColor: "white",
                        border: "1px solid black",
                        borderTopLeftRadius: 5,
                        borderBottomLeftRadius: 5,
                        borderRadius: "5px 0 0 5px",
                      }}
                    >
                      <option value="Author">Author</option>
                      <option value="Bookname">Book</option>
                      <option value="Subject">Subject</option>
                      <hr></hr>
                      <optgroup label="Branch">
                        <option value="CSE">CSE</option>
                        <option value="MRE">MRE</option>
                        <option value="NE">NE</option>
                        <option value="PT">PT</option>
                        <option value="PE">PE</option>
                        <option value="NTE">NTE</option>
                        <option value="EDE">EDE</option>
                        <option value="EME">EME</option>
                        <option value="EIE">EIE</option>
                        <option value="EE">EE</option>
                        <option value="MCE">MCE</option>
                        <option value="EC">EC</option>
                        <option value="EEE">EEE</option>
                        <option value="ECE">ECE</option>
                        <option value="EIEE">EIEE</option>
                      </optgroup>
                    </select>
                  </div>
                  <input
                    type="text"
                    onChange={(event) => setsearch(event.target.value)}
                    placeholder="Search for the book"
                    id="myInput"
                    className="form-control"
                    style={{
                      border: "1px solid black",
                      borderRadiusTopRight: 5,
                      borderRadiusTopLeft: 5,
                    }}
                  ></input>
                  <button
                    className="button btn btn-success px-3"
                    id="searchbtn"
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </div>

                {/* <a
                href="."
                className="btn mx-auto px-4 py-2 fs-4"
                style={{
                  backgroundColor: "#25d366",
                  width: "auto",
                  color: "white",
                }}
              >
                <i className="fab fa-whatsapp fs-3"></i>&nbsp; Get notified
              </a> */}
              </div>
            </div>
            <div className="col-lg-3 col-md-5 col-8 pe-3 pt-md-4">
              <img
                src={Btechimg1}
                alt=""
                style={{ height: "95%", width: "80%", float: "right" }}
              />
            </div>
          </div>
        </div>
        <div
          className="row d-lg-none d-md-none d-block pt-1 pb-2 mx-0"
          style={{ width: "100vw" }}
        >
          <div
            className="input-group col-md-4 justicy-content-center mx-auto"
            style={{ width: "90%", minWidth: "500", borderRadius: 5 }}
          >
            <div className="input-group-prepend d-flex pt-0">
              <select
                className="btn dropdown shadow-none py-2"
                name="searchby"
                defaultValue="Bookname"
                onChange={subfilterFunction}
                style={{
                  height: 45,
                  width: 95,
                  backgroundColor: "white",
                  border: "1px solid black",
                  borderTopLeftRadius: 5,
                  borderBottomLeftRadius: 5,
                }}
              >
                <option value="Author">Author</option>
                <option value="Bookname">Book</option>
                <option value="Subject">Subject</option>
                <hr></hr>
                <optgroup label="Branch">
                  <option value="CSE">CSE</option>
                  <option value="MRE">MRE</option>
                  <option value="NE">NE</option>
                  <option value="PT">PT</option>
                  <option value="PE">PE</option>
                  <option value="NTE">NTE</option>
                  <option value="EDE">EDE</option>
                  <option value="EME">EME</option>
                  <option value="EIE">EIE</option>
                  <option value="EE">EE</option>
                  <option value="MCE">MCE</option>
                  <option value="EC">EC</option>
                  <option value="EEE">EEE</option>
                  <option value="ECE">ECE</option>
                  <option value="EIEE">EIEE</option>
                </optgroup>
              </select>
            </div>
            <input
              type="text"
              onChange={(event) => setsearch(event.target.value)}
              placeholder="Search for the book"
              id="myInput"
              className="form-control text-center"
              style={{
                border: "1px solid black",
                borderRadiusTopRight: 5,
                borderRadiusTopLeft: 5,
              }}
            ></input>
            <button
              className="button btn btn-success "
              id="searchbtn"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
        <nav className="booksbar my-3" style={{ backgroundColor: "#C9EDDC" }}>
          <div
            className="bardiv text-start justify-content-flex-start"
            style={{ paddingTop: "5px", justifyContent: "flex-start" }}
          >
            <a
              className={
                active[0].state
                  ? "ms-2 my-2 text-dark px-md-4 px-2 py-2 active text-decoration-none"
                  : "ms-2 my-2 text-dark px-md-4 px-2 py-2 notactive text-decoration-none"
              }
              id="btn1"
              onClick={() => clicking("btn1", "btn2", "btn3", "btn4", "btn5")}
            >
              HOME
            </a>
            <a
              className={
                active[1].state
                  ? "my-2 text-dark px-md-4 px-2 py-2 active text-decoration-none"
                  : "my-2 text-dark px-md-4 px-2 py-2 notactive text-decoration-none"
              }
              onClick={handleTrend}
              id="btn2"
            >
              TRENDING
            </a>
            <a className="btn barbtn3 px-md-4 pt-0" id="btn3">
              NOTES
            </a>
            <a className="btn barbtn3 px-md-4 pt-0" id="btn4">
              NOVELS
            </a>
            <a className="btn barbtn4 px-md-4 pt-0" id="btn5">
              SAVED
            </a>
          </div>
        </nav>

        {searchdata.length > 0 ? (
          <div className="users row justify-content-center mx-auto">
            {" "}
            {Displayusers}
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"pagiantionDisabled"}
              activeClassName={"paginationActive"}
              previousClassName={"previouspage"}
              nextClassName={"nextpage"}
              pageLinkClassName={"pageBttn"}
              pageClassName={"pageclassBttn"}
            />{" "}
          </div>
        ) : (
          <div className="notfound text-center mt-5" id="notfound">
            <img src={Btechimg2} alt="img"></img>
            <p className="p1">Sorry! We don't have what you are looking for.</p>
            <p className="p3">
              Please tap on request and fill the details of what you are looking
              for
            </p>
            <Link to="/request">
              <div className="my-3">
                <button className="btn px-5 fs-5">Request</button>
              </div>
            </Link>
          </div>
        )}

        <Link to="/uploadbook">
          <div
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              // zIndex: "100",
              height: "60px",
              width: "60px",
              borderRadius: "50%",
              boxShadow: "0 0 10px 0.5px #5c5e64",
              backgroundColor: "#3ad6ab",
            }}
          >
            <i class="fas fa-upload fs-4 pt-2" style={{ color: "white" }}></i>
          </div>
        </Link>
      </div>
      <Foot2 />
    </>
  );
}
export default Btechsubject;
