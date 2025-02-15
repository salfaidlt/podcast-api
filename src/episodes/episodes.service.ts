import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { EpisodeDto } from 'src/dto/episode.dto';
import { Episode } from 'src/entities/episode.entity';

@Injectable()
export class EpisodesService {
    private episodes: Episode[];

    findAll (sort: 'asc' | 'desc' = 'asc') {
        const sortAsc = (a: Episode, b: Episode) => (a.name > b.name ? 1 : -1)
        const sortDesc = (a: Episode, b: Episode) => (a.name < b.name ? 1 : -1)

        return sort === 'asc' ? 
            this.episodes.sort(sortAsc) : 
            this.episodes.sort(sortDesc)
    }

    findOne(id: string) {
        return this.episodes.find((episode) => episode.id === id)
    }

    findFeatured() {
        return this.episodes.find((episode) => episode.featured)
    }

    create(episodeDto: EpisodeDto) {
        const newEpisode: Episode = {...episodeDto, id: randomUUID()}
        this.episodes.push(newEpisode)
        return newEpisode
    }
}
