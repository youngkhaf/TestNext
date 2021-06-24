import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("/api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/videos")
  getHello(){
    let videos = [
      {
        id:1,
        name:"Videos de khalifa"
      },
      {
        id:2,
        name:"Video 1"
      }
    ]
    return videos;
  }
}
