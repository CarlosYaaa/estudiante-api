export interface CourseResponse {
    readonly _id: string;
    readonly descripcion: string;
    readonly day: string;
    readonly schedule: ScheduleCourse;
    readonly user: UsuarioResponse;
}

export interface ScheduleCourse {
    readonly startTime: string;
    readonly endTime: string;
}

export interface UsuarioResponse {
    readonly _id: string;   
    readonly nombres: string;
    readonly apellidoMaterno: string;
    readonly apellidoPaterno: string;
    readonly nombreCompleto: string;    
}
