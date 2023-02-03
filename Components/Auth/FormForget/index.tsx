import { Link } from 'react-router-dom';
import * as S from '../styles/styles';
import logo from '../../../assets/images/favicon.png'
import { useForm } from 'react-hook-form';

export default function FormForget() {
    const {register, handleSubmit, reset , formState: { errors }} = useForm();

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
                <form id="auth-forget">
                    <h2>Esqueci a senha</h2>

                    <div className="loadingWrap">
                        <div className="loading">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <p>Por favor, aguarde... </p>
                    </div>

                    <div className="message">
                        <img src="" alt="" />
                        <span>Verifique as instruções no seu e-mail.</span>
                    </div>
                </form>
            </div>

        </S.Container>
    )
}
