import { UsuarioPayload } from 'src/models/usuarioPayload.model';
export declare class UsuarioEstudianteRequest {
    readonly email: string;
    readonly password: string;
}
export declare class UsuarioEstudianteResponse {
    readonly usuario: UsuarioPayload;
    readonly token: string;
}
export declare class UsuarioRegisterRequest {
    nombres: string;
    apellidoMaterno: string;
    apellidoPaterno: string;
    edad: number;
    telefono: number;
    email: string;
    password: string;
    tipoUsuario: string;
}
