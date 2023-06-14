import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards, UsePipes, Put } from '@nestjs/common';
import { User } from './user.entity';
import { UserPipe } from './user.pipe';
import {ApiTags, ApiCreatedResponse, ApiBadRequestResponse } from '@nestjs/swagger';
import { ApiBearerAuth } from '@nestjs/swagger';
import { UserService } from './user.service';
 
@ApiTags('User Section')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
   @UsePipes(UserPipe)
  @ApiBearerAuth()
 async createUser(@Body() userData: User): Promise<User> {
    return this.userService.createUser(userData);
  }

  @Get(':id')
  @ApiBearerAuth()
 async findUserById(@Param('id') id:  number): Promise<User> {
    return this.userService.findOne(id);
  }
 
  @Put(':id')
  @ApiBearerAuth()
  async updateUser(@Param('id') id: number, @Body() userData: User) : Promise<User> {
      return this.userService.updateUser(id, userData);
}

  @Delete(':id')
  @ApiBearerAuth()
  async delete(@Param('id') id:  number): Promise<void> {
    return this.userService.delete(id);
  }
}