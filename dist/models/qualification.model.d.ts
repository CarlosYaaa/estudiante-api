import { Schema } from 'mongoose';
import mongoose from 'mongoose';
export declare const QualificationSchema: Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
    descripcion: string;
    idCurso: typeof mongoose.Types.ObjectId;
    fechaNota: Date;
    estudiantes: {
        type: Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
            nota: number;
            estudiante?: typeof mongoose.Types.ObjectId;
            idCalificacion?: typeof mongoose.Types.ObjectId;
        }>;
    }[];
}>;
