import React, { useState, useEffect } from "react";
import App from "../App";


function NasaCard(props) {
  console.log(props)

    return (
      <div>
        <h2>{props.title}</h2>
        <h3>{props.date}</h3>
        <img src={props.url} alt="photo of the day by nasa"></img>
        <p>{props.explanation}</p>
      </div>
    )

}

export default NasaCard;