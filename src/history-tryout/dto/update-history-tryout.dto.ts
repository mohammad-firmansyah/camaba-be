import { PartialType } from '@nestjs/mapped-types';
import { CreateHistoryTryoutDto } from './create-history-tryout.dto';

export class UpdateHistoryTryoutDto extends PartialType(CreateHistoryTryoutDto) {}
