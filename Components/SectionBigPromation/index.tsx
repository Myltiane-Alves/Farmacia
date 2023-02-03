import * as S from './styles'
import { AiOutlineCaretRight } from 'react-icons/ai'
import fone from '../../assets/images/discount/discount-1.png';
import smarttv from '../../assets/images/discount/discount-2.png';
import ps4 from '../../assets/images/discount/discount-3.png';
import netgeaar from '../../assets/images/discount/discount-4.png';
import altofalante from '../../assets/images/discount/discount-5.png';
import phonehd from '../../assets/images/discount/discount-7.png';
import hd from '../../assets/images/discount/discount-8.png';
import cftv from '../../assets/images/discount/discount-9.png';

import newproduct from '../../assets/images/new.png';
export default function BigPromation(){
  return (
    <S.Container>
      <div className="containerContent">
        <header>
          <div className="containerTextLeft">
            <img src={newproduct} alt="novidades" />
            <h2>Ofertas em Promoções</h2>
          </div>
          <div className="containerTextRight">
            <span>Ver tudo</span>
            <AiOutlineCaretRight color="#4b566b" fontSize={20}/>
          </div>
        </header>

        <div className="containerProduct">
          <div className="contentProdruct">
            <div className="containerImg">
              <img src={fone} alt="Fone de ouvido" />
            </div>
            <h4>Fone de Ouvido</h4>
            <p>R$ 120,00</p>
          </div>

          <div className="contentProdruct">
            <div className="containerImg">
              <img src={altofalante} alt="Alto-falantes portáteis de Blueeto" />
            </div>
            <h4>Alto-falante</h4>
            <p>R$ 250,00</p>
          </div>
          <div className="contentProdruct">
            <div className="containerImg">
              <img src={smarttv} alt="Smart TV Sony" />
            </div>
            <h4>Smart TV Sony</h4>
            <p>R$ 3.500,00</p>
          </div>
          <div className="contentProdruct">
            <div className="containerImg">
              <img src={ps4} alt="PlayStation 4" />
            </div>
            <h4>PlayStation</h4>
            <p>R$ 5.000,00</p>
          </div>
          <div className="contentProdruct">
            <div className="containerImg">
              <img src={netgeaar} alt="Arlo Hd Sistema De Vigilância 4 Câmeras + Acessórios" />
            </div>
            <h4>Arlo Hd Sistema De Vigilância</h4>
            <p>R$ 2.500,00</p>
          </div>
          {/* <div className="contentProdruct">
            <div className="containerImg">
              <img src={hd} alt="Dune HD RealBox 4K" />
            </div>
            <h4>Dune HD RealBox 4K</h4>
            <p>R$ 750,00</p>
          </div>
          <div className="contentProdruct">
            <div className="containerImg">
              <img src={cftv} alt="CFTV SONY " />
            </div>
            <h4>CFTV Sony</h4>
            <p>R$ 350,00</p>
          </div>
          <div className="contentProdruct">
            <div className="containerImg">
              <img src={phonehd} alt="Lifesize Phone HD" />
            </div>
            <h4>Lifesize Phone HD</h4>
            <p>R$ 350,00</p>
          </div> */}

        </div>

      </div>
    </S.Container>
  )
}
