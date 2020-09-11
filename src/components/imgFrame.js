import React from "react";
import styled from 'styled-components'


const StyledImageFrame = styled.div`

  width:100%;
  display:flex;
  flex-flow:column;
  justify-content:center;
  padding: 4%;
  /* padding doesn't work?? */

a, img {
  object-fit:contain;
  width:100%;
}
`

const ImgFrame = props => {
    const { imgHdUrl, imgUrl, imgTitle } = props

    return (
        <StyledImageFrame>
            <a href={imgHdUrl}>
                <img src={imgUrl} alt={imgTitle}></img>
            </a>
        </StyledImageFrame>

    )
}

export default ImgFrame



