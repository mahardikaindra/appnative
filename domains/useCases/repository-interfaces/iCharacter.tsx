import { ICharacterDTO } from '../../dto/CharacterDTO'

export interface ICharacterRepository {
  getAllCharacter(): Promise<any>
  getCharacter(id: ICharacterDTO): Promise<any>
}
