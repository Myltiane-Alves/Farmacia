import styled from "styled-components";

export const Container = styled.section`
  background-color: #f6f9fc;
  padding: 50px;
  display: flex;
  width: 100%;
  .content {
    display: flex;
    justify-content: space-between;
    .contentImg {
      .mini {
        /* width: 100%; */
      }
    }
    @media(min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      justify-content: space-between;

    }
    @media(min-width: 1024px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-content: space-between;
      width: 90%;
    }

  }

`;
