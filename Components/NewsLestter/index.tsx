import * as S from './styles'
import { FaRegEnvelope } from 'react-icons/fa'

export default function NewsLetter() {
  return (
    <S.Container>
      <div className="containerIcon">
        <FaRegEnvelope className="icon" />
        <h2>Fique Por Dentro de Nossas Promoções</h2>
        <p> Cadstre-se e receba nossas últimas atualizações e promoções!</p>
      </div>
      <div className="containerInput">
        <form>
          <div className="field">
            <input type="text" placeholder="Digite seu email" />
          </div>
          <div className="field">
            <button type="submit">Enviar</button>
          </div>

        </form>
      </div>
    </S.Container>
  )
}
