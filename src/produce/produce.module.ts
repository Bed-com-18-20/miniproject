 
import {JwtModule} from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProduceController } from './produce.controller';
import { ProduceService } from './produce.service';
import { ProduceEntity } from './entities/produce.entity';
import { UserGuard } from 'src/user.guards';
import { UserPipe } from 'src/user.pipe';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProduceEntity]),
    JwtModule.register({
      secret: 'sfgty435yhgfdhfgj567',
      signOptions: {expiresIn: '60s'},
    })
  ],
  controllers: [ProduceController],
  providers: [ProduceService, UserGuard, UserPipe],
})
export class ProduceModule {}