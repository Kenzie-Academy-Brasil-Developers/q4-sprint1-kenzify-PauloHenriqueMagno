interface ISong {
  title: string,
  duration: string,
  releasedDate: Date,
  listenedByMe: number,
  genres: string[]
}

interface IPlaylists {
  [key: string]: ISong[];
}

export {
  ISong,
  IPlaylists
}