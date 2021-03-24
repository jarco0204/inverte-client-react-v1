import React, { useState } from "react";
import {
    MainContainer,
    HeroSection,
    HeroTitle,
    HeroFunctionality,
    FunctionalityTitle,
    FunctionalityThumbnail,
    FunctionalityButton,
    GoBackButton,
} from "./MainBoardElements";
import OrderFood from "../../assets/images/cook-order.svg";
import VisualizeAnalytics from "../../assets/images/visualize-analytics.svg";
import axios from "axios";
import "../../assets/css/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import OrderComponent from "../Order/";
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

    //Setting the state
    const [start, setVisible] = useState(true);
    const [order, setOrderVisible] = useState(false);
    const [plateOrders, setPlateOrders] = useState([]);

    //Function to change the shown component
    const changeComponent = (direction) => {
        if (direction) {
            setVisible(false);
            fetchAvailablePlates();
            setOrderVisible(true);
        } else {
            setVisible(true);
            setOrderVisible(false);
        }
    };

    // function to get plate orders
    const fetchAvailablePlates = async () => {
        console.log("execute");
        let APIURL = "http://localhost:8000";
        let dataToSend = {
            userID: "johanArcos_5680",
        };
        // let results = [];
        // for (let i = 0; i < 4; i++) {
        //     results.push(<h1>Hola{i}</h1>);
        // }

        console.log(dataToSend);
        await axios
            .get(
                APIURL + "/api/user/getPlateOrders",
                { params: dataToSend },
                {
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8",
                        "Access-Control-Allow-Origin": APIURL,
                    },
                }
            )
            .then((response) => {
                let orders = response.data.obj;
                let orderComponents = [];
                console.log(orders);
                for (let i = 0; i < orders.length; i++) {
                    console.log(i);
                    orderComponents.push(
                        <OrderComponent key={i} data={orders[i]} />
                    );
                }
                console.log(orderComponents);
                setPlateOrders(orderComponents);
                //Create plate components
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <MainContainer>
            <HeroSection>
                {start && (
                    <>
                        <HeroTitle>
                            Welcome, what would you like to do today?
                        </HeroTitle>
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
                                <FunctionalityButton
                                    onClick={() => changeComponent(true)}
                                >
                                    Select Plate
                                </FunctionalityButton>
                            </HeroFunctionality>
                            <HeroFunctionality>
                                <FunctionalityTitle>
                                    Visualize Analytics
                                </FunctionalityTitle>
                                <FunctionalityThumbnail
                                    src={VisualizeAnalytics}
                                />
                                <FunctionalityButton>
                                    Go to Dashoboard
                                </FunctionalityButton>
                            </HeroFunctionality>
                        </Carousel>
                    </>
                )}
                {order && (
                    <>
                        <GoBackButton onClick={() => changeComponent(false)}>
                            Go back
                        </GoBackButton>
                        <HeroTitle>What are you cooking?</HeroTitle>

                        <Carousel
                            autoPlay={true}
                            infiniteLoop={true}
                            showThumbs={false}
                        >
                            {plateOrders}
                        </Carousel>
                    </>
                )}
            </HeroSection>
        </MainContainer>
    );
};
export default MainComponent;

// /* <SocketButton onClick={sendMessageSocket}>Click</SocketButton> */
//

//
