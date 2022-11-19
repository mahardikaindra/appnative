import IUseCases from './interfaces/iUseCases'
import SessionPresenter from '@adapters/presenters/Session'
import CharacterPresenter from '@adapters/presenters/Character'

export default (useCases: IUseCases) => {
  return {
    session: new SessionPresenter(useCases.session),
    character: new CharacterPresenter(useCases.character)
  }
}
