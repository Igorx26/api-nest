import {
  IsBoolean,
  IsNumber,
  IsInt,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class CreateCursaDto {
  @IsInt()
  @IsNotEmpty()
  id_aluno: number;

  @IsInt()
  @IsNotEmpty()
  id_disciplina: number;

  @IsInt()
  @IsNotEmpty()
  in_ano: number;

  @IsInt()
  @IsNotEmpty()
  in_semestre: number;

  @IsInt()
  @IsOptional()
  in_faltas: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsOptional()
  nm_nota1: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsOptional()
  nm_nota2: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsOptional()
  nm_nota3: number;

  @IsBoolean()
  @IsOptional()
  bl_aprovado: boolean;
}
