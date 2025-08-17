import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(private readonly prisma: PrismaService) { }

  @Get()
  async getDbTest() {
    const users = await this.prisma.user.findMany();
    return { ok: true, users };
  }
}
