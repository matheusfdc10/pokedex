import styled from "styled-components";

export const StyledFooter = styled.div`
    height: 100px;
    background: #ef5350;
    flex-shrink: 0;
    div {
        padding: 40px 0px;
        text-align: center;
        color: white;
        p a {
            font-weight: bold;
            color: #0078d7;
            text-decoration: none;
        }

        @media (max-width: 600px) {
            p {
                font-size: 12px;
            }
        }
    }
`