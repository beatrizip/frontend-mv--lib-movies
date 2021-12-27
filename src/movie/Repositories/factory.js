// import {FetcherFactory} from '@s-ui/domain'
import HTTPMovieRepository from './HTTPMovieRepository'
import axios from 'axios'
import MovieEntityFactory from '../Entities/factory'
import MovieValueObjectFactory from '../ValueObjects/factory'
import MovieMappersFactory from '../Mappers/factory'

export default class MovieRepositoryFactory {
  static httpMovieRepository = ({config} = {}) =>
    new HTTPMovieRepository({
      config,
      fetcher: axios,
      valueObjectFactory: MovieValueObjectFactory,
      entityFactory: MovieEntityFactory,
      mapperFactory: MovieMappersFactory
      // fetcher: FetcherFactory.httpFetcher({config})
    })
}

// Mirar interfaces, herencia
// Dos ficheros por repo, interfaz e implementación concreta
