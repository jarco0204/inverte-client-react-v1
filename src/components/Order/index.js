import React from "react"; //, { useState }
import { useHistory } from "react-router-dom";
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

    const history = useHistory(); // Allows us to switch page
    const beginOrder = (event) => {
        event.preventDefault();
        console.log("Button clicked");
        // Tell the weighing scales to begin tracking weight.
        history.push({
            pathname: "/username/prepare",
            state: { order: orderData.ingredients },
        });
    };

    const buildTable = () => {
        // console.log(orderData);
        let data = [];
        for (let i = 0; i < orderData.ingredients.ingredients.length; i++) {
            data.push(
                <PlateOrderIngredientsBody key={i}>
                    <PlateOrderIngredientsRow>
                        {insertColumns(
                            orderData.ingredients.ingredients[i],
                            orderData.ingredients.correctPortions[i],
                            i
                        )}
                    </PlateOrderIngredientsRow>
                </PlateOrderIngredientsBody>
            );
        }
        return data;
    };
    const insertColumns = (ingredient, portion, i) => {
        let data = [];

        data.push(
            <React.Fragment key={i}>
                <PlateOrderIngredientsColumn>
                    {ingredient}
                </PlateOrderIngredientsColumn>
                <PlateOrderIngredientsColumn>
                    {portion}
                </PlateOrderIngredientsColumn>
            </React.Fragment>
        );

        return data;
    };

    return (
        <PlateOrderContainer>
            <PlateOrderTitle>
                {orderData.ingredients.order + " Plate"}
            </PlateOrderTitle>
            <PlateOrderDetailsContainer>
                <PlateOrderThumbnail src={foodThumbnail} />
                <PlateOrderIngredients>
                    <PlateOrderIngredientsBody>
                        <PlateOrderIngredientsRow>
                            <PlateOrderIngredientsTitle>
                                Ingredients
                            </PlateOrderIngredientsTitle>
                            <PlateOrderIngredientsTitle>
                                Portion Weight
                            </PlateOrderIngredientsTitle>
                        </PlateOrderIngredientsRow>
                    </PlateOrderIngredientsBody>
                    {buildTable()}
                </PlateOrderIngredients>
            </PlateOrderDetailsContainer>
            <PlateOrderButton onClick={beginOrder}>
                Prepare it!
            </PlateOrderButton>
        </PlateOrderContainer>
    );
};

export default OrderComponent;
