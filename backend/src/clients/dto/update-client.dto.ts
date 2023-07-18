import { IsIn, IsNumber, IsPositive, IsString, MinLength } from "class-validator"
import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-client.dto';

export class UpdateClientDto extends PartialType(CreateClientDto) {
  
  @IsString()
  @MinLength(1)
  name: string
  
  @IsString()
  @MinLength(1)
  lastname: string

  @IsString()
  phone: string
  
  @IsNumber()
  @IsPositive()
  dni: number

  @IsIn(['masculino', 'femenino', 'otro'])
  gender: string

}
