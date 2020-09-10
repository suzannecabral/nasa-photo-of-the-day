import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

import dummyData from './dummyData';
import ImgFrame from './imgFrame';
import TextFrame from './textFrame';


function App() {

  const [image, setImage] = useState(dummyData)
  
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-09-02')
    .then(res => {
      setImage(res.data)
      console.log(res.data)
    })
    .catch(err => {
      console.log('There was a problem with the Axios call');
      debugger
    })

  }, [])






  const imgData = image;
  
  const imgTitle = imgData.title
  const imgDate= imgData.date
  const imgAuthor= imgData.copyright
  const imgDesc= imgData.explanation
  const imgUrl= imgData.url
  const imgHdUrl= imgData.hdurl
  


  return (
    <div className="App">

      <div className="nasaGallery">

          {/* TEXT FRAME JS */}
          <TextFrame 
          imgTitle = {imgTitle}
          imgDate ={imgDate}
          imgAuthor = {imgAuthor}
          imgDesc = {imgDesc}
          />

        {/* <div className="textFrame">
          <h1>NASA Image of the Day</h1>
          <h2>{imgTitle}</h2>

          <p>{imgDate}</p>
          <p>{imgAuthor}</p>
          <p>{imgDesc}</p>
        </div> */}

        {/* IMG FRAME JS */}
        <ImgFrame
          imgHdUrl={imgHdUrl}
          imgUrl={imgUrl}
          imgTitle={imgTitle}       
        />

      </div>



    </div>
  );
}

export default App;
