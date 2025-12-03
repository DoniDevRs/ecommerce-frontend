import { BsGoogle } from "react-icons/bs";
import { FiLogIn} from "react-icons/fi";
import { useForm } from "react-hook-form";
import validator from "validator";

// Components
import CustomButton from "../../custom-button/custom-button.component";
import Header from "../../header/header.component";

// Styles
import { LoginContainer, LoginHeadline, LoginInputContainer, LoginSubtitle, LoginContent } from "./login.styles";
import CustomInput from "../../custom-input/custom-input.component";
import InputErrorMessage from "../../input-error-message/input-error-message.component";
import { auth } from "../../../config/firebase.config";
import { AuthError, AuthErrorCodes, signInWithEmailAndPassword } from "firebase/auth";

interface LoginForm {
    email: string;
    password: string;
}

const LoginPage = () => {
    const { register,
            formState: { errors }, handleSubmit, setError } = useForm<LoginForm>();

    const handleSubmitPress = async (data: LoginForm) => {
        try {
          const userCredentials = await signInWithEmailAndPassword(auth, data.email, data.password)
          console.log(userCredentials);

        } catch (error) {
          const _error = error as AuthError

          if (_error.code === AuthErrorCodes.INVALID_PASSWORD) {
            return setError('password', { type: 'mismatch' });
          }

          if (_error.code === AuthErrorCodes.USER_DELETED) {
            return setError('email', { type: 'notFound' });
          }

        }
    }      
    return (
      <>
        <Header />

        <LoginContainer>
          <LoginContent>
            <LoginHeadline>Entre com a sua conta</LoginHeadline>

            <CustomButton startIcon={<BsGoogle size={18}/>}> Entrar com o Google </CustomButton>

            <LoginSubtitle>Ou entre com seu e-mail</LoginSubtitle>

            <LoginInputContainer> 
                <p>E-mail</p>
                <CustomInput 
                hasError={!!errors?.email} 
                type="email" placeholder="Digite seu e-mail" 
                {...register("email", {required: true, validate: (value) => {
                    return validator.isEmail(value);
                }})} />

                {errors?.email?.type === "required" && (<InputErrorMessage>E-mail é obrigatório</InputErrorMessage>)}

                {errors?.email?.type === "notFound" && (<InputErrorMessage>E-mail não encontrado</InputErrorMessage>)}

                {errors?.email?.type === "validate" && (<InputErrorMessage>E-mail inválido</InputErrorMessage>)}

            </LoginInputContainer>
            <LoginInputContainer> 
                <p>Senha</p>
                <CustomInput 
                hasError={!!errors?.password} 
                type="password" placeholder="Digite sua senha" 
                {...register("password", {required: true})} />

            {errors?.password?.type === "required" && (<InputErrorMessage>Senha é obrigatória</InputErrorMessage>)}

            {errors?.password?.type === "mismatch" && (<InputErrorMessage>Senha é inválida</InputErrorMessage>)}

            </LoginInputContainer>

             <CustomButton startIcon={<FiLogIn size={18}/>} onClick={() =>handleSubmit(handleSubmitPress)()}> Entrar </CustomButton>
          </LoginContent>
        </LoginContainer>
      </>
    );
}

export default LoginPage;