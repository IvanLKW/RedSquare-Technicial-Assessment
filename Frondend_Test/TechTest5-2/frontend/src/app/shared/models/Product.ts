export class Product{
    id!:number;
    title!:string;
    description!:string;
    discountPercentage!:number;
    stock!:number;
    price!:number;
    brand!:string;
    rating:number = 0;
    category!:string;
    thumbnail!:string;
    images!:string[];
}