"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// req => Request object
// res => Response object
// next => NextFunction
// MIDDLEWARE FUNCTION
// GLOBAL MIDDLEWARES
app.use((req, res, next) => {
    console.log("[1]");
    // res.send("[1] out");
    // calls the next middleware function
    next();
});
// registering another middleware function
// GLOBAL
app.use((req, res, next) => {
    console.log("[2]");
    // res.send("[2]");
    next();
});
app.post("/abcd", (req, res, next) => {
    res.send("from the post method");
});
// GLOBAL
app.use((req, res, next) => {
    res.send("[3]");
    console.log("[3]");
});
app.get("/abcd", (req, res, next) => {
    res.send("from the get method");
});
app.listen(3000, () => console.log('SERVER STARTED ON PORT 3000'));
// http://localhost:3000
