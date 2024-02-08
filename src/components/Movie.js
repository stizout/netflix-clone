import React, { useEffect, useRef, useState } from 'react';
import LargeView from './LargeView';
import * as Portal from '@radix-ui/react-portal';

// import { Portal } from 'react-portal';

export default function Movie({ movie }) {
	const [showLarge, setShowLarge] = useState(false);
	const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
	const ref = useRef();

	return (
		<div
			id={movie?.movieId}
			className={`bg-blue-500 relative rounded-md transition-all min-w-[330px] max-w-[330px] h-[188px] text-3xl`}
			onMouseEnter={(e) => {
				ref.current = setTimeout(() => {
					const base = document.getElementById(movie?.movieId).getBoundingClientRect();
					if (base.x > 1700) {
						const difference = base.x - 1700;
						base.x -= difference;
					}
					if (base.x < 150) {
						const difference = 150 - base.x;
						base.x += difference;
					}
					if (window.innerHeight - base.y < 375) {
						const difference = Math.abs(window.innerHeight - base.y - 375);
						base.y += window.scrollY - difference;
					} else {
						base.y += window.scrollY;
					}
					setCoordinates(base);
					setShowLarge(true);
				}, 450);
			}}
			onMouseLeave={() => {
				clearTimeout(ref.current);
				setShowLarge(false);
			}}
		>
			{showLarge ? (
				<Portal.Root
					className='z-50 absolute'
					style={{ left: `${coordinates.x - 100}px`, top: `${coordinates.y - 20}px` }}
				>
					<LargeView
						coordinates={coordinates}
						movie={movie}
					/>
				</Portal.Root>
			) : (
				movie.title
			)}
		</div>
	);
}
