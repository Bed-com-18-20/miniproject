import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards, UsePipes, Put } from '@nestjs/common';
import {ApiTags, ApiCreatedResponse, ApiBadRequestResponse } from '@nestjs/swagger';
import { ApiBearerAuth } from '@nestjs/swagger';
import { BuyerService } from './buyer.service';
import { buyerEntity } from './entities/buyer.entity';
 
@ApiTags('Buyer Section')
@Controller('buyers')
export class BuyerController {
  constructor(private readonly buyerService: BuyerService) {}

  @Post()
  @ApiBearerAuth()
    async createBuyer(@Body() buyerData: buyerEntity): Promise<buyerEntity> {
    return this.buyerService.createBuyer(buyerData);
  }
 

  @Get(':id')
  @ApiBearerAuth()
  async findBuyerById(@Param('id') id:  number): Promise<buyerEntity> {
    return this.buyerService.findOne(id);
  }

  @Put(':id')
  @ApiBearerAuth()
   async updateBuyer(@Param('id') id: number, @Body() buyerData: buyerEntity) : Promise<buyerEntity> {
      return this.buyerService.updateBuyer(id, buyerData);
}

@Delete(':id')
@ApiBearerAuth()
  async delete(@Param('id') id:  number): Promise<void> {
    return this.buyerService.delete(id);
  }
}