import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { LocationEntity } from './entities/location.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(LocationEntity)
    private readonly locationRepository: Repository<LocationEntity>,
  ) {}

  async createUser(locationData: LocationEntity): Promise<LocationEntity> {
    const location = this.locationRepository.create(locationData);
    return this.locationRepository.save(location);
  }

  async findOne(id: number): Promise<LocationEntity> {
    const findOneOptions: FindOneOptions<LocationEntity> = ({ where: { id } });
    return this.locationRepository.findOne(findOneOptions);
  }
  async  updateLocation(id :number, locationData : LocationEntity) : Promise<LocationEntity>{
    const location = await this.findOne(id);
    this.locationRepository.merge(location, locationData);
    return this.locationRepository.save(location);
  }

  async delete(id: number): Promise<void> {
    await this.locationRepository.delete(id);
  }
}









 