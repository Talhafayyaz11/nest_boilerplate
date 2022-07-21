import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt } from 'class-validator';

export class CreateItemDto {
  @ApiProperty({ type: String })
  @IsString()
  readonly name: string;
  @IsInt()
  @ApiProperty({ type: Number })
  readonly qty: number;
  @IsString()
  @ApiProperty({ type: String })
  readonly description: string;
}
