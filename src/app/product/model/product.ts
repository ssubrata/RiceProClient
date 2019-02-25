import { Category } from "../../category/model/category";

export interface Product{
    productId:number;
    productName:string;
    description:string;
    categoryId:number;
    Category:Category;
}