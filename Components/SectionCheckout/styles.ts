import styled from "styled-components";

export const Container = styled.section`
    background-color: #fff;
    height: auto;
    padding: 10px;
    flex-direction: column;
    .containerCart {
        flex-direction: column;
        position: relative;
        border-radius: 8px;
        margin: 10px;
        .orderComplete {
            .formPayment {
                padding-bottom: 20px;
                .orderDescription {
                    header {
                        padding: 10px;
                        h3 {
                            font-size: 28px;
                            line-height: 25px;
                            color: #0f3460;
                        }
                        span {
                            font-size: 18px;
                            line-height: 25px;
                            text-align: center;
                            color: #0f3460;
                        }
                        padding-bottom: 20px;
                    }
                }
                .paymentForm {
                    padding: 20px;
                    background-color: #f3f2f2;
                    border-radius: 10px;
                    form {
                       .fields {
                            display: flex;
                            flex-direction: column;

                            .field {
                                width: 100%;
                                padding: 10px;
                                input {
                                    width: 270px;
                                    min-width: 0px;
                                    height: 45px;
                                    border-radius: 4px;
                                    background-color: #EEEDED;
                                    border: 1px solid #e0e0e0;
                                    outline: 2px solid transparent;
                                    gap: 4px;

                                }
                            }
                       }
                    }
                }

            }
            .paymentCard {
                background-color: #f3f2f2;
                border-radius: 10px;
                header {
                    padding: 10px;
                    h3 {
                        font-size: 28px;
                        line-height: 25px;
                        color: #0f3460;
                        text-align: center;

                    }
                    p {
                        font-size: 16px;
                        line-height: 25px;
                        text-align: center;
                        color: #0f3460;
                    }
                    padding-bottom: 20px;
                }
                .containerButton {
                    flex-direction: column;
                    display: flex;
                    padding-bottom: 20px;
                    div {
                        padding: 10px;
                        display: flex;
                        button {
                            align-items: center;
                            padding: 10px;
                            gap: 12px;
                            width: 178.67px;
                            height: 51px;
                            color: #0f3460;
                            font-size: 14px;
                            font-weight: 500;
                            background: #EBE5F9;
                            border: 1px solid #0f346021;
                            border-radius: 6px;
                            flex: none;
                            order: 0;
                            flex-grow: 1;
                            text-transform: uppercase;
                        }
                        button:hover {
                            background-color: #f2f0f7;
                        }
                    }
                }
            }
        }
        .cartDetails {
            flex-direction: column;
            width: 335px;
            border-radius: 8px;
            .description {
                header {
                    padding: 10px;
                    h2 {
                        font-size: 28px;
                        line-height: 25px;
                        color: #0f3460;
                    }
                    span {
                        font-size: 18px;
                        line-height: 25px;
                        text-align: center;
                        color: #0f3460;
                    }
                    padding-bottom: 20px;
                }
            }
            .cartContent {
                background-color: #f3f2f2;
                .cartListProduct {
                    padding: 20px;
                    position: relative;
                    border-radius: 8px;
                    margin: 10px;
                    .detailsCard {
                        flex-direction: column;
                        .detailsDescription {
                            width: 100%;
                            h3{
                                font-size: 32px;
                                font-weight: 600;
                                line-height: 20px;
                                color: #e94560;
                            }
                            p {
                                font-size: 20px;
                                font-weight: 500;
                                line-height: 20px;
                                text-align: left;
                                color: #0f3460;

                            }
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
                        }
                    }
                }
                .totalProduct {
                    display: flex;
                    flex-direction: column;
                    border-top: 1px solid #e0e0e0;
                    width: 275px;
                    padding: 20px;
                    margin: 10px;
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
                        width: 100%;
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
                        .btnFinal {
                            width: 100%;
                            height: 50px;
                            border: none;
                            border-radius: 6px;
                            color: #fff;
                            font-size: 22px;
                            font-weight: 700;
                            text-transform: uppercase;
                            background-color: #e94560;
                        }
                    }
                }
            }
        }

    }
    @media (min-width: 768px) {
        padding: 10px;
        .containerCart {
            padding: 0;
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            justify-content: space-between;
            .cartDetails {
                width: 100%;
                .cartContent {
                    .cartListProduct {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        .containerImg {
                            display: flex;
                            width: 200px;
                            padding: 10px;
                            img {
                                width: 100%;
                            }
                        }
                        .detailsCard {
                            width: 100%;
                            .containerButton {
                                display: flex;
                                width: 100%;
                                padding-top: 20px;
                                .contentButton {
                                    display: flex;
                                    align-items: center;
                                    justify-content: space-between;
                                    width: 55%;
                                }
                            }
                        }
                        .productPrice {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            width: 150px;
                        }
                    }

                    .totalProduct {
                        padding: 10px;
                        width: 96%;
                        border-top: 1px solid #e0e0e0;
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
            .orderComplete {
                .formPayment {
                    .paymentForm {
                        form {
                            .fields {
                                display: grid;
                                grid-template-columns: repeat(2, 1fr);

                            }
                        }
                    }
                }
                .paymentCard {
                    .containerButton {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                    }
                }
            }
        }
    }
    @media (min-width: 1200px) {
        padding: 50px;
        .containerCart {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            .cartDetails {
                width: 100%;
                max-width: 90%;
                padding: 10px;
                flex-direction: column;
                display: grid;
                grid-template-columns: repeat(1, 1fr);
                .description {
                    width: 98.5%;
                    header {
                        background-color: transparent;
                    }
                    padding: 0;
                    margin: 0;
                }
                .cartContent {
                    background-color: #f3f2f2;
                    .cartListProduct {
                        width: 500px;
                        border-radius: 0px;
                        .containerImg {

                            img {
                                width: 100%;
                            }
                        }
                        .detailsCard {
                            width: 100%;
                            display: flex;
                            align-items: center;
                            padding: 10px;
                            .detailsDescription {
                                h3 {
                                    font-size: 26px;
                                    line-height: 30px;
                                    text-align: left;
                                }

                            }
                            .productPrice {
                                width: 100%;
                                h4 {
                                    font-size: 24px;
                                    line-height: 20px;
                                }
                                span {
                                    font-size: 22px;
                                    line-height: 20px;
                                }
                            }
                            .containerButton {
                                width: 100%;
                                .contentButton {
                                    width: 100%;
                                    justify-content: space-between;
                                    span {
                                        font-size: 22px;
                                    }
                                }

                            }
                        }
                    }
                    .totalProduct {
                        width: 500px;
                        margin: 0;
                        border-radius: 0px;
                        background-color: #f3f2f2;
                        h4 {
                            font-size: 26px;
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
            .orderComplete {
                padding: 10px;
                width: 100%;
                .formPayment {
                    width: 97%;
                    .oderDescription {
                        height: 19vh;
                        padding-bottom: 20px;
                    }
                    .paymentForm {
                        form {
                            .fields {
                                display: grid;
                                grid-template-columns: repeat(2, 1fr);
                                .field {
                                    input {
                                        width: 200px;
                                    }
                                }

                            }
                        }
                    }
                }
                .paymentCard {
                    width: 97%;
                    padding-bottom: 2px;
                    header {
                        p {
                            text-transform: uppercase;
                            font-size: 28px;
                            line-height: 35px;

                        }
                    }
                    .containerButton {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        div {
                            button {
                                width: 100%;
                            }
                        }
                    }
                }
            }
        }
    }
`;
