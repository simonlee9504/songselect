import { Artist, Song } from '.';
export default interface Album {
	name: String;
	songs: Array<Song>; // It is not required that the album contains all songs of the album
	cover: String; // File Path or URL
	artists: Array<Artist>;
	releaseDate: Date;
}
