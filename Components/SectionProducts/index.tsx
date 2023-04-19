import * as S from './styles'
import ButtonAdd from '../Buttons/ButtonAdd'
import ButtonRemove from '../Buttons/ButtonMinus'
import { IoIosClose } from "react-icons/io";
import ButtonMinus from '../Buttons/ButtonMinus';
import oculos from '../../images/arrivals/arrivals1.png'
import Image from 'next/image';
export default function SectionProducts() {
    return (
        <S.Container>
            <div className="containerCart">
                <div className="containerImg">
                    <Image src={oculos} alt="oculos" />
                    <div className="description">
                        <p className="">
                            Características Técnicas:
                            Acompanha: Pano de limpeza e case
                            Formato: Losango
                            Material das Lentes: Resina
                            Material da Armação: Metal
                            Tratamento nas lentes: Proteção UVA e UVB.
                            Tamanho da lente: 52 mm Tamanho da ponte: 23  mm
                            Comprimento da haste: 127 mm
                        </p>
                    </div>
                </div>
                <div className="detailsCard">
                    <h2>Oculos de Sol</h2>

                    <div className="productPrice">
                        <h4>Preço</h4>
                        <span>R$ 50,00</span>
                    </div>
                    <div className="containerButton">


                        <p>Selecione o Tamanho</p>
                        <div className="sizeButtons">
                            <button type="button" className="small">Pequeno</button>
                            <button type="button" className="medium">Médio</button>
                            <button type="button" className="larger">Grande</button>

                        </div>

                        <div className="contentButton">
                            <div className="contentBtnAdd">

                                <button
                                    type="button"
                                    className="btnAdd"
                                >
                                    Adicionar
                                </button>
                            </div>
                            <div className="contentBtnFavorite">

                                <button
                                    type="button"
                                    className="btnFavorite"
                                >
                                    Favoritar
                                </button>
                            </div>
                        </div>


                    </div>
                    {/* <div className="description">
                        <p className="">
                            Características Técnicas:
                            Acompanha: Pano de limpeza e case
                            Formato: Losango
                            Material das Lentes: Resina
                            Material da Armação: Metal
                            Tratamento nas lentes: Proteção UVA e UVB.
                            Tamanho da lente: 52 mm Tamanho da ponte: 23  mm
                            Comprimento da haste: 127 mm
                        </p>
                    </div> */}
                </div>
            </div>
        </S.Container>
    )
}
