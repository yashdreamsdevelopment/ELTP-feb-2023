import { Router } from "express";


export class Route {
    private static routes: string[] = [];
    constructor(
        public path: string,
        public router: Router
    ) {
        if(!this.path.startsWith("/")) {
            throw new Error("path should start with /")
        }

        if(Route.routes.includes(this.path)) {
            throw new Error("path already exists");
        }

        Route.routes.push(this.path);        
    }
}

export type Routes = Route[];