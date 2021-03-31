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
import data from "../../refinedArtificialDS1.0.json";
import {Line} from 'react-chartjs-2';
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
    const [dashboard, setDashboardVisible] = useState(false);
    const [plateOrders, setPlateOrders] = useState([]);
    let x= []
    let y= []

    let state = {
        labels: ["2020-01-01T09:50:00GMT", "2020-01-01T12:30:00GMT", "2020-01-01T12:50:00GMT", "2020-01-01T14:20:00GMT", "2020-01-01T14:30:00GMT"],
        datasets: [
            {
            label: 'Rainfall',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'white',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [139, 68, 142, 68, 73]
            }
        ]
        } 
    const filterData = async (ingredient, yr, mnth) => {
        // get the id for the request ingredient and filter out date 
        getKeyByValue(data["Protein"],ingredient).filter((e)=>{

            // get protein weight belongs to the request ingredient, year and month
            let weight = getValueByKey(data["ProteinWeight"],e)
            // get date belongs to the request ingredient, year and month
            let date = getValueByKey(data["Date"],e)

            let year = date.substring(0, 4)
            let month = date.substring(5, 7)
            let day = date.substring(8, 10)

            if(parseInt(year) === yr && parseInt(month) === mnth){
                console.log(`year ${yr} month ${mnth} day ${day}`)
                y.push(date)
                x.push(weight)
            }        
            }) 
    }

    function getKeyByValue(object, value) {
        return Object.keys(object).filter(key => object[key] === value);
    }

     function getValueByKey(object, k) {
        return Object.values(object).find(value => object[k] === value);
    } 

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
            await filterData("Chicken", 2020, 1);
            
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
                            onClick={(e) => changeComponent(e, false)}
                        >
                            Go back
                        </GoBackButton>
                        <HeroTitle>dashboard</HeroTitle>
                        <p>{y}</p>
                        {<Line
                        data={state}
                        options={{
                            title:{
                            display:true,
                            text:'Meat fluctuation',
                            fontSize:20
                            },
                            legend:{
                            display:true,
                            position:'right'
                            }
                        }}
                        />}
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
