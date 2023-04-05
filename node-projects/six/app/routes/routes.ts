import { Application, json } from "express";
import routes from "../feature-modules";

export const registerRoutes = (app: Application) => {
    // GLOBAL MIDDLEWARE
    app.use(json());
    
    for(let route of routes) {
        app.use(route.path, route.router);
    }
}