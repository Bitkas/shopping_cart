import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './Product';
import { SchemaDocument } from './Schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('products') private productModel: Model<SchemaDocument>,
  ) {}

  async createProduct(productDto: Product): Promise<Product> {
    const product = new this.productModel(productDto);
    return product.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }
}
