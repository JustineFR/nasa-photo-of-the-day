import React, { useState, useEffect } from "react";
import App from "../App";
import axios from 'axios';



function NasaCard(props) {
    const [photo, setPhoto] = useState();

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=6zMXmXOQjGn6negHi0fWpJJU1KDdEuQ4qLZ3y9gx`)
        .then(response => {
          console.log(response.data)
        })
        .catch(error => console.log("this is an error: ", error));
    }, []);

}

export default NasaCard;