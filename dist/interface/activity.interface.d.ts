export interface Activity extends Document {
    readonly nombre: string;
    readonly descripcion: string;
    readonly idCurso: string;
    readonly fechaActividad: Date;
}
