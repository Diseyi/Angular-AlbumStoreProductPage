import { Track } from './track'

export interface Album {
    name: string
    releaseDate: string
    coverImage: ostring
    tracks: Track[]
}
