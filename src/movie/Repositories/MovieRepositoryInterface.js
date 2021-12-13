import {Repository} from '@s-ui/domain'

// Interface
export default class MovieRepositoryInterface extends Repository {
  getMovieDetails() {
    // Cuando se ejecuta este error??
    // Cuando no existe en la case de la que extiende
    throw new Error('[MovieRepository#getMovieDetails] must be implemented')
  }

  getMovieList() {
    throw new Error('[MovieRepository#getMovieList] must be implemented')
  }
}
