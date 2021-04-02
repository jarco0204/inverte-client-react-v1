const io = require("socket.io-client");

/**
 * Variables and constants
 */
const socket = io("http://localhost:8000/");
let weightScale1 = 2000;
let weightScale2 = 2000;

/**
 * Mimics a weighting scale client hardware.
 * Executes every 2.5 seconds, but in practice it will execute once it detects a weight change
 */
const main = () => {
    setInterval(sendData, 2500);
};
/**
 * Send data to the websocket running in localhost
 * Calls getWeightReading() which returns an object or false.
 */
const sendData = () => {
    // Second parameter is data in socket.io server
    let answer = getWeightReading();
    if (!answer) {
        console.log("No change generated; thus, don't send any data");
    } else {
        socket.emit("updateWeightReading", answer);
    }
};
/**
 * Uses chance to determine if a change is generated or not.
 * It also determines which scaleID is the change being generated for
 * @returns false if change is not generated or a weight reading object.
 */
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
/**
 * Determines the current weight and previous weight of food pan.
 * For V.0.0.2, it only works with two weighing scales.
 * @param {*} scaleID
 * @returns obj{prevWeight and curWeight}
 */
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

main(); // Start program
