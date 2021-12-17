import {EntryPointFactory} from '@s-ui/domain'
import config from './config'

const MovieUseCasesFactory = () =>
  import(
    /* webpackChunkName: "MovieUseCasesFactory" */ './movie/UseCases/factory'
  )

const useCases = {
  get_movie_list_by_criteria_use_case: [
    MovieUseCasesFactory,
    'getMovieListByCriteriaUseCase'
  ],
  get_movie_list_by_criteria_and_page_use_case: [
    MovieUseCasesFactory,
    'getMovieListByCriteriaAndPageUseCase'
  ],
  get_most_popular_movie_list_use_case: [
    MovieUseCasesFactory,
    'getMostPopularMovieListUseCase'
  ],
  get_movie_details_use_case: [MovieUseCasesFactory, 'getMovieDetailsUseCase']
}

const Domain = EntryPointFactory({config, useCases})

export default Domain
