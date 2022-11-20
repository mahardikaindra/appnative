import {ICharacterDTO} from '../../dto/CharacterDTO';

export interface ICharacterUseCase {
  getAllCharacter(): Promise<any>;
  getCharacter(id: ICharacterDTO): Promise<any>;
}
