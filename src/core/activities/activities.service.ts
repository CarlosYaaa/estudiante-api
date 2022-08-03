import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Activity } from 'src/interface/activity.interface';
import { ErrorUtil } from '../utils/error.utils';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectModel('Activity') private readonly activityModel: Model<Activity>,
  ) {}

  async getAllActivities(idCurso: string) {
    try {
      const allActivities = await this.activityModel.find({
        idCurso,
      });
      if (!allActivities) {
        throw new NotFoundException({
          message: 'No se encontraron actividades',
        });
      }
      return allActivities;
    } catch (error) {
      ErrorUtil.handleError(error);
    }
  }
}
