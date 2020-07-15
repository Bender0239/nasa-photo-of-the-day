import React from 'react'
import ImgContainerStyles from './ImgContainerStyles.js'

function ImgContainer(props) {
    const { imgData } = props
    console.log(imgData)
    return (
        <ImgContainerStyles>
            <h1>Wassup, this be that wikkid cool NASA photo, hearrr me now</h1>
            <img src={imgData.url}></img>
            <div className='title'>
                <div>{imgData.title}</div>
                <div>{imgData.date}</div>
            </div>
            <div className='explan'>Explanation: {imgData.explanation}</div>
        </ImgContainerStyles>

    )
}

export default ImgContainer