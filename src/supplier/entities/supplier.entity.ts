import { Column,Entity,PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'suppliers'})
export class SuppliersEntity{
@PrimaryGeneratedColumn()
id:number;

 @Column()
 company:string;

 @Column()
 products: string;

 @Column()
 location:string;

 @Column()
 quantity: string;

 @Column()
 price: number;
}