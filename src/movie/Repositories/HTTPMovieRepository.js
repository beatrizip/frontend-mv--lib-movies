import MovieRepositoryInterface from './MovieRepositoryInterface'

export default class HTTPMovieRepository extends MovieRepositoryInterface {
  constructor({config, fetcher, valueObjectFactory, entityFactory}) {
    super()
    this._config = config
    this._fetcher = fetcher
    this._valueObjectFactory = valueObjectFactory
    this._entityFactory = entityFactory

    console.log(this)
  }

  getMostPopularMovieList() {
    const {API_KEY, BASE_URL} = this._config
    const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}`
    return this._fetcher
      .get(url)
      .then(({data}) => this._valueObjectFactory.movieListValueObject(data))
      .catch(error => {
        console.log(error)
        return Promise.reject(error)
      })
  }

  getMovieListByCriteriaAndPage({criteria, page}) {
    const {API_KEY, BASE_URL} = this._config
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${criteria}&page=${page}`
    return this._fetcher
      .get(url)
      .then(({data}) => this._valueObjectFactory.movieListValueObject(data))
      .catch(error => {
        console.log(error)
        return Promise.reject(error)
      })
  }

  getMovieDetail({id}) {
    const {API_KEY, BASE_URL} = this._config
    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    return this._fetcher
      .get(url)
      .then(({data}) => {
        console.log('VO factory', this._valueObjectFactory)
        console.log('entity factory', this._entityFactory)
        return this._entityFactory.movieEntity({
          id: data.id,
          title: data.title,
          poster: data.poster_path,
          overview: data.overview
        })
      })
      .catch(error => {
        console.log(error)
        return Promise.reject(error)
      })
  }
}
