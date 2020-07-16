import React from 'react'

function ImgFooter(props) {
    const {imgData} = props
    return (
        <div>
            <div className='title'>
                <div>{imgData.title}</div>
                <div>{imgData.date}</div>
            </div>
            <div className='explan'>Explanation: {imgData.explanation}</div>
        </div>
        
    )
}

export default ImgFooter

