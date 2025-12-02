import { BsGoogle } from "react-icons/bs";
import { FiLogIn} from "react-icons/fi";
import { useForm } from "react-hook-form";

// Components
import CustomButton from "../../custom-button/custom-button.component";
import Header from "../../header/header.component";

// Styles
import { LoginContainer, LoginHeadline, LoginInputContainer, LoginSubtitle, LoginContent } from "./login.styles";
import CustomInput from "../../custom-input/custom-input.component";
import { data } from "react-router-dom";

const LoginPage = () => {
    const { register,
            formState: { errors }, handleSubmit } = useForm();

    const handleSubmitPress = (data: any) => {
        console.log(data);
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
                {...register("email", {required: true})} />
            </LoginInputContainer>
            <LoginInputContainer> 
                <p>Senha</p>
                <CustomInput 
                hasError={!!errors?.password} 
                type="password" placeholder="Digite sua senha" 
                {...register("password", {required: true})} />
            </LoginInputContainer>

             <CustomButton startIcon={<FiLogIn size={18}/>} onClick={() =>handleSubmit(handleSubmitPress)()}> Entrar </CustomButton>
          </LoginContent>
        </LoginContainer>
      </>
    );
}

export default LoginPage;