"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_types_1 = require("../../routes/routes.types");
const uuid_1 = require("uuid");
const router = (0, express_1.Router)();
const users = [];
// get all
router.get("/", (req, res, next) => {
    res.send(users);
});
// create
router.post("/", (req, res, next) => {
    const user = Object.assign(Object.assign({}, req.body), { isDeleted: false, id: (0, uuid_1.v4)() });
    users.push(user);
    res.send(user);
});
router.put("/", (req, res, next) => {
});
router.patch("/", (req, res, next) => {
});
router.delete("/", (req, res, next) => {
});
exports.default = new routes_types_1.Route("/user", router);
