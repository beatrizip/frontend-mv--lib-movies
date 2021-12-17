import {UseCase} from '@s-ui/domain'

export default class GetMovieListByCriteriaAndPageUseCase extends UseCase {
  constructor({repository}) {
    super()
    this._repository = repository
  }

  execute({criteria, page}) {
    return this._repository
      .getMovieListByCriteriaAndPage({
        criteria,
        page
      })
      .then(movieList => movieList.toJSON())
      .catch(error => {
        console.log('ERROR getMovieListByCriteriaAndPage', error) // Crear un valueObject tipo error
        return Promise.reject(error)
      })
  }
}
