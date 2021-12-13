import MovieRepositoryInterface from './MovieRepositoryInterface'

export default class HTTPMovieRepository extends MovieRepositoryInterface {
  constructor({config, fetcher, valueObjectFactory}) {
    super()
    this._config = config
    this._fetcher = fetcher
    this._valueObjectFactory = valueObjectFactory
  }

  async getMovieList() {
    const {API_KEY, BASE_API_URL} = this._config
    const url = `${BASE_API_URL}/discover/${API_KEY}`
    const {data} = await this._fetcher.get(url)

    return this._valueObjectFactory.movieListValueObject(data)
  }
}
