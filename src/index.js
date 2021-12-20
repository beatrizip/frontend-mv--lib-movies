import {EntryPointFactory} from '@s-ui/domain'
import config from './config'

const MovieUseCasesFactory = () =>
  import(
    /* webpackChunkName: "MovieUseCasesFactory" */ './movie/UseCases/factory'
  )

const useCases = {
  get_movie_list_by_criteria_and_page_use_case: [
    MovieUseCasesFactory,
    'getMovieListByCriteriaAndPageUseCase'
  ],
  get_most_popular_movie_list_use_case: [
    MovieUseCasesFactory,
    'getMostPopularMovieListUseCase'
  ],
  get_movie_detail_use_case: [MovieUseCasesFactory, 'getMovieDetailUseCase']
}

const Domain = EntryPointFactory({config, useCases})

export default Domain
