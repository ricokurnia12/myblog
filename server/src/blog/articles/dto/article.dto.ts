import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  ArrayNotEmpty,
  Matches,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateArticleDto {
  @ApiProperty({ description: 'Categories of the article', type: [String] })
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  categories: string[];

  @ApiProperty({ description: 'Title of the article' })
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(255)
  title: string;

  @ApiProperty({ description: 'Content of the article' })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({ description: 'Slug of the article' })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[^\s/]+$/, { message: 'Slug should not contain "/" or spaces' })
  slug: string;

  @ApiPropertyOptional({ description: 'Featured post status', default: false })
  @IsBoolean()
  @IsOptional()
  featured_post?: boolean;

  @ApiPropertyOptional({ description: 'Published status', default: false })
  @IsBoolean()
  @IsOptional()
  published?: boolean;

  @ApiProperty({ description: 'Author of the article' })
  @IsString()
  @IsNotEmpty()
  author: string;

  @ApiProperty({ description: 'Images URL' })
  @IsString()
  images: string;

  @ApiPropertyOptional({ description: 'Description for thumbnail' })
  @IsString()
  @IsOptional()
  @MaxLength(255)
  description?: string;
}
