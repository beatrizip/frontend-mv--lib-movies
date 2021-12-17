import {Repository} from '@s-ui/domain'

// Interface
export default class MovieRepositoryInterface extends Repository {
  getMostPopularMovieList() {
    // Cuando se ejecuta este error??
    // Cuando no existe en la case de la que extiende
    throw new Error(
      '[MovieRepository#getMostPopularMovieList] must be implemented'
    )
  }

  getMovieListByCriteria() {
    throw new Error(
      '[MovieRepository#getMovieListByCriteria] must be implemented'
    )
  }
}
