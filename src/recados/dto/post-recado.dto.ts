import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class PostRecadoDto {
  @IsString({
    message: 'O texto deve ser uma string',
  })
  @IsNotEmpty({
    message: 'O texto não pode ser vazio',
  })
  @MinLength(3, { message: 'O texto deve ter pelo menos 3 caracteres' })
  @MaxLength(255, { message: 'O texto deve ter no máximo 255 caracteres' })
  readonly texto: string;

  @IsString({
    message: 'O texto deve ser uma string',
  })
  @IsNotEmpty({
    message: 'O texto não pode ser vazio',
  })
  @MinLength(3, { message: 'O texto deve ter pelo menos 3 caracteres' })
  @MaxLength(50, { message: 'O texto deve ter no máximo 50 caracteres' })
  readonly de: string;

  @IsString({
    message: 'O texto deve ser uma string',
  })
  @IsNotEmpty({
    message: 'O texto não pode ser vazio',
  })
  @MinLength(3, { message: 'O texto deve ter pelo menos 3 caracteres' })
  @MaxLength(50, { message: 'O texto deve ter no máximo 50 caracteres' })
  readonly para: string;
}
