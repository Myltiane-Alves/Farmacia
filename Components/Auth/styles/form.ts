import styled from "styled-components";

export const Container = styled.form`
    form {
        flex-direction: column;
        padding: 0 20px;
        width: 100%;
        .fields {
            flex-direction: column;
        }
        .field {
            position: relative;
            flex-direction: column;
            width: 100%;
            margin-bottom: 20px;
            label {
                color: var(--gray-3);
                font-size: 14px;
                position: absolute;
                z-index: 2;
                left: 10px;
                top: 10px;
                transition: color .3s ease-in-out;
            }
            input, textarea, select {
                line-height: 1.5em;
                padding: 10px;
                padding-top: 33px;
                font-size: 16px;
                color: var(--dark-0);
                outline: none;
                font-family: 'Open Sans';
                border: var(--gray-3) 1px solid;
                border-radius: 5px;
                position: relative;
                z-index: 1;
                top: 0;
                transition: border-color .3s ease-in-out;
                width: 100%;
                background-color: transparent;
                &[readonly] {
                    border: none;
                    color: var(-black);
                    font-weight: bold;
                    font-size: 22px;
                    padding-bottom: 0;
                    text-transform: uppercase;
                    + label {
                        color: var(--gray-0);
                        text-transform: uppercase;
                    }
                }
                &:focus {
                    border-color: var(--green);
                    + label {
                        color: var(--green);
                    }
                }
            }
        }
        .actions {
            justify-content: flex-end;
            align-items: center;
            flex-direction: row;
        }
        button {
            @include button-green;
        }
    }
    @media (min-width: 992px) {
        form {
            .fields {
                flex-direction: row;
                .field {
                    margin-right: 20px;
                    &:last-child {
                        margin-right: 0;
                    }
                    textarea {
                        min-height: 250px;
                    }
                }
            }
            button {
                max-width: 340px;
            }
        }
    }

`;

