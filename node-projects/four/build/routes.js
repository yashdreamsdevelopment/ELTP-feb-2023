"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
// 3
_1.app.get("/user", (req, res, next) => {
    res.send("[GET] user");
});
_1.app.post("/user", (req, res, next) => {
    res.send("[post] user");
});
_1.app.patch("/user", (req, res, next) => {
    res.send("[patch] user");
});
_1.app.put("/user", (req, res, next) => {
    res.send("[put] user");
});
_1.app.delete("/user", (req, res, next) => {
    res.send("[delete] user");
});
