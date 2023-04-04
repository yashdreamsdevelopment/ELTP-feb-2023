"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_routes_1 = __importDefault(require("./user/user.routes"));
const tasks_routes_1 = __importDefault(require("./tasks/tasks.routes"));
exports.default = [
    user_routes_1.default,
    tasks_routes_1.default
];
