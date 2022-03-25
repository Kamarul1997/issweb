import { Controller, Get,Render } from '@nestjs/common';


@Controller()
export class ISSHomeController {
  
  @Get('forms.hbs')
  @Render('forms')
  root() {
    return { message: 'Enter the details!' };
  }


}
