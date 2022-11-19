import { ISessionRepository } from '../../../domains/useCases/repository-interfaces/iSession'
import { ICharacterRepository } from '../../../domains/useCases/repository-interfaces/iCharacter'

export default interface IRepositories {
  session: ISessionRepository,
  character: ICharacterRepository
}
