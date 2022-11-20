import IRepositories from './interfaces/iRepositories';
import IInfrastructures from './interfaces/iInfrastructures';
import SessionRepository from '../../adapters/repositories/Session';
import CharacterRepository from '../../adapters/repositories/Character';
import EpisodeRepository from '../../adapters/repositories/Episode';

export default (infrastructure: IInfrastructures): IRepositories => {
  return {
    session: new SessionRepository(infrastructure.http, infrastructure.storage),
    character: new CharacterRepository(infrastructure.http),
    episode: new EpisodeRepository(infrastructure.http),
  };
};
