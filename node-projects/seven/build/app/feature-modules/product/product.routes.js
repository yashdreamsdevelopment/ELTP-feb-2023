"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_types_1 = require("../routes/routes.types");
const product_service_1 = __importDefault(require("./product.service"));
const response_handler_1 = require("../../utility/response-handler");
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    try {
        const result = product_service_1.default.getProducts();
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
});
exports.default = new routes_types_1.Route("/product", router);
