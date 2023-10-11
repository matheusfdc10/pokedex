import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: #ef5350;
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 10px black;
    position: fixed;
    width: 100%;
    z-index: 100;

    > div {
        padding: 10px 0;
        margin-left: 30px;

        > img {
            max-width: 150px;
        }

        @media (max-width: 431px) {
            margin-left: 20px;
            
            > img {
                max-width: 110px;
            }
        }
    }
        
    > input {
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

        @media (max-width: 521px) {
            margin: 0px 15px;
        }
    }
    
`