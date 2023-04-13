"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductSchema {
    get(cb) {
        if (cb) {
            return ProductSchema.products.filter(cb);
        }
        return ProductSchema.products;
    }
}
ProductSchema.products = [];
exports.default = new ProductSchema();
