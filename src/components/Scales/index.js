import React from "react";
import {
    ScaleCard,
    ScalesContainer,
    ScalesWrapper,
    ScaleMainTitle,
    ScaleLabelTitle,
    ScaleLabelField,
    ScaleOrderTitle,
} from "./ScaleElements";

const Scales = (orderData) => {
    // console.log(orderData.orderData.order.order);
    return (
        <ScalesContainer>
            <ScaleOrderTitle>{orderData.orderData.order.order}</ScaleOrderTitle>
            <ScalesWrapper>
                <ScaleCard>
                    <ScaleMainTitle>
                        {orderData.orderData.order.ingredients[0]}
                    </ScaleMainTitle>
                    <ScaleLabelTitle>Current Weight (g): </ScaleLabelTitle>
                    <ScaleLabelField
                        type="text"
                        placeholder="10"
                        readonly
                    ></ScaleLabelField>
                </ScaleCard>
            </ScalesWrapper>
        </ScalesContainer>
    );
};

export default Scales;
