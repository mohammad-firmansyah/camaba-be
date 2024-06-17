import { ApiProperty } from '@nestjs/swagger';

export class verifyDto {
  @ApiProperty()
  token: string;
}
