import React from "react";
import "./App.css";
import NasaCard from "./Components/NasaCard";
// import axios from 'axios';

function App() {
  // const [photo, setPhoto] = useState();

  //   useEffect(() => {
  //       axios
  //       .get(`https://api.nasa.gov/planetary/apod?api_key=6zMXmXOQjGn6negHi0fWpJJU1KDdEuQ4qLZ3y9gx`)
  //       .then(response => {
  //         console.log(response.data)
  //       });
  //   }, [])



  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <nasaCard />
    </div>
  );
}

export default App;
