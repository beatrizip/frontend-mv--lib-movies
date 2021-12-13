import {MovieEntity} from './MovieEntity'

export default class MovieEntityFactory {
  static movieEntity = ({title, poster, overview}) =>
    new MovieEntity({
      title,
      poster,
      overview
    })
}
