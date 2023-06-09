import { Router } from "express";
import { Route } from "../../routes/routes.types";

const router = Router();

router.get("/", (req, res, next) => {
    res.send("[GET] user");
})

router.post("/", (req, res, next) => {
    res.send("[post] user");
})

router.patch("/", (req, res, next) => {
    res.send("[patch] user");
})

router.put("/", (req, res, next) => {
    res.send("[put] user");
})

router.delete("/", (req, res, next) => {
    res.send("[delete] user");
});

export default new Route("/user", router);