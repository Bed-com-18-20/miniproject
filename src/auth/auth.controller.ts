import { Controller, Post, Body, ValidationPipe, UnauthorizedException, Get, Put, Delete, UseGuards, UsePipes } from '@nestjs/common';
 import { AuthService } from './auth.service';
import { LoginUserDto } from './loginuser.tdto';
 import { CreateUserDto } from './user.dto';
import { ApiTags } from '@nestjs/swagger';
 
@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

   @Post('/signup')
   // @UserGuard()
  async signUp(@Body(ValidationPipe) createUserDto: CreateUserDto): Promise<{ id: number; username: string; email: string }> {
    const user = await this.authService.signUp(createUserDto);
    const { id, username, email } = user;
    return { id, username, email };
  }

  @Post('/signin')
   async signIn(@Body(ValidationPipe) loginUserDto: LoginUserDto): Promise<{ accessToken: string }> {
    const result = await this.authService.signIn(loginUserDto);
    if (!result) {
      throw new UnauthorizedException('ERROR: unable to log in');
    }
    return result;
  } 
}
function UserGuard() {
  throw new Error('Function not implemented.');
}

