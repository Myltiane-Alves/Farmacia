import { Link } from 'react-router-dom';
import * as S from '../styles/styles';
import logo from '../../../assets/images/favicon.png'
import { useForm } from 'react-hook-form';

export default function FormEmail() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    return (
        <S.Container>
            <div className="contactForm">
                <header>
                    <Link to="/home">
                        <a>
                            <img src={logo} alt="logo" />
                        </a>
                    </Link>

                </header>
                <form id="auth-email">

                    <h2>Autenticação</h2>
                    <div className="fields">
                        <div className="field">
                            <input
                                type="email"
                                placeholder="E-mail"
                                {...register("E-mail", {
                                    required: "Email é Obrigatório",
                                    // onChange: (e) =>
                                })}
                            />
                            {/* <label htmlFor="E-mail">E-mail</label> */}
                        </div>

                    </div>
                    <div className="containerBtn">
                        <div>
                            <Link to="/register">
                                <a href="/register">Criar Conta</a>
                            </Link>
                            <button type="submit" className="btn">
                                <a href="/auth">Próxima </a>
                            </button>
                        </div>
                    </div>
                </form>
                <p>2022 Myltiane © All Rights reserved</p>

            </div>


        </S.Container>
    )
}
