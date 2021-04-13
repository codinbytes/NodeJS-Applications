import { Controller, Post, Body, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}
  @Post()
  addProduct(
    @Body('title') productTitle: string,
    @Body('desc') productDesc: string,
    @Body('price') productPrice: number,
  ): any {
    const generatedID = this.productService.insert(
      productTitle,
      productDesc,
      productPrice,
    );
    return { id: generatedID };
  }

  @Get()
  getAllProducts() {
    return this.productService.getProducts();
  }
}
