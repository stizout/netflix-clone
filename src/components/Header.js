import React from 'react';

export default function Header() {
	return (
		<div className='flex justify-between items-center px-4 text-lg h-[80px] bg-neutral-900 text-white'>
			<div className='flex'>
				<div className='mr-8'>Netflix</div>
				<div className='flex gap-4'>
					<div>Home</div>
					<div>TV Shows</div>
					<div>Movies</div>
					<div>New & Popular</div>
					<div>My List</div>
					<div>Browse by Languages</div>
				</div>
			</div>
			<div className='flex gap-4'>
				<div>magnifying glass</div>
				<div>kids</div>
				<div>notifications</div>
				<div>dropdown for profile</div>
			</div>
		</div>
	);
}
