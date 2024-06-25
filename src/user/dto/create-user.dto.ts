import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

    @ApiProperty()
    name : string

    @ApiProperty()
    email : string
      
    @ApiProperty()
    password : string
      
    @ApiProperty()
    gender : string
  
    @ApiProperty()
    originSchool : string
  
    @ApiProperty()
    unScore : number

    @ApiProperty()
    meanRaportScoreHighSchool : number
      
    @ApiProperty()
    utbkDate : string

      
}
