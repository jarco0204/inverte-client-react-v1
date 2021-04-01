import styled from "styled-components";

export const PlateOrderContainer = styled.div`
    padding-bottom: 50px;
    display: flex;
    flex-flow: column nowrap;
    @media screen and (max-width: 768px) {
        width: 40%;
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
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 20px 0;
    /* grid-template-columns: 1fr 1fr;
    grid-gap: 0px; */
    @media screen and (max-width: 768px) {
        width: 20%;
    }
`;
export const PlateOrderIngredients = styled.table`
    border: 1px solid whitesmoke;
    width: 210px;
    color: white;
    @media screen and (max-width: 768px) {
        width: 150px;
    }
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
    height: 150px;
    @media screen and (max-width: 768px) {
        height: 100px;
        padding: 0 40px;
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
