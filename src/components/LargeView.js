import { faCaretSquareRight, faPlusSquare, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faCaretRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function LargeView({ movie, coordinates }) {
	console.log(coordinates);
	return (
		<div
			className='flex flex-col bg-black rounded-md text-3xl'
			style={{ width: 'calc(330px* 1.5)', height: 'calc(188px * 2)' }}
		>
			<div className='h-[50%] bg-blue-500 rounded-t-md' />
			<div className='px-2'>
				<div className='flex shrink-0 justify-between mt-2'>
					<div className='flex gap-2 text-white'>
						<div className='w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg shadow-indigo-500/50'>
							<FontAwesomeIcon
								icon={faCaretRight}
								className=' text-md text-black'
							/>
						</div>
						<div className='w-12 h-12 border border-white rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg shadow-indigo-500/50'>
							<FontAwesomeIcon
								icon={faPlusSquare}
								className=' text-md'
							/>
						</div>
						<div className='w-12 h-12 border border-white rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg shadow-indigo-500/50'>
							<FontAwesomeIcon
								icon={faThumbsUp}
								className='text-md'
							/>
						</div>
					</div>
					<div className='w-12 h-12 border border-white rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg shadow-indigo-500/50 text-white'>
						<FontAwesomeIcon
							icon={faChevronDown}
							className='text-md'
						/>
					</div>
				</div>
				<div className='text-white'>
					<h1 className='text-xl'>{movie.title}</h1>
					<div className='text-xs text-left my-2'>Stuff here</div>
					<div className='text-xs text-left'>More stuff here</div>
				</div>
			</div>
		</div>
	);
}
