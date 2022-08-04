import mongoose from 'mongoose';
export declare const ActivitySchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
    descripcion: string;
    nombre: string;
    idCurso: typeof mongoose.Types.ObjectId;
    fechaActividad: Date;
}>;
