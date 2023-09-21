'use client';
import { useLanguageStore } from '@/store/useLanguageStore';
import React, { useEffect, useState } from 'react';

const ClockCard = () => {
	const [time, setTime] = useState(new Date());
	const { language } = useLanguageStore();

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	const hours = time.getHours().toString().padStart(2, '0');
	const minutes = time.getMinutes().toString().padStart(2, '0');
	const options: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	};
	const formattedDate = time.toLocaleDateString(language === 'en' ? 'en-US' : 'es-ES', options);

	return (
		<article className='relative aspect-square flex items-center justify-center p-4 rounded-2xl bg-primary-blue'>
			<div className='flex flex-col gap-2 items-center'>
				<h4 className='font-black text-3xl sm:text-4xl lg:text-5xl dark:text-gray-800 text-gray-50'>{`${hours}:${minutes}`}</h4>
				<p className='text-center text-xxs sm:text-xs text-gray-50 dark:text-gray-800'>
					{formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)}
				</p>
			</div>
		</article>
	);
};

export default ClockCard;
