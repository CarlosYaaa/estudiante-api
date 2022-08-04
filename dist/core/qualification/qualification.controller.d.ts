import { UsuarioPayload } from 'src/models/usuarioPayload.model';
import { QualificationResponse } from './dto/qualification.dto';
import { QualificationService } from './qualification.service';
export declare class QualificationController {
    private readonly qualificationService;
    constructor(qualificationService: QualificationService);
    getAllQualification(usuario: UsuarioPayload, idCurso: string): Promise<QualificationResponse[]>;
}
