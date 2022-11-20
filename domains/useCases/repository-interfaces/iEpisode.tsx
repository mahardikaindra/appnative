import {IEpisodeDTO} from '../../dto/EpisodeDTO';

export interface IEpisodeRepository {
  getEpisode(ids: IEpisodeDTO): Promise<any>;
}
