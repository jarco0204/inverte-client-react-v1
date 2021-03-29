import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/NavBar/";
import Scales from "../components/Scales";

function PrepareOrder() {
    const location = useLocation();
    console.log(location.state); // result: '?query=abc'

    useEffect(() => {
        // console.log(location.pathname); // result: '/secondpage'
        // console.log(location.state); // result: '?query=abc'
    }, [location]);
    return (
        <>
            <Navbar></Navbar>
            <Scales orderData={location.state} />
        </>
    );
}

export default PrepareOrder;
