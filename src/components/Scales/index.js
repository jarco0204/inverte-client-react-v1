import React, { useState, useEffect } from "react";
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
    ScaleAccuracyContainer,
    ScaleAccuracyElement,
    ScaleAccuracyLabel,
    ScalesFinishButtonContainer,
    ScalesFinishButton,
} from "./ScaleElements";
import { io } from "socket.io-client";

const Scales = (orderData) => {
    /**
     * Hooks used to control program workflow and websockets
     */
    const history = useHistory();
    const goBackToMain = (event) => {
        event.preventDefault();
        history.push("/username/main");
    };
    const [scales, setScales] = useState([0, 0]);

    /**
     * Hook that executes after component is mounted.
     * @arg: [] array of empty dependencies which assures that the hook runs only once.
     */
    useEffect(() => {
        const socket = io("http://localhost:8000/");
        socket.on("updateWR", (weightReading) => {
            if (weightReading.scaleID) {
                setScales([scales[0], weightReading.weight]);
            } else {
                setScales([weightReading.weight, scales[1]]);
            }
        });
        // CLEAN UP THE EFFECT
        return () => socket.disconnect();
    }, []);

    /**
     * Dynamically create the ScaleCard components based on user choice
     * @returns array of ScaleCard components
     */
    const createScaleCards = () => {
        let ingredientsAr = orderData.orderData.order.ingredients; //data
        let outputAr = [];
        ingredientsAr.map((ele, i) => {
            outputAr.push(
                <ScaleCard key={i}>
                    <ScaleMainTitle>{ele + " Weighting Scale"}</ScaleMainTitle>
                    <ScaleLabelTitle>Current Weight (g): </ScaleLabelTitle>
                    <ScaleLabelField
                        type="text"
                        placeholder={scales[i]}
                        readOnly
                    ></ScaleLabelField>
                    <ScaleLabelTitle>Portion Accuracy: </ScaleLabelTitle>
                    <ScaleAccuracyContainer>
                        <ScaleAccuracyElement
                            color={"orange"}
                        ></ScaleAccuracyElement>
                        <ScaleAccuracyElement
                            color={"greenyellow"}
                        ></ScaleAccuracyElement>
                        <ScaleAccuracyElement
                            color={"red"}
                        ></ScaleAccuracyElement>
                        <ScaleAccuracyLabel>Underserving</ScaleAccuracyLabel>
                        <ScaleAccuracyLabel>Perfect</ScaleAccuracyLabel>
                        <ScaleAccuracyLabel>Overserving</ScaleAccuracyLabel>
                    </ScaleAccuracyContainer>
                </ScaleCard>
            );
        });
        return outputAr;
    };

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
