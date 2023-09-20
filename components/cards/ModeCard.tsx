'use client';
import { LampIcon } from '@/assets/icons/cardsIcons';
import React from 'react';
import { useTheme } from 'next-themes';

const ModeCard = () => {
	const { theme, setTheme } = useTheme();
	return (
		<article
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			className='aspect-square flex items-center justify-center p-4 rounded-2xl bg-gray-100  dark:bg-gray-700 cursor-pointer'
		>
			<div className='w-3/5 h-3/5 icon-fullwidth'>
				<LampIcon mode={theme === 'dark' ? 'dark' : 'light'} />
			</div>
		</article>
	);
};

export default ModeCard;
