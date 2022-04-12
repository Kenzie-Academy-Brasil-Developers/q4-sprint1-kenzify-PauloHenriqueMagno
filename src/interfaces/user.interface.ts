import { IPlaylists } from './playlist.interface'

interface IUser {
  id: string,
  username: string,
  password: string,
  playlist: IPlaylists[]
}

export {
  IUser
}