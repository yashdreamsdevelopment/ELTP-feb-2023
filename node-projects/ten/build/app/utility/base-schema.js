"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseSchema = void 0;
const mongoose_1 = require("mongoose");
class BaseSchema extends mongoose_1.Schema {
    constructor(schema) {
        super(Object.assign(Object.assign({}, schema), { isDeleted: {
                type: Boolean,
                default: false
            } }), {
            timestamps: true
        });
    }
}
exports.BaseSchema = BaseSchema;
//# sourceMappingURL=base-schema.js.map