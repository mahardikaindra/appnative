import {IEpisodeDTO} from '../../dto/EpisodeDTO';

export interface IEpisodeUseCase {
  getEpisode(ids: IEpisodeDTO): Promise<any>;
}
