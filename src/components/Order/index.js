import React from "react";
import {
    PlateOrderContainer,
    PlateOrderTitle,
    PlateOrderDetailsContainer,
    PlateOrderIngredients,
    PlateOrderIngredientsTitle,
    PlateOrderIngredientsRow,
    PlateOrderIngredientsColumn,
    PlateOrderThumbnail,
    PlateOrderButton,
} from "./OrderElements";
import foodThumbnail from "../../assets/images/foodItem.svg";
const OrderComponent = (data) => {
    // console.log("hola");
    // console.log(data);
    return (
        <PlateOrderContainer>
            <PlateOrderTitle>{data.data}</PlateOrderTitle>
            <PlateOrderDetailsContainer>
                <PlateOrderThumbnail src={foodThumbnail} />

                <PlateOrderIngredients>
                    <PlateOrderIngredientsRow>
                        <PlateOrderIngredientsTitle>
                            Ingredients
                        </PlateOrderIngredientsTitle>
                        <PlateOrderIngredientsTitle>
                            Correct Portions
                        </PlateOrderIngredientsTitle>
                    </PlateOrderIngredientsRow>
                    <PlateOrderIngredientsRow>
                        <PlateOrderIngredientsColumn>
                            Meat
                        </PlateOrderIngredientsColumn>
                        <PlateOrderIngredientsColumn>
                            120g
                        </PlateOrderIngredientsColumn>
                    </PlateOrderIngredientsRow>
                </PlateOrderIngredients>
            </PlateOrderDetailsContainer>

            <PlateOrderButton>Prepare it!</PlateOrderButton>
        </PlateOrderContainer>
    );
};

export default OrderComponent;
