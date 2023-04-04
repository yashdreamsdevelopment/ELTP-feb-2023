import { Router } from "express";


export class Route {
    private static paths: string[] = [];
    path: string;

    constructor(
        path: string,
        public router: Router 
    ) {
        if(!path.startsWith("/")) {
            throw new Error(`${path} - needs to start with a '/'`);
        }

        if(Route.paths.includes(path)) {
            throw new Error(`${path} cannot be registered more than once`);
        }

        Route.paths.push(path);
        this.path = path;
    }
}

export type Routes = Route[];