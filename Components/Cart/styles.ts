import styled from "styled-components";

export const Container = styled.section`
    background-color: #f6f9fc;
    /* background-color: #fff; */
    height: auto;
    padding: 10px;
    flex-direction: column;
    .containerCart {
        flex-direction: column;
        /* background-color: #FFF; */
        /* padding: 20px; */
        position: relative;
        border-radius: 8px;
        /* box-shadow: rgb(3 0 71 / 9%) 0px 1px 3px; */
        margin: 10px;
        .cartDetails {
            /* background-color: #FFF; */
            flex-direction: column;
            box-shadow: rgb(3 0 71 / 9%) 0px 1px 3px;
            background-color: #fff;
            width: 250px;
            border-radius: 8px;
            .cartListProduct {
                /* /* background-color: #FFF; */
                padding: 20px;
                position: relative;
                border-radius: 8px;
                /* box-shadow: rgb(3 0 71 / 9%) 0px 1px 3px; */
                margin: 10px; */
                .containerImg {
                    img {

                    }
                }
                .detailsCard {
                    flex-direction: column;
                    h3{
                        font-size: 20px;
                        font-weight: 600;
                        line-height: 20px;
                        color: #e94560;
                    }
                    h4 {
                        font-size: 20px;
                        font-weight: 600;
                        line-height: 20px;
                        color: #e94560;
                    }
                    span {
                        font-size: 18px;
                        font-weight: 600;
                        line-height: 20px;
                        color: #0f3460;
                    }
                    .productPrice {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                }
                .containerButton {

                    flex-direction: column;
                    /* padding-right: 10px; */
                    display: flex;
                    .removeCart {
                        background: none;
                        font-size: 25px;
                        text-align: right;
                        margin-right: 10px;
                    }
                    .contentButton {

                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        /* margin-top: 50px; */
                    }
                }
            }
        }
        hr {
           color: 1px solid #e0e0e0;
        }
        .totalProduct {
            display: flex;
            flex-direction: column;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: rgb(3 0 71 / 9%) 0px 1px 3px;
            width: 230px;
            padding: 10px 10px 20px 10px;
            h2 {
                font-size: 18px;
                font-weight: 500;
                line-height: 16px;
                color: #e94560;
            }
            .totalPrice {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 220px;
                p {
                    font-size: 18px;
                    font-weight: 600;
                    line-height: 16px;
                    color: #e94560;
                }
                span {
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 16px;
                    color: #0f3460;
                }
            }
            div {
                button {
                    background: #e94560;
                    color: #fff;
                    font-size: 25px;
                    transition: 0.5s;
                    border: 1px solid rgb(3 0 71 / 9%);
                    width: 200px;
                    height: 50px;
                    padding: 5px;
                    /* margin: 10px; */
                    border-radius: 5px;
                    cursor: pointer;
                    a {
                        color: #fff;
                    }
                }
                button:hover {
                    background-color: #df2e4b;
                }
            }
        }
    }
    @media (min-width: 768px) {
        padding: 20px;
        .containerCart {
            padding: 0;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            justify-content: space-between;
            .cartDetails {
                width: 435px;
                /* background-color: yellow; */
                .cartListProduct {
                    background-color: #fff;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    padding: 20px 0px 38px 20px;
                    margin: 0px 10px 0px 0px;
                    width: 430px;

                    .containerImg {
                        display: flex;
                        width: 230px;
                    }
                    .detailsCard {
                        display: flex;
                        width: 100%;
                        /* background-color: red; */
                        .containerButton {
                            width: 60%;
                        }
                    }
                    .productPrice {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        width: 150px;
                    }
                }
                .containerButton {
                    padding-top: 20px;
                }
            }
            .totalProduct {
                /* background-color: blue; */
                padding: 10px;
                width: 230px;
                margin-left: 25px;
                .totalPrice {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    p ,span {
                        text-align: left;
                    }
                }
            }

        }
    }
    @media (min-width: 1200px) {
        padding: 50px;
        .containerCart {
            /* padding: 50px; */
            .cartDetails {
                width: 700px;
                .cartListProduct {
                    width: 100%;
                    .containerImg {
                        width: 100%;
                        /* background-color: yellow; */
                    }
                    .detailsCard {
                        width: 100%;
                        h3 {
                            font-size: 32px;
                            line-height: 30px;
                        }
                        .productPrice {
                            width: 200px;
                            h4 {
                                font-size: 25px;
                                line-height: 20px;
                            }
                            span {
                                font-size: 25px;
                                line-height: 20px;
                            }
                        }
                        .containerButton {
                            width: 40%;
                            .contentButton {
                                span {
                                    font-size: 22px;
                                }
                            }

                        }
                    }
                }
            }
            .totalProduct {
                width: 400px;
                justify-self: end;
                padding: 30px;
                h4 {
                    font-size: 22px;
                    line-height: 30px;
                    text-transform: uppercase;
                    margin: 0;
                }
                .totalPrice {
                    width: 100%;
                    p {
                        font-size: 22px;
                        line-height: 20px;
                    }
                    span {
                        font-size: 18px;
                    }
                }
            }
        }
    }
`;
