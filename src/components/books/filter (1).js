import React from "react";
import "./filter.css";
function Filter(){

        function myfunction() {
      document.getElementById("myDIV").style.display="block";
     
  }  
      function subfilterFunction() {               
                document.getElementById("subfilter").style.display="block";                   
          }
          function closed(){
            document.getElementById("subfilter").style.display="none";    
            document.getElementById("myDIV").style.display="none";
          }
  

    return (
        <div>
          <div class="container">
            <div class="row filter">
              <div class="col-sm-6" id="myDIV">
                <p className="my-3 text-center">Type</p>
               <hr></hr>
              
                <label>Author</label>
                <input class="float-right" type="radio" id="javascript"  name="fav_language" onClick={subfilterFunction} /><br></br>
                
                <label>Book-name</label>
                <input type="radio" id="javascript"  name="fav_language" onClick={subfilterFunction} /><br></br>
                
                <label>Subject</label>
                <input type="radio" id="javascript"  name="fav_language" onClick={subfilterFunction} /><br></br>
                
                  <hr></hr>
                {/* <p className="text-center">Stream</p><hr></hr>   
                <ul style={{listStyleType: "none", padding: "0px"}}>
                  <li style={{marginLeft: "31%"}} >Enginnering  <span class= "iconify-inline" data-icon= "bi:chevron-compact-right"  style={{color: "#0d986a", fontSize: "25px", float: "right", marginRight: "10px", padding: "0"}}></span> </li><br></br>
                  <li style={{marginLeft: "31%"}}>Medical <span class="iconify-inline" data-icon="bi:chevron-compact-right"          style={{color: "#0d986a", fontSize: "25px", float: "right", marginRight: "10px", padding: "0"}}></span></li>  
                </ul> */}
              </div>

              <div class="col-sm-6" id="subfilter" style={{display:"none"}}>
                <input class="searchInput" type="text"  placeholder="&#61442;"/>  
            
                <ul style={{ listStyleType: "none"}}>
                <li>    
                  <label>Computer science</label>
                  <input type="radio" id="j"  name="fav_language" onClick={subfilterFunction} />
                </li>
                <li>
                  <label>Computer science</label>
                  <input type="radio" id="j"  name="fav_language" onClick={subfilterFunction} />
                </li>
                <li>
                  <label>Computer science</label>
                  <input type="radio" id="j"  name="fav_language" onClick={subfilterFunction} />
                </li>
                <li>
                  <label>Computer science</label>
                  <input type="radio" id="j"  name="fav_language" onClick={subfilterFunction} />
                </li>
          
                </ul>
              </div>

           </div>
          </div>
        </div>

        

      );
}

export default Filter;