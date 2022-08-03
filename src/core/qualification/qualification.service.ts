import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Qualification } from 'src/interface/qualification.interface';
import { UsuarioPayload } from 'src/models/usuarioPayload.model';
import { ErrorUtil } from '../utils/error.utils';

@Injectable()
export class QualificationService {
  constructor(
    @InjectModel('Qualification')
    private readonly qualificationModel: Model<Qualification>,
  ) {}

  async getAllQualification(usuario: UsuarioPayload, idCurso: string) {
    try {
      const allQualification = await this.qualificationModel
        .find({
          idCurso,
          'estudiantes.estudiante': { $in: usuario._id },
        })
        .select(`_id descripcion fechaNota idCurso estudiantes`)
        .populate({
          path: `estudiantes`,
          match: { 'estudiantes.estudiante.$': usuario._id },
          select: 'estudiante nota',
        })
        .exec()
        .then((p) => {
          return p.map((a) => {
            return {
              _id: a._id,
              descripcion: a.descripcion,
              fechaNota: a.fechaNota,
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
      if (!allQualification) {
        throw new NotFoundException({
          message: 'No se encontraron calificaciones',
        });
      }
      return allQualification;
    } catch (error) {
      ErrorUtil.handleError(error);
    }
  }
}
