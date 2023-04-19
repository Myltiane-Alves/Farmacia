import * as S from './styles';
import playStore from '../../images/google-play.png';
import Image from 'next/image';

export default function Footer() {
    return (
      <S.Container>
        <div className="content">
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
