"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_types_1 = require("../../routes/routes.types");
const authorize_1 = require("../../utility/authorize");
const router = (0, express_1.Router)();
router.get("/sensitive", authorize_1.authorize, (req, res, next) => {
    try {
        // IF USER HAS LOGGED IN.
        res.send("sensitive data sent");
    }
    catch (e) {
        next(e);
    }
});
exports.default = new routes_types_1.Route("/user", router);
//# sourceMappingURL=user.routes.js.map