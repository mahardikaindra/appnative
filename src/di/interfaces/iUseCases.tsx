import {ISessionUseCase} from '../../../domains/useCases/interfaces/iSession';
import {ICharacterUseCase} from '../../../domains/useCases/interfaces/iCharacter';
import {IEpisodeUseCase} from '../../../domains/useCases/interfaces/iEpisode';

export default interface IUseCases {
  session: ISessionUseCase;
  character: ICharacterUseCase;
  episode: IEpisodeUseCase;
}
