const io = require("socket.io-client");

const socket = io("http://localhost:8000/");
let weightScale1 = 2000;
let weightScale2 = 2000;

const sendData = async () => {
    // Second parameter is data in socket.io server
    let answer = await getWeightReading();
    if (!answer) {
        console.log("No change generated");
    } else {
        await socket.emit("updateWeightReading", answer);
    }
};
const getWeightReading = () => {
    let orderChance = Math.floor(Math.random() * 2); //0 or 1
    if (orderChance) {
        // There is an order
        let weightScaleChance = Math.floor(Math.random() * 2); //0 or 1
        let data = {};
        if (weightScaleChance) {
            data = fluctuateFoodPan(0);
            return { scaleID: 0, curWeight: data.cur, prevWeight: data.prev };
        } else {
            data = fluctuateFoodPan(1);
            return { scaleID: 1, curWeight: data.cur, prevWeight: data.prev };
        }
    } else {
        return false;
    }
};
const fluctuateFoodPan = (scaleID) => {
    let weightFluctuation = 40 + Math.floor(Math.random() * 10); //40 to 50
    if (scaleID) {
        let prevWeight = weightScale1;
        if (weightScale1 - weightFluctuation < 100) {
            weightScale1 = 2000; //refill
        } else {
            weightScale1 = weightScale1 - weightFluctuation;
        }
        return { cur: weightScale1, prev: prevWeight };
    } else {
        let prevWeight = weightScale2;
        if (weightScale2 - weightFluctuation < 100) {
            weightScale2 = 2000; //refill
        } else {
            weightScale2 = weightScale2 - weightFluctuation;
        }
        return { cur: weightScale2, prev: prevWeight };
    }
};
const main = () => {
    setInterval(sendData, 2500);
};

main(); // Start progra
