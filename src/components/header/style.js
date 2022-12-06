import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: #ef5350;
    display: flex;
    align-items: center;
    padding: 6px;
    box-shadow: 0px 0px 10px black;

    > div {
        margin-left: 30px;
        color: white;

        > h1 {
            color: #feca1b;
        }
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