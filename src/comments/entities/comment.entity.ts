import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'comments'})
export class CommentsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  phone: number;
}
