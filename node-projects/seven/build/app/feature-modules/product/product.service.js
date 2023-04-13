"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_schema_1 = __importDefault(require("./product.schema"));
const getProducts = () => product_schema_1.default.get(p => !p.isDeleted);
exports.default = {
    getProducts
};
