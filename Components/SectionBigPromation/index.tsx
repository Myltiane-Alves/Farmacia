import * as S from './styles'
import { AiOutlineCaretRight } from 'react-icons/ai'
import fone from '../../images/discount/discount-1.png';
import smarttv from '../../images/discount/discount-2.png';
import ps4 from '../../images/discount/discount-3.png';
import netgeaar from '../../images/discount/discount-4.png';
import altofalante from '../../images/discount/discount-5.png';
import phonehd from '../../images/discount/discount-7.png';
import hd from '../../images/discount/discount-8.png';
import cftv from '../../images/discount/discount-9.png';
import Image from 'next/image';
import newproduct from '../../images/new.png';

export default function BigPromation(){
  return (
    <S.Container>
      <div className="containerContent">
        <header>
          <div className="containerTextLeft">
            <Image src={newproduct} alt="novidades" />
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
              <Image src={fone} alt="Fone de ouvido" />
            </div>
            <h4>Fone de Ouvido</h4>
            <p>R$ 120,00</p>
          </div>

          <div className="contentProdruct">
            <div className="containerImg">
              <Image src={altofalante} alt="Alto-falantes portáteis de Blueeto" />
            </div>
            <h4>Alto-falante</h4>
            <p>R$ 250,00</p>
          </div>
          <div className="contentProdruct">
            <div className="containerImg">
              <Image src={smarttv} alt="Smart TV Sony" />
            </div>
            <h4>Smart TV Sony</h4>
            <p>R$ 3.500,00</p>
          </div>
          <div className="contentProdruct">
            <div className="containerImg">
              <Image src={ps4} alt="PlayStation 4" />
            </div>
            <h4>PlayStation</h4>
            <p>R$ 5.000,00</p>
          </div>
          <div className="contentProdruct">
            <div className="containerImg">
              <Image src={netgeaar} alt="Arlo Hd Sistema De Vigilância 4 Câmeras + Acessórios" />
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
