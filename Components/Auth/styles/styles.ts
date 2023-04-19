import styled from "styled-components";

export const Container = styled.section`
    min-height: 300px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-bottom: 40px;
    display: flex;
    padding: 40px 10px 40px 10px;
    /* background-color: #999999; */

        /* flex-direction: column;
        width: 100%;
        display: flex;
        align-items: center;
        background-color: #0f3460; */
        .contactForm {

            header {
               padding-top: 40px;
               align-items: center;
               display: flex;
               justify-content: center;
               /* text-align-last: center;

               p {
                   font-size: 16px;
                   color: #e94560;
                   font-weight: 500;
                   text-transform: uppercase;
               } */
               a {
                   display: contents;
                   cursor: pointer;
                   img {
                       width: 40%;
                       /* max-width: 25px; */
                   }
               }
           }
           form {
               margin-top: 10px;
               flex-direction: column;
               padding: 0 20px 20px 20px;
               width: 100%;
               max-width: 375px;
               position: relative;
               left: 0;
               h2 {
                   font-size: 28px;
                   font-weight: 600;
                   line-height: 30px;
                   text-align: center;
                   color: #0f3460;
                   text-transform: uppercase
               }
               .fields {
                   width: 330px;
                   display: flex;
                   flex-direction: column;
                   .field {
                       display: flex;
                       flex-direction: column;
                       padding-bottom: 16px;
                       width: 100%;
                       max-width: 330px;
                       input {
                           /* font-size: 20px; */
                           font-weight: 100;
                           outline: none;
                           line-height: 32px;
                           border: none;
                           border: 1px solid #cccccc;
                           border-radius: 5px;
                           position: relative;
                           padding: 10px;
                           /* color: #cccccc; */
                           width: 100%;
                           padding-top: 20px;
                           max-width: 310px;
                           background-color: transparent;
                           transition: all 0.3s ease-in-out;
                       }
                       input:focus {
                           background-color: #ededed33;
                       }
                       /* input::placeholder {
                           color: #cccccc;
                           padding-left: 100px; */
                           /* background-color: #0f3460; */
                           /* color: #333333;
                       } */
                       label {
                           color: #cccccc;
                           font-size: 14px;
                           /* position: absolute; */
                           z-index: 2;
                           left: 35px;
                           /* top: 10px; */
                           transition: color .3s ease-in-out;
                       }
                   }
                   > div {
                       flex-direction: column;
                   }
               }

               .containerBtn {
                   flex-direction: column;
                   width: 330px;
                   div {
                       display: flex;
                       flex-direction: column;
                       align-items: center;
                       justify-content: space-between;
                       padding-top: 20px;
                       width: 100%;
                       .btn {
                           border: none;
                           border-radius: 5px;
                           transition: 0.5s ease-in-out;
                           background-color: #0f3460;
                           /* width: 100%; */
                           min-width: 224px;
                           height: 50px;
                           margin: 0 0 0.75rem;
                           padding: 0.75rem 1rem;
                           cursor: pointer;
                           color: #fff;
                           font-size: 16px;
                           line-height: 32px;
                           font-weight: 600;
                           text-transform: uppercase;
                       }
                       .btn:hover {
                           background-color: #0f3460ad;
                           border: 1px solid #FFFAFA;
                           transition: all 0.5s ease-in-out;
                           color: #FFFAFA;
                       }
                       a {
                           font-size: 16px;
                           color: #0f3460;
                           font-weight: 600;
                           text-decoration: none;
                           cursor: pointer;
                           border: 1px solid #FFFAFA;
                           border-radius: 3px;
                           width: 100%;
                           transition: 0.5s ease-in-out;
                       }
                           a:hover {
                           color: #0f3460ad;
                           border: none;
                           background-color: transparent;
                       }
                   }
                   span {
                       padding-top: 20px;
                       padding-bottom: 20px;
                       font-size: 16px;
                       line-height: 36px;
                       display: block;
                       color: #0f3460;
                   }

               }
               .containerBtnSocial {
                    button {
                        align-items: center;
                        background-color: #fff;
                        border-color: rgba(0,0,0,.1);
                        border-radius: 0.5rem;
                        box-shadow: 0 0 0 0 #000, 0 0 0 0 #000, 0 10px 15px -3px rgba(0,0,0,.2), 0 4px 6px -4px rgba(0,0,0,.1);
                        color: #000;
                        display: flex;
                        font-size: 1.1rem;
                        font-weight: 500;
                        justify-content: center;
                        margin: 0 0 0.75rem;
                        min-height: 62px;
                        padding: 0.75rem 1rem;
                        position: relative;
                        transition: all .1s ease-in-out;
                        cursor: pointer;
                    }
               }
           }
           p {
               color: #999999;
               text-align: center;
           }
        }


    @media (min-width: 768px) {
            /* width: 500px; */
            /* padding: 50px; */
            display: flex;
            .contactForm {

                header {
                    /* display: block; */
                    a {
                        cursor: pointer;
                        align-items: center;
                        img {
                            width: 40%;
                        }
                    }
                }
                form {
                    /* padding: 50px; */
                    align-items: center;
                    width: 100%;
                    max-width: 500px;
                    /* background-color: gray; */
                    h1 {
                    font-size: 40px;
                    text-align: initial;
                    }
                    .fields {
                        width: 100%;
                        max-width: 398px;
                        .field {
                            width: 100%;
                            max-width: 398px;
                            input {
                                width: 100%;
                            }
                        }
                    }
                    .container-btn {
                     text-align: left;
                    }
                }
            }


    }

  @media (min-width: 1280px) {
    .contactForm {
        header {
            padding-top: 20px;
        }
        form {
          .container-btn {
              div {
                  span {
                    font-size: 20px;
                  }
                  .btn {
                    font-size: 20px;
                    line-height: 36px;
                  }
              }
          }

            padding-bottom: 40px;
            padding-top: 10px;
        }
    }

  }
`;
