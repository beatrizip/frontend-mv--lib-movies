import {Mapper} from '@s-ui/domain'

export default class fromGetMovieListToMovieListValueObject extends Mapper {
  constructor({config, movieListValueObject, movieEntityFactory}) {
    super()
    this._config = config
    this._movieListValueObject = movieListValueObject
    this._movieEntityFactory = movieEntityFactory
  }

  map(movieList) {
    return this._movieListValueObject({
      ...movieList,
      results: movieList.results.map(movie => {
        return this._movieEntityFactory({
          id: movie.id,
          title: movie.title,
          overview: movie.overview,
          poster: `${this._config.IMG_URL}${movie.poster_path}`
        })
      })
    })
  }
}
