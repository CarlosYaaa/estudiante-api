import {
  UsuarioEstudianteRequest,
  UsuarioEstudianteResponse,
  UsuarioRegisterRequest,
} from './dto/usuarioEstudiante.dto';
import axios from 'axios';

export namespace AuthUtil {
  export async function autenticarUsuarioEstudiante(
    credencialesUsuario: UsuarioEstudianteRequest,
    tipoUsuario: string,
  ): Promise<any> {
    const responseUser = await axios.post(
      `${process.env.SERVICIO_AUTENTICACION_URL}` + `/usuario/signin`,
      { credencialesUsuario, tipoUsuario },
    );

    return responseUser.data;
  }

  export async function registrarUsuarioEstudiante(
    usuarioRegisterRequest: UsuarioRegisterRequest,
  ): Promise<any> {
    const registerUser = await axios.post(
      `${process.env.SERVICIO_AUTENTICACION_URL}` + `/usuario/signup`,
      usuarioRegisterRequest,
    );
    return registerUser.data;
  }
}
