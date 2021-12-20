import {UseCase} from '@s-ui/domain'

export default class GetMostPopularMovieListUseCase extends UseCase {
  constructor({repository}) {
    super()
    this._repository = repository
  }

  execute() {
    return this._repository
      .getMostPopularMovieList()
      .then(movieList => movieList.toJSON())
      .catch(error => {
        console.log('ERROR GetMostPopularMovieListUseCase', error) // Crear un valueObject tipo error
        return Promise.reject(error)
      })
  }
}
