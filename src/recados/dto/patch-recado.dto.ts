import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class PatchRecadoDto {
  @IsString({
    message: 'O texto deve ser uma string',
  })
  @MinLength(3, { message: 'O texto deve ter pelo menos 3 caracteres' })
  @MaxLength(255, { message: 'O texto deve ter no máximo 255 caracteres' })
  @IsOptional()
  readonly texto?: string;

  @IsString({
    message: 'O texto deve ser uma string',
  })
  @MinLength(3, { message: 'O texto deve ter pelo menos 3 caracteres' })
  @MaxLength(50, { message: 'O texto deve ter no máximo 50 caracteres' })
  @IsOptional()
  readonly de?: string;

  @IsString({
    message: 'O texto deve ser uma string',
  })
  @MinLength(3, { message: 'O texto deve ter pelo menos 3 caracteres' })
  @MaxLength(50, { message: 'O texto deve ter no máximo 50 caracteres' })
  @IsOptional()
  readonly para?: string;
}
