import { Request, Response, NextFunction, Router } from "express";
import { Route } from "../routes/routes.types";
import authService from "./auth.service";
import { ResponseHandler } from "../../utility/response-handler";
import { validateRegister } from "./auth.validations";

const router = Router();

const randomFn = (req: Request, res: Response, next: NextFunction) => {
    req.body["abcd"]
}

const body = (str: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if(req.body[str]) return next();

        return next({ message: `${str} is required` });
    }
}

router.post("/register",
    // register the returning middleware
    body("name"),
    body("email"),
    (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = req.body;
            const result = authService.register(user);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    });

router.post("/login", (req, res, next) => {
    try {
        const credentials = req.body;
        const result = authService.login(credentials);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

export default new Route(
    "/auth",
    router
)