"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
class Route {
    constructor(path, router) {
        this.router = router;
        // check if path starts from /
        if (!path.startsWith("/")) {
            throw new Error("route path is not correct");
        }
        this.path = path;
    }
}
exports.Route = Route;
