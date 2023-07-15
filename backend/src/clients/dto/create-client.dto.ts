import { IsIn, IsNumber, IsPositive, IsString, MinLength } from "class-validator"

export class CreateClientDto {

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

  @IsIn(['masculino', 'femenino'])
  gender: string

}
