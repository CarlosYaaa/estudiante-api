import {
  Equals,
  IsDefined,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { TipoUsuario } from 'src/enums/usuario.enum';
import { UsuarioPayload } from 'src/models/usuarioPayload.model';

export class UsuarioEstudianteRequest {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;
}

export class UsuarioEstudianteResponse {
  readonly usuario: UsuarioPayload;
  readonly token: string;
}

export class UsuarioRegisterRequest {
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  nombres: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  apellidoMaterno: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  apellidoPaterno: string;

  @IsDefined()
  @IsInt()
  @IsNotEmpty()
  edad: number;

  @IsOptional()
  @IsInt()
  telefono: number;

  @IsDefined()
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  password: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @Equals(TipoUsuario.ESTUDIANTE)
  tipoUsuario: string;
}
