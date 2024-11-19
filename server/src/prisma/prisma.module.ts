import { Module } from '@nestjs/common';
import { PrismaServiceBlog } from './prisma.service-blog';

@Module({
  providers: [PrismaServiceBlog],
  exports: [PrismaServiceBlog],
})
export class PrismaModule {}
