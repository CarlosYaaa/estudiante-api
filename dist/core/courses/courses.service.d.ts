import { Model } from 'mongoose';
import { Course } from 'src/interface/courses.interface';
import { UsuarioPayload } from 'src/models/usuarioPayload.model';
export declare class CoursesService {
    private readonly courseModel;
    constructor(courseModel: Model<Course>);
    getAllCourse(usuario: UsuarioPayload): Promise<Course[]>;
}
