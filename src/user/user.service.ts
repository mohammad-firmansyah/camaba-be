import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import { User, Prisma } from '@prisma/client';
import { uuidv7 } from 'uuidv7';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: {
        email: email,
      },
    });
  }

  async createUser(
    name: string,
    pass: string,
    email: string,
  ): Promise<User | null> {
    return await this.prisma.user.create({
      data: {
        name,
        role: 'USER',
        email,
        password: pass,
      },
    });
  }

  async updateProfile(idUser : string, updateUserDto : UpdateUserDto) {
    
    const result = await this.prisma.user.update({
      where : {id: idUser},
      data:{
        ...updateUserDto
      }
    })

    

   if (!result){
     throw new BadRequestException({
       is_error: true,
       message: 'Invalid input user',
       data: {},
     });
   }

   return {
     is_error: false,
     message: 'user profile updated succesfully',
     data: result,
   };
 }
  
 async showProfile(idUser : string) {
    const result = await this.prisma.user.findFirst({where:{id:idUser}})
   if (!result){
     throw new UnauthorizedException({
       is_error: true,
       message: 'No user found',
       data: {},
     });
   }

   return {
     is_error: false,
     message: 'profile user',
     data: result,
   };
 }
}
