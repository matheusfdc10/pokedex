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

    > .buttons {
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
        margin-top: 12px;
        display: grid;
        /* grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); */
        grid-template-columns: repeat(8, minmax(180px, 1fr));
        gap: 24px;
        /* display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%; */

        @media (max-width: 1230px) {
            grid-template-columns: repeat(5, minmax(180px, 1fr));
        }

        @media (max-width: 1030px) {
            grid-template-columns: repeat(4, minmax(180px, 1fr));
        }

        @media (max-width: 830px) {
            grid-template-columns: repeat(3, minmax(180px, 1fr));
        }


        @media (max-width: 630px) {
            grid-template-columns: repeat(2, minmax(180px, 1fr));
        }
        
        @media (max-width: 420px) {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        }

        > div {

            padding: 12px;
            border-radius: 12px;
            box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);;
            justify-content: space-between;
            display: flex;
            flex-direction: column;
            align-items: center;     
            
            cursor: pointer;
            transition: 300ms;

            :hover {
                transform: scale(1.03);
            }
                
            > .id {
                align-self: flex-start;
                margin-left: 10px;
                font-weight: bold;
            }

            > img {
                width: 100%;
            }

            > .name {
                font-size: 20px;
                font-weight: bold;
                display: block;
                text-align: center;
                margin-top: 6px;

                @media (max-width: 431px) {
                    font-size: 14px;
                }

            }            
        }

        > div:hover {
            background: #0001;
            cursor: pointer;
        }
    }
`