import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    videos: {
        id: number;
        name: string;
    }[];
    getVideos(): {
        id: number;
        name: string;
    }[];
    getVideo(videoId: number): {
        id: number;
        name: string;
    };
}
