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
        height: 400px;
        width: 300px;
        align-items: center;

        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        > h3 {
            margin-left: 20px;
        }
    }
`