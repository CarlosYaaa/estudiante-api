import { ActivitiesService } from './activities.service';
import { ActivitiesResponse } from './dto/activities.dto';
export declare class ActivitiesController {
    private readonly activitiesService;
    constructor(activitiesService: ActivitiesService);
    getAllActivities(idCurso: string): Promise<ActivitiesResponse[]>;
}
