import { Router } from "express";
import { Route } from "../../routes/routes.types";

const router = Router();

router.get("/", (req, res, next) => {
    res.send("[GET] user");
});

export default new Route(
    "/user",
    router
);