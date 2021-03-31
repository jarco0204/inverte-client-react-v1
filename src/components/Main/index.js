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
    const [dashboardData, setDashboardData] = useState({});
    let x= []
    let y= []

    const filterData = async (ingredient, yr, mnth, dy) => {
        // get the id for the request ingredient and filter out date 
        getKeyByValue(data["Protein"],ingredient).filter((e)=>{

            // get protein weight belongs to the request ingredient, year and month
            let weight = getValueByKey(data["ProteinWeight"],e)
            // get date belongs to the request ingredient, year and month
            let date = getValueByKey(data["Date"],e)

            let year = date.substring(0, 4)
            let month = date.substring(5, 7)
            let day = date.substring(8, 10)
            let time = date.substring(11, 16)

            if(parseInt(year) === yr && parseInt(month) === mnth && parseInt(day) === dy){
                let displayDate = time
                console.log(`year ${yr} month ${mnth} day ${day}`)
                y.push(displayDate)
                x.push(weight)
            }            
        }) 
        let state = {
            labels: y,
            datasets: [
                {
                label: ingredient,
                fill: true,
                lineTension: 0.5,
                backgroundColor: 'rgba(1,1,1,0.5)',
                borderColor: 'rgba(1,1,1,1)',
                color: 'white',
                borderWidth: 2,
                data: x,
                pointBorderColor: 'white',
                }
            ]
            } 
        setDashboardData(state)
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
            await filterData("Tuna", 2020, 1, 3);
            
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
                        {<Line
                        data={dashboardData}
                        width={100}
                        height={25}
                        options={{
                            fontColor: 'white',
                            title:{
                                display:true,
                                text:'Meat fluctuation',
                                fontSize:20,
                                fontColor: 'white'
                            },
                            legend:{
                                display:true,
                                position:'right',
                                fontColor: 'white',
                                labels: {
                                    // This more specific font property overrides the global property
                                    fontColor: 'white'
                                }
                            },
                            
                            scales: {
                                xAxes: [{
                                    display: true,
                                    scaleLabel:{
                                        display:true,
                                        labelString:'Date',
                                        fontColor: "white"
                                    },
                                   ticks: {
                                      fontColor: "white",
                                   }
                                }],
                                yAxes: [{
                                    display: true,
                                    scaleLabel:{
                                        display:true,
                                        labelString:"Ingredient's Weight",
                                        fontColor: "white"
                                    },
                                   ticks: {
                                      fontColor: "white",
                                      beginAtZero: true,
                                   }
                                }]
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
