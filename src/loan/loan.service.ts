import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { LoanEntity } from './entities/loan.entity';
 
@Injectable()
export class  loanService {
  constructor(
    @InjectRepository(LoanEntity)
    private readonly  loanRepository: Repository<LoanEntity>,
  ) {}

  async createLoan(loanData: LoanEntity): Promise<LoanEntity> {
    const loan = this. loanRepository.create(loanData);
    return this. loanRepository.save(loan);
  }

  async findOne(id: number): Promise<LoanEntity> {
    const findOneOptions: FindOneOptions<LoanEntity> = ({ where: { id } });
    return this. loanRepository.findOne(findOneOptions);
  }
  async  updateLoan(id :number, loanData : LoanEntity) : Promise<LoanEntity>{
    const loan = await this.findOne(id);
    this. loanRepository.merge(loan, loanData);
    return this. loanRepository.save(loan);
  }

  async delete(id: number): Promise<void> {
    await this. loanRepository.delete(id);
  }
}









 