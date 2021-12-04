import axios from "axios";
//import "./filter.css";
import Filter from "./filter (1)";
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
// import Select from 'react-select-nested';

function Btechsubject() {
  const [book, setbook] = useState([]);
  const [searchdata, setsearchdata] = useState(book);
  const [search, setsearch] = useState("");
  const [searchby, setsearchby] = useState("all");
  const [filtere, setfilter] = useState("");
  const [filtertxt, setfiltertxt] = useState({
    key: " ",
    value: " ",
  });
  const [page, setpage] = useState(0);
  const usersperpage = 18;
  const pagesvisited = page * usersperpage;

  const Displayusers = searchdata
    .slice(pagesvisited, pagesvisited + usersperpage)
    .map((book) => {
      return (
        <div
          className="card col-md-4 px-3 py-4 my-3 justify-content-center d-flex"
          id={book._id}
          style={{ maxWidth: 500 }}
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
                  <div className="my-5" style={{ marginRight: "20px" }}>
                    <img src={book.Bookimglink} width="100px" alt="img"></img>
                  </div>
                }
                <div>
                  {/* <img src={Dots} style={{width:'3px'}} alt="img"></img> </div> */}

                  {/* <div className="d-flex flex-row-reverse"></div> */}

                  <p
                    className="card-text mt-5"
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

                  <div className="lower my-5" style={{ display: "flex" }}>
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
        return containSearchf(user, searchby);
      }
    });
    setsearchdata(filteredData);
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
    const name2 = Authors.toLowerCase();
    if (name2.includes(quer)) {
      return true;
    }
    return false;
  };

  const containSearch2 = ({ Subject }, query) => {
    const quer = query.toLowerCase();
    const name3 = Subject.toLowerCase();
    if (name3.includes(quer)) {
      return true;
    }
    return false;
  };

  const containSearchf = ({ ShortForm }, query) => {
    const name4 = ShortForm;
    console.log(query);
    if (name4.includes(query)) {
      return true;
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

  const BookCard = ({ book }) => {
    <div
      className="card col-md-4 px-3 py-3 my-3 justify-content-center d-flex"
      id={book._id}
    >
      <div className="maincard h-100 ">
        <div className="card-body ">
          <p
            className="card-title title"
            style={{ overflow: "hidden", height: 75 }}
          >
            {book.Bookname}
          </p>
          <div className="d-flex">
            {
              <div className="my-5" style={{ marginRight: "20px" }}>
                <img src={book.Bookimg} width="100px" alt="img"></img>
              </div>
            }
            <div>
              {/* <img src={Dots} style={{width:'3px'}} alt="img"></img> </div> */}

              {/* <div className="d-flex flex-row-reverse"></div> */}

              <p className="card-text mt-5">
                <span className="span1">Author : </span>
                <span className="span2">{book.Authors}</span>
              </p>
              <p className="card-text">
                <span className="span1">Subject : </span>
                <span className="span2">{book.Subject}</span>
              </p>
              <p className="card-text">
                <span className="span1">Branch : </span>
                <span className="span2">{book.Branch}</span>
              </p>

              <div className="lower my-5" style={{ display: "flex" }}>
                <span className="lowerimg1">
                  <img src={Share} className="mx-3" alt="img"></img>
                </span>
                <img src={Likes} className="mx-1" alt="img" id="likeimg"></img>
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
    </div>;
  };
  // useEffect(()=>{
  //   fetch('/bookapi',{
  //     headers : {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }

  //   })
  //     .then(response => response.json())
  //     .then(data => {setbook(data);console.log(data);});
  //  },[])

  const handleHome = () => {
    setsearchdata(book);
    // document.getElementById('btn1').style.boxShadow = " 0px 3px green";
  };
  const highestFirst = (array) => {
    return array.sort((a, b) => {
      return b.Likes - a.Likes;
    });
  };

  const handleTrend = () => {
    //document.getElementById('btn2').style.boxShadow = " 0px 3px green";
    highestFirst(book);
    setsearchdata(book);
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
    <div className="books" style={{ overflowX: "hidden" }}>
      {/* <button className="button btn btn-success mx-3" id="searchbtn" onClick={handlefilter1}>Search</button> */}

      <div className="booking">
        <div className="d-flex justify-content-between mx-5">
          <div className="listofbookstagline display-5 mt-5 ">
            There is a book for everyone
          </div>
          {/*<input type='button' onClick={()=>{setfiltertxt({key:"branch",value:"cse"})}} value='submit'/>*/}
          {/* <p>{filtertxt}</p> */}
          <img src={Btechimg1} className="img1" alt="img"></img>
        </div>
        <div className="filter"></div>
        <div className="search">
          <span className="line mx-3">
            <select
              className="dropdown btn shadow-none"
              name="searchby"
              defaultValue="Bookname"
              onChange={subfilterFunction}
            >
              <option value="Author">Author</option>
              <option value="Bookname">Bookname</option>
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
            {/* <div> <Select
                  placeholder="Select fruit"
                  list={filters}
                  onSelectChange={(item)=>console.log('use your custom handler here', item)}
              /> </div>  */}
            <img src={line} alt="img"></img>
          </span>
          <span>
            <i
              className="fa fa-search mx-2"
              style={{ fontSize: "11px", color: "black" }}
            ></i>
          </span>
          <input
            type="text"
            onChange={(event) => setsearch(event.target.value)}
            placeholder="Search for the book"
            id="myInput"
            className="searchbar form-control text-center"
          ></input>
          <button
            className="button btn btn-success mx-3"
            id="searchbtn"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <br></br>
      <nav
        className="booksbar my-3 "
        style={{ backgroundColor: "#C9EDDC", height: "30px" }}
      >
        <div className="bardiv" style={{ paddingTop: "5px" }}>
          <a className="btn barbtn1" id="btn1" onClick={handleHome}>
            HOME
          </a>
          <a className="btn barbtn2" id="btn2" onClick={handleTrend}>
            TRENDING
          </a>
          <a className="btn barbtn3" id="btn3">
            NOTES
          </a>
          <a className="btn barbtn3" id="btn3">
            NOVELS
          </a>
          <a className="btn barbtn4" id="btn4">
            SAVED
          </a>
        </div>
      </nav>
      <div className="users">
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

      <div
        className="notfound text-center mt-5"
        id="notfound"
        style={{ visibility: "hidden" }}
      >
        <img src={Btechimg2} alt="img"></img>
        <p className="p1">sorry we dont have what you are looking for</p>
        <p className="p3">
          please tap on request and fill the details of what you are looking for
        </p>
        <Link to="/request">
          <div className="my-5">
            <button className="btn px-5">Request</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Btechsubject;
