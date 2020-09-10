import React from "react";

const TextFrame = props => {

    const { imgTitle, imgDate, imgAuthor, imgDesc } = props


    return (

        <div className="textFrame">
          <h1>NASA Image of the Day</h1>
          <h2>{imgTitle}</h2>

          <p>{imgDate}</p>
          <p>{imgAuthor}</p>
          <p>{imgDesc}</p>
        </div>

    )
}


export default TextFrame