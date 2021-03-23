import React from "react";
import {
    MainContainer,
    HeroSection,
    HeroTitle,
    HeroFunctionality,
    FunctionalityTitle,
    FunctionalityThumbnail,
} from "./MainBoardElements";
import OrderFood from "../../assets/images/cook-order.svg";
// import { io } from "socket.io-client";

const MainComponent = () => {
    // let socket = io("http://localhost:8000/");
    // const sendMessageSocket = (event) => {
    //     event.preventDefault();
    //     console.log("Sending message.");
    //     socket.emit("chat", {
    //         name: "Johan was here",
    //         message: "Weight-reading",
    //     });
    // };
    // socket.on("chat", (data) => {
    //     console.log("Receiving a message");
    //     console.log(data);
    // });
    return (
        <MainContainer>
            <HeroSection>
                <HeroTitle>Welcome, what would you like to do today?</HeroTitle>
                <HeroFunctionality>
                    <FunctionalityTitle>Prepare an Order</FunctionalityTitle>
                    <FunctionalityThumbnail src={OrderFood} />
                </HeroFunctionality>
                {/* <SocketButton onClick={sendMessageSocket}>Click</SocketButton> */}
            </HeroSection>
        </MainContainer>
    );
};
export default MainComponent;
