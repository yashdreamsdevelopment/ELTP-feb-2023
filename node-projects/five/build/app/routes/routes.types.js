"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
class Route {
    constructor(path, router) {
        this.router = router;
        if (!path.startsWith("/")) {
            throw new Error(`${path} - needs to start with a '/'`);
        }
        if (Route.paths.includes(path)) {
            throw new Error(`${path} cannot be registered more than once`);
        }
        Route.paths.push(path);
        this.path = path;
    }
}
Route.paths = [];
exports.Route = Route;
