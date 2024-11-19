import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaServiceBlog as PrismaService } from 'src/prisma/prisma.service-blog';
import { CreateCategoryDto, UpdateCategoryDto } from './dto/categories.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<any[]> {
    return this.prisma.blog_categories.findMany();
  }

  async findById(id: string): Promise<any> {
    const category = await this.prisma.blog_categories.findUnique({
      where: { id },
    });

    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }

    return category;
  }

  async create(createCategoryDto: CreateCategoryDto): Promise<any> {
    // Check if the category already exists by name
    const existingCategory = await this.prisma.blog_categories.findFirst({
      where: { categories: createCategoryDto.categories },
    });

    if (existingCategory) {
      throw new BadRequestException('Category already exists');
    }
    const newData = { ...createCategoryDto, id: uuidv4() };

    // Create a new category
    return this.prisma.blog_categories.create({
      data: newData,
    });
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<any> {
    const category = await this.prisma.blog_categories.findUnique({
      where: { id },
    });
    const existingCategory = await this.prisma.blog_categories.findFirst({
      where: { categories: updateCategoryDto.categories },
    });

    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }

    if (existingCategory) {
      throw new BadRequestException('Category already exists');
    }

    return this.prisma.blog_categories.update({
      where: { id },
      data: updateCategoryDto,
    });
  }

  async delete(id: string): Promise<any> {
    const category = await this.prisma.blog_categories.findUnique({
      where: { id },
    });

    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }

    return this.prisma.blog_categories.delete({
      where: { id },
    });
  }
}
