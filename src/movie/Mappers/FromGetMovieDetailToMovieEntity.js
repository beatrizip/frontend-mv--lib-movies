import {Mapper} from '@s-ui/domain'

export default class FromGetMovieDetailToMovieEntity extends Mapper {
  constructor({config, movieEntityFactory}) {
    super()
    this._config = config
    this._movieEntityFactory = movieEntityFactory
  }

  map(movie) {
    return this._movieEntityFactory({
      ...movie,
      poster_path: `${this._config.IMG_URL}${movie.poster_path}`
    })
  }
}
