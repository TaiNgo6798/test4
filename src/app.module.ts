import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppService } from './app.service'
import { FileModule } from './file/file.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    FileModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule { }
