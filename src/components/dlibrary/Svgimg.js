import React, { useEffect, useState } from "react";

export default function Svg({bookname}){
    return(
        <svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg">

  <text x="20" y="35" className="small" style={{font: '10px sans-serif', width: '70px'}}>{bookname}</text>

</svg>
    )
}