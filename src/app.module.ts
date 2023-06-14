import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; import { ProduceModule } from './produce/produce.module';
import { SupplierModule } from './supplier/supplier.module';
import { LoanModule } from './loan/loan.module';
import { BuyerModule } from './buyer/buyer.module';
import { CommentsModule } from './comments/comments.module';
import { LocationModule } from './location/location.module';
import { UserModule } from './user.module';
import { AuthModule } from './auth/auth.module';
 
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'dpg-ci507rlgkuvj7bk0m9fg-a',
    port: 5432,
    username: 'agriculture_user',
    password: 'lJvcFuZ9kdoYzdYZOPfHaARfPNZgjGPW',
    database: 'agriculture',
    autoLoadEntities: true,
    synchronize: true,
    //type: 'mysql',
    //host: 'sql9.freesqldatabase.com',
    //port: 3306,
    //username: 'sql9624970',
    //password: 'F14V9aN67H',
    //database: 'sql9624970',
    //autoLoadEntities: true,
    //synchronize: false,
}),
UserModule,
AuthModule,
LocationModule,
ProduceModule,
SupplierModule,
LoanModule,
BuyerModule,
CommentsModule,

],
controllers: [],
providers: [],
})
export class AppModule {}
