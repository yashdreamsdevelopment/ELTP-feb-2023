
export const validateRegister = (user: any) => {
    const emailExists = user.email;
    if (!emailExists) throw { message: 'email is mandatory' }

    const passwordExists = user.password;
    if (!passwordExists) throw { message: 'password is mandatory' }

    const nameExists = user.name;
    if (!nameExists) throw { message: 'name is mandatory' }
}