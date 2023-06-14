import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LoanEntity {
@PrimaryGeneratedColumn()
id: number;

@Column()
amount: number;

@Column()
type: string;

@Column()
period:
number;

@Column()
rate: number;
}