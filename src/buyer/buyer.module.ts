 
import {JwtModule} from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { buyerEntity } from './entities/buyer.entity';
import { UserGuard } from 'src/user.guards';
import { UserPipe } from 'src/user.pipe';
import { BuyerService } from './buyer.service';
import { BuyerController } from './buyer.controller';
 
@Module({
  imports: [
    TypeOrmModule.forFeature([buyerEntity]),
    JwtModule.register({
      secret: 'sfgty435yhgfdhfgj567',
      signOptions: {expiresIn: '60s'},
    })
  ],
  controllers: [BuyerController],
  providers: [BuyerService, UserGuard, UserPipe],
})
export class BuyerModule {}