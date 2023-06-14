import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { ProduceEntity } from './entities/produce.entity';
 
@Injectable()
export class ProduceService {
  constructor(
    @InjectRepository(ProduceEntity)
    private readonly produceRepository: Repository<ProduceEntity>,
  ) {}

  async createProduce(produceData: ProduceEntity): Promise<ProduceEntity> {
    const produce = this.produceRepository.create(produceData);
    return this.produceRepository.save(produce);
  }

  async findOne(id: number): Promise<ProduceEntity> {
    const findOneOptions: FindOneOptions<ProduceEntity> = ({ where: { id } });
    return this.produceRepository.findOne(findOneOptions);
  }
  async  updateProduce(id :number, produceData : ProduceEntity) : Promise<ProduceEntity>{
    const produce = await this.findOne(id);
    this.produceRepository.merge(produce, produceData);
    return this.produceRepository.save(produce);
  }
  async delete(id: number): Promise<void> {
    await this.produceRepository.delete(id);
  }
}









 