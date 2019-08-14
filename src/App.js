import React, { useState, useEffect } from "react";
import "./App.css";
import NasaCard from "./Components/NasaCard";
import axios from 'axios';

function App() {
  const [info, setInfo] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=6zMXmXOQjGn6negHi0fWpJJU1KDdEuQ4qLZ3y9gx`)
        .then(response => {
          console.log(response.data);
          const data = response.data;
          setInfo(data)
        })
        .catch(error => console.log("There is an error: ", error))
    }, []);



  return (
    <div className="App">
      <p>
        NASA Photo Of The Day 🚀!
      </p>
      <NasaCard title={info.title} date={info.date} explanation={info.explanation} url={info.url}/>
    </div>
  );
}

export default App;
