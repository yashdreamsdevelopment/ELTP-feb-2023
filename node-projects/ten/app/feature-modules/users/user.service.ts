import userRepo from "./user.repo";
import { IUser } from "./user.types";

const create = (user: IUser) => userRepo.create(user);

const get = (filter: Partial<IUser>) => userRepo.get(filter);

const getAll = (filter: Partial<IUser>) => userRepo.getAll(filter);

export default {
    create,
    get,
    getAll
}