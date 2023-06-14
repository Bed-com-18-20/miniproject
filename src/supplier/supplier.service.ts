import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { SuppliersEntity } from './entities/supplier.entity';
 
@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(SuppliersEntity)
    private readonly suppliersRepository: Repository<SuppliersEntity>,
  ) {}

  async createSupplier(supplierData: SuppliersEntity): Promise<SuppliersEntity> {
    const supplier = this.suppliersRepository.create(supplierData);
    return this.suppliersRepository.save(supplierData);
  }

  async findOne(id: number): Promise<SuppliersEntity> {
    const findOneOptions: FindOneOptions<SuppliersEntity> = ({ where: { id } });
    return this.suppliersRepository.findOne(findOneOptions);
  }
  async  updateSupplier(id :number, supplierData : SuppliersEntity) : Promise<SuppliersEntity>{
    const supplier = await this.findOne(id);
    this.suppliersRepository.merge(supplier, supplierData);
    return this.suppliersRepository.save(supplier);
  }

  async delete(id: number): Promise<void> {
    await this.suppliersRepository.delete(id);
  }
}









 