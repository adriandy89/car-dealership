import { IsString } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: 'brand - Formato invalido!' })
  readonly brand: string;

  @IsString({ message: 'model - Formato invalido!' })
  readonly model: string;
}
