import { ApiProperty } from '@nestjs/swagger';

export class CreateHistoryTryoutDto {
  @ApiProperty()
  tryoutId: string;
  @ApiProperty()
  userId: string;
  @ApiProperty()
  score: number;
}
