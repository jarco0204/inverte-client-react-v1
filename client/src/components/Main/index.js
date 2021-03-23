import React from "react";
import { MainContainer, HeroSection, SocketButton } from "./MainBoardElements";
import { io } from "socket.io-client";
// import ImgBg from "../../assets/images/mainBg.png";
const MainComponent = () => {
    let socket = io("http://localhost:8000/");
    const sendMessageSocket = (event) => {
        event.preventDefault();
        console.log("Sending message.");
        socket.emit("chat", {
            name: "Johan was here",
            message: "Weight-reading",
        });
    };
    socket.on("chat", (data) => {
        console.log("Receiving a message");
        console.log(data);
    });
    return (
        <MainContainer>
            <HeroSection></HeroSection>
            <SocketButton onClick={sendMessageSocket}>Click</SocketButton>
        </MainContainer>
    );
};
export default MainComponent;
