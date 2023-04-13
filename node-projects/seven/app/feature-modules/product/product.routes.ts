import { Router } from "express";
import { Route } from "../routes/routes.types";
import productService from "./product.service";
import { ResponseHandler } from "../../utility/response-handler";

const router = Router();

router.get("/", (req, res, next) => {
    try {
        const result = productService.getProducts();
        res.send(new ResponseHandler(result));
    } catch(e) {
        next(e);
    }
});

export default new Route(
    "/product",
    router
);