import React, { useState, useEffect } from "react";
import "./App.css";
import NasaCard from "./Components/NasaCard";
import axios from 'axios';
import styled from 'styled-components';
// import { Icon } from "semantic-ui-react";
import NasaMenu from './Components/Menu';


// Style
const ParaStyle = styled.p `
    font-size: 20px;
    color : #bb1433;
    padding: 60px;
    margin: 0px !important;
`;





function App() {
  const [info, setInfo] = useState([]);

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=6zMXmXOQjGn6negHi0fWpJJU1KDdEuQ4qLZ3y9gx')
        .then(response => {
          console.log(response.data);  
          const data = response.data;
          setInfo(data)
        })
        .catch(error => console.log("There is an error: ", error))
    }, []);


  return (
    <div className="App" style={{backgroundColor:'#fcc9c9'}}>
      <NasaMenu style={{color:'red'}}/>
      <ParaStyle>
        <p>NASA Photo Of The Day 🚀</p>
        </ParaStyle>
      <NasaCard title={info.title} date={info.date} explanation={info.explanation} url={info.url}/>
    </div>
  );
}

export default App;
