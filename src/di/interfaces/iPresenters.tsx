import {ISessionPresenter} from '../../../adapters/presenters/interfaces/iSession';
import {ICharacterPresenter} from '../../../adapters/presenters/interfaces/iCharacter';
import {IEpisodePresenter} from '../../../adapters/presenters/interfaces/iEpisode';

export default interface IPresenters {
  session: ISessionPresenter;
  character: ICharacterPresenter;
  episode: IEpisodePresenter;
}
