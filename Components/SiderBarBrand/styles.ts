import styled from "styled-components";

export const Container = styled.aside`
  flex-direction: column;
  width: 23%;
  height: 510px;
  box-shadow: rgb(43 52 69 / 10%) 0px 4px 16px;
  background-color:  #fff;
  padding: 30px 0;
  border-radius: 5px;
  margin-top: 5px;
  display: none;
  header {
      .containerHeader {
        display: flex;
        justify-content: space-around;
        padding: 30px;

        h2 {
            font-size: 20px;
            text-transform: capitalize;
            color: #4b566b;
            line-height: 30px;
        }
        hr {
            height: 5px  rgba(0, 0, 0, 0.5) !important;
            width: 3px;
            background-color: #4b566b;
            margin: 0;
            padding: 0;
        }
    }
  }
  .containerBox {
    padding: 30px;
    .box {
    background-color: #f6f9fc;
    margin: 15px 0;
    padding: 5px 10px;
    transition: 0.5s;
    border-radius: 5px;
    display: flex;
    padding: 0 20px;
    height: 60px;
    :hover {
        background-color: #e9f0f7;
    }
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
  }
  @media (min-width: 768px) {
    height: 120vh;
    width: 30%;
    display: grid;
    header {
        height: auto;
    }
    .containerBox {
        padding:  20px;
    }
  }
  @media (min-width: 1024px) {
    height: 120vh;
    width: 30%;

  }

`;
