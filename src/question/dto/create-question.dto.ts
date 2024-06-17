import { ApiProperty } from '@nestjs/swagger';

export class CreateQuestionDto {
  @ApiProperty()
  tryoutId: string;

  @ApiProperty()
  questionText: string;

  @ApiProperty()
  answer: string;

  @ApiProperty()
  optionA: string;

  @ApiProperty()
  optionB: string;

  @ApiProperty()
  optionC: string;

  @ApiProperty()
  optionD: string;
}
