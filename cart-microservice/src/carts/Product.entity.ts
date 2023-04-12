import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  constructor(price: number, quantity: number) {
    this.price = price;
    this.quantity = quantity;
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  price: number;

  @Column({ default: 0 })
  quantity: number;
}
