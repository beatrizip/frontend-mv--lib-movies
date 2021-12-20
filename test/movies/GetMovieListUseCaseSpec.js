import {config, expect} from 'chai'
import {HttpMocker} from '@s-ui/mockmock'
import Domain from '../../src'
import sinon from 'sinon'

const MOVIE_LIST = {
  page: 2,
  results: [
    {
      adult: false,
      backdrop_path: '/9WHM084AoskcHCObAy4QnJg01eM.jpg',
      genre_ids: [16, 10751, 12, 14],
      id: 109445,
      original_language: 'en',
      original_title: 'Frozen',
      overview:
        "Young princess Anna of Arendelle dreams about finding true love at her sister Elsa’s coronation. Fate takes her on a dangerous journey in an attempt to end the eternal winter that has fallen over the kingdom. She's accompanied by ice delivery man Kristoff, his reindeer Sven, and snowman Olaf. On an adventure where she will find out what friendship, courage, family, and true love really means.",
      popularity: 113.512,
      poster_path: '/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg',
      release_date: '2013-11-20',
      title: 'Frozen',
      video: false,
      vote_average: 7.3,
      vote_count: 13748
    },
    {
      adult: false,
      backdrop_path: '/AoSZyb37ljMAxw0RdeQEBHKtgcc.jpg',
      genre_ids: [10751, 16, 12, 35, 14],
      id: 330457,
      original_language: 'en',
      original_title: 'Frozen II',
      overview:
        'Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.',
      popularity: 175.413,
      poster_path: '/mINJaa34MtknCYl5AjtNJzWj8cD.jpg',
      release_date: '2019-11-20',
      title: 'Frozen II',
      video: false,
      vote_average: 7.3,
      vote_count: 7832
    },
    {
      adult: false,
      backdrop_path: '/ic16B2KUfEFicIB3eiBUAYqrwz7.jpg',
      genre_ids: [16, 10751, 12, 35],
      id: 326359,
      original_language: 'en',
      original_title: 'Frozen Fever',
      overview:
        "On Anna's birthday, Elsa and Kristoff are determined to give her the best celebration ever, but Elsa's icy powers may put more than just the party at risk.",
      popularity: 56.066,
      poster_path: '/mPrDJ7puYzPLG5kPM96iNszF2sM.jpg',
      release_date: '2015-03-09',
      title: 'Frozen Fever',
      video: false,
      vote_average: 6.9,
      vote_count: 1577
    },
    {
      adult: false,
      backdrop_path: '/9K4QqQZg4TVXcxBGDiVY4Aey3Rn.jpg',
      genre_ids: [16, 10751, 12, 35, 14],
      id: 460793,
      original_language: 'en',
      original_title: "Olaf's Frozen Adventure",
      overview:
        'Olaf is on a mission to harness the best holiday traditions for Anna, Elsa, and Kristoff.',
      popularity: 41.404,
      poster_path: '/As8WTtxXs9e3cBit3ztTf7zoRmm.jpg',
      release_date: '2017-10-27',
      title: "Olaf's Frozen Adventure",
      video: false,
      vote_average: 6.4,
      vote_count: 1232
    },
    {
      adult: false,
      backdrop_path: '/9mvdRoVrXNBt6y43tfJBlSoEysT.jpg',
      genre_ids: [53],
      id: 44363,
      original_language: 'en',
      original_title: 'Frozen',
      overview:
        'When three skiers find themselves stranded on a chair lift at a New England ski resort that has closed for the next week, they are forced to make life or death choices that prove to be more perilous than staying put and freezing to death.',
      popularity: 17.913,
      poster_path: '/6SjRpaJg43iJnY0jlJ6c61tAKOo.jpg',
      release_date: '2010-02-05',
      title: 'Frozen',
      video: false,
      vote_average: 5.9,
      vote_count: 1414
    },
    {
      adult: false,
      backdrop_path: '/lu1xY551TaDj4Lx25RPsqizTBAr.jpg',
      genre_ids: [18],
      id: 10183,
      original_language: 'en',
      original_title: 'Frozen River',
      overview:
        "Ray Eddy, an upstate New York trailer mom, is lured into the world of illegal immigrant smuggling. Broke after her husband takes off with the down payment for their new doublewide, Ray reluctantly teams up with Lila, a smuggler, and the two begin making runs across the frozen St. Lawrence River carrying illegal Chinese and Pakistani immigrants in the trunk of Ray's Dodge Spirit.",
      popularity: 10.878,
      poster_path: '/qZRcN4JLwYQWTxKlycZPLQb37mO.jpg',
      release_date: '2008-03-26',
      title: 'Frozen River',
      video: false,
      vote_average: 6.7,
      vote_count: 225
    },
    {
      adult: false,
      backdrop_path: '/tb7WTOEPYKxIQPMEQRW1xruTDLO.jpg',
      genre_ids: [53, 80],
      id: 199373,
      original_language: 'en',
      original_title: 'The Frozen Ground',
      overview:
        'An Alaska State Trooper partners with a young woman who escaped the clutches of serial killer Robert Hansen to bring the murderer to justice. Based on actual events.',
      popularity: 13.763,
      poster_path: '/hHDj1h3lJvYd9Cervoswz9crhWg.jpg',
      release_date: '2013-07-11',
      title: 'The Frozen Ground',
      video: false,
      vote_average: 6.3,
      vote_count: 1144
    },
    {
      adult: false,
      backdrop_path: '/7nFkj8E1s7MRl7eqZLnszitoy0c.jpg',
      genre_ids: [16, 10751],
      id: 431562,
      original_language: 'en',
      original_title: 'LEGO Frozen Northern Lights',
      overview: 'Elsa, Anna and friends search for the Northern Lights.',
      popularity: 14.491,
      poster_path: '/jlk5MeGlNSiy773SWot9dGAQ2as.jpg',
      release_date: '2017-01-05',
      title: 'LEGO Frozen Northern Lights',
      video: false,
      vote_average: 6.8,
      vote_count: 64
    },
    {
      adult: false,
      backdrop_path: '/8Fipsuf4NtzQ8vn6wHebXaXLddy.jpg',
      genre_ids: [10402, 10751, 35],
      id: 761740,
      original_language: 'en',
      original_title: 'Frozen, A Musical Spectacular',
      overview:
        'For the first time in forever, Disney Cruise Line shared full video of Frozen, A Musical Spectacular to enjoy on land featuring the opening cast. Frozen, A Musical Spectacular is presented exclusively aboard the Disney Wonder and Disney Fantasy. The show is a full-length retelling of Anna and Elsa’s Frozen adventure in Arendelle based on the Disney animated movie. Frozen, A Musical Spectacular revisits the captivating escapades of royal sisters Anna and Elsa when an accident as children changes their lives—and their relationship—forever.',
      popularity: 8.058,
      poster_path: '/cDm5ON9PLj1plyjPurdiRPkByOT.jpg',
      release_date: '2020-11-06',
      title: 'Frozen, A Musical Spectacular',
      video: true,
      vote_average: 7,
      vote_count: 2
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [27, 53],
      id: 150211,
      original_language: 'en',
      original_title: 'The Frozen',
      overview:
        "After a harrowing snowmobile accident, a young couple is stranded in the woods and must survive while waiting for help to arrive. Events take a turn for the worse after the disappearance of Emma's boyfriend, leaving her on her own not only to battle the elements, but also to elude a mysterious hunter who is tracking her through the forest.",
      popularity: 5.726,
      poster_path: '/jbSBwAGNP4N4AcNX2Rxq4h5u5g3.jpg',
      release_date: '2012-10-10',
      title: 'The Frozen',
      video: false,
      vote_average: 4.5,
      vote_count: 27
    },
    {
      adult: false,
      backdrop_path: '/sGjhRHNiQSkgVec18D3oX45hPmz.jpg',
      genre_ids: [53],
      id: 26041,
      original_language: 'en',
      original_title: 'Frozen',
      overview:
        "It's two years since the mysterious disappearance of Kath Swarbrick's older sister Annie, but Kath remains haunted by a need to know what happened. When police investigations wind down, Kath continues the search herself. She gets nowhere until she steals some CCTV footage of her sister on her final day. Visiting the spot where Annie was filmed, Kath becomes convinced she has found a portal to another reality and from this portal Kath is trying to say something.",
      popularity: 3.338,
      poster_path: '/nBdbTIeDNkOtGGKps8F5SmkjbFg.jpg',
      release_date: '2005-03-12',
      title: 'Frozen',
      video: false,
      vote_average: 5.7,
      vote_count: 15
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [99],
      id: 482475,
      original_language: 'en',
      original_title: 'The Making of Frozen',
      overview: '"The Making of Frozen" DVD Extra',
      popularity: 6.577,
      poster_path: '/7BYTYpNZU7xjzZDe87koqzHEWhL.jpg',
      release_date: '2014-03-18',
      title: 'The Making of Frozen',
      video: false,
      vote_average: 7.3,
      vote_count: 3
    },
    {
      adult: false,
      backdrop_path: '/5Oi0V41s0576eSG84dRgIVpHPCl.jpg',
      genre_ids: [10749, 10770],
      id: 491408,
      original_language: 'en',
      original_title: 'Frozen in Love',
      overview:
        'When struggling bookstore owner Mary and the bad boy of professional hockey, Adam, are teamed together to help facilitate an image makeover for the other, they soon realize that opposites attract and they find themselves unexpectedly frozen in love.',
      popularity: 4.877,
      poster_path: '/cJr7U0Is7p9qDKZ2CM81KjxQU70.jpg',
      release_date: '2018-01-13',
      title: 'Frozen in Love',
      video: false,
      vote_average: 6.7,
      vote_count: 33
    },
    {
      adult: false,
      backdrop_path: '/tf1HhoUfQaRJ2Sdig5OB2NaQPTH.jpg',
      genre_ids: [99],
      id: 594676,
      original_language: 'en',
      original_title: 'Hope Frozen',
      overview:
        "A Buddhist scientist from Bangkok decides to cryo-preserve his daughter's brain. As scandal swirls around the family, they struggle to grieve a child that, in their view, is suspended between death and a future reawakening.",
      popularity: 2.982,
      poster_path: '/1sCawwtBif3Ggt6sr4DXG7SYf8d.jpg',
      release_date: '2018-06-15',
      title: 'Hope Frozen',
      video: false,
      vote_average: 5.9,
      vote_count: 10
    },
    {
      adult: false,
      backdrop_path: '/kXBm2RTGCF9NnD3LAUy3HcoG8hf.jpg',
      genre_ids: [10751, 16, 35],
      id: 299078,
      original_language: 'en',
      original_title: "Spongebob Squarepants: Spongebob's Frozen Face-Off",
      overview:
        "It's a race to the South Pole. With the whole town occupied, will Plankton finally get his hands on the formula and end the Krusty Krab's fast-food supremacy for good?",
      popularity: 4.108,
      poster_path: '/boX9veaa90RtaFcdGSsAkzD0U5y.jpg',
      release_date: '2012-01-03',
      title: "Spongebob Squarepants: Spongebob's Frozen Face-Off",
      video: true,
      vote_average: 8.4,
      vote_count: 8
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [28, 18, 53, 10770],
      id: 64375,
      original_language: 'en',
      original_title: 'Frozen Impact',
      overview:
        "A plane, carrying the liver destined for a child's transplant, crashes in a hailstorm.",
      popularity: 2.701,
      poster_path: '/wbBj3fsIxEFBzxaLV8Mi1KSSa0Z.jpg',
      release_date: '2003-03-14',
      title: 'Frozen Impact',
      video: false,
      vote_average: 5.5,
      vote_count: 10
    },
    {
      adult: false,
      backdrop_path: '/5BNjRTNqQff6Mz1c17WCRSdz0RF.jpg',
      genre_ids: [16, 10402, 10751],
      id: 490935,
      original_language: 'en',
      original_title: 'A Frozen Christmas 2',
      overview:
        'When Santa and his reindeer pal Barnaby finish delivering presents for Christmas, they head back to the North Pole to celebrate. Gather around and listen as Santa and his elf pals dance and tell stories. Including time-honored Christmas story classics!',
      popularity: 4.12,
      poster_path: '/zrzGLUDdziaBEvIbmXBSCJgLHrC.jpg',
      release_date: '2017-12-04',
      title: 'A Frozen Christmas 2',
      video: false,
      vote_average: 8,
      vote_count: 2
    },
    {
      adult: false,
      backdrop_path: '/lwM1A6gk8AxSc8q11kJkZDKT0l0.jpg',
      genre_ids: [35, 37],
      id: 51364,
      original_language: 'en',
      original_title: 'The Frozen North',
      overview:
        'This satirical parody of William S. Hart\'s melodramatic films finds Buster in the frozen north, "last stop on the subway." He uses a wanted poster as his partner in robbing a gambling house. When he thinks he spies his wife making love to another man he shoots them both only to learn it isn\'t his cabin after all.',
      popularity: 4.078,
      poster_path: '/gz0zcPq6oG27v23abgeZD5NzCW0.jpg',
      release_date: '1922-08-28',
      title: 'The Frozen North',
      video: false,
      vote_average: 6.1,
      vote_count: 49
    },
    {
      adult: false,
      backdrop_path: '/7bS9otN0lW5ZrEWkk6whAjFhboU.jpg',
      genre_ids: [878, 27],
      id: 89995,
      original_language: 'en',
      original_title: 'The Frozen Dead',
      overview:
        'A crazed scientist keeps the heads of Nazi war criminals alive until he can find appropriate bodies on which to attach them so he can revive the Third Reich.',
      popularity: 3.196,
      poster_path: '/eXS0MDYABav8Z6ifqvP45nGkFqq.jpg',
      release_date: '1966-10-15',
      title: 'The Frozen Dead',
      video: false,
      vote_average: 5.1,
      vote_count: 18
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [10751],
      id: 314622,
      original_language: 'en',
      original_title: 'Disney Parks Frozen Christmas Celebration',
      overview:
        'Disney puts a “Frozen” twist on its 31st annual Christmas Day television special. More than a parade,  the joyous occasion includes festive musical performances, and the reunion of three groups of families and friends who have been apart or separated for the holidays.',
      popularity: 6.638,
      poster_path: '/mt3kEjZBhQhNuXeG2O3hMe9zmyW.jpg',
      release_date: '2014-12-25',
      title: 'Disney Parks Frozen Christmas Celebration',
      video: false,
      vote_average: 7.6,
      vote_count: 5
    }
  ],
  total_pages: 9,
  total_results: 165
}

