
import {JwtModule} from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsEntity } from './entities/comment.entity';
import { UserGuard } from 'src/user.guards';
import { UserPipe } from 'src/user.pipe';
import { CommentService } from './comments.service';
import { CommentController } from './comments.controller';
 
@Module({
  imports: [
    TypeOrmModule.forFeature([CommentsEntity]),
    JwtModule.register({
      secret: 'sfgty435yhgfdhfgj567',
      signOptions: {expiresIn: '60s'},
    })
  ],
  controllers: [CommentController],
  providers: [CommentService, UserGuard, UserPipe],
})
export class CommentsModule {}