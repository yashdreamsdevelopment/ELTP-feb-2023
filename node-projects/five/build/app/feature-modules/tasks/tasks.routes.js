"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_types_1 = require("../../routes/routes.types");
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    res.send("[GET] task");
});
exports.default = new routes_types_1.Route("/task", router);
