import {
  IsNotEmpty,
  IsInt,
  IsOptional,
  IsString,
  Min,
  MaxLength,
} from 'class-validator';

export class CreateDisciplinaDto {
  @IsInt()
  @IsOptional()
  id_curso?: number;

  @IsInt()
  @IsNotEmpty()
  id_tipo_disciplina: number;

  @IsString()
  @MaxLength(10)
  @IsNotEmpty()
  tx_sigla: string;

  @IsString()
  @MaxLength(150)
  @IsNotEmpty()
  tx_descricao: string;

  @IsInt()
  @Min(1)
  @IsNotEmpty()
  in_periodo: number;

  @IsInt()
  @Min(40)
  @IsNotEmpty()
  in_carga_horaria: number;
}
