import * as S from './styles';
import delivery from '../../assets/images/delivery.png';
import payment from '../../assets/images/credit-card.png';
import security from '../../assets/images/security.png';
import support from '../../assets/images/support.png';
export default function FeaturedServices() {
  return (
    <S.Container>
      <header>
        <h2> Featured Services </h2>
      </header>
      <div className="productCards">
        <div className="productCard">
          <div className="imgIcon">
            <img src={delivery} alt="Entrega Rápida e Segura" />
          </div>
          <h3>Entrega Rápida</h3>
          <p>
            Oferecemos preços competitivos em nossos mais de 100 milhões
            de produtos em qualquer faixa.
          </p>
        </div>
        <div className="productCard">
          <div className="imgIcon">
            <img src={payment} alt="Pagamento Seguro" />
          </div>
          <h3>Pagamento Seguro</h3>
          <p>
            Oferecemos preços competitivos em nossos mais de 100 milhões
            de produtos em qualquer faixa.
          </p>
        </div>
        <div className="productCard">
          <div className="imgIcon">
            <img src={security} alt="Compre com Confiança" />
          </div>
          <h3>Compre com Confiança</h3>
          <p>
            Oferecemos preços competitivos em nossos mais de 100 milhões
            de produtos em qualquer faixa.
          </p>
        </div>
        <div className="productCard">
          <div className="imgIcon">
            <img src={support} alt="Suporte 24 horas por dia1 7 dias por semana" />
          </div>
          <h3>Suporte 24 horas por dia1 7 dias por semana</h3>
          <p>
            Oferecemos preços competitivos em nossos mais de 100 milhões
            de produtos em qualquer faixa.
          </p>
        </div>

      </div>
    </S.Container>
  );
}
