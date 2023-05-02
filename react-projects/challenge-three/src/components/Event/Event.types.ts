interface IAddress {
    city: string;
    country: string;
}

export interface IEventProps {
    title: string;
    date: string;
    address: IAddress;
    imgUrl: string;
}