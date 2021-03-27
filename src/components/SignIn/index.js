import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import axios from "axios";
import {
    SignInContainer,
    SignInContent,
    SignInForm,
    FormTitle,
    FormInputLabel,
    FormInput,
    FormSubmitButton,
} from "./SignInElements";

//Globals
// let APIURL = "http://localhost:8000";
const SignIn = () => {
    //Hooks
    const [emailInputValue, setEmailInputValue] = useState("");
    const [passwordInputValue, setPasswordInputValue] = useState("");

    const [statusRequest, setStatusRequest] = useState("");
    const history = useHistory();

    const handleInputChange = (event) => {
        if (event.target.id === "email") {
            setEmailInputValue(event.target.value);
        } else if (event.target.id === "password") {
            setPasswordInputValue(event.target.value);
        }
    };

    const validateForm = async (event) => {
        event.preventDefault();
        let dataToSend = {
            emailIn: emailInputValue,
            passIn: passwordInputValue,
        };
        console.log(dataToSend);
        setStatusRequest("Welcome");
        history.push("/username/main");
        // await axios
        //     .post(APIURL + "/api/user/validate", dataToSend, {
        //         headers: {
        //             "Content-Type": "application/json;charset=UTF-8",
        //             "Access-Control-Allow-Origin": APIURL,
        //         },
        //     })
        //     .then((response) => {
        //         console.log(response);
        //         history.push("/username/main");
        //     })
        //     .catch((response) => {
        //         console.log(response);
        //         setStatusRequest("Invalid Log-in credentials!");
        //         // history.push("/");
        //     });
    };

    return (
        <SignInContainer>
            <SignInContent>
                <SignInForm>
                    <FormTitle>Sign-In to make use of our web-app</FormTitle>
                    <FormInputLabel htmlFor="email">
                        {statusRequest}
                    </FormInputLabel>
                    <FormInputLabel htmlFor="email">Email:</FormInputLabel>
                    <FormInput
                        id="email"
                        value={emailInputValue}
                        required
                        type="email"
                        onChange={handleInputChange}
                    ></FormInput>
                    <FormInputLabel htmlFor="password">
                        Password:
                    </FormInputLabel>
                    <FormInput
                        id="password"
                        value={passwordInputValue}
                        required
                        type="password"
                        onChange={handleInputChange}
                    ></FormInput>
                    <FormSubmitButton onClick={validateForm}>
                        Sign-in
                    </FormSubmitButton>
                </SignInForm>
            </SignInContent>
        </SignInContainer>
    );
};

export default SignIn;
