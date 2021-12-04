import axios from 'axios';
//import "./filter.css";
import Filter from './filter (1)';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useEffect, useState } from 'react';
import './btechsubject.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Likes from '../images/book likes.svg';
import Share from '../images/share.svg'
import Save from '../images/book save.svg';
import Dots from '../images/bookdot.svg';
import Btechimg1 from '../images/btechsubjectimg1.svg';
import Btechimg2 from '../images/btechsubjectnotfoundimg.svg';
import {Link} from 'react-router-dom';
import searchtag1 from '../images/booksearch1.svg';
import line from '../images/book searchline.svg';
import Comment from '../images/book comment.svg';
function Btechsubject(){
  const [book,setbook]=useState([]);
  const [filtertxt,setfiltertxt]=useState({
    key:" ",
    value:" "
  });

  function filterFunction() {
  
    var count=0;
      var input, filter,i;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      for (i = 0; i < book.length; i++) {
       var txt = book[i].bookname;
        if (txt.toUpperCase().indexOf(filter) > -1) {  
      document.getElementById(book[i]._id).style.display ="block";
      count++;
        }
   else {
      document.getElementById(book[i]._id).style.display= "none";
         }
      }
      if(count===0){
        document.getElementById("notfound").style.visibility="visible";
        document.getElementById("bookrow").style.display="none";
      }
      else{
        document.getElementById("notfound").style.visibility="hidden";
        document.getElementById("bookrow").style.display="block";
      }
    }

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

  useEffect(()=>{
    axios.get('/bookapi')
    .then((response)=>{
      // console.log(response.data)
      setbook(response.data)
    })
  },[])
// console.log(filtertxt.key);
// console.log(filtertxt.value);

    
    return(
<div className="books" style={{overflowX:'hidden'}}>
<div className="booking">
  <div className="d-flex justify-content-between mx-5">
   <div className="listofbookstagline display-5 mt-5 ">There is a book for everyone</div>
   {/*<input type='button' onClick={()=>{setfiltertxt({key:"branch",value:"cse"})}} value='submit'/>*/}
   {/* <p>{filtertxt}</p> */}
   <img src={Btechimg1} className="img1" alt="img"></img>
</div>
<div className="search"><Dropdown className="text-center" style={{position:'relative',top:'28px',right:'100px'}}>
  

  <Dropdown.Toggle split id="dropdown-split-basic" variant="white">FILTER</Dropdown.Toggle>

  <Dropdown.Menu variant="dark" style={{background:'#F2F1F1'}}>
    <Filter />
  </Dropdown.Menu>
</Dropdown><span className='line mx-3'><img src={line} alt="img"></img></span><span><i className='fa fa-search' style={{fontSize:'11px',color:'black'}}></i></span><input type="text" placeholder="Search for the book" id="myInput"  className="searchbar form-control text-center" ></input>
  </div>
  </div>
  <br></br>
  <nav className="booksbar" style={{backgroundColor:'#C9EDDC',height:'25px'}}>
    <div className="bardiv" style={{paddingTop:'5px'}}>
    <button className="barbtn1" id="btn1" onClick={()=>{setfiltertxt({key:" ",value:" "})}} >HOME</button>
    <button className="barbtn2" id="btn2" onClick={()=>{setfiltertxt({key:"likes",value:" "})}} >TRENDING</button>
    <button className="barbtn3" id="btn3" >NOVELS</button>
    <button className="barbtn4" id="btn4" >SAVED</button>
    <button className="barbtn5" id="btn5" >REQUESTS</button>
    </div>
  </nav>
 
  <div className="row m-3" id="bookrow">
      {book.filter((item)=>{
       if(filtertxt.key==="branch")
       {
         return item.branch===filtertxt.value;
       }
       else if(filtertxt.key==="course")
       {
         return item.course===filtertxt.value;
       }
       else if(filtertxt.key==="type")
       {
        return item.type===filtertxt.value;
       }
       else if(filtertxt.key==="likes")
       {
         return book.sort((a,b)=>{return b.likes-a.likes})
       }
       else if(filtertxt.key===" ")
       {
         return book;
       }
      })
    .map((book)=>( 
    <div className=" py-3 col-sm justify-content-center d-flex" id={book._id}>
      <div className="card maincard h-100">
        <div className="card-body ">
          <div className="d-flex">{<div className="my-5" style={{marginRight:'20px'}}><img src={book.bookimglink} width="100px" alt="img"></img></div>}            
          <div><div className="d-flex flex-row-reverse"> <img src={Dots} style={{width:'3px'}} alt="img"></img></div>
              <p className="card-title title">{book.bookname}</p>
              <p className="card-text">
                <span className="span1">Author : </span>
                <span className="span2">{book.author}</span>
                </p>
                <p className="card-text">
                  <span className="span1">Subject : </span>
                  <span className="span2">{book.subject}</span>
                  </p>
                  <a href={book.booklink} className="btn btn1">Download</a>
                  <div className="lower my-5" style={{display:'flex'}}>
                    <span className="lowerimg1">
                      <img src={Share} className="mx-3" alt="img"></img>
                      </span><img src={Likes} className="mx-1" alt="img"></img>
                      <span>{book.likes}</span>
                      <span className="lowerimg2 mx-3">
                        <img src={Save} alt="img"></img>
                        </span><span className="mx-3">
                          <img src={Comment} alt="img"></img>
                          </span>
                          </div>
                      </div>
                      </div>
                          </div></div></div>))}
</div>
  <div className="notfound text-center mt-5" id="notfound" style={{visibility:'hidden'}}>
<img src={Btechimg2} alt="img"></img>
<p className="p1">sorry i dont have what you are looking for</p>
<p className="p3">please tap on request and fill the details of what you are looking for</p>
<Link to="/request"><div className='my-5'><button className='btn px-5'>Request</button></div></Link>
</div>
</div>
    );
}
export default Btechsubject;
