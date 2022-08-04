"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUtil = void 0;
const axios_1 = require("axios");
var AuthUtil;
(function (AuthUtil) {
    async function autenticarUsuarioEstudiante(credencialesUsuario, tipoUsuario) {
        const responseUser = await axios_1.default.post(`${process.env.SERVICIO_AUTENTICACION_URL}` + `/usuario/signin`, { credencialesUsuario, tipoUsuario });
        return responseUser.data;
    }
    AuthUtil.autenticarUsuarioEstudiante = autenticarUsuarioEstudiante;
    async function registrarUsuarioEstudiante(usuarioRegisterRequest) {
        const registerUser = await axios_1.default.post(`${process.env.SERVICIO_AUTENTICACION_URL}` + `/usuario/signup`, usuarioRegisterRequest);
        return registerUser.data;
    }
    AuthUtil.registrarUsuarioEstudiante = registrarUsuarioEstudiante;
})(AuthUtil = exports.AuthUtil || (exports.AuthUtil = {}));
//# sourceMappingURL=auth.util.js.map