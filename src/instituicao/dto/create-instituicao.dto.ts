import { IsNotEmpty, IsString } from "class-validator";

export class CreateInstituicaoDto {
  @IsString()
  @IsNotEmpty()
  tx_sigla: string;
  
  @IsString()
  @IsNotEmpty()
  tx_descricao: string;
}
