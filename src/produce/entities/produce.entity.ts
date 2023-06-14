import { Column,Entity,PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'produce'})

export class ProduceEntity{
 @PrimaryGeneratedColumn()
 id:number;

@Column()
produceName:string;

 @Column()
 quantity: number;

 @Column()
 price: number;

 @Column()
 owner :string;

 @Column()
 location :string;   
}