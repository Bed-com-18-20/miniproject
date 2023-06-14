import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { CommentsEntity } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentsEntity)
    private readonly commentRepository: Repository<CommentsEntity>,
  ) {}

  async createComment(commentData: CommentsEntity): Promise<CommentsEntity> {
    const comment = this.commentRepository.create(commentData);
    return this.commentRepository.save(comment);
  }

  async findOne(id: number): Promise<CommentsEntity> {
    const findOneOptions: FindOneOptions<CommentsEntity> = ({ where: { id } });
    return this.commentRepository.findOne(findOneOptions);
  }

  
  async  updateComment(id :number, commentData : CommentsEntity) : Promise<CommentsEntity>{
    const comment = await this.findOne(id);
    this.commentRepository.merge(comment, commentData);
    return this.commentRepository.save(comment);
  }

  async delete(id: number): Promise<void> {
    await this.commentRepository.delete(id);
  }
}









 