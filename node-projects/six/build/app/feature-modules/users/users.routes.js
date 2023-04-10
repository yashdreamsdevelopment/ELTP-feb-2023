"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_types_1 = require("../../routes/routes.types");
const uuid_1 = require("uuid");
const router = (0, express_1.Router)();
const users = [];
// get all
router.get("/", (req, res, next) => {
    res.send(users.filter(u => !u.isDeleted));
});
// create
router.post("/", (req, res, next) => {
    const user = Object.assign(Object.assign({}, req.body), { isDeleted: false, id: (0, uuid_1.v4)() });
    users.push(user);
    res.send(user);
});
router.put("/", (req, res, next) => {
    const { id } = req.body;
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) {
        return res.send("user not found");
    }
    users[userIndex] = req.body;
    res.send("user updated");
});
// create a route param called id
// http://localhost:PORT/users/<id>
// eg - http://localhost:PORT/users/1234567890
// req.params = { id: '<id>' }
// eg - { id: '1234567890' }
router.delete("/:id", (req, res, next) => {
    // const { id } = req.body;
    const { id } = req.params;
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) {
        return res.send("user not found");
    }
    users[userIndex].isDeleted = true;
    res.send("user deleted");
});
exports.default = new routes_types_1.Route("/user", router);
