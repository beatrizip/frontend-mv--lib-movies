import {Mapper} from '@s-ui/domain'

export default class FromGetMovieDetailToMovieValueObject extends Mapper {
  constructor({config, movieDetailValueObject}) {
    super()
    this._config = config
    this._movieDetailValueObject = movieDetailValueObject
  }

  map(movie) {
    return this._movieDetailValueObject({
      ...movie,
      poster_path: `${this._config.IMG_URL}${movie.poster_path}`
    })
  }
}
