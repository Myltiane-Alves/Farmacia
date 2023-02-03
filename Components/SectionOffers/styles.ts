import styled from "styled-components";

export const Container = styled.section`
  background-color: #f6f9fc;
  height: auto;
  padding: 50px;
  .cardsProduct {

    height: auto;
    display: flex;
    width: 100%;
    padding: 13px;
    .product {
      height: auto;
      width: 200px;
      background-color: #fff;
      padding: 20px;
      position: relative;
      border-radius: 10px;
      box-shadow:  rgba(3, 0, 71 / 9%) 0 1px 3px;
      margin: 10px;
      border: 1px solid #e6e6e6;
      .content {
        width: 190px;
        span {
          background-color: #e94560;
          position: absolute;
          top: 0;
          left: 0;
          padding: 3px 10px;
          font-size: 12px;
          font-weight: 500;
          color: #fff;
          border-radius: 50px;
          margin: 10px;
        }

        .productLike {
          flex-direction: column;
          position: absolute;
          top: 0;
          right: 0;
          margin: 10px;
          transition: 0.5s;
          label {
            background-color: #0f3460;
            padding: 5px 10px;
            font-size: 12px;
            color: #fff;
            border-radius: 50px;
          }
          .heart {
            font-size: 32px;
            color: red;
            margin: 10px 3px;
          }
        }
        img {
          width: 80%;
        }
      }
      .productDetails {
        flex-direction: column;
        width: 200px;
        h3 {
          font-size: 16px;
          line-height: 18px;
          font-weight: 500;
          color: #0f3460;
          margin:  0;
        }
        .rate {
          .star {
            color: #ffcd4e;
            font-size: 15px;
            margin: 0 3px;
          }
        }
        .price {

          margin: 0px ;
          width: 200px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #e94560;
          h4 {
            font-size: 16px;
            font-weight: 700;
            line-height: 18px;
            margin: 0;
          }
          button {
            background: none;
            color: #e94560;
            font-size: 25px;
            transition: 0.5s;
            border: 1px solid rgb(3 0 71 / 9%);
            width: 40px;
            height: 30px;
            border-radius: 5px;
          }
        }
      }
    }

    @media(min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      .product {
        width: 75%;
      }
    }
    @media(min-width: 1024px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      .product {
        width: 75%;
      }
    }
    @media(min-width: 1200px) {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      .product {
        width: 75%;
      }
    }
  }
`;
