import { RespuestaServidor } from 'src/models/respuestaServidor.model';
import { AuthService } from './auth.service';
import { UsuarioEstudianteRequest, UsuarioEstudianteResponse, UsuarioRegisterRequest } from './dto/usuarioEstudiante.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(usuarioEstudianteRequest: UsuarioEstudianteRequest): Promise<UsuarioEstudianteResponse>;
    registerUser(usuarioRegisterRequest: UsuarioRegisterRequest): Promise<RespuestaServidor>;
}
