import { Document } from 'mongoose';
import { IUsuario } from './usuario.interface';
export interface Course extends Document {
    readonly _id: string;
    readonly descripcion: string;
    readonly day: string;
    readonly schedule: ScheduleCourse;
    readonly students: string[];
    readonly user: IUsuario;
}
interface ScheduleCourse {
    readonly startTime: string;
    readonly endTime: string;
}
export {};
