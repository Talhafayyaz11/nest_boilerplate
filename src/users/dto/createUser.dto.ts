import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsInt,
  IsEmail,
  IsPhoneNumber,
  IsNotEmpty,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty({ type: String })
  @IsEmail()
  @IsNotEmpty()
  email?: string;
  @ApiProperty({ type: String })
  @IsPhoneNumber()
  phoneNumber: string;
  @ApiProperty({ type: String })
  @IsString()
  city: string;
  @IsNotEmpty()
  @IsString()
  password?: string;
}
