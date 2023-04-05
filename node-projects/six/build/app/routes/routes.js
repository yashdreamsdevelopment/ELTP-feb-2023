"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const express_1 = require("express");
const feature_modules_1 = __importDefault(require("../feature-modules"));
const registerRoutes = (app) => {
    // GLOBAL MIDDLEWARE
    app.use((0, express_1.json)());
    for (let route of feature_modules_1.default) {
        app.use(route.path, route.router);
    }
};
exports.registerRoutes = registerRoutes;
