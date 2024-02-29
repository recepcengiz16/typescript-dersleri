import { Product } from "./Product";


export class SimpleDataSource {
    private products:Array<Product>;

    constructor(){
        this.products = new Array<Product>(
            new Product(1,"Samsung S5","Telefon",1000),
            new Product(2,"IPhone","Telefon",1500),
            new Product(3,"Samsung S3","Telefon",900),
            new Product(4,"Samsung S6","Telefon",1200),
            new Product(5,"Samsung S7","Telefon",1400),
        )
    }

    getProducts():Product[] {
        return this.products;
    }
}