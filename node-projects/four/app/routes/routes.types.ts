import { Router } from "express";

export class Route {
    private static paths: string[] = [];
    public path: string;

    constructor(
        path: string,
        public router: Router
    ) {
        // check if path starts from /
        if(!path.startsWith("/")) {
            throw new Error("route path needs to start with '/'");
        }

        // check if path is already registered
        if(Route.paths.includes(path)) {
            throw new Error(`${path} has already been registered.`);
        }

        Route.paths.push(path);
        this.path = path;
    }

    // long way 
    // public path: string;
    // public router: Router;
    // constructor(
    //     path: string,
    //     router: Router
    // ) {
        // this.path = path;
        // this.router = router;
    // }
}

export type Routes = Route[];