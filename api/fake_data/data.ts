import type { Album, Artist, Song, Playlist } from '../models';
import moment from 'moment';

const artist1: Artist = {
	name: 'YOASOBI',
};

const album1: Album = {
	name: 'THE BOOK',
	songs: [],
	cover: './data/THE_BOOK/cover.jpg',
	artists: [artist1],
	releaseDate: moment('2021-01-06').toDate(),
};

const song1: Song = {
	name: 'Epilogue',
	artists: [artist1],
	album: album1,
	duration: 0 * 60 + 50,
	track: './data/THE_BOOK/01.Epilogue.mp3',
};

const song2: Song = {
	name: 'アンコール',
	artists: [artist1],
	album: album1,
	duration: 4 * 60 + 31,
	track: './data/THE_BOOK/02.アンコール.mp3',
};

const song3: Song = {
	name: 'ハルジオン',
	artists: [artist1],
	album: album1,
	duration: 3 * 60 + 18,
	track: './data/THE_BOOK/03.ハルジオン.mp3',
};

const song4: Song = {
	name: 'あの夢をなぞって',
	artists: [artist1],
	album: album1,
	duration: 4 * 60,
	track: './data/THE_BOOK/04.あの夢をなぞって.mp3',
};

const song5: Song = {
	name: 'たぶん',
	artists: [artist1],
	album: album1,
	duration: 4 * 60 + 16,
	track: './data/THE_BOOK/05.たぶん.mp3',
};

const song6: Song = {
	name: '群青',
	artists: [artist1],
	album: album1,
	duration: 4 * 60 + 8,
	track: './data/THE_BOOK/06.群青.mp3',
};

const song7: Song = {
	name: 'ハルカ',
	artists: [artist1],
	album: album1,
	duration: 4 * 60 + 3,
	track: './data/THE_BOOK/07.ハルカ.mp3',
};

const song8: Song = {
	name: '夜に駆ける',
	artists: [artist1],
	album: album1,
	duration: 4 * 60 + 18,
	track: './data/THE_BOOK/08.夜に駆ける.mp3',
};

const song9: Song = {
	name: 'Prologue',
	artists: [artist1],
	album: album1,
	duration: 0 * 60 + 35,
	track: './data/THE_BOOK/09.Prologue.mp3',
};

album1.songs.push(song1);
album1.songs.push(song2);
album1.songs.push(song3);
album1.songs.push(song4);
album1.songs.push(song5);
album1.songs.push(song6);
album1.songs.push(song7);
album1.songs.push(song8);
album1.songs.push(song9);

const playlist1: Playlist = {
	name: 'favs playlist',
	creator: 'simon',
	songs: [],
};

playlist1.songs.push(song2);
playlist1.songs.push(song8);
playlist1.songs.push(song7);
playlist1.songs.push(song6);

export default {
	playlist1,
	album1,
	random_song: song3,
};
