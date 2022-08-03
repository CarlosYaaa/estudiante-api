import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Attendance } from 'src/interface/attedance.interface';
import { UsuarioPayload } from 'src/models/usuarioPayload.model';
import { ErrorUtil } from '../utils/error.utils';

@Injectable()
export class AttendanceService {
  constructor(
    @InjectModel('Attendance')
    private readonly attendanceModel: Model<Attendance>,
  ) {}

  async getAllAttendance(usuario: UsuarioPayload, idCurso: string) {
    try {
      let allAttendance = await this.attendanceModel
        .find({
          idCurso,
          'estudiantes.estudiante': { $in: usuario._id },
        })
        .select(`_id fechaAsistencia idCurso estudiantes`)
        .populate({
          path: `estudiantes`,
          match: { 'estudiantes.estudiante.$': usuario._id },
          select: 'estudiante asistencia',
        })
        .exec()
        .then((p) => {
          return p.map((a) => {
            return {
              _id: a._id,
              fechaAsistencia: a.fechaAsistencia,
              idCurso: a.idCurso,
              usuario: a.estudiantes.filter(
                (e) => e.estudiante == usuario._id,
              )[0],
            };
          });
        })
        .catch((error) => {
          return ErrorUtil.handleError(error);
        });
      if (!allAttendance) {
        throw new NotFoundException({
          message: 'No se encontraron asistencias',
        });
      }
      return allAttendance;
    } catch (error) {
      ErrorUtil.handleError(error);
    }
  }
}
