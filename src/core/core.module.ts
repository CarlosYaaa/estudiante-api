import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CoursesModule } from './courses/courses.module';
import { ActivitiesModule } from './activities/activities.module';
import { QualificationModule } from './qualification/qualification.module';
import { AttendanceModule } from './attendance/attendance.module';

@Module({
    imports: [
        AuthModule,
        CoursesModule,
        ActivitiesModule,
        QualificationModule,
        AttendanceModule,
    ],
})
export class CoreModule {}
