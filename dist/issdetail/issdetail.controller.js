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
exports.ISSController = void 0;
const common_1 = require("@nestjs/common");
const issdetail_service_1 = require("./issdetail.service");
let ISSController = class ISSController {
    constructor(issdetail) {
        this.issdetail = issdetail;
    }
    addLocation(isTime, isDate, isLocation, isLatitude, isLongitude) {
        const generatedId = this.issdetail.insertDetail(isTime, isDate, isLocation, isLatitude, isLongitude);
        return { id: generatedId };
    }
    async getAllDetail() {
        return this.issdetail.getDetail();
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('time')),
    __param(1, (0, common_1.Body)('date')),
    __param(2, (0, common_1.Body)('location')),
    __param(3, (0, common_1.Body)('latitude')),
    __param(4, (0, common_1.Body)('longitude')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", Object)
], ISSController.prototype, "addLocation", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ISSController.prototype, "getAllDetail", null);
ISSController = __decorate([
    (0, common_1.Controller)('details'),
    __metadata("design:paramtypes", [issdetail_service_1.ISSService])
], ISSController);
exports.ISSController = ISSController;
//# sourceMappingURL=issdetail.controller.js.map