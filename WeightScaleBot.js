const io = require("socket.io-client");

let weight;
const sendData = async () => {
    weight += 1;
    let socket = io("http://localhost:8000/");
    await socket.emit("updateWeightReading", {
        weight: weight,
        message: "Weight-reading",
    });
};
const main = () => {
    weight = 356;

    console.log("it works");
    setInterval(sendData, 3000);
};

main(); // Start program
