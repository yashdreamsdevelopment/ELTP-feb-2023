import userSchema from "./user.schema";
import { IUser, UserPredicate } from "./user.types";

const create = (user: IUser) => userSchema.create(user);

const getOne = (cb: UserPredicate) => userSchema.getOne(cb);

export default {
    getOne,
    create
}