'use client';
import { LampIcon } from '@/assets/icons/cardsIcons';
import React from 'react';
import { useTheme } from 'next-themes';

const ModeCard = () => {
	const { theme, setTheme } = useTheme();

	return (
		<article
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			className={`relative aspect-square flex items-center justify-center p-4 rounded-2xl dark:bg-gray-700 cursor-pointer z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-100 to-gray-100 dark:from-transparent from-10% to-60% dark:to-transparent transition-all duration-700`}
		>
			<div className='w-3/5 h-3/5 icon-fullwidth z-20'>
				<LampIcon mode={theme === 'dark' ? 'dark' : 'light'} />
			</div>
		</article>
	);
};

export default ModeCard;
