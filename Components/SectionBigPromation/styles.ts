import styled from "styled-components";

export const Container = styled.section`
  background-color: #f6f9fc;
  padding: 50px ;
  .containerContent{
    margin: auto;

    header {
      background-color: #f6f9fc;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      .containerTextLeft {
        display: flex;
        align-items: center;
        h2 {
          font-size: 32px;
          color: #e94560;
          line-height: 30px;
          margin: 0;
        }
      }
      .containerTextRight {
        align-items: center;
        padding: 20px;
        display: flex;
        justify-content: inherit;
        span {
          font-size: 16px;
          color: #e94560;
        }
      }
    }
    .containerProduct {
        flex-direction: column;
        padding: 20px;
        .contentProdruct {
            background-color: #FFF;
            width: 200px;
            padding: 10px;
            position: relative;
            border-radius: 8px;
            box-shadow: rgb(3 0 71 / 9%) 0 1 3;
            margin: 10px;
            flex-direction: column;
        h4 {
          font-size: 22px;
          font-weight: 500;
          color: #000;
          margin: 0px;
          line-height: 30px;
        }
        p {
          font-size: 16px;
          font-weight: 500;
          color: #e94560;
          margin: 0px;
          line-height: 25px;
        }
        .containerImg {
          width: 182px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      @media (min-width: 768px) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 30px;
          width: 100%;
      }
      @media (min-width: 1024px) {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 30px;
          width: 100%;
      }
      @media (min-width: 1200px) {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          grid-gap: 30px;
          width: 100%;
          padding: 0;
      }
    }
  }
`;
