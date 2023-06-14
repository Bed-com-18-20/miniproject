import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards, UsePipes, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SupplierService } from './supplier.service';
import { UserPipe } from 'src/user.pipe';
import { SuppliersEntity } from './entities/supplier.entity';

@ApiTags('Suppliers Section')
@Controller('supplier')
export class SupplierController {
  constructor(private readonly supplierService: SupplierService) {}

  @Post()
   @ApiBearerAuth()
  async createSupplier(@Body() supplierData: SuppliersEntity): Promise<SuppliersEntity> {
    return this.supplierService.createSupplier(supplierData);
  }

  @Get(':id')
  @ApiBearerAuth()
  async findSupplierById(@Param('id') id:  number): Promise<SuppliersEntity> {
    return this.supplierService.findOne(id);
  }
  
  @Put(':id')
  @ApiBearerAuth()
 async updateSupplier(@Param('id') id: number, @Body() supplierData: SuppliersEntity) : Promise<SuppliersEntity> {
      return this.supplierService.updateSupplier(id, supplierData);
}

  @Delete(':id')
  @ApiBearerAuth()
 async delete(@Param('id') id:  number): Promise<void> {
    return this.supplierService.delete(id);
  }
}