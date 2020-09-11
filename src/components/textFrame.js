import React from "react";
import styled from 'styled-components'


const StyledTextFrame = styled.div`
  background-color:#101012;
  color:#fafafa;
  font-family:"Ubuntu", sans-serif;


  h1 {
  font-size:2.8rem;
  margin: 2rem 0 0 0 ;
  order:10;
  
}
h2 {
  font-size:2.3rem;
  font-weight:400;
  margin: 0 0 1.2rem 0;
}
h3 {
  margin:0 0 .5rem 0;
}
h3, .author {
  font-size:1.2rem;
  color:#66667f;
  font-weight:bold;
}
p {
  font-size:1.4rem;
  font-weight:400;
  line-height:1.7rem;
  letter-spacing:.1px;
  margin:0 0 1rem 0;
  
}

a {
    text-decoration:none;
    font-size:1.4rem;
    font-weight:bold;
    color:white;
}

.author {
  border-bottom: 1px solid #66667f;
  padding-bottom: 2rem;
}
`
const TextFrame = props => {

    const { imgTitle, imgDate, imgAuthor, imgDesc } = props


    return (
        <StyledTextFrame>
        <div className="textFrame">
          <h1>NASA Image of the Day</h1>
          <h2>{imgTitle}</h2>

          <p>{imgDate}</p>
          <p>{imgAuthor}</p>
          <p>{imgDesc}</p>
        </div>
        </StyledTextFrame>

    )
}


export default TextFrame