import styled from "styled-components";

export const SignInContainer = styled.div`
    overflow: hidden;
    background: linear-gradient(
        108deg,
        rgba(44, 239, 12, 0.9) 0%,
        rgba(1, 24, 156, 0.99) 100%
    );
    /* justify-content: center; */
    height: 750px;
    z-index:1;
`;

export const SignInContent = styled.div`
    margin: auto;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const SignInForm = styled.form`
    background: rgba(1,1,1,0.75);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const FormTitle = styled.h1`
    margin-bottom: 20px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const FormInputLabel = styled.label`
    margin: 20px 0;
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
`;

export const FormInput = styled.input`
    background: whitesmoke;
    border-radius: 6px;
    margin: auto;
    width: 50%;
    margin-bottom: 20px;
`;

export const FormSubmitButton = styled.button`
    border: 1px solid darkorange;
    background: darkorange;
    color: whitesmoke;
    border-radius: 6px;
    margin: auto;
    font-size: 18px;
    margin-bottom: 20px;
    padding: 5px 10px;
    &:hover{
        background: whitesmoke;
        color: darkorange;
    }
`