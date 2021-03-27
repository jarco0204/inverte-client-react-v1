import React from "react"; //, { useState }
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
    // let length = 4;
    // const [orderInfo, setOrderInfo] = useState(false);

    const buildTable = () => {
        // console.log(orderData);
        let data = [];
        for (let i = 0; i < orderData.ingredients.ingredients.length; i++) {
            data.push(
                <PlateOrderIngredientsBody key={i}>
                    <PlateOrderIngredientsRow>
                        {insertColumns(
                            orderData.ingredients.ingredients[i],
                            orderData.ingredients.correctPortions[i]
                        )}
                    </PlateOrderIngredientsRow>
                </PlateOrderIngredientsBody>
            );
        }
        return data;
    };
    const insertColumns = (ingredient, portion) => {
        let data = [];

        data.push(
            <>
                <PlateOrderIngredientsColumn>
                    {ingredient}
                </PlateOrderIngredientsColumn>
                <PlateOrderIngredientsColumn>
                    {portion}
                </PlateOrderIngredientsColumn>
            </>
        );

        return data;
    };

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
                                Weight
                            </PlateOrderIngredientsTitle>
                        </PlateOrderIngredientsRow>
                    </PlateOrderIngredientsBody>
                    {buildTable()}
                </PlateOrderIngredients>
            </PlateOrderDetailsContainer>

            <PlateOrderButton>Prepare it!</PlateOrderButton>
        </PlateOrderContainer>
    );
};

export default OrderComponent;
