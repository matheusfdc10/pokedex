import styled from "styled-components";

export const StyledInformationPokemon = styled.div`
    position: fixed;
    background-color: #0009;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
        background-color: white;
        width: 300px;
        align-items: center;
        border-radius: 10px;
        padding: 16px;

        > button {
            border: none;
            background-color: transparent;
            font-size: 20px;
            color: red;
        }

        > div {
            display: flex;
            flex-direction: column;
            align-items: center;

            > h1 {
                text-align: center;
            }
        }

        > ul {
            padding-left: 25px;
        }
    }
`