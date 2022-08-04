"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QualificationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const error_utils_1 = require("../utils/error.utils");
let QualificationService = class QualificationService {
    constructor(qualificationModel) {
        this.qualificationModel = qualificationModel;
    }
    async getAllQualification(usuario, idCurso) {
        try {
            const allQualification = await this.qualificationModel
                .find({
                idCurso,
                'estudiantes.estudiante': { $in: usuario._id },
            })
                .select(`_id descripcion fechaNota idCurso estudiantes`)
                .populate({
                path: `estudiantes`,
                match: { 'estudiantes.estudiante.$': usuario._id },
                select: 'estudiante nota',
            })
                .exec()
                .then((p) => {
                return p.map((a) => {
                    return {
                        _id: a._id,
                        descripcion: a.descripcion,
                        fechaNota: a.fechaNota,
                        idCurso: a.idCurso,
                        usuario: a.estudiantes.filter((e) => e.estudiante == usuario._id)[0],
                    };
                });
            })
                .catch((error) => {
                return error_utils_1.ErrorUtil.handleError(error);
            });
            if (!allQualification) {
                throw new common_1.NotFoundException({
                    message: 'No se encontraron calificaciones',
                });
            }
            return allQualification;
        }
        catch (error) {
            error_utils_1.ErrorUtil.handleError(error);
        }
    }
};
QualificationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Qualification')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], QualificationService);
exports.QualificationService = QualificationService;
//# sourceMappingURL=qualification.service.js.map