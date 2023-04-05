import { Router } from "express";


export class Route {
    private static paths: string[] = [];

    constructor(
        public path: string,
        public router: Router
    ) {
        if(!this.path.startsWith("/")) {
            throw new Error("routes need to start with '/'");
        }

        if(Route.paths.includes(this.path)) {
            throw new Error(`${path} is already registered`);
        }

        Route.paths.push(this.path);
    }
}