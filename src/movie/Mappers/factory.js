import FromGetMovieDetailToMovieEntity from './FromGetMovieDetailToMovieEntity'
import FromGetMovieListToMovieListValueObject from './FromGetMovieListToMovieListValueObject'

export default class MovieMappersFactory {
  static fromGetMovieDetailToMovieEntity = ({config, movieEntityFactory}) => {
    return new FromGetMovieDetailToMovieEntity({
      config,
      movieEntityFactory: movieEntityFactory
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
