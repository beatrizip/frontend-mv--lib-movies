import MovieListValueObject from './MovieListValueObject'
import MovieDetailValueObject from './MovieDetailValueObject'

export default class MovieValueObjectFactory {
  static movieListValueObject = data => new MovieListValueObject(data)
  static movieDetailValueObject = data => new MovieDetailValueObject(data)
}
