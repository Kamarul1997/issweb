"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISSModule = void 0;
const common_1 = require("@nestjs/common");
const issdetail_controller_1 = require("./issdetail.controller");
const issdetail_controllerhome_1 = require("./issdetail.controllerhome");
const issdetail_service_1 = require("./issdetail.service");
let ISSModule = class ISSModule {
};
ISSModule = __decorate([
    (0, common_1.Module)({
        controllers: [issdetail_controller_1.ISSController, issdetail_controllerhome_1.ISSHomeController],
        providers: [issdetail_service_1.ISSService],
    })
], ISSModule);
exports.ISSModule = ISSModule;
//# sourceMappingURL=issdetail.module.js.map