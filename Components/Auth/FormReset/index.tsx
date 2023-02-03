import { Link } from 'react-router-dom';
import * as S from '../styles/styles';
import logo from '../../../assets/images/favicon.png'
import { useForm } from 'react-hook-form';

export default function FormReset() {
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

                <form id="auth-reset">
                    <h2>Redefinir senha</h2>
                    <div className="fields">
                        <div className="field">
                            <input
                                type="text"
                                placeholder="E-mail"
                                {...register("Email", {
                                    required: "Preencha o e-mail",
                                })} readOnly
                            />
                        </div>
                    </div>

                    <div className="containerBtn">
                        <div>
                            <button type="submit" className="btn">Redefinir</button>
                        </div>
                    </div>
                </form>
            </div>
        </S.Container>
    )
}
