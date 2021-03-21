import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {SignInContainer, SignInContent, SignInForm, FormTitle, FormInputLabel, FormInput, FormSubmitButton} from "./SignInElements"

const SignIn = () => {
    const [emailInputValue, setEmailInputValue] = useState("");
    const [passwordInputValue, setPasswordInputValue] = useState("");
    const history = useHistory();

    const handleInputChange = (event) =>{
        if(event.target.id ==="email"){
            setEmailInputValue(event.target.value)
        }
        else{
            setPasswordInputValue(event.target.value)
        }
        
    }
    const validateForm = (event)=>{
        event.preventDefault();
        console.log(emailInputValue);
        history.push("/newPath")
    }
    return (
        <SignInContainer>
        <SignInContent>
            <SignInForm >
                <FormTitle>
                    Sign-In to make use of our web-app
                </FormTitle>
                <FormInputLabel htmlFor="email">
                    Email:
                </FormInputLabel>
                <FormInput id="email" value= {emailInputValue} required type="email" onChange={handleInputChange}></FormInput>
                <FormInputLabel htmlFor="password">
                    Password:
                </FormInputLabel>
                <FormInput id="password" value= {passwordInputValue} required type="password" onChange={handleInputChange}></FormInput>
                <FormSubmitButton onClick={validateForm}>Sign-in</FormSubmitButton>
            </SignInForm>
        </SignInContent>
        </SignInContainer>
    );
};

export default SignIn;
