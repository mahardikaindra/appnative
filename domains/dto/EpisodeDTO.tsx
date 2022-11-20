export interface IEpisodeParams {
  ids: string[];
}

export interface IEpisodeDTO {
  readonly ids: string[];
}

class EpisodeDTO implements IEpisodeDTO {
  readonly ids: string[];

  constructor(param: IEpisodeParams) {
    this.ids = param.ids;
  }
}

export default EpisodeDTO;
