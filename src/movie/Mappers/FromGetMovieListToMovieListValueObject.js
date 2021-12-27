import {Mapper} from '@s-ui/domain'

export default class fromGetMovieListToMovieListValueObject extends Mapper {
  constructor({config, movieListValueObject}) {
    super()
    this._config = config
    this._movieListValueObject = movieListValueObject
  }

  map(movieList) {
    return this._movieListValueObject({
      ...movieList,
      results: movieList.results.map(movie => {
        return {
          ...movie,
          poster_path: `${this._config.IMG_URL}${movie.poster_path}`
        }
      })
    })
  }
}
