import React, { useEffect } from "react";
import axios from "axios";
import SignIn from "../components/SignIn";

const SignInPage = () => {
    let APIURL = "http://localhost:8000";

    //Only executes one after this component mounts
    useEffect(async () => {
        // console.log("execute");
        await axios
            .post(APIURL + "/api/user/initiate", {
                headers: {
                    "Content-Type": "application/json;charset=UTF-8",
                    "Access-Control-Allow-Origin": APIURL,
                },
            })
            .then((response) => {
                console.log(response);
            })
            .catch((response) => {
                console.log(response);
                // history.push("/");
            });
    }, []);
    return <SignIn></SignIn>;
};

export default SignInPage;
