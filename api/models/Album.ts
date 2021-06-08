import Song from './Song';
import Artist from './Song';

export default class Album {
	name: String;
	songs: Array<Song>;
	cover: String; // File Path or URL
	artists: Array<Artist>;
	releaseDate: Date;
}
