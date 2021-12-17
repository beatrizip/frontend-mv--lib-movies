import GetMovieListByCriteriaAndPageUseCase from './getMovieListByCriteriaAndPageUseCase'
import GetMostPopularMovieListUseCase from './getMostPopularMovieListUseCase'
import GetMovieDetailsUseCase from './getMovieDetailsUseCase'
import MovieRepositoryFactory from '../Repositories/factory'

export default class MovieUseCasesFactory {
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
