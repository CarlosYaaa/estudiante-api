export interface QualificationResponse {
    readonly _id: string;
    readonly descripcion: string;
    readonly fechaNota: Date;
    readonly idCurso: string;
    readonly usuario: UsuarioQualificationResponse;
}
export interface UsuarioQualificationResponse {
    readonly estudiante: string;
    readonly nota: number;
    readonly idCalificacion: string;
}
