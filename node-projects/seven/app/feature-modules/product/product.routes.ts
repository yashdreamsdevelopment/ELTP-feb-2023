import { Router } from "express";
import { Route } from "../routes/routes.types";

const router = Router();

router.get("/", (req, res, next) => {
    try {
        
    } catch(e) {
        next(e);
    }
});

export default new Route(
    "/product",
    router
);