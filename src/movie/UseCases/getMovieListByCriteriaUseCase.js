import {UseCase} from '@s-ui/domain'

export default class GetMovieListByCriteriaUseCase extends UseCase {
  constructor({repository}) {
    super()
    this._repository = repository
  }

  async execute(criteria) {
    const movieList = await this._repository.getMovieListByCriteria(criteria)
    return movieList.toJSON()
  }
}
