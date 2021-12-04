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
                <p className="my-3 text-center" >Type</p>
                <span onClick={closed} class="close" title="Close Modal">&times;</span><hr></hr>
              
                <label>Book</label>
                <input class="float-right" type="radio" id="javascript"  name="fav_language" onClick={subfilterFunction} /><br></br>
                
                <label>Typed notes</label>
                <input type="radio" id="javascript"  name="fav_language" onClick={subfilterFunction} /><br></br>
                
                <label>Handwritten notes</label>
                <input type="radio" id="javascript"  name="fav_language" onClick={subfilterFunction} /><br></br>
                
                  <hr></hr>
          
              </div>

              <div class="col-sm-6" id="subfilter" style={{display:"none"}}>
                <input class="searchInput" type="text"  placeholder="&#61442;"/>  
            
                <ul style={{ listStyleType: "none"}}>
                <li>    
                  <label>Computer science</label>
                  <input type="radio" id="j"  name="fav_language" onClick={subfilterFunction} />
                </li>
                <li>
                  <label>Ece</label>
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