import GetMovieListByCriteriaAndPageUseCase from './getMovieListByCriteriaAndPageUseCase'
import GetMostPopularMovieListUseCase from './getMostPopularMovieListUseCase'
import GetMovieDetailUseCase from './getMovieDetailUseCase'
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

  static getMovieDetailUseCase = ({config}) =>
    new GetMovieDetailUseCase({
      repository: MovieRepositoryFactory.httpMovieRepository({
        config
      })
    })
}
