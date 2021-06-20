import { Album, Artist } from '.';
export default interface Song {
	name: String;
	artists: Array<Artist>;
	album: Album; // Album may not contain all songs within the same album
	duration: Number; // In seconds
	track: String; // File Path or URL
}
