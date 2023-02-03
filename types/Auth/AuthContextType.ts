import { User } from "../User";
import { CurrentFormType } from "./CurrentFormType"
import { FormDataLogin } from "./FormDataLogin";
import { FormDataPasswordReset } from "./FormDataPasswordReset";

export type AuthContextType = {
    currentForm: CurrentFormType;
    email: string;
    setEmail: (value: string) => void;
    onSubmitEmail: (e: React.FormEvent<HTMLFormElement>) => void;
    onSubmitLogin: (data: FormDataLogin) => void;
    onSubmitRegister: (data: FormDataLogin) => void;
    onSubmitPasswordReset: (data: FormDataPasswordReset) => void;
    onSubmitForget: () => void;
    loadingFormForget: boolean;
    token: string | null;
    user: User | null;
    setUser: (user: User) => void;
    logout: () => void;
}
