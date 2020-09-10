import React from "react";
import "./App.css";

import dummyData from './dummyData';
import ImgFrame from './imgFrame';
import TextFrame from './textFrame';


function App() {
  // const [image, setImage] = useState(dummyData)

  const imgData = dummyData[2];
  
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
