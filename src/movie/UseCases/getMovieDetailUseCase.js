import {UseCase} from '@s-ui/domain'

export default class GetMovieDetailUseCase extends UseCase {
  constructor({repository}) {
    super()
    this._repository = repository
  }

  execute({id}) {
    return this._repository
      .getMovieDetail({id})
      .then(movie => movie.toJSON())
      .catch(error => {
        console.log('ERROR GetMovieDetailUseCase', error) // Crear un valueObject tipo error
        return Promise.reject(error)
      })
  }
}
