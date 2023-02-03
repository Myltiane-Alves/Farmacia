import * as S from './styles';

import { AiOutlineClose, AiOutlineAlignRight } from "react-icons/ai";
import logo from '../../../images/favicon.png';
import Image from 'next/image';
import Link from 'next/link';

interface MobileMenuProps {
  openMobileMenu(): void;
}
const MobileMenu:React.FC<MobileMenuProps> = ({ openMobileMenu }) => {
  return (
    <>
      <S.Container>
        <S.Nav>
          <div className='logoMenu'>
            <Link href="/">
                <Image src={logo} alt="logo" />
            </Link>
          </div>
          <ul >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contato</Link>
              </li>
              <li>
                <Link href="/shop">Loja</Link>
              </li>
              <li>
                <Link href="/">Pages</Link>
              </li>
              <li>
                <div className='containerLogin'>
                  <button
                    type="button"
                    aria-label='Login'
                    className='btnLogin'
                  >
                    <Link href="/login">Login</Link>
                  </button>
                </div>
              </li>
          </ul>
          <div className='containerClose'>
            <button
              type="button"
              aria-label='Close'
              onClick={openMobileMenu}
              className='btnClose'
            >
              <AiOutlineClose className="icon"/>
            </button>
          </div>
        </S.Nav>
      </S.Container>

    </>
  )
}

export default MobileMenu;
