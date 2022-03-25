"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISSService = void 0;
const common_1 = require("@nestjs/common");
const issdetail_model_1 = require("./issdetail.model");
let ISSService = class ISSService {
    constructor() {
        this.details = [];
    }
    insertDetail(time, date, location, latitude, longitude) {
        const isId = Math.random().toString();
        const newDetail = new issdetail_model_1.Detail(isId, time, date, location, latitude, longitude);
        this.details.push(newDetail);
        return isId;
    }
    getDetail() {
        return [...this.details];
    }
};
ISSService = __decorate([
    (0, common_1.Injectable)()
], ISSService);
exports.ISSService = ISSService;
//# sourceMappingURL=issdetail.service.js.map