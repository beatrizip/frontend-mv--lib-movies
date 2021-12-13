import {config, expect} from 'chai'
import {HttpMocker} from '@s-ui/mockmock'
import Domain from '../../src'
import sinon from 'sinon'

describe.only('GetMovieListUseCase', () => {
  const domain = new Domain({})

  // Primero: el caso de uso está expuesto y existe
  it('Should exists', () => {
    expect(domain.get('get_movie_list_use_case')).to.exists
  })

  describe('When the API resolve the request', () => {
    const mocker = new HttpMocker()

    beforeEach(() => {
      mocker.create()
    })

    afterEach(() => {
      mocker.restore()
    })

    it('return a movie list', () => {
      mocker
        .httpMock(domain.get('config').BASE_URL)
        .get(`/discover/${domain.get('config').API_KEY}`)
        .reply({}, 200)

      domain
        .get('get_movie_list_use_case')
        .execute()
        .then(response => {
          console.log(response)
        })
    })
  })
})
