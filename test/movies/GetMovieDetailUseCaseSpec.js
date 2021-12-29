import {config, expect} from 'chai'
import {HttpMocker} from '@s-ui/mockmock'
import Domain from '../../src'
import sinon from 'sinon'

const domain = new Domain({})

const API_MOVIE = {
  adult: false,
  backdrop_path: '/VlHt27nCqOuTnuX6bku8QZapzO.jpg',
  belongs_to_collection: {
    id: 531241,
    name: 'Spider-Man (Avengers) Collection',
    poster_path: '/nogV4th2P5QWYvQIMiWHj4CFLU9.jpg',
    backdrop_path: '/AvnqpRwlEaYNVL6wzC4RN94EdSd.jpg'
  },
  budget: 258000000,
  genres: [
    {id: 28, name: 'Action'},
    {id: 12, name: 'Adventure'},
    {id: 878, name: 'Science Fiction'}
  ],
  homepage: 'https://www.spidermannowayhome.movie',
  id: 634649,
  imdb_id: 'tt10872600',
  original_language: 'en',
  original_title: 'Spider-Man: No Way Home',
  overview:
    'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
  popularity: 21848.81,
  poster_path: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
  production_companies: [
    {
      id: 420,
      logo_path: '/hUzeosd33nzE5MCNsZxCGEKTXaQ.png',
      name: 'Marvel Studios',
      origin_country: 'US'
    },
    {
      id: 84041,
      logo_path: '/nw4kyc29QRpNtFbdsBHkRSFavvt.png',
      name: 'Pascal Pictures',
      origin_country: 'US'
    },
    {
      id: 5,
      logo_path: '/71BqEFAF4V3qjjMPCpLuyJFB9A.png',
      name: 'Columbia Pictures',
      origin_country: 'US'
    }
  ],
  production_countries: [{iso_3166_1: 'US', name: 'United States of America'}],
  release_date: '2021-12-15',
  revenue: 587200000,
  runtime: 148,
  spoken_languages: [
    {english_name: 'English', iso_639_1: 'en', name: 'English'},
    {english_name: 'Tagalog', iso_639_1: 'tl', name: ''}
  ],
  status: 'Released',
  tagline: 'The Multiverse unleashed.',
  title: 'Spider-Man: No Way Home',
  video: false,
  vote_average: 8.7,
  vote_count: 1490
}

const ENTITY_MOVIE = {
  id: 634649,
  title: 'Spider-Man: No Way Home',
  rating: 8.7,
  genres: [
    {id: 28, name: 'Action'},
    {id: 12, name: 'Adventure'},
    {id: 878, name: 'Science Fiction'}
  ],
  voteCount: 1490,
  overview:
    'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
  poster: `${domain.get('config').IMG_URL}/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg`,
  homepage: 'https://www.spidermannowayhome.movie'
}

describe('GetMovieDetailUseCase', () => {
  const domain = new Domain({})

  // Primero: el caso de uso está expuesto y existe
  it('Should exists', () => {
    expect(domain.get('get_movie_detail_use_case')).to.exists
  })

  describe('When the API resolve the request', () => {
    const mocker = new HttpMocker()

    beforeEach(() => mocker.create())

    afterEach(() => mocker.restore())

    it('should return a movie with id, overview, poster and title ', done => {
      mocker
        .httpMock(domain.get('config').BASE_URL)
        .get(`/movie/634649?api_key=${domain.get('config').API_KEY}`)
        .reply(API_MOVIE, 200)

      domain
        .get('get_movie_detail_use_case')
        .execute({id: '634649'})
        .then(response => {
          expect(response).to.deep.equal(ENTITY_MOVIE)
          done()
        })
    })

    it('should return a server error', done => {
      mocker
        .httpMock(domain.get('config').BASE_URL)
        .get(`/movie/634649?api_key=${domain.get('config').API_KEY}`)
        .reply({}, 500)

      domain
        .get('get_movie_detail_use_case')
        .execute({id: '634649'})
        .catch(error => {
          console.log('ERROR en el test: ', error)
          done()
        })
    })
  })
})
