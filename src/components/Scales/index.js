import React, { useState } from "react";
import {
    ScalesBackground,
    ScaleCard,
    ScalesContainer,
    ScalesWrapper,
    ScaleMainTitle,
    ScaleLabelTitle,
    ScaleLabelField,
    ScaleOrderTitle,
} from "./ScaleElements";
import { io } from "socket.io-client";

const Scales = (orderData) => {
    const [weightReadingIng, setWeightReading] = useState("0");
    // console.log(orderData.orderData.order.order);
    let socket = io("http://localhost:8000/");
    socket.on("updateWR", (weightReading) => {
        console.log("i get data");
        console.log(weightReading.message);
        setWeightReading(weightReading.weight);
    });
    const createScaleCards = () => {
        let scaleAr = [];
        for (
            let ingredient = 0;
            ingredient < orderData.orderData.order.ingredients.length;
            ingredient++
        ) {
            scaleAr.push(
                <ScaleCard key={ingredient}>
                    <ScaleMainTitle>
                        {orderData.orderData.order.ingredients[ingredient]}
                    </ScaleMainTitle>
                    <ScaleLabelTitle>Current Weight (g): </ScaleLabelTitle>
                    <ScaleLabelField
                        type="text"
                        placeholder={weightReadingIng}
                        readonly
                    ></ScaleLabelField>
                </ScaleCard>
            );
        }
        return scaleAr;
    };
    // }
    //     return 1;
    // };

    return (
        <ScalesBackground>
            <ScalesContainer>
                <ScaleOrderTitle>
                    {orderData.orderData.order.order}
                </ScaleOrderTitle>
                <ScalesWrapper>{createScaleCards()}</ScalesWrapper>
            </ScalesContainer>
        </ScalesBackground>
    );
};

export default Scales;
