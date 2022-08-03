export interface AttendanceResponse {
    readonly _id: string;
    readonly fechaAsistencia: Date;
    readonly idCurso: string;
    readonly usuario: UsuarioAttendanceResponse;
}

export interface UsuarioAttendanceResponse {
    readonly estudiante: string;
    readonly asistencia: string;
    readonly _id?: string;
}