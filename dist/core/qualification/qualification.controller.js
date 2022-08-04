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
exports.QualificationController = void 0;
const common_1 = require("@nestjs/common");
const usuario_decorator_1 = require("../../decorators/usuario.decorator");
const usuarioPayload_model_1 = require("../../models/usuarioPayload.model");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const qualification_service_1 = require("./qualification.service");
let QualificationController = class QualificationController {
    constructor(qualificationService) {
        this.qualificationService = qualificationService;
    }
    async getAllQualification(usuario, idCurso) {
        const respuesta = await this.qualificationService.getAllQualification(usuario, idCurso);
        return respuesta;
    }
};
__decorate([
    (0, common_1.Get)('/:idCurso'),
    __param(0, (0, usuario_decorator_1.Usuario)()),
    __param(1, (0, common_1.Param)('idCurso')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuarioPayload_model_1.UsuarioPayload, String]),
    __metadata("design:returntype", Promise)
], QualificationController.prototype, "getAllQualification", null);
QualificationController = __decorate([
    (0, common_1.Controller)('qualification'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [qualification_service_1.QualificationService])
], QualificationController);
exports.QualificationController = QualificationController;
//# sourceMappingURL=qualification.controller.js.map