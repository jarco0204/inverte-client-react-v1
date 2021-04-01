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
import LineChartComponent from "../Chart/index"
// import { io } from "socket.io-client";


const MainComponent = () => {
    //Setting the state
    const [start, setVisible] = useState(true);
    const [order, setOrderVisible] = useState(false);
    const [dashboard, setDashboardVisible] = useState(false);
    const [plateOrders, setPlateOrders] = useState([]);

    //Function to change the shown component
    const changeComponent = async (e, direction) => {
        e.preventDefault();
        console.log(direction)
        if (direction) {
            setVisible(false);
            await fetchAvailablePlates();
            setOrderVisible(true);
        } else {
            setVisible(true);
            setOrderVisible(false);
        }
    };

    //Function to change the shown component
    const changeDashboard = async (e, direction) => {
        e.preventDefault();
        console.log(direction)
        if (direction) {
            setVisible(false);

            setDashboardVisible(true);
        } else {
            setVisible(true);
            setDashboardVisible(false);
        }
    };

    // function to get plate orders
    const fetchAvailablePlates = async () => {
        // console.log("execute");
        let APIURL = "http://localhost:8000";
        let dataToSend = {
            userID: "johanArcos_5680",
        };
        // let results = [];
        // for (let i = 0; i < 4; i++) {
        //     results.push(<h1>Hola{i}</h1>);
        // }

        // console.log(dataToSend);
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
                let orders = response.data.obj.orders;
                let orderComponents = [];
                for (let i = 0; i < orders.length; i++) {
                    let dataToPass = {
                        order: orders[i],
                        ingredients: response.data.obj.ingredients[i],
                        correctPortions: response.data.obj.correctPortions[i],
                    };
                    // console.log(dataToPass);

                    orderComponents.push(
                        <OrderComponent key={i} ingredients={dataToPass} />
                    );
                }
                // console.log(orderComponents);
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
                                    onClick={(e) => changeComponent(e, true)}
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
                                <FunctionalityButton
                                    onClick={(e) => changeDashboard(e, true)}
                                >
                                    Go to Dashoboard
                                </FunctionalityButton>
                            </HeroFunctionality>
                        </Carousel>
                    </>
                )}
                {order && (
                    <>
                        <GoBackButton
                            onClick={(e) => changeComponent(e, false)}
                        >
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
                {dashboard && (
                    <>
                        <GoBackButton
                            onClick={(e) => changeDashboard(e, false)}
                        >
                            Go back
                        </GoBackButton>
                        <div className="dashboard_container">
                        <HeroTitle>Ingredient&apos;s Fluctuation Line Chart</HeroTitle>
                        <LineChartComponent></LineChartComponent>
                        </div>
                        
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
