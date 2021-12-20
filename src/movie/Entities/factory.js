import {MovieEntity} from './MovieEntity'

export default class MovieEntityFactory {
  static movieEntity = ({id, title, poster, overview}) =>
    new MovieEntity({
      id,
      title,
      poster,
      overview
    })
}
