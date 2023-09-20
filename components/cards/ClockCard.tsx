'use client';
import { ClockIcon } from '@/assets/icons/arrowIcons';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

const ClockCard = () => {
	const { theme } = useTheme();
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	const hours = time.getHours();
	const minutes = time.getMinutes();
	const options = {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	};

	const formattedDate = time.toLocaleDateString(undefined, options);

	return (
		<article className='relative aspect-square flex items-center justify-center p-4 rounded-2xl bg-primary-blue'>
			<div className='flex flex-col gap-2 items-center'>
				<h4 className='font-black text-3xl sm:text-4xl lg:text-5xl dark:text-gray-800 text-gray-50'>{`${hours}:${minutes}`}</h4>
				<p className='text-center text-xxs sm:text-xs text-gray-50 dark:text-gray-800'>
					{formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)}
				</p>
			</div>
			{/* <div className='absolute bottom-0 left-0 p-4'>
				<ClockIcon mode={theme === 'dark' ? 'dark' : 'light'} />
			</div> */}
		</article>
	);
};

export default ClockCard;
