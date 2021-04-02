import styled from "styled-components";

export const PlateOrderContainer = styled.div`
    display: flex;
    padding: 80px 0;
    flex-direction: column;
    @media screen and (max-width: 768px) {
        padding: 40px 0;
        transform: scale(0.5);
    }
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
    justify-content: center;
    margin: 10px 0;
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;
export const PlateOrderIngredients = styled.table`
    border: 1px solid yellowgreen;
    width: 50%;
    color: white;
    /* @media screen and (max-width: 768px) {
        width: 150px;
    } */
`;
export const PlateOrderIngredientsTitle = styled.th`
    padding: 5px 10px;
    font-weight: bold;
`;
export const PlateOrderIngredientsBody = styled.tbody`
    border: 1px solid whitesmoke;
`;
export const PlateOrderIngredientsRow = styled.tr`
    border: 1px solid whitesmoke;
`;
export const PlateOrderIngredientsColumn = styled.td`
    border: 1px solid darkorange;
`;

export const PlateOrderThumbnail = styled.img`
    padding: 2px 0;
    margin: 1px 0;
    height: 100px;
    @media screen and (max-width: 768px) {
        display: none;
        padding: 10px 0;
    }
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
