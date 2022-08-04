import { UsuarioPayload } from 'src/models/usuarioPayload.model';
import { CoursesService } from './courses.service';
import { CourseResponse } from './dto/courses.dto';
export declare class CoursesController {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
    getAllCourses(usuario: UsuarioPayload): Promise<CourseResponse[]>;
}
