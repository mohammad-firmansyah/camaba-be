import { ApiProperty } from '@nestjs/swagger';

export class CreateTryoutDto {
  @ApiProperty()
  startDate: Date;

  @ApiProperty()
  organizer: string;

  @ApiProperty()
  platform: string;

  @ApiProperty()
  status: TryoutStatus;
}

export enum TryoutStatus {
  DONE = 'done',
  MISSED = 'missed',
  UPCOMING = 'upcoming',
}