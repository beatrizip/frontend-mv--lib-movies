import MovieRepositoryInterface from './MovieRepositoryInterface'

export default class HTTPMovieRepository extends MovieRepositoryInterface {
  constructor({
    config,
    fetcher,
    valueObjectFactory,
    entityFactory,
    mapperFactory
  }) {
    super()
    this._config = config
    this._fetcher = fetcher
    this._valueObjectFactory = valueObjectFactory
    this._entityFactory = entityFactory
    this._mapperFactory = mapperFactory
  }

  getMostPopularMovieList() {
    const {API_KEY, BASE_URL} = this._config
    const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}`
    return this._fetcher
      .get(url)
      .then(({data}) =>
        this._mapperFactory
          .fromGetMovieListToMovieListValueObject({
            config: this._config,
            movieListValueObject: this._valueObjectFactory.movieListValueObject,
            movieEntityFactory: this._entityFactory.movieEntity
          })
          .map(data)
      )
      .catch(error => {
        console.log(error)
        return Promise.reject(error)
      })
  }

  getMovieListByCriteriaAndPage({criteria, page}) {
    const {API_KEY, BASE_URL} = this._config
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${criteria}&page=${page}`
    return this._fetcher.get(url).then(({data}) =>
      this._mapperFactory
        .fromGetMovieListToMovieListValueObject({
          config: this._config,
          movieListValueObject: this._valueObjectFactory.movieListValueObject,
          movieEntityFactory: this._entityFactory.movieEntity
        })
        .map(data)
    )
  }

  getMovieDetail({id}) {
    const {API_KEY, BASE_URL} = this._config
    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    return this._fetcher
      .get(url)
      .then(({data}) =>
        this._mapperFactory
          .fromGetMovieDetailToMovieEntity({
            config: this._config,
            movieEntityFactory: this._entityFactory.movieEntity
          })
          .map(data)
      )
      .catch(error => {
        console.log(error)
        return Promise.reject(error)
      })
  }
}
