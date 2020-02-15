import { Controller, Post, UseInterceptors, UploadedFile, UploadedFiles, Get, Param, Res, Req, HttpException } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express'
import { FileService } from './file.service'
import * as FileType from 'file-type'

@Controller('file')
export class FileController {

  constructor(private readonly fileService: FileService) { }

  @Post('upload')
  @UseInterceptors(AnyFilesInterceptor())
  async uploadFile(@UploadedFiles() file) {
      let fileType = await FileType.fromBuffer(file[0].buffer) || false
      let fileSize = file[0].size

      if (file[0].originalname.split('').indexOf('/') !== -1) {
        throw new HttpException('Stop hacking this !', 400)
      } else {
        if (fileType && fileType.ext === 'png') {
          if (fileSize / 1024 <= 30) {
            return this.fileService.saveFile(file)
          }
          else {
            throw new HttpException('', 413)
          }
        }
        else {
          throw new HttpException('Unsupported Media Type ', 415)
        }
      }

  }

  @Get('download')
  downloadFile(@Req() req, @Res() res) {
    const { id } = req.query
    if (id.split('').indexOf('/') !== -1) {
      throw new HttpException('Stop hacking this !', 400)
    }
    return this.fileService.sendFile(id, res)
  }
}