import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ description: 'Category name' })
  @IsString()
  @IsNotEmpty()
  categories: string;
}

export class UpdateCategoryDto {
  @ApiProperty({ description: 'Category name' })
  @IsString()
  @IsOptional()
  categories?: string;
}
