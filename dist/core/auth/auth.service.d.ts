import { JwtService } from '@nestjs/jwt';
import { RespuestaServidor } from 'src/models/respuestaServidor.model';
import { UsuarioEstudianteRequest, UsuarioEstudianteResponse, UsuarioRegisterRequest } from './dto/usuarioEstudiante.dto';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    login(usuarioEstudianteRequest: UsuarioEstudianteRequest): Promise<UsuarioEstudianteResponse>;
    register(usuarioRegisterRequest: UsuarioRegisterRequest): Promise<RespuestaServidor>;
}
