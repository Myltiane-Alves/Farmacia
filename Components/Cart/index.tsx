import * as S from './styles'
import ButtonAdd from '../Buttons/ButtonAdd'
import ButtonRemove from '../Buttons/ButtonMinus'
import { IoIosClose } from "react-icons/io";
import ButtonMinus from '../Buttons/ButtonMinus';
import oculos from '../../assets/images/arrivals/arrivals1.png'
import Button from '../Buttons/Button';
import { Link } from 'react-router-dom';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

export default function Cart() {
    return (
        <S.Container>
            <div className="containerCart">
                <div className="cartDetails">
                    <div className="cartListProduct">
                        <div className="containerImg">
                            <img src={oculos} alt="oculos" />
                        </div>
                        <div className="detailsCard">
                            <h3>Oculos de Sol</h3>
                            {/* <h4>Preço</h4>
                            <span>R$ 50,00</span> */}
                            <div className="productPrice">
                                <h4>Preço</h4>
                                <span>R$ 50,00</span>
                            </div>
                            <div className="containerButton">
                                {/* <div className="removeCart">
                                <IoIosClose />
                            </div> */}
                                <div className="contentButton">
                                    <ButtonAdd />
                                    <span>1</span>
                                    <ButtonMinus />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="totalProduct">
                    <h4>Finalize sua Compra</h4>
                    <div className="totalPrice">
                        <p>Items </p>
                        <span>1</span>
                    </div>
                    <div className="totalPrice">
                        <p>Entrega </p>
                        <span>Grátis</span>
                    </div>
                    <div className="totalPrice">
                        <p>Total: </p>
                        <span>R$100,00</span>
                    </div>
                    <div>
                        <button
                         type='button'>
                            <Link to="/checkout">
                                Comprar Agora
                            </Link>

                        </button>
                    </div>
                </div>
            </div>
        </S.Container>
    )
}
