import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    overflow: hidden;
    height: 650px;
    background: rgb(9, 131, 193);
    background: linear-gradient(
        90deg,
        rgba(9, 131, 193, 1) 0%,
        rgba(74, 237, 160, 1) 52%,
        rgba(9, 131, 193, 1) 100%
    );
`;

export const HeroSection = styled.div`
    display: flex;
    background: rgba(1, 1, 1, 0.8);
    border-radius: 20px;
    flex-flow: column wrap;
    height: 500px;
    width: 80%;
    margin: auto;
    justify-content: center;
    /* position: fixed; */
    
    @media screen and (max-width: 750px) and (min-width: 650px){

        height: 500px;
        width: 85%;
    }

    @media screen and (max-width: 649px) and (min-width: 450px){

        height: 450px;
        width: 95%;
    }

    @media screen and (max-width: 450px) and (min-width: 200px){

        height: 450px;
        width: 99%;
        align-items: center;
    }

`;
export const HeroTitle = styled.h1`
    color: darkorange;

    font-size: 20px;
    text-align: center;
    padding: 5px 0;
    @media screen and (max-width: 768px) {
        font-size: 10px;
    }
`;
export const HeroFunctionality = styled.div`
    padding-bottom: 50px;
    display: flex;
    flex-flow: column nowrap;
`;
export const FunctionalityTitle = styled.h2`
    /* border: 1px solid whitesmoke; */
    /* background-color: black; */
    border-radius: 10px;
    margin: auto;
    text-align: center;
    font-size: 22px;
    padding: 10px 10px;
    color: whitesmoke;
    font-weight: bold;
`;
export const FunctionalityButton = styled.button`
    border: 1px solid whitesmoke;
    background-color: black;
    border-radius: 10px;
    margin: auto;
    text-align: center;
    font-size: 18px;
    padding: 10px 10px;
    color: whitesmoke;
    &:hover {
        background: whitesmoke;
        color: green;
        border: 2px solid black;
    }

    @media screen and (max-width: 750px) and (min-width: 650px){

        font-size: 15px;
    }
    @media screen and (max-width: 649px) and (min-width: 450px){

        font-size: 13px;
    }

    @media screen and (max-width: 450px) and (min-width: 200px){

        font-size: 11px;
    }
`;
export const FunctionalityThumbnail = styled.img`
    padding: 20px 0;
    margin: auto;
    height: 200px;
    width: 400px;

    @media screen and (max-width: 750px) and (min-width: 650px){

        padding: 15px 0;
        margin: auto;
        height: 180px;
        width: 350px;
    }

    @media screen and (max-width: 649px) and (min-width: 450px){

        padding: 15px 0;
        margin: auto;
        height: 150px;
        width: 320px;
    }

    @media screen and (max-width: 450px) and (min-width: 200px){

        padding: 12px 0;
        margin: auto;
        height: 135px;
        width: 280px;
    }
`;
export const GoBackButton = styled.button`
    transform: translateY(-800%);
    /* transform: translateX(-10%); */
    margin-left: 30px;
    position: absolute;
    border: 1px solid whitesmoke;
    background-color: black;
    border-radius: 10px;

    font-size: 18px;

    color: whitesmoke;
    font-weight: bold;
    &:hover {
        scale: 1.29;
        background: whitesmoke;
        color: green;
    }
`;
export const SocketButton = styled.button`
    background-color: black;
    color: white;
    margin-left: 50px;
    align-items: center;
`;
