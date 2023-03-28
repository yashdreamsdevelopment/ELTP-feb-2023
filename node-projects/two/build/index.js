"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// express is a constructor function
const express_1 = __importDefault(require("express"));
const data_1 = require("./data");
// app is the express application
// the app const is the central object of the
// entire project
const app = (0, express_1.default)();
// use the callback whenever there is a request
// req => Request object => passed by express => contains the details of the http request
// res => Response object => passed by express => contains helper methods to send a response
app.use((req, res) => {
    if (req.ip.includes("192.168.3.81")) {
        return res.send("no data for shubham");
    }
    console.log("here");
    res.send(data_1.usersDB);
});
// opens port 3000 on the computer
// and can now accept requests through http
app.listen(3000, () => console.log('SERVER STARTED ON PORT 3000'));
// creates a baseurl of
// http://localhost:3000
