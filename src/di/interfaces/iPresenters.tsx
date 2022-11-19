import { ISessionPresenter } from '@adapters/presenters/interfaces/iSession'
import { ICharacterPresenter } from '@adapters/presenters/interfaces/iCharacter'

export default interface IPresenters {
  session: ISessionPresenter,
  character: ICharacterPresenter,
}
