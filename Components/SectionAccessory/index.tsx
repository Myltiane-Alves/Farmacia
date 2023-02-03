import { AiOutlineHeart, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai'
import * as S from './styles'
import celular from '../../assets/images/flash/flash-3.png'

import SiderBarBrand from '../SiderBarBrand'

export default function Accessory() {
    return (
        <S.Container>
            <SiderBarBrand />
            <div className="contentCards">
                <header>
                    {/* <h2>Acessórios</h2> */}
                </header>
                <div className="cardsProduct">
                    <div className="product">
                        <div className="content">
                            <span> 40% off</span>
                            <img src={celular} alt="celular" />
                            <div className="productLike">
                                <label htmlFor="">1</label> <br />
                                <AiOutlineHeart className='heart' />
                            </div>
                        </div>
                        <div className="productDetails">
                            <h3>Smart Samsung Preto</h3>
                            <div className="rate">
                                <AiOutlineStar className="star" />
                                <AiOutlineStar className="star" />
                                <AiOutlineStar className="star" />
                                <AiOutlineStar className="star" />
                                <AiOutlineStar className="star" />
                            </div>
                            <div className="price">
                                <h4>R$ 100,00</h4>
                                <button
                                    type="button"
                                >
                                    <AiOutlinePlus />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="content">
                            <img src="" alt="" />
                            <span> 40% off</span>
                            <img src={celular} alt="celular" />
                            <div className="productLike">
                                <label htmlFor="">1</label> <br />
                                <AiOutlineHeart className='heart' />
                            </div>
                        </div>
                        <div className="productDetails">
                            <h3>Smart Samsung Preto</h3>
                            <div className="rate">
                                <AiOutlineStar className="star" />
                                <AiOutlineStar className="star" />
                                <AiOutlineStar className="star" />
                                <AiOutlineStar className="star" />
                                <AiOutlineStar className="star" />
                            </div>
                            <div className="price">
                                <h4>R$ 100,00</h4>
                                <button
                                    type="button"
                                >
                                    <AiOutlinePlus />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="content">
                            <img src="" alt="" />
                            <span> 40% off</span>
                            <img src={celular} alt="celular" />
                            <div className="productLike">
                                <label htmlFor="">1</label> <br />
                                <AiOutlineHeart className='heart' />
                            </div>
                        </div>
                        <div className="productDetails">
                            <h3>Smart Samsung Preto</h3>
                            <div className="rate">
                                <AiOutlineStar className="star" />
                                <AiOutlineStar className="star" />
                                <AiOutlineStar className="star" />
                                <AiOutlineStar className="star" />
                                <AiOutlineStar className="star" />
                            </div>
                            <div className="price">
                                <h4>R$ 100,00</h4>
                                <button
                                    type="button"
                                >
                                    <AiOutlinePlus />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="content">
                            <img src="" alt="" />
                            <span> 40% off</span>
                            <img src={celular} alt="celular" />
                            <div className="productLike">
                                <label htmlFor="">1</label> <br />
                                <AiOutlineHeart className='heart' />
                            </div>
                        </div>
                        <div className="productDetails">
                            <h3>Smart Samsung Preto</h3>
                            <div className="rate">
                                <AiOutlineStar className="star" />
                                <AiOutlineStar className="star" />
                                <AiOutlineStar className="star" />
                                <AiOutlineStar className="star" />
                                <AiOutlineStar className="star" />
                            </div>
                            <div className="price">
                                <h4>R$ 100,00</h4>
                                <button
                                    type="button"
                                >
                                    <AiOutlinePlus />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </S.Container>
    )
}
