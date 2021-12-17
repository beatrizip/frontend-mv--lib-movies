import MovieRepositoryInterface from './MovieRepositoryInterface'

export default class HTTPMovieRepository extends MovieRepositoryInterface {
  constructor({config, fetcher, valueObjectFactory, entityFactory}) {
    super()
    this._config = config
    this._fetcher = fetcher
    this._valueObjectFactory = valueObjectFactory
    this._entityFactory = entityFactory
  }

  async getMostPopularMovieList() {
    const {API_KEY, BASE_URL} = this._config
    const url = `${BASE_URL}/discover/movie${API_KEY}`
    const {data} = await this._fetcher.get(url)

    return this._valueObjectFactory.movieListValueObject(data)
  }

  getMovieListByCriteriaAndPage({criteria, page}) {
    const {API_KEY, BASE_URL} = this._config
    debugger
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${criteria}&page=${page}`
    return this._fetcher
      .get(url)
      .then(({data}) => this._valueObjectFactory.movieListValueObject(data))
      .catch(error => {
        console.log(error)
        return Promise.reject(error)
      })
  }

  async getMovieDetail(id) {
    const {API_KEY, BASE_URL} = this._config
    const url = `${BASE_URL}/movie/${id}?${API_KEY}`
    const {data} = await this._fetcher.get(url)
    return this._entityFactory.movieEntity(data)
  }
}
