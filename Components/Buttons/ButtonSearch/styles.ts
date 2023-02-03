import styled from "styled-components";

export const Container = styled.section`
    background-color: #f6f9fc;
    width: 100%;
    padding: 10px 5px 0px 3px;
    text-align: -webkit-center;
    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        .containerLogo {
            display: none;
        }
        .contentSearch {
            display: flex;
            width: 100%;
            height: 40px;
            border: 2px solid rgba(0, 0, 0, 0.2);
            border-radius: 50px;
            padding: 5px;
            align-items: center;

            span {
                font-size: 16px;
                color: #4b566b;
                line-height: 20px;
            }
            input {
                width: 84%;
                height: 100%;
                border: none;
            }

            span {
                display: none;
            }

        }
        .containerIcon {
            width: 80px;
            display: flex;
            justify-content: space-between;
            padding: 10px;
            .icon {
                color: #4b566b;

            }
        }
    }
    @media (min-width: 768px) {
        padding: 20px;
        width: 97%;
        .content {
            .containerLogo {
                background-color: #4b566b;
                img {
                    width: 8px;
                }
            }

            .contentSearch {

            }
            .containerIcon {
                padding: 10px;
                .icon {
                    color: #4b566b;
                }
            }
        }
    }
`;
