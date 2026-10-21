import { Type } from 'class-transformer';
import { IsIn, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Age } from '../../common/validators/age.validator.js';

export class CreateAlunoDto {
  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  tx_nome: string;

  @IsString()
  @IsIn(['m', 'f'])
  @IsNotEmpty()
  tx_sexo: string;

  @Type(() => Date)
  @Age(10)
  @IsNotEmpty()
  dt_nascimento: Date;
}
