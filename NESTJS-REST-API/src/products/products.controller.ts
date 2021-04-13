import { Controller, Post, Body, Get, Param } from '@nestjs/common';
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

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productService.getSingleProduct(prodId);
  }
}
