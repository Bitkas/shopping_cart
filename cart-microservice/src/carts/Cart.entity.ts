import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Product } from './Product.entity';

@Entity()
export class Cart {
  constructor(userId: number, totalPrice: number, totalQuantity: number) {
    this.userId = userId;
    this.totalPrice = totalPrice;
    this.totalQuantity = totalQuantity;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  userId: number;

  @Column({ default: 0 })
  totalPrice: number;

  @Column({ default: 0 })
  totalQuantity: number;

  @ManyToMany(() => Product, { cascade: true })
  @JoinTable()
  products: Product[];
}
