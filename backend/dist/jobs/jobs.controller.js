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
exports.JobsController = void 0;
const common_1 = require("@nestjs/common");
const jobs_service_1 = require("./jobs.service");
const create_job_dto_1 = require("./dto/create-job.dto");
const common_2 = require("@nestjs/common");
let JobsController = class JobsController {
    jobsService;
    constructor(jobsService) {
        this.jobsService = jobsService;
    }
    findAll() {
        return this.jobsService.findAll();
    }
    async findOne(id) {
        const findjobid = await this.jobsService.findOne(id);
        if (!findjobid) {
            throw new common_2.InternalServerErrorException(`The Requested Job ID:${id} does not exists.😔`);
        }
        return findjobid;
    }
    async create(body) {
        try {
            const createjob = await this.jobsService.create(body);
            return {
                id: createjob.id,
                message: '✅ Job published Successfully!',
            };
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new common_2.BadRequestException('A job with the same title already exists.');
            }
            console.error(error);
            throw new common_2.InternalServerErrorException('Failed to publish job😔');
        }
    }
    async remove(id) {
        try {
            const removeJob = await this.jobsService.remove(id);
            return {
                Message: `❗ Successfully Removed Job ID: ${removeJob.id}`,
            };
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException(`❗Job ID ${id} has already removed`);
            }
            console.error(error);
            throw new common_2.BadRequestException(`❗Failed to remove the Job ID ${id}.`);
        }
    }
};
exports.JobsController = JobsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JobsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_job_dto_1.CreateJobDto]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "remove", null);
exports.JobsController = JobsController = __decorate([
    (0, common_1.Controller)('jobs'),
    __metadata("design:paramtypes", [jobs_service_1.JobsService])
], JobsController);
//# sourceMappingURL=jobs.controller.js.map