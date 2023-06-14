import { IsNotEmpty, IsNumber, MaxLength, MinLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({ name:'user'})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  @IsNumber()
  @MaxLength(600)
  @MinLength(10)
  @IsNotEmpty()
  username: string;
}