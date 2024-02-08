import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Movie from './Movie';

export default function Row({ movies: { movies, category } }) {
	const [showLeft, setShowLeft] = useState(false);
	const [showRight, setShowRight] = useState(true);

	const random = Math.floor(Math.random() * 123456789);
	const lastChild = useRef();

	useEffect(() => {
		lastChild.current = document.getElementById(movies[movies.length - 1]?.movieId);
		if (isInViewport(lastChild.current)) setShowRight(false);
	}, [movies]);

	function sideScroll(element, direction, speed, distance, step) {
		let scrollAmount = 0;
		var slideTimer = setInterval(function () {
			if (direction == 'left') {
				element.scrollLeft -= step;
				setShowRight(true);
			} else {
				element.scrollLeft += step;
				setShowLeft(true);
			}
			scrollAmount += step;
			if (scrollAmount >= distance) {
				window.clearInterval(slideTimer);
				if (isInViewport(lastChild.current)) setShowRight(false);
				if (isInViewport(document.getElementById(movies[0]?.movieId))) setShowLeft(false);
			}
		}, speed);
	}

	function isInViewport(element) {
		const rect = element?.getBoundingClientRect();
		return (
			rect &&
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}
	return (
		<div className='movie-row relative my-10'>
			<div className='text-left text-3xl text-white my-4 font-weight-bold pl-10 relative z-0'>{category}</div>
			{showLeft ? (
				<div
					className='absolute bg-slate-700 h-[188px] w-[50px] opacity-0 hover:opacity-75 z-10 text-white flex items-center justify-center  cursor-pointer'
					style={{ bottom: 0 }}
					onClick={() => sideScroll(document.getElementById(random), 'left', 8, window.innerWidth - 300, 25)}
				>
					<FontAwesomeIcon
						icon={faChevronLeft}
						className='text-3xl'
					/>
				</div>
			) : null}
			<div
				id={random}
				style={{ scrollBehavior: 'smooth' }}
				className='flex gap-2 mx-12 overflow-auto no-scrollbar'
			>
				{movies?.map((m, i) => (
					<Movie
						movie={m}
						key={m?.movieId}
						random={random}
					/>
				))}
			</div>
			{showRight ? (
				<div
					className='absolute bg-slate-700 h-[188px] w-[50px] opacity-0 hover:opacity-75 text-white flex items-center justify-center cursor-pointer'
					onClick={() => sideScroll(document.getElementById(random), 'right', 8, window.innerWidth - 300, 25)}
					style={{ right: 0, bottom: 0 }}
				>
					<FontAwesomeIcon
						icon={faChevronRight}
						className='text-3xl'
					/>
				</div>
			) : null}
		</div>
	);
}
