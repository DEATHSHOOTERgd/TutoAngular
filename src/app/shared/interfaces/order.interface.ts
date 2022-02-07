export interface Details{
    productId:number;
    productName:string;
    quantity:number;
}
export interface Order{
    name:string;
    shipingAdress:string;
    city:string;
    date:string;
    pickup:boolean;
    id:number;
}
export interface DetailsOrders{
    details:Details[];
    orderId:number;
}