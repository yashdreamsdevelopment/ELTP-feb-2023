import { Request, Response, NextFunction, Router } from "express";
import { Route } from "../routes/routes.types";
import authService from "./auth.service";
import { ResponseHandler } from "../../utility/response-handler";

const router = Router();

router.post("/register", [
    (req: Request, res: Response, next: NextFunction) => {
        const body = req.body;
        // check
    },

    (req: Request, res: Response, next: NextFunction) => {
        const body = req.body;
        // check
    }
] ,(req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.body;
        const result = authService.register(user);
        res.send(new ResponseHandler(result));
    } catch(e) {
        next(e);
    }
});

router.post("/login", (req, res, next) => {
    try {
        const credentials = req.body;
        const result = authService.login(credentials);
        res.send(new ResponseHandler(result));
    } catch(e) {
        next(e);
    }
})

export default new Route(
    "/auth",
    router
)