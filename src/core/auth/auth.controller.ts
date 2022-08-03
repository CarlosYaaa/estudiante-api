import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { RespuestaServidor } from 'src/models/respuestaServidor.model';
import { UsuarioPayload } from 'src/models/usuarioPayload.model';
import { AuthService } from './auth.service';
import {
  UsuarioEstudianteRequest,
  UsuarioEstudianteResponse,
  UsuarioRegisterRequest,
} from './dto/usuarioEstudiante.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body(ValidationPipe)
    usuarioEstudianteRequest: UsuarioEstudianteRequest,
  ): Promise<UsuarioEstudianteResponse> {
    const respuesta = await this.authService.login(usuarioEstudianteRequest);
    return respuesta;
  }

  @Post('/register')
  async registerUser(
    @Body(ValidationPipe)
    usuarioRegisterRequest: UsuarioRegisterRequest,
  ): Promise<RespuestaServidor> {
    const respuesta = await this.authService.register(usuarioRegisterRequest);
    return respuesta;
  }
}
