import IUseCases from './interfaces/iUseCases';
import SessionPresenter from '../../adapters/presenters/Session';
import CharacterPresenter from '../../adapters/presenters/Character';
import EpisodePresenter from '../../adapters/presenters/Episode';

export default (useCases: IUseCases) => {
  return {
    session: new SessionPresenter(useCases.session),
    character: new CharacterPresenter(useCases.character),
    episode: new EpisodePresenter(useCases.episode),
  };
};
