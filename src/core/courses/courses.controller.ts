import { Controller, Get, UseGuards } from '@nestjs/common';
import { Usuario } from 'src/decorators/usuario.decorator';
import { UsuarioPayload } from 'src/models/usuarioPayload.model';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CoursesService } from './courses.service';
import { CourseResponse } from './dto/courses.dto';

@Controller('courses')
@UseGuards(JwtAuthGuard)
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get('/')
  async getAllCourses(
    @Usuario() usuario: UsuarioPayload,
  ): Promise<CourseResponse[]> {
    const respuesta = await this.coursesService.getAllCourse(usuario);
    return respuesta;
  }
}
