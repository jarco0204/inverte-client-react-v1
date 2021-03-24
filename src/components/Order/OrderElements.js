import styled from "styled-components";
export const PlateOrderContainer = styled.div`
    padding-bottom: 50px;
    display: flex;
    flex-flow: column nowrap;
`;

export const PlateOrderTitle = styled.h2`
    /* border: 1px solid whitesmoke; */
    /* background-color: black; */
    border-radius: 10px;
    margin: auto;
    text-align: center;
    font-size: 22px;
    padding: 10px 10px;
    color: whitesmoke;
    font-weight: bold;
`;
export const PlateOrderDetailsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0px;
`;
export const PlateOrderIngredients = styled.table`
    margin-top: 10px;
    margin-right: 50px;
    border: 1px solid whitesmoke;
    color: white;
`;
export const PlateOrderIngredientsTitle = styled.th`
    padding: 5px 10px;
    font-weight: bold;
`;
export const PlateOrderIngredientsRow = styled.tr`
    border: 1px solid whitesmoke;
`;
export const PlateOrderIngredientsColumn = styled.td`
    border: 1px solid darkorange;
`;

export const PlateOrderThumbnail = styled.img`
    padding: 20px 0;
    margin: 10px 0;
    height: 200px;
`;

export const PlateOrderButton = styled.button`
    border: 1px solid whitesmoke;
    background-color: black;
    border-radius: 10px;
    margin: auto;
    text-align: center;
    font-size: 18px;
    padding: 10px 10px;
    color: whitesmoke;
    font-weight: bold;
    &:hover {
        background: whitesmoke;
        color: green;
        border: 2px solid black;
    }
`;
