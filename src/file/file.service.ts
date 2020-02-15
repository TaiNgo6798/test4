import { Injectable } from '@nestjs/common';
import { createWriteStream } from 'fs';
import { uuid } from 'uuidv4'

@Injectable()
export class FileService {

  async saveFile(file) {
    const id = uuid()
    const path = 'src/tmp/' + id
    let fileStream = createWriteStream(path)
    fileStream.write(file[0].buffer)
    fileStream.end()
    return {
      id,
      originalname: file[0].originalname,
      size: file[0].size
      }
    
  }

async sendFile(id, res) {
     res.download('src/tmp/' + id)
}
}
