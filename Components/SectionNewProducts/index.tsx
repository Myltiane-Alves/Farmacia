import * as S from './styles'
import { AiOutlineCaretRight } from 'react-icons/ai'
// import oculos from '../../images/arrivals/arrivals1.png';
// import oculos from '../../public/images/arrivals/arrivals1.png';
// import maquiagem from '../../images/arrivals/arrivals2.png';
// import relogio from '../../images/arrivals/arrivals3.png';
// import batom from '../../images/arrivals/arrivals4.png';
// import planta from '../../images/arrivals/arrivals5.png';
// import arvore from '../../images/arrivals/arrivals6.png';
// import newproduct from '../../images/new.png';
// import { Product } from '../../types/Product';
// import { useDispatch } from 'react-redux';
import Image from 'next/image';

export default function NewProducts(){
    // const dispatch = useDispatch();
  return (
    <S.Container>
      <div className="containerContent">
        <header>
          <div className="containerTextLeft">
            <Image src="/images/new.png" alt="novidades" />
            <h2>Novos Produtos</h2>
          </div>
          <div className="containerTextRight">
            <span>Ver tudo</span>
            <AiOutlineCaretRight color="#4b566b" fontSize={20}/>
          </div>
        </header>

        <div className="containerProduct">
          <div className="contentProdruct">
            <div className="containerImg">
              <Image 
                src="/images/arrivals/arrivals1.png" 
                alt="Oculos de Sol" 
                width={300}
                height={300}  
              />
            </div>
            <h4>Oculos de Sol</h4>
            <p>R$ 150,00</p>
          </div>
          <div className="contentProdruct">
            <div className="containerImg">
              <Image  
                src="/images/arrivals/arrivals2.png" 
                alt="maquiagem" 
                width={300}
                height={300}  
              />
            </div>
            <h4>Maquiagem</h4>
            <p>R$ 250,00</p>
          </div>
          <div className="contentProdruct">
            <div className="containerImg">
              <Image
                src="/images/arrivals/arrivals3.png" 
                alt="smart watch" 
                width={300}
                height={300}   
              />
            </div>
            <h4>Smart Watch</h4>
            <p>R$ 100,00</p>
          </div>
          <div className="contentProdruct">
            <div className="containerImg">
              <Image src="/images/arrivals/arrivals4" alt="Batom" />
            </div>
            <h4>Batom</h4>
            <p>R$ 50,00</p>
          </div>
          <div className="contentProdruct">
            <div className="containerImg">
              <Image 
                src="images/arrivals/arrivals5" 
                alt="Planta Verde" 
                width={300}
                height={300} 
              />
            </div>
            <h4>Planta Verde</h4>
            <p>R$ 100,00</p>
          </div>
          <div className="contentProdruct">
            <div className="containerImg">
              <Image 
                src="images/arrivals/arrivals6" 
                alt="árvore bonsai" 
                width={300}
                height={300}   
              />
            </div>
            <h4>Árvore Bonsai</h4>
            <p>R$ 25,00</p>
          </div>

        </div>

      </div>
    </S.Container>
  )
}
