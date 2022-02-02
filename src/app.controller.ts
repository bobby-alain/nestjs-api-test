import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/user')
  getHello(@Param('id') id: string): string {
    // return this.appService.getHello();
    return id;
  }
}
