import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insert(title: string, desc: string, price: number) {
    const prodId = Math.random().toString();
    const newProduct = new Product(new Date().toString(), title, desc, price);
    this.products.push(newProduct);
    return prodId;
  }

  getProducts() {
    return [...this.products];
  }
  getSingleProduct(productId: string) {
    const product = this.products.find((prod) => prod.id === productId);
    if (!product) {
      throw new NotFoundException('not found');
    }
    return { ...product };
  }
  updateSingleProduct(
    productId: string,
    title: string,
    desc: string,
    price: number,
  ) {
    const product = this.products.find((prod) => prod.id === productId);
    const productIndex = this.products.findIndex(
      (prod) => prod.id === productId,
    );
    const updatedProduct = { ...product };
    if (title) {
      updatedProduct.title = title;
    }
    if (desc) {
      updatedProduct.desc = desc;
    }
    if (price) {
      updatedProduct.price = price;
    }
    this.products[productIndex] = updatedProduct;
  }

  deleteSingleProduct(productId: string) {
    const productIndex = this.products.findIndex(
      (prod) => prod.id === productId,
    );
    this.products.splice(productIndex, 1);
  }
}
