import { Application, NextFunction, Request, Response, json } from "express";
import routes from "../feature-modules";
import { ResponseHandler } from "../utility/response-handler";

export const registerRoutes = (app: Application) => {
    // GLOBAL MIDDLEWARE
    app.use(json());
    
    for(let route of routes) {
        app.use(route.path, route.router);
    }

    // this error handling middleware get called
    // with next(error);
    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        res.status(err.statusCode || 500).send(new ResponseHandler(null, err));
    });
}