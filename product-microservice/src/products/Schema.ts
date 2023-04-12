import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SchemaDocument = HydratedDocument<PSchema>;

@Schema()
export class PSchema {
  @Prop()
  productId: string;

  @Prop()
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(PSchema);
