import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { buyerEntity } from './entities/buyer.entity';
import { promises } from 'dns';

@Injectable()
export class BuyerService {
  
  constructor(
    @InjectRepository(buyerEntity)
    private readonly buyerRepository: Repository<buyerEntity>,
  ) {}

  async createBuyer(buyerData: buyerEntity): Promise<buyerEntity> {
    const buyer = this.buyerRepository.create(buyerData);
    return this.buyerRepository.save(buyer);
  }

  async findOne(id: number): Promise<buyerEntity> {
    const findOneOptions: FindOneOptions<buyerEntity> = ({ where: { id } });
    return this.buyerRepository.findOne(findOneOptions);
  }

  async  updateBuyer(id :number, buyerData : buyerEntity) : Promise<buyerEntity>{
    const buyer = await this.findOne(id);
    this.buyerRepository.merge(buyer, buyerData);
    return this.buyerRepository.save(buyer);
  }

  async delete(id: number): Promise<void> {
    await this.buyerRepository.delete(id);
  }
}