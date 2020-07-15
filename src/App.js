import React, { useState, useEffect } from "react";
import "./App.css";
import ImgContainer from './components/imgOfTheDay/ImgContainer.js'
import axios from 'axios'

const BASE_URL = 'https://api.nasa.gov/planetary/apod'
const API_KEY = 'Z0VtJh4F70QGFSuAgFq54mUTvdbw65ORQUAKwucX'



function App() {
  const [ imgData, setImg ] = useState({})
  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then((res) => {
        setImg(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },[])
  
  return (
    <div className="App">
      <ImgContainer imgData={imgData} />
    </div>
  );
}

export default App;
