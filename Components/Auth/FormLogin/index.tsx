import { Link } from 'react-router-dom';
import * as S from '../styles/styles';
import logo from '../../../assets/images/favicon.png'
import { useForm } from 'react-hook-form';
import { useAuth } from '../AuthContext';
import { FormDataLogin } from '../../../types/Auth/FormDataLogin';

export default function FormLogin() {
    const { register, handleSubmit,} = useForm();
    const { email, onSubmitLogin } = useAuth();

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

                <form id="auth-login" onSubmit={handleSubmit<FormDataLogin>(onSubmitLogin)}>
                    <h2>Login</h2>
                    <div className="fields">
                        <div className="field">
                            <input
                                type="text"
                                placeholder="E-mail"
                                {...register("Email", {
                                    required: "Preencha o e-mail",
                                })} readOnly value={email}
                            />
                        </div>

                        <div className="field">
                            <input type="password" placeholder="Senha"
                                {...register("Senha", {
                                    required: "Preencha a senha",
                                })}
                            />
                            {/* <label htmlFor="password">Digite sua Senha</label> */}
                        </div>
                    </div>

                    <div className="containerBtn">
                        <div>
                            <Link to="/forget">
                                <a href="">Esqueceu sua senha?</a>
                            </Link>
                            <button type="submit" className="btn">Login</button>
                        </div>
                    </div>
                </form>
            </div>

        </S.Container>
    )
}
