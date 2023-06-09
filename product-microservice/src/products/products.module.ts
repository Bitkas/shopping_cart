import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './Schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'products', schema: ProductSchema }]),
  ],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
