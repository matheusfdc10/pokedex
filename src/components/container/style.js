import styled from "styled-components";

export const StyleContainer = styled.div`
    padding: 20px;
    flex: 1 0 auto;

    display: flex;
    flex-direction: column;

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
        flex: 1;

        > div {
            margin: 10px;
            display: flex;
            max-height: 210px;

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