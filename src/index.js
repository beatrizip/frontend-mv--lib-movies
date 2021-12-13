import {EntryPointFactory} from '@s-ui/domain'
import config from './config'

const MovieUseCasesFactory = () =>
  import(
    /* webpackChunkName: "MovieUseCasesFactory" */ './movie/UseCases/factory'
  )

const useCases = {
  get_movie_list_use_case: [MovieUseCasesFactory, 'getMovieListUseCase']
}

const EntryPoint = EntryPointFactory({config, useCases})

export default EntryPoint
