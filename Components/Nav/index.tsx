import * as S from './styles';
import React, { useState, useCallback } from 'react';
import { AiOutlineClose, AiOutlineAlignRight } from "react-icons/ai";
import logo from '../../images/favicon.png';
import MobileMenu from './MobileMenu';
import Image from 'next/image';
import Link from 'next/link';

const NavBar: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const OpenMobileMenu = useCallback(() => {
    setMobileMenu(oldValue => !oldValue);
  }, []);
  return (
    <>
      <S.Container>
        <S.Nav>
          <div className='logoMenu'>
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
          </div>
          <button
            className="mobileMenu"
            type="button"
            onClick={OpenMobileMenu}
            aria-label="Open Menu"
          >
            <AiOutlineAlignRight size={25} />
          </button>
          {mobileMenu && <MobileMenu openMobileMenu={OpenMobileMenu} />}
          <nav>

            <ul >
              <li><Link href="/">Home</Link> </li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contato</Link></li>
              <li><Link href="/shop">Loja</Link></li>
              <li><Link href="/">Pages</Link></li>
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
              <li>

              </li>
            </ul>
          </nav>
        </S.Nav>
      </S.Container>

    </>
  )
}

export default NavBar;
