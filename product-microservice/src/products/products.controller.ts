import { Body, Controller, Get, Post } from '@nestjs/common';
import { Product } from './Product';
import { ProductsService } from './products.service';

@Controller('/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Post()
  async createUser(@Body() body: { data: number }): Promise<Product> {
    const product = new Product(body.data);
    return this.productsService.createProduct(product);
  }
}
