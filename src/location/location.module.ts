
import {JwtModule} from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationEntity } from './entities/location.entity';
import { UserGuard } from 'src/user.guards';
import { UserPipe } from 'src/user.pipe';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([LocationEntity]),
    JwtModule.register({
      secret: 'sfgty435yhgfdhfgj567',
      signOptions: {expiresIn: '60s'},
    })
  ],
  controllers: [LocationController],
  providers: [LocationService, UserGuard, UserPipe],
})
export class LocationModule {}