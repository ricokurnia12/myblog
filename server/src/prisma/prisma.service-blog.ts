import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaServiceBlog extends PrismaClient {
  constructor() {
    super();
  }
}
