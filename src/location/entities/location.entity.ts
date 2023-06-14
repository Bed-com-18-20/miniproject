import { Column,Entity,PrimaryGeneratedColumn } from "typeorm";
@Entity({name:'location'})
export class LocationEntity{
    @PrimaryGeneratedColumn()

    id:number;

   @Column()
    name:string;
   
    @Column()
    district:string;
     
    @Column()
    country: string;

}