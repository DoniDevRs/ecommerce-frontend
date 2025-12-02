import { BsGoogle } from "react-icons/bs";
import { FiLogIn} from "react-icons/fi";

// Components
import CustomButton from "../../custom-button/custom-button.component";
import Header from "../../header/header.component";

// Styles
import { LoginContainer, LoginHeadline, LoginInputContainer, LoginSubtitle, LoginContent } from "./login.styles";
import CustomInput from "../../custom-input/custom-input.component";

const LoginPage = () => {
    return (
      <>
        <Header />

        <LoginContainer>
          <LoginContent>
            <LoginHeadline>Entre com a sua conta</LoginHeadline>

            <CustomButton startIcon={<BsGoogle size={18}/>}> Entrar com o Google </CustomButton>

            <LoginSubtitle>Ou entre com seu e-mail</LoginSubtitle>

            <LoginInputContainer> 
                <CustomInput type="email" placeholder="Digite seu e-mail" />
            </LoginInputContainer>
            <LoginInputContainer> 
                <CustomInput type="password" placeholder="Digite sua senha" />
            </LoginInputContainer>

             <CustomButton startIcon={<FiLogIn size={18}/>}> Entrar </CustomButton>
          </LoginContent>
        </LoginContainer>
      </>
    );
}

export default LoginPage;