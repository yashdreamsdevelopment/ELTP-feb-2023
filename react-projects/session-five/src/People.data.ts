export interface IPerson {
    id: string;
    name: string;
    email: string;
    age: number;
    isGood: boolean;
}

export type People = IPerson[];

export let people: People = [
    { id: '1', name: 'Yashwant', email: 'yashwant@coditas.com', age: 21, isGood: true },
    { id: '2', name: 'Kaavya', email: 'kaavya@coditas.com', age: 22, isGood: true },
    { id: '3', name: 'Rifshah', email: 'rifshah@coditas.com', age: 23, isGood: true },
    { id: '4', name: 'Abhishek', email: 'abhishek@coditas.com', age: 24, isGood: true },
    { id: '5', name: 'Wamika', email: 'wamika@coditas.com', age: 25, isGood: true },
    { id: '6', name: 'Sudheer', email: 'sudheer@coditas.com', age: 26, isGood: true },
];