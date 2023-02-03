import styled from "styled-components";

export const Container = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  background-color: #0f3460;

  header {
    h1 {
        font-size: 32px;
        line-height: 30px;
        color: #fff;
        text-align: center;
    }
  }
  .contactForm {
    flex-direction: column;
    h2 {
      font-size: 32px;
      font-weight: bold;
      text-align: center;
      color: #fff;
      text-align: center;
      line-height: 40px;
    }
    form {
      flex-direction: column;
      padding: 20px;
      width: 80%;
      div {
        display: grid;
        flex-direction: column;
        padding-bottom: 16px;
        label {
          font-size: 16px;
          line-height: 16px;
          padding-right: 32px;
          color: #FFFAFA;
        }
        input {
          /* height: 2.5rem; */
          border: none;
          padding: 10px;
          border-radius: 5px;
          background-color: #FFFAFA;
        }
        input:focus {
          background-color: #ededed;
          border: none;
        }
        textarea {
          height: 200px;
          width: 100%;
          border: none;
          border-radius: 5px;
          background-color: #FFFAFA;
        }
        textarea::placeholder {
          padding-left: 16px;
          padding-top: 16px;
        }
        textarea:hover {
          background-color: #ededed;
        }
        textarea:focus {
          background-color: #ededed;
          border: none
        }
        select {
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 2px;
          background-color: #FFFAFA;
        }
      }
      .btn {
        border: none;
        border-radius: 30px;
        padding: 10px 30px;
        transition: 0.5s ease-in-out;
        background-color: #FFFAFA;
        width: 100%;
        max-width: 300px;
        margin: auto;
        cursor: pointer;
        a {
          font-size: 16px;
          color: #156ac9;
          line-height: 32px;
          font-weight: 600;

        }
      }
      .btn:hover {
        background-color: #f1f0f0;
        transition: all 0.5s ease-in-out;
      }
    }
  }
  .address {
    h2 {
        font-size: 32px;
        font-weight: bold;
        text-align: center;
        color: #fff;
        text-align: center;
        line-height: 40px;
    }
    .addressInfo {

      flex-direction: column;
      padding-left: 15px;
      div {
        width: 340px;
        h3 {
          color: #fff;
          text-align: initial;
        }
        p {
          font-size: 15px;
          color: #d1cece;
          text-align: initial;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .content {

        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .contactForm {

    }
  }
  @media (min-width: 1280px) {
    /* display: flex; */
    .content {
        padding: 50px;
        .contactForm {
          width: 90%;
        }
        .address {
          h2 {
            font-size: 40px;
          }
          .addressInfo {
            display: grid;
            grid-template-columns: 1fr 1fr;

          }
        }
        .contactInfo {
          width: 50%;
          h2 {
            font-size: 40px;
          }
          .email {
            padding-top: 32px;
            p {
              font-size: 24px;
            }
          }
          .phone {
            padding-top: 32px;
            p {
              font-size: 24px;
            }
          }
          .github {
            padding-top: 32px;
            p {
              font-size: 24px;
            }
          }
          .address {
            width: 50%;
            padding-top: 16px;
            display: block;
            p {
              font-size: 24px;
              line-height: 36px;
            }
            ul {
              margin: 0;
              li {
                font-size: 20px;
                line-height: 36px;
                color: #FFFAFA;
                list-style: none;
              }
            }
          }
        }

    }
    width: 100%;
  }
`;
