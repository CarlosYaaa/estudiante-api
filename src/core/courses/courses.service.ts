import { Injectable, UseGuards } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from 'src/interface/courses.interface';
import { IUsuario } from 'src/interface/usuario.interface';
import { UsuarioPayload } from 'src/models/usuarioPayload.model';
import { ErrorUtil } from '../utils/error.utils';

@Injectable()
export class CoursesService {
    constructor(
        @InjectModel('Course') private readonly courseModel: Model<Course>,
    ) {}

    async getAllCourse(usuario: UsuarioPayload): Promise<Course[]> {
        try {
            const allCourses = await this.courseModel.find({
               students: { $in: [usuario._id] }, 
            })
            .select(`_id descripcion day schedule user`)
            .populate({
                path: `user`,
                select: `_id nombres apellidoPaterno apellidoMaterno nombreCompleto`,
            })
            .exec();
            return allCourses;
        } catch (error) {
            ErrorUtil.handleError(error);
        }
    }
}
