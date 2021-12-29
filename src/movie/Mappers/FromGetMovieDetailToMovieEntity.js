import {Mapper} from '@s-ui/domain'

export default class FromGetMovieDetailToMovieEntity extends Mapper {
  constructor({config, movieEntityFactory}) {
    super()
    this._config = config
    this._movieEntityFactory = movieEntityFactory
  }

  map(movie) {
    return this._movieEntityFactory({
      id: movie.id,
      title: movie.title,
      rating: movie.vote_average,
      genres: movie.genres,
      voteCount: movie.vote_count,
      overview: movie.overview,
      poster: `${this._config.IMG_URL}${movie.poster_path}`,
      homepage: movie.homepage
    })
  }
}
