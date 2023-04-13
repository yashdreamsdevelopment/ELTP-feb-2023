import { IProduct, ProductPredicate, Products } from "./product.types";


class ProductSchema {
    private static products: Products = [];

    get(cb?: ProductPredicate) {
        if (cb) {
            return ProductSchema.products.filter(cb);
        }

        return ProductSchema.products;
    }
}

export default new ProductSchema();