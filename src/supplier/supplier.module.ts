 
import {JwtModule} from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuppliersEntity } from './entities/supplier.entity';
import { UserGuard } from 'src/user.guards';
import { UserPipe } from 'src/user.pipe';
import { SupplierController } from './supplier.controller';
import { SupplierService } from './supplier.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SuppliersEntity]),
    JwtModule.register({
      secret: 'sfgty435yhgfdhfgj567',
      signOptions: {expiresIn: '60s'},
    })
  ],
  controllers: [SupplierController],
  providers: [SupplierService, UserGuard, UserPipe],
})
export class SupplierModule {}