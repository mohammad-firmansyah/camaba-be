import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string) {
    const user = await this.userService.findUserByEmail(email);

    const isMatch = await bcrypt.compare(pass, user?.password);
    if (!isMatch) {
      throw new UnauthorizedException({
        is_error: true,
        message: 'Invalid credentials',
        data: {},
      });
    }

    const payload = { sub: user.id, email: user.email };
    return {
      is_error: false,
      message: 'logged in successfully',
      data: user,
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(name: string, email: string, pass: string) {
    const user = await this.userService.findUserByEmail(email);

    if (user) {
      return {
        is_error: false,
        message: 'User already exists',
        data: {},
      };
    }

    const hashedPassword = await bcrypt.hash(pass, 10);

    const newUser = await this.userService.createUser(
      name,
      hashedPassword,
      email,
    );

    const payload = { sub: newUser.id, email: newUser.email };
    return {
      is_error: false,
      message: 'User created successfully',
      data: newUser,
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async verifyToken(token: string) {
    const isVerified = await this.jwtService.verifyAsync(token);

    if (!isVerified) {
      return new UnauthorizedException({
        is_error: true,
        message: 'Invalid token',
        data: {},
      });
    }

    const user = await this.userService.findUserByEmail(isVerified.email);

    const payload = { sub: user.id, email: user.email };
    return {
      is_error: false,
      message: 'Token refreshed successfully',
      data: user,
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
