import {ISessionUseCase} from '../../../domains/useCases/interfaces/iSession';
import {ICharacterUseCase} from '../../../domains/useCases/interfaces/iCharacter';

export default interface IUseCases {
  session: ISessionUseCase;
  character: ICharacterUseCase;
}
