import { v4 } from "uuid";
import { IUser, UserPredicate, Users } from "./user.types";

class UserSchema {
    private static users: Users = [];

    getOne(cb: UserPredicate) {
        return UserSchema.users.find(cb);
    }

    create(user: IUser) {
        const userRecord = { ...user, id: v4() };
        UserSchema.users.push(userRecord);

        return userRecord;
    }
}

export default new UserSchema();