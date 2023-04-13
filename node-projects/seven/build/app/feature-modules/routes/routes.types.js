"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
class Route {
    constructor(path, router) {
        this.path = path;
        this.router = router;
        if (!this.path.startsWith("/")) {
            throw new Error("path should start with /");
        }
        if (Route.routes.includes(this.path)) {
            throw new Error("path already exists");
        }
        Route.routes.push(this.path);
    }
}
Route.routes = [];
exports.Route = Route;
