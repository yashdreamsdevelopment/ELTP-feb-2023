import productSchema from "./product.schema"
import { IProduct } from "./product.types";


const getProducts = () => productSchema.get(p => !p.isDeleted);

const createProduct = (product: IProduct) => productSchema; 

export default {
    getProducts
}