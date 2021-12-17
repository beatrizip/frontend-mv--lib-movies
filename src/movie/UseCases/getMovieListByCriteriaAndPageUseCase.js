import {UseCase} from '@s-ui/domain'

export default class GetMovieListByCriteriaAndPageUseCase extends UseCase {
  constructor({repository}) {
    super()
    this._repository = repository
  }

  async execute({criteria, page}) {
    const movieList = await this._repository.getMovieListByCriteriaAndPage({
      criteria,
      page
    })
    return movieList.toJSON()
  }
}
