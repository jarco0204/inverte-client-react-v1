import React from "react";
import {
    PlateOrderContainer,
    PlateOrderTitle,
    PlateOrderThumbnail,
} from "./OrderElements";
import foodThumbnail from "../../assets/images/foodItem.svg";
const OrderComponent = (data) => {
    // console.log("hola");
    // console.log(data);
    return (
        <PlateOrderContainer>
            <PlateOrderTitle>{data.data}</PlateOrderTitle>
            <PlateOrderThumbnail src={foodThumbnail} />
        </PlateOrderContainer>
    );
};

export default OrderComponent;
