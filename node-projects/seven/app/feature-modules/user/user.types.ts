

export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
}

export type Users = IUser[];

export type UserPredicate = (u: IUser) => boolean;