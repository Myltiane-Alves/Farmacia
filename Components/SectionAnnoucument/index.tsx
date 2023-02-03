import * as S from './styles'
import banner1 from '../../assets/images/banner-1.png'
import banner2 from '../../assets/images/banner-2.png'
export default function Announcements() {
  return (
    <S.Container>
      <div className="content">
        <div className="contentImg">
          <img className="relogio" src={banner1} alt="Banner Promoção de Relógio" />
        </div>
        <div className="contentImg">
          <img className="mini" src={banner2} alt="Banner Promoção Minimalista" />
        </div>
      </div>
    </S.Container>
  )
}
