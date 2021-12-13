import GetMovieListUseCase from './GetMovieListUseCase'
import MovieRepositoryFactory from '../Repositories/factory'

export default class MovieUseCasesFactory {
  static getMovieListUseCase = (
    {config} // En factory los métodos siempre estáticos
  ) =>
    new GetMovieListUseCase({
      // Aqui podriamos usar un repo alterno, ambos repos tendrian q tener las mismas funciones
      repository: MovieRepositoryFactory.httpMovieRepository({
        config
      })
    })
}
