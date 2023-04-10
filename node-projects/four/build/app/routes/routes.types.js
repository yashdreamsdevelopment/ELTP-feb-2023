"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
class Route {
    constructor(path, router) {
        this.router = router;
        // check if path starts from /
        if (!path.startsWith("/")) {
            throw new Error("route path needs to start with '/'");
        }
        // check if path is already registered
        if (Route.paths.includes(path)) {
            throw new Error(`${path} has already been registered.`);
        }
        Route.paths.push(path);
        this.path = path;
    }
}
Route.paths = [];
exports.Route = Route;
