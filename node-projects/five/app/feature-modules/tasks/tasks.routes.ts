import { Router } from "express";
import { Route } from "../../routes/routes.types";

const router = Router();

router.get("/", (req, res, next) => {
    res.send("[GET] task");
});

export default new Route(
    "/task",
    router
);