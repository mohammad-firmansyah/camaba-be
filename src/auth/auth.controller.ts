import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';
import { verifyDto } from './dto/verify.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }
  
  @Post('register')
  signUp(@Body() signUp: SignUpDto) {
    return this.authService.signUp(signUp.name, signUp.email, signUp.password);
  }
  
  @Post('verify-token')
  verifiyToken(@Body() verify: verifyDto) {
    return this.authService.verifyToken(verify.token);
  }
}
