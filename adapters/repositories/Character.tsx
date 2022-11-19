import { ICharacterRepository } from '../../domains/useCases/repository-interfaces/iCharacter'
import { ICharacterDTO } from '../../domains/dto/CharacterDTO'
import { IHttp } from '../infrastructures/interfaces/iHttp'

class CharacterRepository implements ICharacterRepository {

  constructor(
    private readonly http: IHttp,
  ) {}

  async getAllCharacter(): Promise<any> {
    const response = await this.http.request({
      method: 'GET',
      url: 'https://rickandmortyapi.com/api/character',
      headers: {
        'Content-Type': 'application/json'
      },
    })

    if(response) return response
  }

  async getCharacter(id: ICharacterDTO): Promise<any> {
    const response = await this.http.request({
      method: 'GET',
      url: `https://rickandmortyapi.com/api/character/${id}`,
      headers: {
        'Content-Type': 'application/json'
      },
    })

    if(response) return response
  }

}

export default CharacterRepository
