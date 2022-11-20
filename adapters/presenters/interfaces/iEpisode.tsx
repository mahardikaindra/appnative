export interface IEpisodePresenter {
  getEpisode(ids: string[]): Promise<any>;
}
