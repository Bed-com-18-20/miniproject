import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards, UsePipes, Put } from '@nestjs/common';
import {ApiTags, ApiCreatedResponse, ApiBadRequestResponse } from '@nestjs/swagger';
import { ApiBearerAuth } from '@nestjs/swagger';
import { LocationService } from './location.service';
import { UserPipe } from 'src/user.pipe';
import { LocationEntity } from './entities/location.entity';
 

@ApiTags('Location Section')
@Controller('locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
 
   @ApiBearerAuth()
  
  async createLocation(@Body() locationData: LocationEntity): Promise<LocationEntity> {
    return this.locationService.createUser(locationData);

  
  }

  @Get(':id')
  @ApiBearerAuth()
 async findLocationById(@Param('id') id:  number): Promise<LocationEntity> {
    return this.locationService.findOne(id);
  }
 
  @Put(':id')
  @ApiBearerAuth()
  async updateLocation(@Param('id') id: number, @Body() locationData: LocationEntity) : Promise<LocationEntity> {
      return this.locationService.updateLocation(id, locationData);
}

  @Delete(':id')
 @ApiBearerAuth()
 async delete(@Param('id') id:  number): Promise<void> {
    return this.locationService.delete(id);
  }
}