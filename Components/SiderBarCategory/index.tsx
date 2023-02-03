import * as S from './styles';
import icon1 from '../../assets/images/category/cat1.png';
import icon2 from '../../assets/images/category/cat2.png';
import icon3 from '../../assets/images/category/cat3.png';
import icon4 from '../../assets/images/category/cat4.png';
import icon5 from '../../assets/images/category/cat5.png';
import icon6 from '../../assets/images/category/cat6.png';
import icon7 from '../../assets/images/category/cat7.png';
import icon8 from '../../assets/images/category/cat8.png';
import icon9 from '../../assets/images/category/cat9.png';
import icon10 from '../../assets/images/category/cat10.png';
import icon11 from '../../assets/images/category/cat11.png';
export default function SiderBarCategory() {
    return (
        <>
            <S.Container>
                <div className="containerBox">
                    <div className='box'>
                        <img src={icon1} alt="modas" />
                        <span>Modas</span>
                    </div>
                    <div className='box'>
                        <img src={icon2} alt="eletronicos" />
                        <span>Eletronicos</span>
                    </div>
                    <div className='box'>
                        <img src={icon3} alt="carros" />
                        <span>Carros</span>
                    </div>
                    <div className='box'>
                        <img src={icon4} alt="casa" />
                        <span>Casa</span>
                    </div>
                    <div className='box'>
                        <img src={icon5} alt="Presentes" />
                        <span>Presentes</span>
                    </div>
                    <div className='box'>
                        <img src={icon6} alt="Músicas" />
                        <span>Músicas</span>
                    </div>
                    <div className='box'>
                        <img src={icon7} alt="Saúde e Beleza" />
                        <span>Saúde & Beleza</span>
                    </div>
                    <div className='box'>
                        <img src={icon8} alt="Pets" />
                        <span>Pets</span>
                    </div>
                    <div className='box'>
                        <img src={icon9} alt="Brinquedos" />
                        <span>Brinquedos</span>
                    </div>
                    <div className='box'>
                        <img src={icon10} alt="Mantimentos" />
                        <span>Mantimentos</span>
                    </div>
                    <div className='box'>
                        <img src={icon11} alt="Livros" />
                        <span>Livros</span>
                    </div>
                    <div className="boxButton">
                        <button
                            type="button"
                            className="btnSeeMore"
                        >
                            Ver mais
                        </button>
                    </div>
                </div>
            </S.Container>
        </>
    )
}
