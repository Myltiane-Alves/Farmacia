import * as S from './styles'
import banner1 from '../../images/banner-1.png'
import banner2 from '../../images/banner-2.png'
import Image from 'next/image'
export default function Announcements() {
  return (
    <S.Container>
      <div className="content">
        <div className="contentImg">
          <Image className="relogio" src={banner1} alt="Banner Promoção de Relógio" />
        </div>
        <div className="contentImg">
          <Image className="mini" src={banner2} alt="Banner Promoção Minimalista" />
        </div>
      </div>
    </S.Container>
  )
}
