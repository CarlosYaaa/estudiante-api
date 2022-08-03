import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { Usuario } from 'src/decorators/usuario.decorator';
import { UsuarioPayload } from 'src/models/usuarioPayload.model';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { QualificationResponse } from './dto/qualification.dto';
import { QualificationService } from './qualification.service';

@Controller('qualification')
@UseGuards(JwtAuthGuard)
export class QualificationController {
  constructor(private readonly qualificationService: QualificationService) {}

  @Get('/:idCurso')
  async getAllQualification(
    @Usuario() usuario: UsuarioPayload,
    @Param('idCurso') idCurso: string,
  ): Promise<QualificationResponse[]> {
    const respuesta = await this.qualificationService.getAllQualification(
      usuario,
      idCurso,
    );
    return respuesta;
  }
}
