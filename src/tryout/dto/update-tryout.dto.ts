import { PartialType } from '@nestjs/mapped-types';
import { CreateTryoutDto } from './create-tryout.dto';

export class UpdateTryoutDto extends PartialType(CreateTryoutDto) {}
