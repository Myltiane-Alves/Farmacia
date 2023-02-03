import styled from "styled-components";

export const Container = styled.section`
    background-color: #f6f9fc;
    /* background-color: #fff; */
    height: auto;
    padding: 10px;
    flex-direction: column;
    .containerCart {
        flex-direction: column;
        background-color: #fff;
        /* padding: 20px; */
        position: relative;
        border-radius: 8px;
        box-shadow: rgb(3 0 71 / 9%) 0px 1px 3px;
        /* margin: 10px; */
        width: 100%;
        .containerImg {
            /* background-color: #fff; */
            padding: 50px;
            display: flex;
            flex-direction: column;
            img {
                width: 100%;
            }
            .description {
                p {
                    font-size: 16px;
                    line-height: 25px;
                    color: #4b566b;
                }
            }
        }
        .detailsCard {
            padding: 10px;
            /* background-color: #fff; */
            h2 {
                font-size: 32px;
                font-weight: 600;
                line-height: 24px;
                color: #e94560;
            }
            .productPrice {
                display: flex;
                align-items: center;
                justify-content: space-between;
                h4 {
                    font-size: 22px;
                    line-height: 20px;
                    color: #e94560;
                }
                span {
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 20px;
                    color: #0f3460;
                }
            }
            .containerButton {
                padding-top: 20px;

                div {
                    p {
                        font-size: 16px;
                        font-weight: 600;
                        line-height: 20px;
                        color: #e94560;
                    }
                }
                p {
                    font-size: 16px;
                        font-weight: 600;
                        line-height: 20px;
                        color: #e94560;
                }
                .sizeButtons {

                    display: flex;
                    justify-content: space-between;
                    button {
                        background-color: #edf2f7;
                        border-radius: 8px;
                        border: 1px solid transparent;
                        padding: 0.6em 1.2em;
                        font-size: 16px;
                        font-weight: 600;
                        color: #0f3460;
                        text-transform: uppercase;
                        cursor: pointer;
                        transition: border-color 0.25s;
                    }
                    button:hover {
                        border-color: #646cff;
                    }
                    button:focus,
                    button:focus-visible {
                        outline: 4px auto -webkit-focus-ring-color;
                    }
                }
                .contentButton {
                    padding-top: 20px;
                    flex-direction: column;
                    div{
                        padding-top: 10px;
                        button {
                            width: 100%;
                            height: 50px;
                            background-color: #0f3460;
                            border-radius: 8px;
                            border: none;
                            font-size: 20px;
                            color: #fff;
                        }
                        .btnFavorite {
                            border: solid 1px #0f3460;
                            color: #0f3460;
                            background-color: transparent;
                        }
                    }
                }
            }

        }

    }
    @media (min-width: 768px) {
        /* padding: 20px; */
        .containerCart {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            .containerImg {
                padding: 30px;
                img {
                    width: 80%;
                }
            }
            .detailsCard {
                /* background-color: yellow; */
                padding: 0px;
                width: 100%;
                .productPrice {
                    width: 200px;
                }
                .containerButton{
                    width: 90%;
                }
            }
        }

    }
    @media (min-width: 1200px) {
        padding: 50px;
        /* background-color: #646cff; */
        .containerCart {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            border-radius: 2%;
            padding: 10px;
            /* background-color: #e94560; */
            .detailsCard {
                /* padding: 20px; */
                width: 100%;
                /* background-color: black; */

                .productPrice {
                    width: 200px;
                }
                .containerButton {

                    .sizeButtons {
                        width: 400px;

                    }
                }
            }
            .containerImg {
                align-items: center;
                justify-content: center;
                /* background-color: #0f3460; */
               img {

               }
            }
        }
    }
`;
