import * as S from './styles';
import { FiSearch } from "react-icons/fi";
import { RiShoppingBagFill } from "react-icons/ri";
import { FaUserAlt} from "react-icons/fa";
import Link  from "next/link";
import logo from '../../../images/logo.png';
import Image from 'next/image';
export default function ButtonSearch() {
  return (
    <S.Container>
      <div className="content">
        <div className="containerLogo">
            <Image src={logo} alt="logo" />
        </div>

        <div className="contentSearch">
            <FiSearch size={20} className="icon" color="#4b566b" />
            <input type="text" placeholder="Pesquisar" />
            <span>Todas as Categorias</span>
        </div>

        <div className="containerIcon">
            <Link href="/auth">
                <FaUserAlt size={20}  className="icon"/>
            </Link>
            <div className="cart" >
                <Link href="/cart">
                    <RiShoppingBagFill size={20}  className="icon" />
                    {/* <span>Loja</span> */}
                </Link>
            </div>
        </div>
      </div>
    </S.Container>
  );
}
