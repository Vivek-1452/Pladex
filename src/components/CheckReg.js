import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import FocusReg from "./FocusReg";
import LoginMain from "./LoginMain";
import FocusCompReg from "./FocusCompReg";

function CheckReg() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://65.1.96.8:8000/authenticate", { method: "POST" }).then(
      (response) => {
        if (response.json().status == "authenticated") {
          setIsLoaded(true);
        } else {
          setIsLoaded(false);
        }
      }
    );
  }, [isLoaded]);

  if (this.props.location.state == "eventReg") {
    return <>{isLoaded ? <FocusReg /> : <LoginMain />}</>;
  } else if (this.props.location.state == "compReg") {
    return <>{isLoaded ? <FocusCompReg /> : <LoginMain />}</>;
  }
}

export default CheckReg;
