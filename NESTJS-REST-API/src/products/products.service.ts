import { Injectable } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insert(title: string, desc: string, price: number) {
    const prodId = new Date().toString();
    const newProduct = new Product(new Date().toString(), title, desc, price);
    this.products.push(newProduct);
    return prodId;
  }

  getProducts() {
    return [...this.products];
  }
}
