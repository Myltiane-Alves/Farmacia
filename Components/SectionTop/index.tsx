import * as S from './styles';
import { FiSearch } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { FaPhoneAlt, FaEnvelope} from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
export default function SectionTop() {
  return (
    <S.Container>
      <div className="content">
        <div className="contentLeft">
            <FaPhoneAlt />
            <span>61 9 9999-9999</span>
            <BiSupport />
            <span> supporte@email.com</span>
        </div>

        <div className="contontentRight">
            <span>text</span>
            <span>text</span>
            <span>text</span>
            <span>text</span>
        </div>
      </div>
    </S.Container>
  );
}
