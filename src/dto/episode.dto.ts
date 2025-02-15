export class EpisodeDto {
    name: string;
    featured: boolean
}

export const createEpisodeDto = () => {
    const episodeDto: EpisodeDto = {
        name: `Episode n ${Math.random()*100}`,
        featured: Math.random() >= 0.5 ? true : false
    }
    return episodeDto
}