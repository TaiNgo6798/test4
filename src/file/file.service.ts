import { Injectable } from '@nestjs/common';
import { createWriteStream } from 'fs';
import { uuid } from 'uuidv4'

@Injectable()
export class FileService {

  async saveFile(file) {
    const id = uuid()
    const path = '/tmp/' + id
    await new Promise<any>((resolve) => {
      let fileStream = createWriteStream(path)
      fileStream.write(file.buffer)
      fileStream.end()
      fileStream.on('finish', resolve)
    })
    return {
      id,
      originalname: file.originalname,
      size: file.size
      }
    
  }

async sendFile(id, res) {
     res.download('/tmp/' + id)
}
}
