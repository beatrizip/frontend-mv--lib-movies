import MovieEntity from './MovieEntity'

export default class MovieEntityFactory {
  static movieEntity = ({
    id,
    title,
    rating,
    genres,
    voteCount,
    overview,
    poster,
    homepage
  }) =>
    new MovieEntity({
      id,
      title,
      rating,
      genres,
      voteCount,
      overview,
      poster,
      homepage
    })
}
