import { AiOutlineCaretRight } from 'react-icons/ai'
import * as S from './styles'
import oculos from '../../assets/images/top/category-3.png'

export default function MainCategories() {
  return (
    <S.Container>
      <header>
        <div className="containerTextLeft">
          <h2>Categorias Principais</h2>
        </div>
        <div className="containerTextRight">
          <span>Ver tudo</span>
          <AiOutlineCaretRight color="#4b566b" fontSize={20}/>
        </div>
      </header>
      <div className="containerHeading">
          <div className="boxProduct">
            <div className="nameTop">
              <span className="textLeft">Sunglass</span>
              <span className="textRight">R$ 150,00 </span>
              <div className="containerImg">
                <img src={oculos} alt="oculos" />
              </div>
            </div>
          </div>
          <div className="boxProduct">
            <div className="nameTop">
              <span className="textLeft">Sunglass</span>
              <span className="textRight">R$ 150,00 </span>
              <div className="containerImg">
                <img src={oculos} alt="oculos" />
              </div>
            </div>
          </div>
          <div className="boxProduct">
            <div className="nameTop">
              <span className="textLeft">Sunglass</span>
              <span className="textRight">R$ 150,00 </span>
              <div className="containerImg">
                <img src={oculos} alt="oculos" />
              </div>
            </div>
          </div>
      </div>
    </S.Container>
  )
}
