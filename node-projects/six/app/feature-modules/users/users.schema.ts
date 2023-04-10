import { IUser, UserPredicate } from "./users.types";

class UserSchema {
    private static users: IUser[] = [];

    get(cb: UserPredicate = (u) => true) {
        return UserSchema.users.filter(cb);
    }

    create(user: IUser) {
        const userRecord = { ...user, isDeleted: false, id: v4() };
        UserSchema.users.push(userRecord);

        return userRecord;
    }
}