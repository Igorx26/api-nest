import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateLecionaDto {
  @IsInt()
  @IsNotEmpty()
  id_professor: number;

  @IsInt()
  @IsNotEmpty()
  id_disciplina: number;
}
