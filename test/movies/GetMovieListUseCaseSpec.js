import {config, expect} from 'chai'
import {HttpMocker} from '@s-ui/mockmock'
import Domain from '../../src'
import sinon from 'sinon'

const MOVIE_LIST = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/VlHt27nCqOuTnuX6bku8QZapzO.jpg',
      genre_ids: [28, 12, 878, 14],
      id: 634649,
      original_language: 'en',
      original_title: 'Spider-Man: No Way Home',
      overview:
        'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
      popularity: 7962.394,
      poster_path: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
      release_date: '2021-12-15',
      title: 'Spider-Man: No Way Home',
      video: false,
      vote_average: 8.8,
      vote_count: 573
    },
    {
      adult: false,
      backdrop_path: '/eENEf62tMXbhyVvdcXlnQz2wcuT.jpg',
      genre_ids: [878, 28, 12],
      id: 580489,
      original_language: 'en',
      original_title: 'Venom: Let There Be Carnage',
      overview:
        'After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.',
      popularity: 8774.196,
      poster_path: '/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg',
      release_date: '2021-09-30',
      title: 'Venom: Let There Be Carnage',
      video: false,
      vote_average: 7.2,
      vote_count: 4596
    },
    {
      adult: false,
      backdrop_path: '/7ajHGIAYNMiIzejy1LJWdPrcAx8.jpg',
      genre_ids: [28, 35, 80, 53],
      id: 512195,
      original_language: 'en',
      original_title: 'Red Notice',
      overview:
        "An Interpol-issued Red Notice is a global alert to hunt and capture the world's most wanted. But when a daring heist brings together the FBI's top profiler and two rival criminals, there's no telling what will happen.",
      popularity: 2589.711,
      poster_path: '/wdE6ewaKZHr62bLqCn7A2DiGShm.jpg',
      release_date: '2021-11-04',
      title: 'Red Notice',
      video: false,
      vote_average: 6.8,
      vote_count: 2047
    },
    {
      adult: false,
      backdrop_path: '/cinER0ESG0eJ49kXlExM0MEWGxW.jpg',
      genre_ids: [28, 12, 14],
      id: 566525,
      original_language: 'en',
      original_title: 'Shang-Chi and the Legend of the Ten Rings',
      overview:
        'Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.',
      popularity: 3090.373,
      poster_path: '/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg',
      release_date: '2021-09-01',
      title: 'Shang-Chi and the Legend of the Ten Rings',
      video: false,
      vote_average: 7.8,
      vote_count: 4296
    },
    {
      adult: false,
      backdrop_path: '/5RuR7GhOI5fElADXZb0X2sr9w5n.jpg',
      genre_ids: [16, 35, 10751, 14],
      id: 568124,
      original_language: 'en',
      original_title: 'Encanto',
      overview:
        "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
      popularity: 2459.453,
      poster_path: '/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg',
      release_date: '2021-11-24',
      title: 'Encanto',
      video: false,
      vote_average: 7.4,
      vote_count: 340
    },
    {
      adult: false,
      backdrop_path: '/1Wlwnhn5sXUIwlxpJgWszT622PS.jpg',
      genre_ids: [16, 35, 10751],
      id: 585245,
      original_language: 'en',
      original_title: 'Clifford the Big Red Dog',
      overview:
        'As Emily struggles to fit in at home and at school, she discovers a small red puppy who is destined to become her best friend. When Clifford magically undergoes one heck of a growth spurt, becomes a gigantic dog and attracts the attention of a genetics company, Emily and her Uncle Casey have to fight the forces of greed as they go on the run across New York City. Along the way, Clifford affects the lives of everyone around him and teaches Emily and her uncle the true meaning of acceptance and unconditional love.',
      popularity: 2366.544,
      poster_path: '/ygPTrycbMSFDc5zUpy4K5ZZtQSC.jpg',
      release_date: '2021-11-10',
      title: 'Clifford the Big Red Dog',
      video: false,
      vote_average: 7.5,
      vote_count: 595
    },
    {
      adult: false,
      backdrop_path: '/mFbS5TwN95BcSEfiztdchLgTQ0v.jpg',
      genre_ids: [28, 18, 36],
      id: 617653,
      original_language: 'en',
      original_title: 'The Last Duel',
      overview:
        'King Charles VI declares that Knight Jean de Carrouges settle his dispute with his squire, Jacques Le Gris, by challenging him to a duel.',
      popularity: 1973.01,
      poster_path: '/zjrJE0fpzPvX8saJXj8VNfcjBoU.jpg',
      release_date: '2021-10-13',
      title: 'The Last Duel',
      video: false,
      vote_average: 7.6,
      vote_count: 945
    },
    {
      adult: false,
      backdrop_path: '/5RMqFZdefnDwY7rdD1oJcTkWPdF.jpg',
      genre_ids: [16, 35, 10751],
      id: 774741,
      original_language: 'en',
      original_title: 'Diary of a Wimpy Kid',
      overview:
        'Greg Heffley is a scrawny but ambitious kid with an active imagination and big plans to be rich and famous – he just has to survive middle school first.',
      popularity: 1679.37,
      poster_path: '/obg6lWuNaZkoSlwrVG4VVk4SmT.jpg',
      release_date: '2021-12-03',
      title: 'Diary of a Wimpy Kid',
      video: false,
      vote_average: 7,
      vote_count: 77
    },
    {
      adult: false,
      backdrop_path: '/t27k4502Gzvln1At8iA0DMOd0mt.jpg',
      genre_ids: [16, 878, 10751, 35],
      id: 482321,
      original_language: 'en',
      original_title: "Ron's Gone Wrong",
      overview:
        "In a world where walking, talking, digitally connected bots have become children's best friends, an 11-year-old finds that his robot buddy doesn't quite work the same as the others do.",
      popularity: 1703.348,
      poster_path: '/gA9QxSravC2EVEkEKgyEmDrfL0e.jpg',
      release_date: '2021-10-15',
      title: "Ron's Gone Wrong",
      video: false,
      vote_average: 8.5,
      vote_count: 367
    },
    {
      adult: false,
      backdrop_path: '/xGrTm3J0FTafmuQ85vF7ZCw94x6.jpg',
      genre_ids: [18, 36, 12],
      id: 589761,
      original_language: 'ru',
      original_title: 'Чернобыль',
      overview:
        'The aftermath of a shocking explosion at the Chernobyl nuclear power station made hundreds of people sacrifice their lives to clean up the site of the catastrophe and to successfully prevent an even bigger disaster that could have turned a large part of the European continent into an uninhabitable exclusion zone. This is their story.',
      popularity: 1836.663,
      poster_path: '/kfQJQWFEoWRVBH8FUKnT0HX1yRS.jpg',
      release_date: '2021-04-15',
      title: 'Chernobyl: Abyss',
      video: false,
      vote_average: 6.3,
      vote_count: 238
    },
    {
      adult: false,
      backdrop_path: '/lyvszvJJqqI8aqBJ70XzdCNoK0y.jpg',
      genre_ids: [28, 12, 18, 14, 878],
      id: 524434,
      original_language: 'en',
      original_title: 'Eternals',
      overview:
        'The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants.',
      popularity: 1765.55,
      poster_path: '/uaEIEIw9Y7DsvbWWMbG9ySjNF73.jpg',
      release_date: '2021-11-03',
      title: 'Eternals',
      video: false,
      vote_average: 7.1,
      vote_count: 1431
    },
    {
      adult: false,
      backdrop_path: '/upOi9aVqPPky7Ba4GsiyFdjc82I.jpg',
      genre_ids: [37, 28, 53],
      id: 887767,
      original_language: 'en',
      original_title: 'Last Shoot Out',
      overview:
        "Soon after a newlywed learns that her husband had her father shot down, she flees from the Callahan ranch in fear. She's rescued by a gunman who safeguards her at a remote outpost as he staves off her husband's attempts to reclaim his bride.",
      popularity: 1498.365,
      poster_path: '/pvEtPxotI3POlVPvNxgrHJuDXfe.jpg',
      release_date: '2021-12-03',
      title: 'Last Shoot Out',
      video: false,
      vote_average: 6.9,
      vote_count: 33
    },
    {
      adult: false,
      backdrop_path: '/r2GAjd4rNOHJh6i6Y0FntmYuPQW.jpg',
      genre_ids: [12, 28, 53],
      id: 370172,
      original_language: 'en',
      original_title: 'No Time to Die',
      overview:
        'Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.',
      popularity: 1359.019,
      poster_path: '/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg',
      release_date: '2021-09-29',
      title: 'No Time to Die',
      video: false,
      vote_average: 7.5,
      vote_count: 2564
    },
    {
      adult: false,
      backdrop_path: '/tTlAA0REGPXSZPBfWyTW9ipIv1I.jpg',
      genre_ids: [28, 12, 878, 18],
      id: 315635,
      original_language: 'en',
      original_title: 'Spider-Man: Homecoming',
      overview:
        'Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.',
      popularity: 1804.877,
      poster_path: '/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg',
      release_date: '2017-07-05',
      title: 'Spider-Man: Homecoming',
      video: false,
      vote_average: 7.4,
      vote_count: 17357
    },
    {
      adult: false,
      backdrop_path: '/ng6SSB3JhbcpKTwbPDsRwUYK8Cq.jpg',
      genre_ids: [28, 12, 878],
      id: 429617,
      original_language: 'en',
      original_title: 'Spider-Man: Far From Home',
      overview:
        'Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.',
      popularity: 1758.757,
      poster_path: '/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg',
      release_date: '2019-06-28',
      title: 'Spider-Man: Far From Home',
      video: false,
      vote_average: 7.5,
      vote_count: 11226
    },
    {
      adult: false,
      backdrop_path: '/sLWUtbrpiLp23a0XDSiUiltdFPJ.jpg',
      genre_ids: [28, 12, 14],
      id: 1930,
      original_language: 'en',
      original_title: 'The Amazing Spider-Man',
      overview:
        "Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents' disappearance – leading him directly to Oscorp and the lab of Dr. Curt Connors, his father's former partner. As Spider-Man is set on a collision course with Connors' alter ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero.",
      popularity: 1742.243,
      poster_path: '/fSbqPbqXa7ePo8bcnZYN9AHv6zA.jpg',
      release_date: '2012-06-23',
      title: 'The Amazing Spider-Man',
      video: false,
      vote_average: 6.6,
      vote_count: 13783
    },
    {
      adult: false,
      backdrop_path: '/7h5WAPAcUzOWpp2jrwHBB48790j.jpg',
      genre_ids: [16, 28],
      id: 843241,
      original_language: 'ja',
      original_title: '劇場版 七つの大罪 光に呪われし者たち',
      overview:
        'With the help of the "Dragon Sin of Wrath" Meliodas and the worst rebels in history, the Seven Deadly Sins, the "Holy War", in which four races, including Humans, Goddesses, Fairies and Giants fought against the Demons, is finally over. At the cost of the "Lion Sin of Pride" Escanor\'s life, the Demon King was defeated and the world regained peace. After that, each of the Sins take their own path.',
      popularity: 1138.071,
      poster_path: '/k0ThmZQl5nHe4JefC2bXjqtgYp0.jpg',
      release_date: '2021-07-02',
      title: 'The Seven Deadly Sins: Cursed by Light',
      video: false,
      vote_average: 8.1,
      vote_count: 245
    },
    {
      adult: false,
      backdrop_path: '/1zgob2Z8xVE3RZUgOKnHKcVPzOE.jpg',
      genre_ids: [16, 35, 14],
      id: 877183,
      original_language: 'en',
      original_title: 'The Simpsons in Plusaversary',
      overview:
        "The Simpsons host a Disney+ Day party and everyone is on the list… except Homer. With friends from across the service and music fit for a Disney Princess, Plusaversary is Springfield's event of the year.",
      popularity: 994.766,
      poster_path: '/9xaAT3V3I9xxqnNiEjCivNFfdlh.jpg',
      release_date: '2021-11-12',
      title: 'The Simpsons in Plusaversary',
      video: false,
      vote_average: 6.7,
      vote_count: 167
    },
    {
      adult: false,
      backdrop_path: '/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg',
      genre_ids: [35, 28, 12, 878],
      id: 550988,
      original_language: 'en',
      original_title: 'Free Guy',
      overview:
        'A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.',
      popularity: 1039.992,
      poster_path: '/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg',
      release_date: '2021-08-11',
      title: 'Free Guy',
      video: false,
      vote_average: 7.8,
      vote_count: 4119
    },
    {
      adult: false,
      backdrop_path: '/3cMfwbF1J9fglSssim4zKG6scIs.jpg',
      genre_ids: [28],
      id: 876262,
      original_language: 'pt',
      original_title: 'Garota da Moto',
      overview: '',
      popularity: 996.583,
      poster_path: '/sYoWjGSW4XQRWwFDHf3kdMqtCLr.jpg',
      release_date: '2021-09-23',
      title: 'Garota da Moto',
      video: false,
      vote_average: 4.9,
      vote_count: 4
    }
  ],
  total_pages: 31592,
  total_results: 631821
}

