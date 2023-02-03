import styled from "styled-components";

export const Container = styled.aside`
  flex-direction: column;
  width: 23%;
  height: 510px;
  box-shadow: rgb(43 52 69 / 10%) 0px 4px 16px;
  background-color:  #fff;
  padding: 15px 0;
  border-radius: 5px;
  margin-top: 5px;
  display: none;
  .box {
    display: flex;
    padding:  10px;
    img {
      width: 30px;
      height: 30px;
      margin-top: 10px;
      object-fit: contain;
    }
    span {
      margin: 10px 20px;
      font-size: 20px;
      text-transform: capitalize;
      color: #4b566b;
    }
  }
  .boxButton {

      .btnSeeMore {
            width: 100%;
            height: 50px;
            font-size: 20px;
            font-weight: 700;
            color: #fff;
            border: none;
            border-radius: 5px;
            background-color: #bdddff;
            :hover {
                background-color: #ebf1f8;
                color: #4b566b;
            }
      }
  }

  @media (min-width: 768px) {
    height: auto;
    width: 30%;
    display: grid;
    header {
        height: auto;
    }
    .containerBox {
        padding:  20px;
        .boxButton {
            padding-top: 20px;
            button {
                width: 80%;
            }
        }

    }
  }
  @media (min-width: 1024px) {
    height: 120vh;
    width: 30%;

  }
`;
