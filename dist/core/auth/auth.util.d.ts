import { UsuarioEstudianteRequest, UsuarioRegisterRequest } from './dto/usuarioEstudiante.dto';
export declare namespace AuthUtil {
    function autenticarUsuarioEstudiante(credencialesUsuario: UsuarioEstudianteRequest, tipoUsuario: string): Promise<any>;
    function registrarUsuarioEstudiante(usuarioRegisterRequest: UsuarioRegisterRequest): Promise<any>;
}
