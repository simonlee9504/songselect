import { Song } from '.';
export default interface Playlist {
	name: String;
	creator: String;
	songs: Array<Song>;
}
