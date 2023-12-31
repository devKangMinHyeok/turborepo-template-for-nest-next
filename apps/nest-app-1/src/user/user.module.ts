import { Logger, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, PrismaService, Logger],
})
export class UserModule {}
