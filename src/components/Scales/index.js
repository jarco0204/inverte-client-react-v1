import React, { useState, useRef, useEffect, createRef } from "react";
import { useHistory } from "react-router-dom";
import {
    ScalesBackground,
    ScaleCard,
    ScalesContainer,
    ScalesWrapper,
    ScaleMainTitle,
    ScaleLabelTitle,
    ScaleLabelField,
    ScaleOrderTitle,
    ScalesFinishButtonContainer,
    ScalesFinishButton,
} from "./ScaleElements";
import { io } from "socket.io-client";

const Scales = (orderData) => {
    const history = useHistory();
    // eslint-disable-next-line no-unused-vars
    const [ref, setRef] = useState(); //Using state to re-render after refs are updated
    let ingredientsLength = orderData.orderData.order.ingredients.length;
    const scalesRef = useRef(Array(ingredientsLength).fill(createRef()));
    // const scalesRef = useRef();

    // console.log(orderData.orderData.order.order);
    let socket = io("http://localhost:8000/");
    socket.on("updateWR", (weightReading) => {
        console.log("i get data");
        // console.log(weightReading.message);
        scalesRef.current[0].current = weightReading.weight;
        setRef();
        // setWeightReading(weightReading.weight);
    });
    const createScaleCards = () => {
        let ingredientsAr = orderData.orderData.order.ingredients; //data
        let outputAr = [];
        ingredientsAr.map((ele, i) => {
            // console.log(ele);

            outputAr.push(
                <ScaleCard key={i}>
                    <ScaleMainTitle>{ele + " Weighting Scale"}</ScaleMainTitle>
                    <ScaleLabelTitle>Current Weight (g): </ScaleLabelTitle>
                    <ScaleLabelField
                        type="text"
                        ref={(el) => (scalesRef.current[i] = el)}
                        placeholder={scalesRef.current[i].current}
                        readOnly
                    ></ScaleLabelField>
                </ScaleCard>
            );
            // console.log(i);
        });
        // console.log(scalesRef);
        return outputAr;
    };
    const goBackToMain = (event) => {
        event.preventDefault();
        history.push("/username/main");
    };

    useEffect(() => {
        for (let i = 0; i < ingredientsLength; i++) {
            // console.log("I execute");
            // console.log(i);
            scalesRef.current[i].current = i;
        }
        console.log(scalesRef);
        setRef(scalesRef);
        // console.log(ref);
    }, []);
    // }
    //     return 1;
    // };

    return (
        <ScalesBackground>
            <ScalesContainer>
                <ScaleOrderTitle>
                    {orderData.orderData.order.order + " Plate"}
                </ScaleOrderTitle>
                <ScalesWrapper>{createScaleCards()}</ScalesWrapper>
            </ScalesContainer>
            <ScalesFinishButtonContainer>
                <ScalesFinishButton onClick={(event) => goBackToMain(event)}>
                    Finish Order
                </ScalesFinishButton>
            </ScalesFinishButtonContainer>
        </ScalesBackground>
    );
};

export default Scales;
