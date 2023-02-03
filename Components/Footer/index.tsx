import * as S from './styles';
import playStore from '../../assets/images/google-play.png';
export default function Footer() {
    return (
      <S.Container>
        <div className="content">

          <div className="box-1">
            <h2>Shop Mil</h2>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et,
                in gravida. Sit diam duis mauris nulla cursus.
                Erat et lectus vel ut sollicitudin elit at amet.
              </p>

            </div>
            <div className="containerIcons">
              <img src={playStore} alt="Play Store" />
              <span>Google Play</span>
            </div>
          </div>

          <div className="boxLink">
            <h4>Links</h4>
            <ul>
              <li>Home</li>
              <li>Blog</li>
              <li>Loja</li>
              <li>Contato</li>
              <li>Login</li>
            </ul>
          </div>

          <div className="box">
            <h4>Sobre nós</h4>
            <ul>
              <li>Carreiras</li>
              <li>Nossas Lojas</li>
              <li>Nossos cuidados</li>
              <li>Termos e Condições</li>
              <li>Política de Privacidade</li>
            </ul>
          </div>

          <div className="box">
            <h4>Atendimento</h4>
            <ul>
              <li>Centro de ajuda</li>
              <li>Como comprar</li>
              <li>Acompanhe seu Pedido</li>
              <li>Atacado e Varejo</li>
              <li>Devoluções</li>
            </ul>
          </div>

          <div className="box">
            <h4>Endereço</h4>
            <ul>
              <li>
                Brasília - DF
              </li>
              <li>
                Setor Comecial Sul
              </li>
              <li>
                Distrito Federal
              </li>
            </ul>
          </div>
        </div>
      </S.Container>
    )
}
