"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const feature_modules_1 = __importDefault(require("../feature-modules/"));
exports.routes = [...feature_modules_1.default];
// [new Route("/task", TaskRouter)]
