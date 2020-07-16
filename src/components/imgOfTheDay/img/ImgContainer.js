import React from 'react'
import Header from '../header/Header'
import ImgFooter from '../Description/ImgFooter'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ImgDiv = styled.div`
    display: flex;
    
    width: 71%;
    height: 600px;
    overflow: hidden;
    img{
        width: 100%;
        
        border-radius: 4px;
    }
`

function ImgContainer(props) {
    const { imgData } = props
    console.log(imgData)
    return (
        <Container>
            <Header/>
            <ImgDiv>
                <img src={imgData.url}></img>
            </ImgDiv>
            <ImgFooter imgData={imgData}/>
        </Container>

    )
}

export default ImgContainer