// import {FetcherFactory} from '@s-ui/domain'
import HTTPMovieRepository from './HTTPMovieRepository'
import axios from 'axios'
import MovieValueObjectFactory from '../ValueObjects/factory'

class MovieRepositoryFactory {
  static httpMovieRepository = ({config} = {}) =>
    new HTTPMovieRepository({
      config,
      fetcher: axios,
      valueObjectFactory: MovieValueObjectFactory
      // fetcher: FetcherFactory.httpFetcher({config})
    })
}

// Mirar interfaces, herencia
// Dos ficheros por repo, interfaz e implementación concreta

export default MovieRepositoryFactory
