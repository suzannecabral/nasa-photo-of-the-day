import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import styled from 'styled-components'


import dummyData from './dummyData';
import ImgFrame from './imgFrame';
import TextFrame from './textFrame';


// API KEY: QBWtySVEV71swXwrhhP9B5gPGj7H7EIOIvW0pL4u
//Account ID: b08f122d-29f4-4a6c-9abf-8c54f2e291c5

/*

@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');

*/

const StyledApp = styled.div `

  display:flex;
  flex-flow:row;
  height:100vh;


`


function App() {

  const [image, setImage] = useState(dummyData)
  
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=QBWtySVEV71swXwrhhP9B5gPGj7H7EIOIvW0pL4u&date=2020-09-02')
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
      <StyledApp>
      {/* <div className="nasaGallery"> */}

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

      {/* </div> */}
      </StyledApp>


    </div>
  );
}

export default App;
