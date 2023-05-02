import { ICredential } from "../auth/auth.types";
import { userModel } from "./user.schema";
import { IUser } from "./user.types";

const create = (user: IUser) => userModel.create(user);

const getByCredentials = async (credential: ICredential) => {
    const user = await userModel.findOne({ email: credential.email });
    if(!user) throw { statusCode: 400, message: "INVALID CREDENTIALS" }

    return user;
}

export default {
    create,
    getByCredentials
}