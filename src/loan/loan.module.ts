 
import {JwtModule} from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoanEntity } from './entities/loan.entity';
import { UserPipe } from 'src/user.pipe';
import { UserGuard } from 'src/user.guards';
import { LoanController } from './loan.controller';
import { loanService } from './loan.service';
 
@Module({
  imports: [
    TypeOrmModule.forFeature([LoanEntity]),
    JwtModule.register({
      secret: 'sfgty435yhgfdhfgj567',
      signOptions: {expiresIn: '60s'},
    })
  ],
  controllers:  [LoanController],
  providers: [loanService, UserGuard, UserPipe],
})
export class LoanModule {}