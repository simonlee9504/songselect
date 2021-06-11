import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import axios from 'axios';

function App() {
	const [firstCall, setFirstCall] = useState(false);
	const [fromAPI, setFromAPI] = useState('');

	const callAPI = async () => {
		const response: Response = await fetch('/ping');
		const message: string = await response.text();
		setFromAPI(message);
	};

	const fetchRandomSong = () => {
		axios.get('/api/songs/random_song').then(response => {
			setFromAPI(response.data);
		});
	};

	useEffect(() => {
		if (!firstCall) {
			callAPI();
			setFirstCall(true);
		}
	}, [firstCall]);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<Counter />
				<p>{`ExpressJS API Test: ${fromAPI}`}</p>
				<button onClick={fetchRandomSong}>GET a random song</button>
			</header>
		</div>
	);
}

export default App;
