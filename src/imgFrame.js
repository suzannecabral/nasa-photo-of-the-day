import React from "react";

const ImgFrame = props => {
    const { imgHdUrl, imgUrl, imgTitle } = props

    return (

        <div className="imgFrame">
            <a href={imgHdUrl}>
                <img src={imgUrl} alt={imgTitle}></img>
            </a>
        </div>

    )

}

export default ImgFrame



