import {UseCase} from '@s-ui/domain'

export default class GetMostPopularMovieListUseCase extends UseCase {
  constructor({repository}) {
    super()
    this._repository = repository
  }

  async execute() {
    const movieList = await this._repository.getMostPopularMovieList()
    return movieList.toJSON() // Siempre aqui esta llamada a toJSON
  }
}
