import React from "react";
import {
    PlateOrderContainer,
    PlateOrderTitle,
    PlateOrderDetailsContainer,
    PlateOrderIngredients,
    PlateOrderIngredientsTitle,
    PlateOrderIngredientsBody,
    PlateOrderIngredientsRow,
    PlateOrderIngredientsColumn,
    PlateOrderThumbnail,
    PlateOrderButton,
} from "./OrderElements";
import foodThumbnail from "../../assets/images/foodItem.svg";
const OrderComponent = (orderData) => {
    // console.log("hola");
    console.log(orderData);
    // console.log(correctPortions);

    return (
        <PlateOrderContainer>
            <PlateOrderTitle>{orderData.ingredients.order}</PlateOrderTitle>
            <PlateOrderDetailsContainer>
                <PlateOrderThumbnail src={foodThumbnail} />

                <PlateOrderIngredients>
                    <PlateOrderIngredientsBody>
                        <PlateOrderIngredientsRow>
                            <PlateOrderIngredientsTitle>
                                Ingredients
                            </PlateOrderIngredientsTitle>
                            <PlateOrderIngredientsTitle>
                                Correct Portions
                            </PlateOrderIngredientsTitle>
                        </PlateOrderIngredientsRow>
                    </PlateOrderIngredientsBody>
                    <PlateOrderIngredientsBody>
                        <PlateOrderIngredientsRow>
                            <PlateOrderIngredientsColumn>
                                Meat
                            </PlateOrderIngredientsColumn>
                            <PlateOrderIngredientsColumn>
                                120g
                            </PlateOrderIngredientsColumn>
                        </PlateOrderIngredientsRow>
                    </PlateOrderIngredientsBody>
                </PlateOrderIngredients>
            </PlateOrderDetailsContainer>

            <PlateOrderButton>Prepare it!</PlateOrderButton>
        </PlateOrderContainer>
    );
};

export default OrderComponent;
