import { Controller, Get,Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  
  @Get()
  @Render('index')
  root() {
    return { message: 'Where ISS is in your fingertip' };
  }


}
