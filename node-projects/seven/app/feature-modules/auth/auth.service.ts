import userService from "../user/user.service";
import { IUser } from "../user/user.types";
import { AUTH_RESPONSE } from "./auth.response";
import { ICredentials } from "./auth.types";


const login = (credentials: ICredentials) => {
    const user = userService.getOne(u => 
        u.email === credentials.email &&
        u.password === credentials.password
    );

    if(!user) throw AUTH_RESPONSE.INVALID_CREDENTIALS;

    return user.id;
}

const register = (user: IUser) => {
    userService.create(user);

    return AUTH_RESPONSE.REGISTERED;
}

export default {
    login,
    register
}