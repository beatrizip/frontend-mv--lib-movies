import {UseCase} from '@s-ui/domain'

export default class GetMovieListUseCase extends UseCase {
  constructor({repository}) {
    super()
    this._repository = repository
  }

  async execute() {
    const movieList = await this._repository.getMovieList()
    return movieList.toJSON() // Siempre aqui esta llamada a toJSON
  }
}
