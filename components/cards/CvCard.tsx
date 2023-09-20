'use client';
import { CVIcon } from '@/assets/icons/cardsIcons';
import React from 'react';
import { useTheme } from 'next-themes';
import { ArrowLink } from '@/assets/icons/arrowIcons';
const CvCard = () => {
	const { theme } = useTheme();
	return (
		<article className='group relative aspect-square flex items-center justify-center p-4 rounded-2xl bg-gray-800 dark:bg-gray-100 cursor-pointer'>
			<div className='w-3/5 h-3/5 icon-fullwidth'>
				<CVIcon mode={theme === 'dark' ? 'dark' : 'light'} />
			</div>
			<div className='absolute bottom-0 left-0 group-hover:rotate-0 rotate-[135deg] transition-transform duration-300'>
				<ArrowLink mode={theme === 'dark' ? 'dark' : 'light'} />
			</div>
		</article>
	);
};

export default CvCard;
