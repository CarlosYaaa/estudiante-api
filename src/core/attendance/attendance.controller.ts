import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { Usuario } from 'src/decorators/usuario.decorator';
import { UsuarioPayload } from 'src/models/usuarioPayload.model';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AttendanceService } from './attendance.service';
import { AttendanceResponse } from './dto/attendance.dto';

@Controller('attendance')
@UseGuards(JwtAuthGuard)
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Get('/:idCurso')
  async getAllAttendance(
    @Usuario() usuario: UsuarioPayload,
    @Param('idCurso') idCurso: string,
  ): Promise<AttendanceResponse[]> {
    const respuesta = await this.attendanceService.getAllAttendance(
      usuario,
      idCurso,
    );
    return respuesta;
  }
}
