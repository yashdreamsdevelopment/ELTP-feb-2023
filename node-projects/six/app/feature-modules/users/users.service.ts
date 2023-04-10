import { v4 } from "uuid";
import { users } from "./users.data";
import { IUser } from "./users.types";
import { UserResponse } from "./users.response";


const getAll = () => users.filter(u => !u.isDeleted);

const create = (user: IUser) => {
    const userRecord = {...user, isDeleted: false, id: v4() };
    users.push(userRecord);

    return userRecord;
}

const update = (user: IUser) => {
    const userIndex = users.findIndex(u => u.id === user.id);
    if(userIndex === -1) {
        return UserResponse.NOT_FOUND;
    }

    users[userIndex] = user;
    return UserResponse.UPDATED;
}

const remove = (id: string) => {
    const userIndex = users.findIndex(u => u.id === id);
    if(userIndex === -1) {
        return UserResponse.NOT_FOUND;
    }

    users[userIndex].isDeleted = true;
    return UserResponse.DELETED;
}

export default {
    getAll,
    create,
    update,
    remove
}