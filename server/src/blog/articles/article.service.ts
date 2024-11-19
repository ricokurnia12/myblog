import {
  Injectable,
  ConflictException,
  //   NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { CreateArticleDto } from './dto/article.dto';
import { v4 as uuidv4 } from 'uuid';
import { PrismaServiceBlog as PrismaService } from 'src/prisma/prisma.service-blog';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}
  async validateCategories(categoryIds: string[]): Promise<void> {
    const categories = await this.prisma.blog_categories.findMany({
      where: { id: { in: categoryIds } },
    });
    if (categories.length !== categoryIds.length) {
      throw new BadRequestException('Kategori tidak ditemukan');
    }
  }
  async createArticle(createArticleDto: CreateArticleDto) {
    await this.validateCategories(createArticleDto.categories);
    try {
      const createdArticle = await this.prisma.blog_contents.create({
        data: { ...createArticleDto, id: uuidv4() },
      });
      return createdArticle;
    } catch (error) {
      if (error.code === 'P2002' && error.meta.target.includes('slug')) {
        throw new ConflictException('Slug must be unique');
      }
      throw error;
    }
  }

  async findAll(): Promise<any[]> {
    const categories = await this.prisma.blog_categories.findMany();
    const categoryMap = new Map<string, string>();
    categories.forEach((category) => {
      categoryMap.set(category.id, category.categories);
    });
    const contents = await this.prisma.blog_contents.findMany();
    return contents.map((content) => {
      return {
        id: content.id,
        title: content.title,
        slug: content.slug,
        // content: fullContent,
        description: content.description,
        published: content.published,
        images_url: content.images,
        category_names: content.categories.map(
          (categoryId) => categoryMap.get(categoryId) || 'Unknown',
        ),
        author: content.author,
        featured_post: content.featured_post,
        created_at: new Date(content.created_at).toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }),
        updated_at: new Date(content.updated_at).toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }),
      };
    });
  }
}
