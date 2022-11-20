export interface ICharacterParams {
  id: number;
}

export interface ICharacterDTO {
  readonly id: number;
}

class CharacterDTO implements ICharacterDTO {
  readonly id: number;

  constructor(param: ICharacterParams) {
    this.id = param.id;
  }
}

export default CharacterDTO;
