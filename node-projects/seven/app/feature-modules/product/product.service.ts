import productSchema from "./product.schema"


const getProducts = () => productSchema.get(p => !p.isDeleted);

export default {
    getProducts
}