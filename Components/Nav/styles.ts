import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 130px;
  /* background-color: red; */
  box-shadow: -1px 15px 17px -8px rgb(0 0 0 / 10%);
`;

export const Nav = styled.div`
  max-width: 1230px;
  padding: 0 2rem;
  height: 130px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;

  .logoMenu {
    top: 10px;
    a {
      img {
        width: 80px;
      }
    }
  }

  button.mobileMenu {
    display: none;
  }

  @media (max-width: 768px) {
    button.mobileMenu {
      display: flex;
      padding: 16px;
      font-size: 32px;
      background: transparent;
      color: #6996fa;
      border: 1px solid #fdfdfd;
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
    }

    nav {
      display: none;
    }
  }

  @media (max-width: 500px) {
    button.mobileMenu {
      color: #6996fa;
      border: 1px solid #fdfdfd;
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
    }
  }

  nav {
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;

      li {

        line-height: 22px;
        list-style: none;
        a {
          font-size: 24px;
          font-weight: 500;
          transition: filter 0.2s;
          color: #4b566b;
          &:hover {
            filter: brightness(0.9);
          }
        }
        .containerLogin {
          .btnLogin {
            /* padding: 16px 30px; */
            width: 120px;
            height: 45px;
            border-radius: 5px;
            line-height: 20px;
            transition: filter 0.2s;
            background-color: #ec6178;
            border: none;
            a {
              font-size: 20px;
              font-weight: 500;
              color: #fff;

            }
            &:hover {
              filter: brightness(0.9);
            }
          }

        }
      }
    }
  }
`;
