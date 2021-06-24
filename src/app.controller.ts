import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("/api")
export class AppController {
  constructor(private readonly appService: AppService) {}
  videos = [
    {
      id:1,
      name:"Videos de khalifa"
    },
    {
      id:2,
      name:"Video 1"
    }
  ];
  @Get("/videos")
  getVideos(){
    return this.videos;
  }
  @Get("videos/:id")
  getVideo(@Param('id') videoId : number){
    return this.videos.find((video)=>{
      video.id = videoId;
    });
  }
}