describe('GetMovieListUseCase', () => {
  const domain = new Domain({})

  // Primero: el caso de uso está expuesto y existe
  it('Should exists', () => {
    expect(domain.get('get_movie_list_by_criteria_and_page_use_case')).to.exists
  })

  describe('When the API resolve the request', () => {
    const mocker = new HttpMocker()

    beforeEach(() => mocker.create())

    afterEach(() => mocker.restore())

    it('should return a movie list', done => {
      mocker
        .httpMock(domain.get('config').BASE_URL)
        .get(
          `/search/movie?api_key=${
            domain.get('config').API_KEY
          }&query=frozen&page=1`
        )
        .reply(MOVIE_LIST, 200)

      domain
        .get('get_movie_list_by_criteria_and_page_use_case')
        .execute({criteria: 'frozen', page: 1}) // juego de criterios y paginas
        .then(response => {
          expect(response).to.deep.equal(MOVIE_LIST)
          done()
        })
    })

    it('should return a server error', done => {
      mocker
        .httpMock(domain.get('config').BASE_URL)
        .get(
          `/search/movie?api_key=${
            domain.get('config').API_KEY
          }&query=frozen&page=1`
        )
        .reply({}, 500)

      domain
        .get('get_movie_list_by_criteria_and_page_use_case')
        .execute({criteria: 'frozen', page: 1})
        .catch(error => {
          console.log('ERROR en el test: ', error)
          done()
        })
    })
  })
})
