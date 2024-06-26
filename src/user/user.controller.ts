import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('user')
@ApiTags('User')
@ApiBearerAuth()
@UseGuards(AuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Patch(':id/update')
  updateProfile(@Param('id') id : string,@Body() body : CreateUserDto) {
    return this.userService.updateProfile(id, body);
  }
 
  @Get(':id')
  showProfile(@Param('id') id : string) {
    return this.userService.showProfile(id);
  }
}
