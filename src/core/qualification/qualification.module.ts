import { Module } from '@nestjs/common';
import { QualificationService } from './qualification.service';
import { QualificationController } from './qualification.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QualificationSchema } from 'src/models/qualification.model';
import { CourseSchema } from 'src/models/courses.model';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Qualification', schema: QualificationSchema },
      { name: 'Course', schema: CourseSchema },
    ]),
  ],
  providers: [QualificationService],
  controllers: [QualificationController]
})
export class QualificationModule {}
