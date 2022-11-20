import {ISessionRepository} from '../../../domains/useCases/repository-interfaces/iSession';
import {ICharacterRepository} from '../../../domains/useCases/repository-interfaces/iCharacter';
import {IEpisodeRepository} from '../../../domains/useCases/repository-interfaces/iEpisode';

export default interface IRepositories {
  session: ISessionRepository;
  character: ICharacterRepository;
  episode: IEpisodeRepository;
}
