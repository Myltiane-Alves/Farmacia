import * as S from './styles';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

import celular from "../../assets/images/shops/shops-4.png";
import fone from "../../assets/images/shops/shops-5.png";
import bone from "../../assets/images/shops/shops-10.png";

export default function BlogSection() {
    return (
        <S.Container>
            <div className="container-title">
                <h2>Notícias</h2>
                {/* <p>Saiba mais Sobre nosso Trabalho</p> */}
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 50,
                    },
                    "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    "@1.50": {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide
                    style={{
                        boxShadow: "0 1px 10px #ccc",
                        maxWidth: "350px",
                        borderRadius: "20px",
                        width: "100%",
                        display: "block"
                    }}
                >
                    <S.Card
                        style={{
                            height: "100%"
                        }}
                    >
                        <img src={celular} alt="Celular" />
                        <div className="card-text">
                            <h3>Celular</h3>
                            <p>
                                O Moto E20 é um smartphone projetado para oferecer o que você mais
                                precisa para se conectar: tecnologia e agilidade.
                                Ideal para quem valoriza cada momento e precisa dos melhores itens ao lado.

                            </p>
                        </div>
                        <button
                            type="button"
                            className="btn"
                        >
                            <a href="https://www.google.com.br/">Leia Mais</a>
                        </button>
                    </S.Card>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        boxShadow: "0 1px 10px #ccc",
                        maxWidth: "350px",
                        borderRadius: "20px",
                        width: "100%",
                        display: "block"
                    }}
                >
                    <S.Card
                        style={{
                            height: "100%"
                        }}
                    >
                        <img src={fone} alt="Fones de Ouvido" />
                        <div className="card-text">
                            <h3>Fone de Ouvido Bluetooth AirDots 2 Original</h3>
                            <p>
                                Qualidade de som que enriquece todas as viagens acústicas.
                                Dois microfones ajudam a bloquear o som indesejado.
                                Os fones de ouvido mais leves que já criamos.
                            </p>
                        </div>
                        <button
                            type="button"
                            className="btn"
                        >
                            <a href="https://www.google.com.br/">Leia Mais</a>
                        </button>
                    </S.Card>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        boxShadow: "0 1px 10px #ccc",
                        maxWidth: "350px",
                        borderRadius: "20px",
                        width: "100%",
                        display: "block"
                    }}
                >
                    <S.Card
                        style={{
                            height: "100%"
                        }}
                    >
                        <img src={bone} alt="Boné" />
                        <div className="card-text">
                            <h3>Boné</h3>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, quidem cum. Officiis natus sit odit, non laboriosam placeat qui id in beatae quisquam neque architecto sed harum doloremque ut fugit!
                            </p>
                        </div>
                        <button
                            type="button"
                            className="btn"
                        >
                            <a href="https://www.google.com.br/">Leia Mais</a>
                        </button>
                    </S.Card>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        boxShadow: "0 1px 10px #ccc",
                        maxWidth: "350px",
                        borderRadius: "20px",
                        width: "100%",
                        display: "block"
                    }}
                >
                    <S.Card
                        style={{
                            height: "100%"
                        }}
                    >
                        <img src={celular} alt="celular" />
                        <div className="card-text">
                            <h3>Celular</h3>
                            <p>
                                O Moto E20 é um smartphone projetado para oferecer o que você mais
                                precisa para se conectar: tecnologia e agilidade.
                                Ideal para quem valoriza cada momento e precisa dos melhores itens ao lado.

                            </p>
                        </div>
                        <button
                            type="button"
                            className="btn"
                        >
                            <a href="https://www.google.com.br/">Leia Mais</a>
                        </button>
                    </S.Card>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        boxShadow: "0 1px 10px #ccc",
                        maxWidth: "350px",
                        borderRadius: "20px",
                        width: "100%",
                        display: "block"
                    }}
                >
                    <S.Card
                        style={{
                            height: "100%"
                        }}
                    >
                        <img src={fone} alt="Fone de Ouvido" />
                        <div className="card-text">
                            <h3>Fone de Ouvido Bluetooth  Original</h3>
                            <p>
                                Qualidade de som que enriquece todas as viagens acústicas.
                                Dois microfones ajudam a bloquear o som indesejado.
                                Os fones de ouvido mais leves que já criamos.
                            </p>
                        </div>
                        <button
                            type="button"
                            className="btn"
                        >
                            <a href="https://www.google.com.br/">Leia Mais</a>
                        </button>
                    </S.Card>
                </SwiperSlide>
                <SwiperSlide
                    style={{

                        boxShadow: "0 1px 10px #ccc",
                        maxWidth: "350px",
                        borderRadius: "20px",
                        width: "100%",

                        display: "block"
                    }}
                >
                    <S.Card
                        style={{
                            // width: "350px",
                            height: "100%"
                        }}
                    >
                        <img src={bone} alt="Boné" />
                        <div className="card-text">
                            <h3>Boné</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Est quaerat fugit placeat, asperiores ex ab corrupti doloribus at enim
                                commodi amet omnis exercitationem beatae maxime harum eaque esse.
                            </p>
                        </div>
                        <button
                            type="button"
                            className="btn"
                        >
                            <a href="https://www.google.com.br/">Leia Mais</a>
                        </button>
                    </S.Card>
                </SwiperSlide>
                <SwiperSlide
                    style={{

                        boxShadow: "0 1px 10px #ccc",
                        maxWidth: "350px",
                        borderRadius: "20px",
                        width: "100%",

                        display: "block"
                    }}
                >
                    <S.Card
                        style={{
                            height: "100%"
                        }}
                    >
                        <img src={celular} alt="Celular" />
                        <div className="card-text">
                            <h3>Celular</h3>
                            <p>
                                O Moto E20 é um smartphone projetado para oferecer o que você mais precisa
                                para se conectar: tecnologia e agilidade.
                                Ideal para quem valoriza cada momento e precisa dos melhores itens ao lado.

                            </p>
                        </div>
                        <button
                            type="button"
                            className="btn"
                        >
                            <a href="https://www.google.com.br/">Leia Mais</a>
                        </button>
                    </S.Card>
                </SwiperSlide>
                <SwiperSlide
                    style={{

                        boxShadow: "0 1px 10px #ccc",
                        maxWidth: "350px",
                        borderRadius: "20px",
                        width: "100%",

                        display: "block"
                    }}
                >
                    <S.Card
                        style={{
                            // width: "350px",
                            height: "100%"
                        }}
                    >
                        <img src={fone} alt="Fone de Ouvido" />
                        <div className="card-text">
                            <h3>Fone de Ouvido Bluetooth AirDots 2 Original</h3>
                            <p>
                                Qualidade de som que enriquece todas as viagens acústicas.
                                Dois microfones ajudam a bloquear o som indesejado.
                                Os fones de ouvido mais leves que já criamos.
                            </p>
                        </div>
                        <button
                            type="button"
                            className="btn"
                        >
                            <a href="https://www.google.com.br/">Leia Mais</a>
                        </button>
                    </S.Card>
                </SwiperSlide>


            </Swiper>
        </S.Container>
    );
}
