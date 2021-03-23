import React from "react";
import {
    MainContainer,
    HeroSection,
    HeroTitle,
    HeroFunctionality,
    FunctionalityTitle,
    FunctionalityThumbnail,
    FunctionalityButton,
} from "./MainBoardElements";
import OrderFood from "../../assets/images/cook-order.svg";
import VisualizeAnalytics from "../../assets/images/visualize-analytics.svg";

import "../../assets/css/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
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
                <Carousel
                    autoPlay={true}
                    infiniteLoop={true}
                    showThumbs={false}
                >
                    <HeroFunctionality>
                        <FunctionalityTitle>
                            Prepare an Order
                        </FunctionalityTitle>
                        <FunctionalityThumbnail src={OrderFood} />
                        <FunctionalityButton>Select Plate</FunctionalityButton>
                    </HeroFunctionality>
                    <HeroFunctionality>
                        <FunctionalityTitle>
                            Visualize Analytics
                        </FunctionalityTitle>
                        <FunctionalityThumbnail src={VisualizeAnalytics} />
                        <FunctionalityButton>
                            Go to Dashoboard
                        </FunctionalityButton>
                    </HeroFunctionality>
                </Carousel>

                {/* <SocketButton onClick={sendMessageSocket}>Click</SocketButton> */}
            </HeroSection>
        </MainContainer>
    );
};
export default MainComponent;
