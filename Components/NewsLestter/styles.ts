import styled from "styled-components";

export const Container = styled.section`
  background-color: #0f3460;
  display: flex;
  flex-direction: column;
  padding: 10px;
  .containerIcon {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    h2 {
      font-size: 32px;
      font-weight: 700;
      color: #fff;
    }
    p {
      font-size: 16px;
      color: #fff;

    }
    .icon {
      color: #fff;
      font-size: 32px;
    }
  }
  .containerInput {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    padding-left: 20px;
    form {
      display: flex;
      align-items: center;
      justify-content: center;
      align-content: center;
      /* justify-content: space-between; */
      width: 100%;
      .field {
        width: 100%;
        input {
          width: 100%;
          height: 50px;
          border: none;
          border-radius: 5px;
          padding: 0 20px;
          font-size: 16px;
          color: #111;
          margin-bottom: 20px;
          margin-top: 20px;
        }
        button {

          width: 50%;
          height: 50px;
          background-color: #bdddff;
          /* background-color: #e9ecef; */
          /* background-color: #EBEFF4; */
          border: 1px solid #e9ecef;
          transition: all 1.5s;
          border-radius: 5px;
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 20px;
          margin-top: 20px;
          :hover {
            background-color: #f8f9fa;
          }
        }
      }
    }
  }
  @media  (min-width: 768px) {
    display: grid;
    grid-template-columns:  1fr;
    align-items: center;
    justify-content: center;
    align-content: center;
    .containerInput {
        padding-left: 100px;
    }
  }
  @media  (min-width: 1200px) {
    .containerInput {
        padding-left: 100px;
        form {
            width: 60%;
        }
    }
  }
`;
