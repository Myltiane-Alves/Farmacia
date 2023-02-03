import styled from "styled-components";

export const Container = styled.section`
  background-color: #f6f9fc;
  height: auto;
  padding: 50px;
  header {
    padding-top: 20px;
    h2 {
      font-size: 32px;
      font-weight: 500;
      color: #4b566b;
      line-height: 40px;
      text-align: center;
    }
  }
  .productCards {
    height: auto;
    width: 100%;
    .productCard {
      height: auto;
      background: #fff;
      padding: 20px;
      position: relative;
      border-radius: 8px;
      box-shadow: rgb(3 0 71 / 9%) 0px 1px 3px;
      margin: 10px;
      .imgIcon {
        margin: auto;
        width: 70px;
        height: 70px;
        line-height: 70px;
        margin-bottom: 20px;
        img {
          width: 100%;
        }
      }
      h3 {
        font-size: 25px;
        font-weight: 500;
        line-height: 32px;
        color: #1a1a1a;
        text-align: center;
      }
      p {
        font-size: 16px;
        font-weight: 600;
        color: #4b566b;
        text-align: center;
      }
    }
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1200px) {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media (min-width: 768px) {
    header {
        h2 {
            font-size: 48px;
            line-height: 60px;
            font-weight: 700;
        }
    }

  }
  @media (min-width: 1024px) {
    padding: 50px;
      header {
          h2 {
              font-size: 48px;
              line-height: 60px;
        font-weight: 700;
      }
    }
  }
`;
