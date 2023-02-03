import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState, createContext, useContext, useCallback, useEffect } from 'react';
import { AuthContextType } from '../../../types/Auth/AuthContextType';
import { AuthProviderProps } from '../../../types/Auth/AuthProviderProps';
import { CurrentFormType } from '../../../types/Auth/CurrentFormType';
import { FormDataLogin } from '../../../types/Auth/FormDataLogin';
import { FormEmailResponse } from '../../../types/Auth/FormEmailResponse';
import { FormLoginResponse } from '../../../types/Auth/FormLoginResponse';
import { User } from '../../../types/User';
import { AuthenticationResponse } from '../../../types/Auth/AuthenticationResponse';
import { FormDataPasswordReset } from '../../../types/Auth/FormDataPasswordReset';
import { FormDataRegister } from '../../../types/Auth/FormDataRegister';

const AuthContext = createContext<AuthContextType>({
    currentForm: 'email',
    email: '',
    setEmail: () => { },
    onSubmitEmail: () => { },
    onSubmitLogin: () => { },
    onSubmitRegister: () => { },
    onSubmitForget: () => { },
    onSubmitPasswordReset: () => { },
    loadingFormForget: false,
    token: null,
    user: null,
    setUser: () => { },
    logout: () => { },
})
const AuthProvider = ({ children }: AuthProviderProps) => {

    let navigate = useNavigate();
    const [currentForm, setCurrentForm] = useState<CurrentFormType>('email');
    const [email, setEmail] = useState('');
    const [loadingFormForget, setLoadingFormForget] = useState(false);
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [nextURL, setNextURL] = useState('/profile');


    const onSubmitEmail = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        axios.post<FormEmailResponse>(`/auth`, {
            email,
        }, {
            baseURL: process.env.VITE_REACT_APP_BASEURL
        }).then(({ data: { exists } }) => {

            if (exists) {
                setCurrentForm('login');
            } else {
                setCurrentForm('register');
            }
        }).catch(error => console.error(error));
    }, [email])

    const redirectToNextUrl = useCallback(() => navigate(nextURL), [nextURL, navigate]);

    const onSubmitLogin = (data: FormDataLogin) => {

        axios.post<FormLoginResponse>(`/api/login`, data).then(({ data: { token } }) => {
            setToken(token);
            redirectToNextUrl();

        }).catch(error => console.error(error));
    }

    const onSubmitRegister = (data: FormDataRegister) => {

        axios.post<FormLoginResponse>(`/api/register`, data).then(({ data: { token } }) => {
            setToken(token);
            redirectToNextUrl();

        }).catch(error => console.error(error));
    }

    const onSubmitPasswordReset = (data: FormDataPasswordReset) => {
        data.token = String(navigate) as string;

        axios.post<FormLoginResponse>(`/api/register`, data).then(({ data: { token } }) => {
            setToken(token);
            redirectToNextUrl();

        }).catch(error => console.error(error));
    }
    const onSubmitForget = useCallback(() => {

        axios.post<{ success: boolean }>(`/api/register`, { email }, {
            baseURL: process.env.VITE_REACT_APP_BASEURL
        }).then(({ data: { success } }) => {
            console.info({ success });

        }).catch(error => console.error(error)).finally(() => setLoadingFormForget(false));
    }, [email])

    const getHashForm = useCallback(() => {
        let hash = window.location.hash.replace('#', '') as CurrentFormType;

        if (!['email', 'login', 'register', 'forget', 'reset'].includes(hash) || (!email && ['login', 'forget'].includes(hash))) {
            hash = 'email';
        }

        return hash;
    }, [email])

    const handlerCurrentForm = useCallback(() => {
        setCurrentForm(getHashForm());

    }, [setCurrentForm, getHashForm])

    const logout = () => {

        axios.get("/api/logout").then(() => {
            setToken(null);
            setUser(null);
            navigate("/auth");
        });

    };

    const initAuth = () => {

        axios.get<AuthenticationResponse>('api/session')
            .then(({ data: { token } }) => setToken(token))
    }

    useEffect(() => {

        if (token) {

            try {

                const { id, email, photo, personId, name } = JSON.parse(
                    String(Buffer.from(token.split(".")[1], 'base64'))
                );

                setUser({
                    id,
                    email,
                    personId,
                    photo,
                    person: {
                        id: personId,
                        name,
                    },
                });

            } catch (e: any) {
                console.error("Not parse user from token.");
            }

        }

    }, [token]);

    useEffect(() => {

        window.addEventListener('load', handlerCurrentForm);
        window.addEventListener('hashchange', handlerCurrentForm);
        navigate(nextURL);

        return () => {
            window.removeEventListener('load', handlerCurrentForm);
            window.removeEventListener('hashchange', handlerCurrentForm);
            navigate(nextURL);
        }

    }, [navigate, handlerCurrentForm]);

    useEffect(() => {

        initAuth()

        setCurrentForm(getHashForm());

        const params = new URLSearchParams(window.location.search);


        if (params.has('next')) {
            setNextURL(String(params.get('next')));
        }
    }, [])

    return <AuthContext.Provider value={{
        currentForm,
        email,
        setEmail,
        onSubmitEmail,
        onSubmitLogin,
        onSubmitRegister,
        onSubmitForget,
        onSubmitPasswordReset,
        loadingFormForget,
        token,
        user,
        setUser,
        logout,
    }}>{children}</AuthContext.Provider>
}

export default AuthProvider

export const useAuth = () => {

    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }

    return context;
}
