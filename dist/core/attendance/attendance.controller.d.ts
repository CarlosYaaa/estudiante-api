import { UsuarioPayload } from 'src/models/usuarioPayload.model';
import { AttendanceService } from './attendance.service';
import { AttendanceResponse } from './dto/attendance.dto';
export declare class AttendanceController {
    private readonly attendanceService;
    constructor(attendanceService: AttendanceService);
    getAllAttendance(usuario: UsuarioPayload, idCurso: string): Promise<AttendanceResponse[]>;
}
