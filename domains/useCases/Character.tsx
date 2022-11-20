import {ICharacterUseCase} from './interfaces/iCharacter';
import {ICharacterRepository} from './repository-interfaces/iCharacter';
import {ICharacterDTO} from '../dto/CharacterDTO';

class CharacterUseCase implements ICharacterUseCase {
  constructor(private readonly characterRepo: ICharacterRepository) {}

  async getAllCharacter(): Promise<string> {
    const data = await this.characterRepo.getAllCharacter();
    return data;
  }
  async getCharacter(id: ICharacterDTO): Promise<string> {
    const data = await this.characterRepo.getCharacter(id);
    return data;
  }
}

export default CharacterUseCase;
