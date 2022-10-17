import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCarDto {
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString({ message: 'brand - Formato invalido!' })
  @IsOptional()
  readonly brand?: string;

  @IsString({ message: 'model - Formato invalido!' })
  @IsOptional()
  readonly model?: string;
}
