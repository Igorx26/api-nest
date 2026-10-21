import {
  IsBoolean,
  IsNumber,
  IsInt,
  IsNotEmpty,
  IsOptional,
  Min,
  Max,
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
  @Min(0)
  @IsOptional()
  in_faltas?: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Max(10)
  @Min(0)
  @IsOptional()
  nm_nota1?: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Max(10)
  @Min(0)
  @IsOptional()
  nm_nota2?: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Max(10)
  @Min(0)
  @IsOptional()
  nm_nota3?: number;

  @IsBoolean()
  @IsOptional()
  bl_aprovado?: boolean;
}
