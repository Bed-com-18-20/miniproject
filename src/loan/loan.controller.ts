import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards, UsePipes, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserPipe } from 'src/user.pipe';
import { LoanEntity } from './entities/loan.entity';
import { loanService } from './loan.service';
 
@ApiTags('Loan Section')
@Controller('Loan')
export class LoanController {
  constructor(private readonly loanService: loanService) {}

  @Post()
   @ApiBearerAuth()
  async createUser(@Body() loanData: LoanEntity): Promise<LoanEntity> {
    return this.loanService.createLoan(loanData);

  
  }

  @Get(':id')
  @ApiBearerAuth()
 async findLoanById(@Param('id') id:  number): Promise<LoanEntity> {
    return this.loanService.findOne(id);
  }
  
  @Put(':id')
  @ApiBearerAuth()
  async updateLoan(@Param('id') id: number, @Body() loanData: LoanEntity) : Promise<LoanEntity> {
      return this.loanService.updateLoan(id, loanData);
}

  @Delete(':id')
  @ApiBearerAuth()
 async delete(@Param('id') id:  number): Promise<void> {
    return this.loanService.delete(id);
  }
}