import GetMovieListByCriteriaUseCase from './getMovieListByCriteriaUseCase'
import GetMovieListByCriteriaAndPageUseCase from './getMovieListByCriteriaAndPageUseCase'
import GetMostPopularMovieListUseCase from './getMostPopularMovieListUseCase'
import GetMovieDetailsUseCase from './getMovieDetailsUseCase'
import MovieRepositoryFactory from '../Repositories/factory'

export default class MovieUseCasesFactory {
  static getMovieListByCriteriaUseCase = (
    {config} // En factory los métodos siempre estáticos
  ) =>
    new GetMovieListByCriteriaUseCase({
      // Aqui podriamos usar un repo alterno, ambos repos tendrian q tener las mismas funciones
      repository: MovieRepositoryFactory.httpMovieRepository({
        config
      })
    })

  static getMovieListByCriteriaAndPageUseCase = ({config}) =>
    new GetMovieListByCriteriaAndPageUseCase({
      repository: MovieRepositoryFactory.httpMovieRepository({
        config
      })
    })

  static getMostPopularMovieListUseCase = ({config}) =>
    new GetMostPopularMovieListUseCase({
      repository: MovieRepositoryFactory.httpMovieRepository({
        config
      })
    })

  static getMovieDetailsUseCase = ({config}) =>
    new GetMovieDetailsUseCase({
      repository: MovieRepositoryFactory.httpMovieRepository({
        config
      })
    })
}
