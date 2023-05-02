"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const express_validator_1 = require("express-validator");
const validate = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty())
        return next({
            statusCode: 400,
            data: errors.array()
        });
    next();
};
exports.validate = validate;
//# sourceMappingURL=validate.js.map