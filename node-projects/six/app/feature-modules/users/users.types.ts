export interface IUser {
    id: string;
    name: string;
    age: number;
    isDeleted: boolean;
}

export type UserPredicate = (u: IUser) => boolean
