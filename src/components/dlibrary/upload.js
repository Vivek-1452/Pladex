import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Upload() {
  const [addbook, setaddbook] = useState({});
  const [bookname, setbookname] = useState("");
  const [author, setauthor] = useState("");
  const [subject, setsubject] = useState("");
  const [branch, setbranch] = useState("");
  const [booklink, setbooklink] = useState("");
  const [bookimglink, setbookimglink] = useState("");
  const [display, setdisplay] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setdisplay(true);
    }
  }, [display]);

  const submitted = () => {
    var book = {
      Bookname: bookname,
      Authors: author,
      Subject: subject,
      Branch: branch,
      Booklink: booklink,
      Bookimglink: bookimglink,
      ShortForm: "EC",
      Likes: 0,
      Shares: 0,
    };
    console.log(book);

    axios.post("/bookapi", book).then((response) => {
      console.log("posted successfully");
    });
  };

  return (
    <div
      style={{
        fontFamily: "Product Sans",
        width: "100vw",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <div className="d-flex justify-content-center align-items-center">
        <div
          className="card mt-5 text-start pt-0"
          style={{
            // maxWidth: "50vw",
            width: display ? "80vw" : "50vw",
            boxShadow: "0 0 8px 1px #797979",
            opacity: "0.85",
            border: "none",
          }}
        >
          <div className="card-header ">
            <div className="row py-2">
              <div
                className={
                  display
                    ? "col-6 text-start"
                    : "col-md-7 d-flex align-items-center"
                }
                // style={{ width: "min-content" }}
              >
                <h5 className="fw-bold" style={{ color: "black" }}>
                  Upload your book here
                </h5>
              </div>
            </div>
          </div>
          <div className="card-body px-md-5 px-4">
            <form action="/bookapi" method="post">
              <div className="row">
                <div className="form-group pt-3 pb-2">
                  <label className="pb-2">Name of the Book</label>
                  <input
                    className="form-control"
                    type="text"
                    id="Bookname"
                    name="Bookname"
                    autoComplete="off"
                    value={bookname}
                    onInput={(e) => setbookname(e.target.value)}
                    required
                    autoFocus
                  />
                </div>
                <div className="form-group  pt-3 pb-2">
                  <label className="pb-2">Author of the Book</label>
                  <input
                    className="form-control"
                    type="text"
                    id="Authors"
                    name="Authors"
                    autoComplete="off"
                    value={author}
                    onInput={(e) => setauthor(e.target.value)}
                    required
                    autoFocus
                  />
                </div>
                <div className="form-group  pt-3 pb-2">
                  <label className="pb-2">Subject</label>
                  <input
                    className="form-control"
                    type="text"
                    id="Subject"
                    name="Subject"
                    autoComplete="off"
                    value={subject}
                    onInput={(e) => setsubject(e.target.value)}
                    required
                    autoFocus
                  />
                </div>
                <div className="form-group  pt-3 pb-2">
                  <label className="pb-2">For Whom it is useful(Branch)</label>
                  <input
                    className="form-control"
                    type="text"
                    id="Branch"
                    name="Branch"
                    autoComplete="off"
                    value={branch}
                    onInput={(e) => setbranch(e.target.value)}
                    required
                    autoFocus
                  />
                </div>
                <div className="form-group pt-3 pb-2">
                  <label className="pb-2">Link of the Book</label>
                  <br></br>
                  <label className="pb-2">
                    *link of website from where you got the book
                  </label>
                  <input
                    className="form-control "
                    type="text"
                    id="Booklink"
                    name="Booklink"
                    autoComplete="off"
                    value={booklink}
                    onInput={(e) => setbooklink(e.target.value)}
                    style={{ backgroundColor: "#C9EDDC", borderRadius: 10 }}
                    required
                    autoFocus
                  />
                </div>
                {/* <div className="form-group col-md-6 pt-3 pb-2">
                  <label className="pb-2">BookImgLink</label>
                      <input className="form-control"
                             type="text"
                             id='Bookimglink' name='Bookimglink'
                             autoComplete="off"
                             value={bookimglink}
                             onInput={e => setbookimglink(e.target.value)}
                             required
                             autoFocus
                             />
                             
                  </div> 
                  <div className="form-group col-md-6 pt-3 pb-2">
                  <label className="pb-2">ShortForm</label>
                      <input className="form-control"
                             type="text"
                             id='ShortForm' name='ShortForm'
                             autoComplete="off"
                             required
                             autoFocus
                             />
                             
                  </div>  */}
                {/* <div className="form-group col-md-6 pt-3 pb-2">
                  <label className="pb-2">Like</label>
                      <input className="form-control"
                             type="number"
                             id='Likes' name='Likes'
                             autoComplete="off"
                             value={addbook.Likes}
                             
                             autoFocus
                             />
                             
                  </div>
                  <div className="form-group col-md-6 pt-3 pb-2">
                  <label className="pb-2">Share</label>
                      <input className="form-control"
                             type="number"
                             id='Shares' name='Shares'
                             autoComplete="off"
                             value={addbook.Shares}
                           
                             autoFocus
                             />
                             
                  </div>
                   */}
                <button
                  type="submit"
                  className="btn bg-success mt-4 mb-2 text-white mx-auto w-auto px-4"
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
