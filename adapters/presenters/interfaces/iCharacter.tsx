export interface ICharacterPresenter {
  getAllCharacter(): Promise<any>;
  getCharacter(id: number): Promise<any>;
}
