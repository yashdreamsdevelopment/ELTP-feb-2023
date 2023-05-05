import { userModel } from "./user.schema";
import { IUser } from "./user.types";

const create = (user: IUser) => userModel.create(user);

const get = (filter: Partial<IUser>) => userModel.findOne(filter);

const getAll = (
    filter: Partial<IUser>
) => userModel.find(filter).populate("role");

export default {
    create,
    get,
    getAll
}