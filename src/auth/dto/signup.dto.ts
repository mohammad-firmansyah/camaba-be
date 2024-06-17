import { ApiProperty } from '@nestjs/swagger';

export class SignUpDto {
  @ApiProperty()
  email: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  password: string;
}
