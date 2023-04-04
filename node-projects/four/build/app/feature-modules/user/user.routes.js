"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_types_1 = require("../../routes/routes.types");
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    res.send("[GET] user");
});
router.post("/", (req, res, next) => {
    res.send("[post] user");
});
router.patch("/", (req, res, next) => {
    res.send("[patch] user");
});
router.put("/", (req, res, next) => {
    res.send("[put] user");
});
router.delete("/", (req, res, next) => {
    res.send("[delete] user");
});
exports.default = new routes_types_1.Route("/user", router);
