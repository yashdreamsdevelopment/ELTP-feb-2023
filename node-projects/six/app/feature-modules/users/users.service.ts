import { IUser } from "./users.types";
import { UserResponse } from "./users.response";
import usersSchema from "./users.schema";


const getAll = () => usersSchema.get(u => !u.isDeleted);

const create = (user: IUser) => usersSchema.create(user);

const update = (user: IUser) => {
    const didUpdate = usersSchema.update(user);
    if(!didUpdate) throw UserResponse.NOT_FOUND;

    return UserResponse.UPDATED;
}

const remove = (id: string) => {
    const didDelete = usersSchema.delete(id);
    if(!didDelete) throw UserResponse.NOT_FOUND;

    return UserResponse.DELETED;
}

export default {
    getAll,
    create,
    update,
    remove
}