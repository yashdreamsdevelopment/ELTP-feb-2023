"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = require("./feature-modules/routes/routes");
const startServer = () => {
    const app = (0, express_1.default)();
    (0, routes_1.registerRoutes)(app);
    const { PORT } = process.env;
    app.listen(PORT, () => console.log(`SERVER STARTED ON PORT: ${PORT}`));
};
exports.startServer = startServer;
