import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Row from './components/Row';
import db from './db.json';

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
