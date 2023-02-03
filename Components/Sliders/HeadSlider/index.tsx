
import { SwiperSlide, Swiper } from "swiper/react";
import * as S from "./styles";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import sliderelogio from "../../../assets/images/SlideCard/slide-relogio.png";
import slidetenis from "../../../assets/images/SlideCard/slide-tenis.png";
import slide2 from "../../../assets/images/SlideCard/slide-2.png";



import { Autoplay, Navigation, Pagination } from "swiper";
export default function HeaderSlide() {
    return (
        <S.Container>
            <Swiper
                autoHeight={false}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2000,
                }}
                navigation={true}
                modules={[Pagination, Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>

                    <div className="container">
                        <div className="content">
                            <h1>50% Off Para sua primeira compra</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
                            <button className="colection" type="button"> <a> Visitar Coleções </a></button>
                        </div>
                        <div className="slideRight">
                            <img src={slidetenis} alt="médico com uma criança" width="100%" className="tenis"/>
                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide>

                    <div className="container">
                        <div className="content">
                            <h1>50% Off Para sua primeira compra</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
                            <button className="colection" type="button"> <a> Visitar Coleções </a></button>
                        </div>
                        <div className="slideRight">
                            <img src={sliderelogio} alt="médico com uma criança" className="relogio" />
                        </div>

                    </div>
                </SwiperSlide>


            </Swiper>
        </S.Container>
    )
}
