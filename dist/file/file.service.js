"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const uuidv4_1 = require("uuidv4");
let FileService = class FileService {
    async saveFile(file) {
        const id = uuidv4_1.uuid();
        const path = '/tmp/' + id;
        let count = 0;
        await new Promise((resolve) => {
            setTimeout(() => {
                count++;
                resolve();
            }, 2000);
        });
        return count;
    }
    async sendFile(id, res) {
        res.download('/tmp/' + id);
    }
};
FileService = __decorate([
    common_1.Injectable()
], FileService);
exports.FileService = FileService;
//# sourceMappingURL=file.service.js.map