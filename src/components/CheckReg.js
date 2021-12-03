import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import FocusReg from "./FocusReg";
import LoginMain from "./LoginMain";

function CheckReg() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://65.1.96.8:8000/authenticate", { method: "POST" }).then(
      (response) => {
        if (response.json().status == "authenticated") {
          setIsLoaded(true);
        } else {
          setIsLoaded(false);
        }
      }
    );
  }, [isLoaded]);

  return <>{isLoaded ? <FocusReg /> : <LoginMain />}</>;
}

export default CheckReg;
