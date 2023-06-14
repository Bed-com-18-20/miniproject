import { Column,Entity,PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class buyerEntity{
 @PrimaryGeneratedColumn()
 id:number;

 @Column()
 name:string;
 
 @Column()
 location:string
    
}