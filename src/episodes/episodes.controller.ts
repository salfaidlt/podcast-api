import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { EpisodeDto } from 'src/dto/episode.dto';

@Controller('episodes')
export class EpisodesController {
    constructor(private episodesService: EpisodesService) {

    }

    @Get()
    findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
        console.log('====================================');
        console.log(sort);
        console.log('====================================');
        return this.episodesService.findAll()
    }

    @Get('featured')
    featured() {
        return this.episodesService.findFeatured()
    }

    @Post()
    create(@Body() input: EpisodeDto) {
        return this.episodesService.create(input)
    }

    @Get(':id')
    findOne(@Param() id: string) {
        console.log('====================================');
        console.log(id);
        console.log('====================================');
        return this.episodesService.findOne(id)
    }
}
