import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Patch,
  Post,
} from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('api/v1/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly logger: Logger,
  ) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  async getUserById(id: number): Promise<User> {
    return this.userService.getUserById(id);
  }

  @Post()
  async createUser(@Body() data: User): Promise<User> {
    return this.userService.createUser(data);
  }

  @Patch(':id')
  async updateUser(@Body() data: User): Promise<User> {
    return this.userService.updateUser(data.id, data);
  }

  @Delete(':id')
  async deleteUser(id: number): Promise<User> {
    return this.userService.deleteUser(id);
  }
}
