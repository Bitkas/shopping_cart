import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('/products')
export class ProductsController {
  constructor(private service: ProductsService) {}

  @Get()
  getProducts() {
    const res = this.service.getProducts();
    return res;
  }

  @Post()
  createProduct(@Body() data: { price: number }) {
    return this.service.createProduct(data.price);
  }
}
