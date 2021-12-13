import MovieListValueObject from './MovieListValueObject'

export default class MovieValueObjectFactory {
  static movieListValueObject = data => new MovieListValueObject(data)
}
