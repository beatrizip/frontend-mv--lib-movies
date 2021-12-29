import FromGetMovieDetailToMovieEntity from './FromGetMovieDetailToMovieEntity'
import FromGetMovieDetailToMovieValueObject from './FromGetMovieDetailToMovieValueObject'
import FromGetMovieListToMovieListValueObject from './FromGetMovieListToMovieListValueObject'

export default class MovieMappersFactory {
  static fromGetMovieDetailToMovieEntity = ({config, movieEntityFactory}) => {
    return new FromGetMovieDetailToMovieEntity({
      config,
      movieEntityFactory: movieEntityFactory
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
    movieListValueObject,
    movieEntityFactory
  }) => {
    return new FromGetMovieListToMovieListValueObject({
      config,
      movieListValueObject: movieListValueObject,
      movieEntityFactory: movieEntityFactory
    })
  }
}
