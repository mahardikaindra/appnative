import CharacterDTO from '../../domains/dto/CharacterDTO';
import {ICharacterUseCase} from '../../domains/useCases/interfaces/iCharacter';
import {ICharacterPresenter} from './interfaces/iCharacter';

class CharacterPresenter implements ICharacterPresenter {
  constructor(private readonly useCases: ICharacterUseCase) {}

  async getAllCharacter(): Promise<any> {
    return await this.useCases.getAllCharacter();
  }
  async getCharacter(id: number): Promise<any> {
    return await this.useCases.getCharacter(new CharacterDTO({id}));
  }
}

export default CharacterPresenter;
