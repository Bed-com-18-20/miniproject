import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  ADMIN: 'admin';
  USER: 'user';

  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  @MinLength(4)
  username: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak'
    && 'password must start with a capital letter',
  })
  password: string;
}
