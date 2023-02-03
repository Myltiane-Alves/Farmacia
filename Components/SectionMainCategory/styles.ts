import styled from "styled-components";

export const Container = styled.section`
  background-color: #f6f9fc;
  padding: 50px;
  height: auto;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .containerTextLeft {
        align-items: center;
      h2 {
        font-size: 20px;
        font-weight: 600;
        color: #0f3460;
      }
    }
    .containerTextRight {
      align-items: center;
      span {
        font-size: 20px;
        font-weight: 500;
        color: #4b566b;
      }
    }
  }
  .containerHeading {
    .boxProduct {
      background-color: #fff;
      padding: 15px;
      position: relative;
      border-radius: 8px;
      box-shadow:  rgba(3, 0, 71 / 9%) 0 1px 3px;
      margin: 5px;
      height: fit-content;
      .nameTop {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .textLeft {
          left: 0;
        }
        .textRight {
          right: 12px;
          background-color: aliceblue;
          color: #0f3460;

        }
        span {
          background-color: #0f3460;
          color: #fff;
          font-size: 12px;
          font-weight: 500;
          padding: 3px 10px;
          border-radius: 50px;
          margin: 5px 10px;
          position: absolute;
          top: 10px;
        }
        .containerImg {
          width: 100%;
          img {

            width: 100%;
            height: 100%;
            border-radius: 5px;
          }
        }
      }
    }
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
