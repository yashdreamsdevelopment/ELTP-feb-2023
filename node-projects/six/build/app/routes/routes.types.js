"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
class Route {
    constructor(path, router) {
        this.path = path;
        this.router = router;
        if (!this.path.startsWith("/")) {
            throw new Error("routes need to start with '/'");
        }
        if (Route.paths.includes(this.path)) {
            throw new Error(`${path} is already registered`);
        }
        Route.paths.push(this.path);
    }
}
Route.paths = [];
exports.Route = Route;
