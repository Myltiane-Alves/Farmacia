import * as S from './styles'
import ButtonAdd from '../Buttons/ButtonAdd'

import { IoIosClose } from "react-icons/io";
import ButtonMinus from '../Buttons/ButtonMinus';
import oculos from '../../assets/images/arrivals/arrivals1.png'
import ButtonRemover from '../Buttons/ButtonRemover';

export default function SectionCheckout() {
    return (
        <S.Container>
            <div className="containerCart">
                <div className="cartDetails">
                    <div className="description">
                        <header>
                            <h2>Endereço de Entrega</h2>
                            <span>Informe o endereço onde deseja receber seu pedido</span>
                        </header>
                    </div>
                    <div className="cartContent">

                        <div className="cartListProduct">
                            <div className="containerImg">
                                <img src={oculos} alt="oculos" />
                            </div>
                            <div className="detailsCard">

                                <div className="detailsDescription">
                                    <h3>Oculos de Sol</h3>
                                    <p>Cartier</p>
                                </div>

                                <div className="productPrice">
                                    <h4>Preço</h4>
                                    <span>R$ 50,00</span>
                                </div>
                                <div className="containerButton">
                                    <div className="contentButton">
                                        <ButtonAdd />
                                        <span>1</span>
                                        <ButtonMinus />
                                    <ButtonRemover />
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
                                <p>Desconto </p>
                                <span>10%</span>
                            </div>
                            <div className="totalPrice">
                                <p>Total: </p>
                                <span>R$100,00</span>
                            </div>
                            <div className="totalPrice">
                                <button className="btnFinal">Confirmar Pedido</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="orderComplete">
                    <div className="formPayment">
                        <div className="orderDescription">
                            <header>
                                <h3>Endereço de Entrega</h3>
                                <span>Informe o endereço onde deseja receber seu pedido</span>
                            </header>

                        </div>
                        <div className="paymentForm">
                            <form action="">
                                <div className="fields">
                                    <div className="field">
                                        <input
                                            type="text"
                                            placeholder="Endereço"
                                        />
                                    </div>
                                    <div className="field">
                                        <input
                                            type="text"
                                            placeholder="CEP"
                                        />
                                    </div>
                                    <div className="field">
                                        <input
                                            type="text"
                                            placeholder="Número"
                                        />
                                    </div>
                                    <div className="field">
                                        <input
                                            type="text"
                                            placeholder="Complemento"
                                        />
                                    </div>
                                    <div className="field">
                                        <input
                                            type="text"
                                            placeholder="Bairro"
                                        />
                                    </div>
                                    <div className="field">
                                        <input
                                            type="text"
                                            placeholder="Cidade"
                                        />
                                    </div>
                                    <div className="field">
                                        <input
                                            type="text"
                                            placeholder="Estado"
                                        />
                                    </div>
                                    <div className="field">
                                        <input
                                            type="text"
                                            placeholder="Pais"
                                        />
                                    </div>

                                </div>

                            </form>
                        </div>

                    </div>

                    <div className="paymentCard">
                        <header>
                            <h3>Pagamento</h3>
                            <p>Escolha a forma de Pagamento</p>
                        </header>
                        <div className="containerButton">
                            <div>
                                <button type="button">Cartão de crédito</button>
                            </div>
                            <div>
                                <button type="button">cartão de débito</button>
                            </div>
                            <div>
                                <button type="button">dinheiro</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </S.Container>
    )
}


<div>
    <div className="info">
        <p className="price">R$ 100,00</p>
        <div className="contentImg">
            <img src="" alt="" />
        </div>
        <div className="content">
            <p>Expresso Tradicional</p>
            <div className="contentButton">
                <ButtonAdd />
                <span>1</span>
                <ButtonMinus />
            </div>
        </div>


    </div>
</div>
