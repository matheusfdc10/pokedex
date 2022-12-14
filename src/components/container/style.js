import styled from "styled-components";

export const StyleContainer = styled.div`
    margin-top: 75px;
    padding: 20px;
    flex: 1 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 431px) {
        margin-top: 60px;
    }

    > div {
        align-items: center;
        display: flex;
        justify-content: center;
        margin-top: 10px;

        > button {
            margin: 10px;
            padding: 10px;
            width: 100px;
            
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
            max-width: 176px;

            > a {
                padding: 12px;
                border: solid 1px;
                justify-content: space-between;
                display: flex;
                flex-direction: column;
                align-items: center;    
                
                > .id {
                    align-self: flex-start;
                    margin-left: 10px;
                    font-weight: bold;
                }

                > .name {
                    font-size: 20px;
                    font-weight: bold;
                    display: block;
                    text-align: center;
                    margin-top: 6px;
                }
            }
            
            @media (max-width: 431px) {
                max-width: 150px;

                > a {

                    > img {
                        max-width: 120px;   
                    }

                    > .name {
                        font-size: 12px;
                    }
                }
            }

            @media (max-width: 371px) {
                max-width: 140px;

                > a {

                    > img {
                        max-width: 90px;   
                    }

                    > .name {
                        font-size: 12px;
                    }
                }
            }
            
        }

        > div:hover {
            background: #0002;
            cursor: pointer;
        }
    }
`