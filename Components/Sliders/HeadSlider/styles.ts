import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  height: 130vh;

  @media (min-width: 1200px) {
    height: 100vh;
  }
  .swiper {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    height: 125vh;
    @media (max-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1);
      height: 126vh;
    }

    @media (min-width: 768px) {
        height: 100vh;

      .swiper-wrapper {
        height: 10vh;
        .swiper-slide {
          padding: 40px 0px;
          height: 10px;
          .container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            padding: 50px;
            height: 100vh;
            .content {
              width: 100%;

              h1 {

              }
              p {

              }
            }
            .slideRight {
              width: 100%;
              height: 50vh;
                .tenis {

                    width: 80%;
                }
                .relogio {
                    width: 50% ;

                }
            }
          }
        }

      }
    }

    @media (min-width: 1200px) {
        height: 110vh;
        .swiper-wrapper {
            .swiper-slide {
            padding: 40px 0px;
            .container {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                padding: 50px;
                .content {
                width: 100%;
                padding-top: 50px;
                height: 100%;
                h1 {
                    font-size: 62px;
                    line-height: 60px;
                }
                p {
                    font-size: 20px;
                    line-height: 30px;
                }
                }
                .slideRight {
                    width: 80%;
                    height: 80vh;
                    img {
                        width: 80%;
                    }
                    .relogio {
                        width: 70%;
                    }
                }
            }
            }

        }
    }
  }

   .swiper-wrapper {
      display: flex;
      position: relative;
      width: 100%;
      height: 100%;
      transition-property: transform;
      box-sizing: content-box;
    }

  .swiper-slide {

    padding: 40px 10px;
    width: 100%;
  }

  ul {
    li {
      font-size: 50px;
      background-color: #ec6178;
    }
  }

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-direction: column-reverse;
    justify-content: space-between;

    .content {
      display: flex;
      flex-direction: column;
      height: auto;
      padding-bottom: 20px;
      h1 {
        font-size: 32px;
        line-height: 40px;
        font-weight: 600;
        padding-top: 20px;
        color: #0f3460;
      }

      p {
        font-size: 18px;
        line-height: 30px;
        font-weight: 300;
        color: #4b566b;
      }
      .colection {
        background: #ec6178;
        height: 50px;
        width: 200px;
        border-radius: 5px;
        border: none;

        a {
          color: #fff;
          font-size: 20px;
          line-height: 50px;
          font-weight: 300;
        }
      }
    }
    .slideRight {
      display: flex;
      flex-direction: column-reverse;
      width: 100%;
      height: auto;
      padding-bottom: 30px;

        .tenis {

            width: 80%;
        }
        .relogio {
            width: 50% ;

        }

    }
  }

`;
