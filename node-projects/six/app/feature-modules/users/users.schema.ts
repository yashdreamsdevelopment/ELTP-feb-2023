import { v4 } from "uuid";
import { IUser, UserPredicate } from "./users.types";
import { UserResponse } from "./users.response";

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


    update(user: IUser) {
        const recordIndex = UserSchema.users.findIndex(u => u.id === user.id);

        if(recordIndex === -1) {
            return false;
        }

        UserSchema.users[recordIndex] = { ...UserSchema.users[recordIndex], ...user };

        return true;
    }

    delete(id: string) {
        const recordIndex = UserSchema.users.findIndex(u => u.id === id);

        if(recordIndex === -1) {
            return false;
        }

        UserSchema.users[recordIndex].isDeleted = true

        return true;
    }
}

export default new UserSchema();