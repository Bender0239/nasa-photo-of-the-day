import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
    width: 70%;
    color: #FFEBCD;
    background-color: royalblue;
    border-radius: 4px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 5px;
`

function Header() {
    return (
        <StyledHeader>
            <h1>NASA Photo of the Day</h1>
        </StyledHeader>
    )
}
export default Header