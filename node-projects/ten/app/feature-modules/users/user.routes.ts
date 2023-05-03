import { Router } from "express";
import { Route } from "../../routes/routes.types";
import { authorize } from "../../utility/authorize";

const router = Router();

router.get("/sensitive", authorize, (req, res, next) => {
    try {
        // IF USER HAS LOGGED IN.
        res.send("sensitive data sent");
    } catch(e) {
        next(e);
    }
})

router.get("/sensitive2", (req, res, next) => {
    try {
        // IF USER HAS LOGGED IN.
        res.send("sensitive data sent");
    } catch(e) {
        next(e);
    }
})

export default new Route(
    "/user",
    router
)