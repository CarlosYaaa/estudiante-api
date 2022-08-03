import { Document } from 'mongoose';
export interface IUsuario extends Document {
  readonly _id: string;
  readonly nombres: string;
  readonly apellidoMaterno: string;
  readonly apellidoPaterno: string;
  readonly nombreCompleto: string;
  readonly edad: number;
  readonly telefono: number;
  readonly email: string;
  readonly password: string;
  readonly tipoUsuario: string;
}
