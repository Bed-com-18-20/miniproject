import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards, UsePipes, Put } from '@nestjs/common';
import {ApiTags, ApiCreatedResponse, ApiBadRequestResponse } from '@nestjs/swagger';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CommentsEntity } from './entities/comment.entity';
import { UserPipe } from 'src/user.pipe';
import { CommentService } from './comments.service';

@ApiTags('Comment Section')
@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
   @ApiBearerAuth()
 async createComment(@Body() commentData: CommentsEntity): Promise<CommentsEntity> {
    return this.commentService.createComment(commentData);

  
  }

  @Get(':id')
  @ApiBearerAuth()
 async findCommnentById(@Param('id') id:  number): Promise<CommentsEntity> {
    return this.commentService.findOne(id);
  }

  
  
  @Put(':id')
  @ApiBearerAuth()
   async updateComment(@Param('id') id: number, @Body() commentData: CommentsEntity) : Promise<CommentsEntity> {
      return this.commentService.updateComment(id, commentData);
}

  @Delete(':id')
  @ApiBearerAuth()
  async delete(@Param('id') id:  number): Promise<void> {
    return this.commentService.delete(id);
  }
}