import {UseCase} from '@s-ui/domain'

export default class GetMovieDetailsUseCase extends UseCase {
  constructor({repository}) {
    super()
    this._repository = repository
  }

  async execute(id) {
    const movie = await this._repository.getMovieDetails(id)

    return movie.toJSON()
  }
}
