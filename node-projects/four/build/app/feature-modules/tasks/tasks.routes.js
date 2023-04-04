"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_types_1 = require("../../routes/routes.types");
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    res.send("[GET] task");
});
router.post("/", (req, res, next) => {
    res.send("[post] task");
});
router.patch("/", (req, res, next) => {
    res.send("[patch] task");
});
router.put("/", (req, res, next) => {
    res.send("[put] task");
});
router.delete("/", (req, res, next) => {
    res.send("[delete] task");
});
exports.default = new routes_types_1.Route("user", router);
