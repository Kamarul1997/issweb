import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ISSModule } from './issdetail/issdetail.module';

@Module({
  imports: [ISSModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
