export interface IUser {
    id: string;
    name: string;
    age: number;
    isDeleted: boolean;
    [key: string]: any;
}

export type UserPredicate = (u: IUser) => boolean
