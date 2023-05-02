import { compare, genSalt, hash } from "bcryptjs";
import { IUser } from "../users/user.types";
import userService from "../users/user.service";
import { AUTH_RESPONSE } from "./auth.response";
import { ICredential } from "./auth.types";

const hashPassword = async (password: string) => {
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);  

    return hashedPassword; 
}

const register = async (user: IUser) => {
    user.password = await hashPassword(user.password);
    await userService.create(user);
    return AUTH_RESPONSE.USER_CREATED
}

const login = async (credentials: ICredential) => {
    const user = await userService.getByCredentials(credentials);
    const didMatch = await compare(credentials.password, user.password);

    if(!didMatch) throw { statusCode: 400, message: "INVALID CREDENTIALS" }

    return "logged in";
}

export default {
    register,
    login
}