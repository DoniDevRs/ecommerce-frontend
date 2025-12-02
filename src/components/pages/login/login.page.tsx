import Header from "../../header/header.component";
import { LoginContainer, LoginHeadline, LoginInputContainer, LoginSubtitle, LoginContent } from "./login.styles";

const LoginPage = () => {
    return (
      <>
        <Header />

        <LoginContainer>
          <LoginContent>
            <LoginHeadline>Entre com a sua conta</LoginHeadline>

            {/* Button */}

            <LoginSubtitle>Ou entre com seu e-mail</LoginSubtitle>

            <LoginInputContainer> {/* Email Input */} </LoginInputContainer>
            <LoginInputContainer> {/* Password Input */} </LoginInputContainer>

            {/* Button */}
          </LoginContent>
        </LoginContainer>
      </>
    );
}

export default LoginPage;