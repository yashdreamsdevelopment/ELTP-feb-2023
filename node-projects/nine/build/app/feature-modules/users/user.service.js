"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./user.schema");
const create = (user) => user_schema_1.userModel.create(user);
const getByCredentials = (credential) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_schema_1.userModel.findOne({ email: credential.email });
    if (!user)
        throw { statusCode: 400, message: "INVALID CREDENTIALS" };
    return user;
});
exports.default = {
    create,
    getByCredentials
};
//# sourceMappingURL=user.service.js.map