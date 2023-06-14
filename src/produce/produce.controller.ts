import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ProduceService } from './produce.service';
import { ProduceEntity } from './entities/produce.entity';
  
@ApiTags('Produce Section')
@Controller('produce')
export class ProduceController {
  constructor(private readonly produceService: ProduceService) {}

  @Post()
   @ApiBearerAuth()
  async createProduce(@Body() produceData: ProduceEntity): Promise<ProduceEntity> {
    return this.produceService.createProduce(produceData);

  
  }

  @Get(':id')
  @ApiBearerAuth()
 async findProduceEntityById(@Param('id') id:  number): Promise<ProduceEntity> {
    return this.produceService.findOne(id);
  }

  
  @Put(':id')
  @ApiBearerAuth()
  async updateProduceEntity(@Param('id') id: number, @Body() produceData: ProduceEntity): Promise<ProduceEntity> {
      return this.produceService.updateProduce(id, produceData);
}

  @Delete(':id')
  @ApiBearerAuth()
 async delete(@Param('id') id:  number): Promise<void> {
    return this.produceService.delete(id);
  }
} 
