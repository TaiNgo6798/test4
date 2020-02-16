import { FileService } from './file.service';
export declare class FileController {
    private readonly fileService;
    constructor(fileService: FileService);
    uploadFile(file: any): Promise<number>;
    downloadFile(req: any, res: any): Promise<void>;
}
