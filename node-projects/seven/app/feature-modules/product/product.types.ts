

export interface IProduct {
    name: string;
    description: string;
    price: string;
    isDeleted: boolean;
}

export type Products = IProduct[];

export type ProductPredicate = (p: IProduct) => boolean;