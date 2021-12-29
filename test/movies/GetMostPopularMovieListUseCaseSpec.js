import {config, expect} from 'chai'
import {HttpMocker} from '@s-ui/mockmock'
import Domain from '../../src'
import sinon from 'sinon'

const API_MOVIE_POPULAR_LIST = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/VlHt27nCqOuTnuX6bku8QZapzO.jpg',
      genre_ids: [28, 12, 878],
      id: 634649,
      original_language: 'en',
      original_title: 'Spider-Man: No Way Home',
      overview:
        'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
      popularity: 21848.81,
      poster_path: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
      release_date: '2021-12-15',
      title: 'Spider-Man: No Way Home',
      video: false,
      vote_average: 8.7,
      vote_count: 1414
    },
    {
      adult: false,
      backdrop_path: '/VlHt27nCqOuTnuX6bku8QZapzO.jpg',
      genre_ids: [28, 12, 878],
      id: 634649,
      original_language: 'en',
      original_title: 'Spider-Man: No Way Home',
      overview:
        'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
      popularity: 21848.81,
      poster_path: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
      release_date: '2021-12-15',
      title: 'Spider-Man: No Way Home',
      video: false,
      vote_average: 8.7,
      vote_count: 1414
    }
  ],
  total_pages: 1,
  total_results: 1
}

const VO_MOVIE_POPULAR_LIST = {
  0: {
    adult: false,
    backdrop_path: '/VlHt27nCqOuTnuX6bku8QZapzO.jpg',
    genre_ids: [28, 12, 878],
    id: 634649,
    original_language: 'en',
    original_title: 'Spider-Man: No Way Home',
    overview:
      'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
    popularity: 21848.81,
    poster_path: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    release_date: '2021-12-15',
    title: 'Spider-Man: No Way Home',
    video: false,
    vote_average: 8.7,
    vote_count: 1414
  },
  1: {
    adult: false,
    backdrop_path: '/VlHt27nCqOuTnuX6bku8QZapzO.jpg',
    genre_ids: [28, 12, 878],
    id: 634649,
    original_language: 'en',
    original_title: 'Spider-Man: No Way Home',
    overview:
      'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
    popularity: 21848.81,
    poster_path: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    release_date: '2021-12-15',
    title: 'Spider-Man: No Way Home',
    video: false,
    vote_average: 8.7,
    vote_count: 1414
  }
}

describe('GetMostPopularMovieListUseCase', () => {
  const domain = new Domain({})

  // Primero: el caso de uso está expuesto y existe
  it('Should exists', () => {
    expect(domain.get('get_most_popular_movie_list_use_case')).to.exists
  })

  describe('When the API resolve the request', () => {
    const mocker = new HttpMocker()

    beforeEach(() => mocker.create())

    afterEach(() => mocker.restore())

    it('should return a popular movie list', done => {
      mocker
        .httpMock(domain.get('config').BASE_URL)
        .get(`/discover/movie?api_key=${domain.get('config').API_KEY}`)
        .reply(API_MOVIE_POPULAR_LIST, 200)
      domain
        .get('get_most_popular_movie_list_use_case')
        .execute()
        .then(response => {
          expect(response).to.deep.equal(VO_MOVIE_POPULAR_LIST)
          done()
        })
    })

    it('should return a server error', done => {
      mocker
        .httpMock(domain.get('config').BASE_URL)
        .get(`/discover/movie?api_key=${domain.get('config').API_KEYAPI_KEY}`)
        .reply({}, 500)

      domain
        .get('get_most_popular_movie_list_use_case')
        .execute()
        .catch(error => {
          console.log('ERROR en el test: ', error)
          done()
        })
    })
  })
})
