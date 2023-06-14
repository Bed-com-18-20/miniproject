
import {JwtModule} from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserGuard } from './user.guards';
import { UserPipe } from './user.pipe';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'sfgty435yhgfdhfgj567',
      signOptions: {expiresIn: '60s'},
    })
  ],
  controllers: [UserController],
  providers: [UserService, UserGuard, UserPipe],
})
export class UserModule {}