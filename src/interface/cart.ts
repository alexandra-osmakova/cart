export interface ICartData extends IBaseCartData {
    id: number;
}

export interface IBaseCartData {
    name: string;
    price: number;
    quantity: number;
}