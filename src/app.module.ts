import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppService } from './app.service'
import { FileModule } from './file/file.module'
import { MulterModule } from '@nestjs/platform-express'

@Module({
  imports: [
    ConfigModule.forRoot(),
    FileModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule { }
