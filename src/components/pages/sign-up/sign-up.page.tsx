import { FiLogIn} from "react-icons/fi";
import { useForm } from "react-hook-form";
import validator from "validator";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

//Components
import CustomButton from "../../custom-button/custom-button.component";
import CustomInput from "../../custom-input/custom-input.component";
import Header from "../../header/header.component";
import InputErrorMessage from "../../input-error-message/input-error-message.component";

import { SignUpContainer, SignUpContent, SignUpHeadLine, SignUpInputContainer } from "./sign-up.styles";

//Utilities
import { auth, db } from "../../../config/firebase.config";

interface SignUpForm {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfirmation: string;
}

const SignUpPage = () => {
    const { register,
            formState: { errors }, 
            handleSubmit, 
            watch } = useForm<SignUpForm>();

    const watchPassword = watch("password");        

    const handleSubmitPress = async (data: SignUpForm) => {
        try {
          const userCredentials =await createUserWithEmailAndPassword(auth, data.email, data.password)

          await addDoc(collection(db, 'users'), {
            id: userCredentials.user.uid,
            firstName: data.firstName,
            lastName: data.lastName,
            email: userCredentials.user.email,
          });

        } catch (error) {
            console.error("Erro ao criar conta:", error);
        }
    }        

    return (
      <>
        <Header />
        <SignUpContainer>
          <SignUpContent>
            <SignUpHeadLine>Crie sua conta</SignUpHeadLine>

            <SignUpInputContainer>
              <p>Nome</p>
              <CustomInput
                hasError={!!errors?.firstName}
                type="text"
                placeholder="Digite seu nome"
                {...register("firstName", { required: true })}
              />

              {errors?.firstName?.type === "required" && 
              (<InputErrorMessage>Nome é obrigatório</InputErrorMessage>)}

            </SignUpInputContainer>

            <SignUpInputContainer>
              <p>Sobrenome</p>
              <CustomInput
                hasError={!!errors?.lastName}
                type="text"
                placeholder="Digite seu sobrenome"
                {...register("lastName", { required: true })}
              />

                {errors?.lastName?.type === "required" && 
                (<InputErrorMessage>Sobrenome é obrigatório</InputErrorMessage>)}
            </SignUpInputContainer>

            <SignUpInputContainer>
              <p>E-mail</p>
              <CustomInput
                hasError={!!errors?.email}
                type="text"
                placeholder="Digite seu e-mail"
                {...register("email", {
                  required: true,
                  validate: (value) => {
                    return validator.isEmail(value);
                  },
                })}
              />

                {errors?.email?.type === "required" && 
                (<InputErrorMessage>E-mail é obrigatório</InputErrorMessage>)}

                {errors?.email?.type === "validate" && 
                (<InputErrorMessage>E-mail inválido</InputErrorMessage>)}
            </SignUpInputContainer>

            <SignUpInputContainer>
              <p>Senha</p>
              <CustomInput
                hasError={!!errors?.password}
                type="password"
                placeholder="Digite sua senha"
                {...register("password", { required: true })}
              />

                {errors?.password?.type === "required" && 
                (<InputErrorMessage>Senha é obrigatória</InputErrorMessage>)}
            </SignUpInputContainer>

            <SignUpInputContainer>
              <p>Confirme a senha</p>
              <CustomInput
                hasError={!!errors?.passwordConfirmation}
                type="password"
                placeholder="Digite novamente sua senha"
                {...register("passwordConfirmation", { required: true, validate: (value) => {
                    return value === watchPassword;
                } })}
              />

                {errors?.passwordConfirmation?.type === "required" && 
                (<InputErrorMessage>Confirmação de senha é obrigatória</InputErrorMessage>)} 

                {errors?.passwordConfirmation?.type === "validate" && 
                (<InputErrorMessage>As senhas não coincidem</InputErrorMessage>)}    

            </SignUpInputContainer>

            <CustomButton 
                onClick={() => handleSubmit(handleSubmitPress)()}
                startIcon={<FiLogIn size={18} />} >
              Criar conta
            </CustomButton>
          </SignUpContent>
        </SignUpContainer>
      </>
    );
}

export default SignUpPage;