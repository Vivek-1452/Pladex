import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import FocusReg from "./FocusReg";
import LoginMain from "./LoginMain";
// import FocusCompReg from "./FocusCompReg";
import axios from "axios";

function CheckReg() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios.post("https://www.pladex.in/authenticate").then((response) => {
      if (response.data.status == "authenticated") {
        setIsLoaded(true);
      }
    });
  }, [isLoaded]);

  return <>{isLoaded ? <FocusReg /> : <LoginMain method="event" />}</>;
}

export default CheckReg;
