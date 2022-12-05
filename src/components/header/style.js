import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: blue;
    display: flex;
    align-items: center;
    height: 60px;

    > div {
        margin-left: 30px;
        color: white;
    }
        
    > input {
        display: flex;
        flex-direction: row;
        border: none;
        outline: none;
        max-width: 300px;
        width: 100%;
        height: 35px;
        border-radius: 25px;
        overflow: hidden;
        margin: auto;
        font-size: 15px;
        padding-left: 12.5px;
    }
    
`