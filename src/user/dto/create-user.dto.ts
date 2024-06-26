import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';


export class CreateUserDto {

    @ApiProperty()
    @IsOptional()
    name? : string
    
    @ApiProperty()
    @IsOptional()
    email? : string
    
    @ApiProperty()
    @IsOptional()
    password? : string
    
    @ApiProperty()
    @IsOptional()
    gender? : string
    
    @ApiProperty()
    @IsOptional()
    originSchool? : string
    
    @ApiProperty()
    @IsOptional()
    unScore? : number
    
    @ApiProperty()
    @IsOptional()
    meanRaportScoreHighSchool? : number
    
    @ApiProperty()
    @IsOptional()
    utbkDate? : string

      
}
