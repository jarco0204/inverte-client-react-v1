import React, { useState, useEffect } from "react";
import data from "../../refinedArtificialDS1.0.json";
import { Line } from "react-chartjs-2";
const LineChartComponent = () => {
    const [dashboardData, setDashboardData] = useState({});
    const [ingredientInput, setIngredientInput] = useState("Tuna");
    const [dateInput, setDateInput] = useState("2020-01-01");
    let x = [];
    let y = [];

    const handleIngredientChange = (e) => {
        const ingredient = e.target.value;
        setIngredientInput(ingredient);

        let year = parseInt(dateInput.substring(0, 4));
        let month = parseInt(dateInput.substring(5, 7));
        let day = parseInt(dateInput.substring(8, 10));
        filterData(ingredient, year, month, day);
    };

    const handleDateChange = (e) => {
        setDateInput(e.target.value);
        let date = e.target.value;
        let year = parseInt(date.substring(0, 4));
        let month = parseInt(date.substring(5, 7));
        let day = parseInt(date.substring(8, 10));
        filterData(ingredientInput, year, month, day);
    };

    const filterData = async (ingredient, yr, mnth, dy) => {
        // get the id for the request ingredient and filter out date
        getKeyByValue(data["Protein"], ingredient).filter((e) => {
            // get protein weight belongs to the request ingredient, year and month
            let weight = getValueByKey(data["ProteinWeight"], e);
            // get date belongs to the request ingredient, year and month
            let date = getValueByKey(data["Date"], e);

            let year = date.substring(0, 4);
            let month = date.substring(5, 7);
            let day = date.substring(8, 10);
            let time = date.substring(11, 16);

            if (
                parseInt(year) === yr &&
                parseInt(month) === mnth &&
                parseInt(day) === dy
            ) {
                let displayDate = time;
                y.push(displayDate);
                x.push(weight);
            }
        });
        let state = {
            labels: y,
            datasets: [
                {
                    label: ingredient,
                    fill: true,
                    lineTension: 0.5,
                    backgroundColor: "rgba(1,1,1,0.5)",
                    borderColor: "grey",
                    color: "white",
                    borderWidth: 2,
                    data: x,
                    pointBorderColor: "darkorange",
                },
            ],
        };
        setDashboardData(state);
    };

    // load filterData after everything is
    useEffect(
        () => {
            filterData(ingredientInput, 2020, 1, 1);
        },
        [ingredientInput],
        dateInput
    );

    function getKeyByValue(object, value) {
        return Object.keys(object).filter((key) => object[key] === value);
    }

    function getValueByKey(object, k) {
        return Object.values(object).find((value) => object[k] === value);
    }
    return (
        <div>
            <div className="lineChart_input">
                <select
                    id="ingredient"
                    name="ingredient"
                    defaultValue={ingredientInput}
                    onChange={handleIngredientChange}
                    onBlur={(e) => {
                        console.log(e);
                    }}
                >
                    <option value="Tuna">Tuna</option>
                    <option value="Chicken Teriyaki">Chicken Teriyaki</option>
                    <option value="Chicken">Chicken</option>
                    <option value="Steak">Steak</option>
                    <option value="Meatballs">Meatballs</option>
                </select>
                <input
                    type="date"
                    name="name"
                    min="2020-01-01"
                    max="2021-01-01"
                    value={dateInput}
                    onChange={handleDateChange}
                />
            </div>
            <div className="lineChart">
                <Line
                    data={dashboardData}
                    width={90}
                    height={23}
                    options={{
                        fontColor: "white",
                        title: {
                            display: false,
                            text: "Meat fluctuation",
                            fontSize: 18,
                            fontColor: "white",
                        },
                        legend: {
                            display: true,
                            position: "right",
                            fontColor: "white",
                            labels: {
                                // This more specific font property overrides the global property
                                fontColor: "white",
                            },
                        },

                        scales: {
                            xAxes: [
                                {
                                    display: true,
                                    scaleLabel: {
                                        display: true,
                                        labelString: "Date",
                                        fontColor: "darkorange",
                                    },
                                    ticks: {
                                        fontColor: "white",
                                    },
                                },
                            ],
                            yAxes: [
                                {
                                    display: true,
                                    scaleLabel: {
                                        display: true,
                                        labelString: "Ingredient's Weight",
                                        fontColor: "darkorange",
                                    },
                                    ticks: {
                                        fontColor: "white",
                                        beginAtZero: true,
                                    },
                                },
                            ],
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default LineChartComponent;
