import { Router } from "express";
import { Route } from "../../routes/routes.types";
import userService from "./user.service";
import { ResponseHandler } from "../../utility/response-handler";
const router = Router();

router.get("/", async (req, res, next) => {
    try {
        const result = await userService.getAll({});
        res.send(new ResponseHandler(result));
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