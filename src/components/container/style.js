import styled from "styled-components";

export const StyleContainer = styled.div`
    padding: 20px;

    > div {
        align-items: center;
        display: flex;
        justify-content: center;

        > button {
            margin: 10px;
        }
    }

    > section {
        display: flex;
        justify-content: center;
        width: 100%;
        flex-wrap: wrap;

        > div {
            margin: 10px;
            display: flex;

            > a {
                padding: 12px;
                border: solid 1px;
                justify-content: center;

                > span {
                    font-size: 20px;
                    font-weight: bold;
                    display: block;
                    text-align: center;
                }
            }
        }
    }
`