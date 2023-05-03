"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const authorize = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token)
            return next({ message: 'UNAUTHORIZED', statusCode: 403 });
        const { JWT_SECRET_KEY } = process.env;
        const decryptedData = (0, jsonwebtoken_1.verify)(token, JWT_SECRET_KEY || "");
        next();
    }
    catch (e) {
        next({ message: 'UNAUTHORIZED', statusCode: 403 });
    }
};
exports.authorize = authorize;
//# sourceMappingURL=authorize.js.map