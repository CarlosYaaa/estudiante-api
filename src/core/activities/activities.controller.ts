import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { response } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ActivitiesService } from './activities.service';
import { ActivitiesResponse } from './dto/activities.dto';

@Controller('activities')
@UseGuards(JwtAuthGuard)
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Get('/:idCurso')
  async getAllActivities(
    @Param('idCurso') idCurso: string,
  ): Promise<ActivitiesResponse[]> {
    const respuesta = await this.activitiesService.getAllActivities(idCurso);
    return respuesta;
  }
}
