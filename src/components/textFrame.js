import React from "react";
import styled from 'styled-components'


const StyledTextFrame = styled.div`
.textFrame{
  background-color:#22222a;
  padding: 4% 5% 2% 3%;
  width:25%;
  max-width:40rem;
  min-width:30rem;
  height:100vh;
  display:flex;
  flex-flow:column;
  text-align:left;
}

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
.date {
  order:-1;
}
.author {
  border-bottom: 1px solid #66667f;
  padding-bottom: 2rem;
  order:9;
}
`
const TextFrame = props => {

    const { imgTitle, imgDate, imgAuthor, imgDesc } = props


    return (
        <StyledTextFrame>
        <div className="textFrame">
          <h1>NASA Image of the Day</h1>
          <h2>{imgTitle}</h2>

          <h3 className="date">{imgDate}</h3>
          <p className="author">{imgAuthor}</p>
          <p>{imgDesc}</p>
        </div>
        </StyledTextFrame>

    )
}


export default TextFrame