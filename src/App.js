import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Row from './components/Row';
import db from './db.json';
import { useEffect, useState } from 'react';
import axios from 'axios';

const movies = [
	{
		category: 'Because you Watched X',
	},

	{
		category: 'Top Movies',
	},
	{
		category: 'We Recommend',
	},
	{
		category: 'Watch Again',
	},
	{
		category: 'New On Stoutflix',
	},
];

function App() {
	const [first, setfirst] = useState('loading');
	const apiKey = process.env.PLEX_KEY;
	useEffect(() => {
		let config = {
			method: 'get',
			maxBodyLength: Infinity,
			// url: 'https://192-168-0-2.46da8d4760e7496ab8d52b332ce7c143.plex.direct:32400/library/sections/1/unwatched',

			url: 'https://68-3-106-217.46da8d4760e7496ab8d52b332ce7c143.plex.direct:32400/library/sections/1/unwatched',
			// url: 'https://plex.tv/api/v2/pins',

			headers: {
				Accept: 'application/json',
				'X-Plex-Token': apiKey,
				'X-Plex-Client-Identifier': 'api',
			},
			body: {
				clientIdentifer: 'api',
			},
		};
		axios(config)
			.then(({ data }) => {
				console.log(data.MediaContainer.Metadata);
				setfirst(`Found ${data.MediaContainer.Metadata.length} movies`);
			})
			.catch(() => {
				setfirst('Error');
			});
		// axios(config)
		// 	.then((response) => {
		// 		console.log(response.data.id);
		// 		axios({
		// 			method: 'get',
		// 			url: `https://plex.tv/api/v2/pins/${response.data.id}`,
		// 			headers: {
		// 				Accept: 'application/json',
		// 				'X-Plex-Token': 'NFXXXyX6bbYAqeo9QbcW',
		// 				'X-Plex-Client-Identifier': 'api',
		// 			},
		// 		}).then((r) => {
		// 			console.log(r.data);
		// 		});
		// 	})
		// 	.catch((e) => {
		// 		console.log(e);
		// 	});
	}, []);

	const updated = movies.map((m) => {
		const num = Math.floor(Math.random() * 1000);
		return {
			...m,
			movies: db.slice(num, num + Math.floor(Math.random() * 20)),
		};
	});
	return (
		<div className='App bg-neutral-950'>
			<Header />
			<p className='text-white'>{first}</p>
			<div className='overflow-hidden'>
				{updated.map((m, i) => (
					<Row
						movies={m}
						key={m?.movieId}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