describe.only('GetMovieListUseCase', () => {
  const domain = new Domain({})

  // Primero: el caso de uso está expuesto y existe
  it('Should exists', () => {
    expect(domain.get('get_movie_list_by_criteria_and_page_use_case')).to.exists
  })

  describe('When the API resolve the request', () => {
    const mocker = new HttpMocker()

    beforeEach(() => {
      mocker.create()
    })

    afterEach(() => {
      mocker.restore()
    })

    it.only('should return a movie list', () => {
      mocker
        .httpMock(domain.get('config').BASE_URL)
        .get(
          `/search/movie?api_key=${
            domain.get('config').API_KEY
          }&query=frozen&page=1`
        )
        .reply(MOVIE_LIST, 200)
      console.log(mocker)
      domain
        .get('get_movie_list_by_criteria_and_page_use_case')
        .execute({criteria: 'frozen', page: 1}) // juego de criterios y paginas
        .then(response => {
          console.log('mocker: ', mocker)
          console.log('response: ', response)
          expect(response).to.deep.equal(MOVIE_LIST)
        })
    })

    it('should return a server error', () => {
      mocker
        .httpMock(domain.get('config').BASE_URL)
        .get(`/discover/${domain.get('config').API_KEY}`)
        .reply({}, 500)

      domain
        .get('get_movie_list_by_criteria_and_page_use_case')
        .execute({criteria: 'frozen', page: 1})
        .then(response => response.to.deep.equal({}))
    })
  })
})
