import FromGetMovieDetailToMovieEntity from './FromGetMovieDetailToMovieEntity'
import MovieEntityFactory from '../Entities/factory'
import FromGetMovieDetailToMovieValueObject from './FromGetMovieDetailToMovieValueObject'
import FromGetMovieListToMovieListValueObject from './FromGetMovieListToMovieListValueObject'

export default class MovieMappersFactory {
  static fromGetMovieDetailToMovieEntity = ({config} = {}) => {
    return new FromGetMovieDetailToMovieEntity({
      config,
      movieEntityFactory: MovieEntityFactory.movieEntity
    })
  }

  static fromGetMovieDetailToValueObject = ({
    config,
    movieDetailValueObject
  }) => {
    return new FromGetMovieDetailToMovieValueObject({
      config,
      movieDetailValueObject: movieDetailValueObject
    })
  }

  static fromGetMovieListToMovieListValueObject = ({
    config,
    movieListValueObject
  }) => {
    return new FromGetMovieListToMovieListValueObject({
      config,
      movieListValueObject: movieListValueObject
    })
  }
}
